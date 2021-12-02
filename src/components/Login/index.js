import {
  BottomLink,
  BottomText,
  Form,
  FormHeading,
  Heading,
  LeftSection,
  NavIcon,
  RightContent,
  RightSection,
  SignupWrapper,
  TextElement,
} from "../Signup/styled";
import Logo from "../../constants/Images/Logo";
import { Button } from "@mui/material";
import { useState } from "react";
import validations from "../../constants/validations";
import { Link } from "react-router-dom";
import firebase from "../../firebase";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { login } from "../../store/actions";

const Login = (props) => {
  const { userInfo } = useSelector((state) => state.userInfo);
  const history = useHistory();
  const [otp, setOtp] = useState("");
  const [otpVisibility, setOtpvisibility] = useState(true);
  const [firebaseEvent, setEvent] = useState();
  const [setLogin] = useState(false);
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
      number: "",
    }),
    [errors, setErrors] = useState({
      number: "",
    }),
    handleChange = (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
      setErrors({
        ...errors,
        [name]: validations(name, value),
      });
    },
    handleSubmit = (e) => {
      e.preventDefault();
      const numberError = validations("number", inputs.number);
      setErrors({
        number: numberError,
      });
      if (numberError === "") {
        const SignUpInfo = {
          name: "",
          mobile: "+91" + inputs.number,
        };

        axios
          .post(`${process.env.REACT_APP_API_URL}/signup`, SignUpInfo)
          .then((res) => {
            if (res.data !== "Done") {
              let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");
              firebase
                .auth()
                .signInWithPhoneNumber(SignUpInfo.mobile, recaptcha)
                .then(function (e) {
                  setOtpvisibility(false);
                  setEvent(e);
                })
                .catch((err) => {
                  alert(err);
                });
            } else {
              alert("Create your account first");
            }
          })
          .catch((err) => {
            console.error(err);
          });
      }
    };
  function VerifyOtp(e) {
    e.preventDefault();
    const code = otp;
    if (code == null) return;
    firebaseEvent
      .confirm(code)
      .then(function (result) {
        var credential = firebase.auth.PhoneAuthProvider.credential(
          firebaseEvent.verificationId,
          code
        );
        firebase.auth().signInWithCredential(credential);
        const LogInfo = {
          mobile: result.user.phoneNumber,
        };

        axios
          .post(`${process.env.REACT_APP_API_URL}/getUser`, LogInfo)
          .then((res) => {
            dispatch(login({ ...res.data[0] }));
            if (res.data[0].role === "Admin") {
              props.history.push("/admin");
            } else {
              props.history.push("/");
            }
          })
          .catch((err) => {
            console.error(err);
          });

        setLogin(true);
      })
      .catch((error) => {});
  }

  if (userInfo?.id) {
    history.push("/");
  }
  return (
    <SignupWrapper>
      <LeftSection>
        <Link to="/">
          <NavIcon>
            <Logo />
            <span>Neel Classes</span>
          </NavIcon>
        </Link>
        <Form onSubmit={handleSubmit}>
          <FormHeading>Log In</FormHeading>
          <TextElement
            id="outlined-basic"
            label="Mobile Number"
            variant="outlined"
            name="number"
            size="small"
            type="number"
            fullWidth
            value={inputs.number}
            onChange={handleChange}
            error={errors.number !== ""}
            helperText={errors.number}
          />
          {otpVisibility && (
            <div
              id="recaptcha"
              className="recaptcha"
              hidden={!otpVisibility}
            ></div>
          )}
          {!otpVisibility && (
            <TextElement
              id="outlined-basic"
              label="Enter OTP"
              variant="outlined"
              name="otp"
              size="small"
              type="number"
              fullWidth
              value={otp}
              onChange={(event) => setOtp(event.target.value)}
              required
            />
          )}
          {!otpVisibility && (
            <Button
              fullWidth
              variant="contained"
              onClick={VerifyOtp}
              hidden={otpVisibility}
            >
              Verify Otp
            </Button>
          )}
          {otpVisibility && (
            <Button fullWidth variant="contained" type="submit">
              Log In
            </Button>
          )}
          <BottomText>
            Don't have an account? <BottomLink to="/signup">Sign up</BottomLink>
          </BottomText>
        </Form>
      </LeftSection>
      <RightSection>
        <RightContent>
          <Heading>Exploring Your Creativity</Heading>
          {/* <SubHeading>
            Lorem ipsum dolor sit amet asit Lorem ipsum dolor sit amet asit
            Lorem ipsum dolor sit amet asit Lorem ipsum dolor sit amet asit
            Lorem ipsum dolor sit amet asit Lorem ipsum dolor sit amet asit
          </SubHeading> */}
        </RightContent>
      </RightSection>
    </SignupWrapper>
  );
};

export default Login;
