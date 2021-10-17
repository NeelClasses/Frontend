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
  SubHeading,
  TextElement,
} from "./styled";
import Logo from "../../constants/Images/Logo";
import { Button } from "@mui/material";
import { useState } from "react";
import validations from "../../constants/validations";
import { Link } from "react-router-dom";
import axios from "axios";
import firebase from "../../firebase";

const Signup = (props) => {
  const [inputs, setInputs] = useState({
      fullName: "",
      number: "",
    }),
    [errors, setErrors] = useState({
      fullName: "",
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
    };

  const [otp, setOtp] = useState("");
  const [otpVisibility, setOtpvisibility] = useState(true);
  const [firebaseEvent, setEvent] = useState();

  function VerifyOtp(e) {
    e.preventDefault();
    let code = { otp }.otp;
    if (code == null) return;
    firebaseEvent
      .confirm(code)
      .then(function (result) {
        const SignUpInfo = {
          name: inputs.fullName,
          mobile: inputs.number,
        };

        axios
          .post(`${process.env.REACT_APP_API_URL}/adduser`, SignUpInfo)
          .then((res) => {
            if (res.data === "Done") {
              props.history.push("/login");
            } else {
              alert("You're account already exist");
            }
          })
          .catch((err) => {
            alert(err);
          });
      })
      .catch((error) => console.log(error));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const fullNameError = validations("fullName", inputs.fullName),
      numberError = validations("number", inputs.number);
    setErrors({
      fullName: fullNameError,
      number: numberError,
    });
    if (fullNameError === "" && numberError === "") {
      const SignUpInfo = {
        name: inputs.fullName,
        mobile: inputs.number,
      };

      axios
        .post(`${process.env.REACT_APP_API_URL}/signup`, SignUpInfo)
        .then((res) => {
          console.log(res);
          if (res.data === "Done") {
            let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");

            firebase
              .auth()
              .signInWithPhoneNumber(`+91${SignUpInfo.mobile}`, recaptcha)
              .then(function (e) {
                setOtpvisibility(false);
                setEvent(e);
              })
              .catch((err) => {
                alert(err);
              });
          } else {
            alert("Account Already Exists! Please Log In");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };
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
          <FormHeading>Sign Up</FormHeading>
          <TextElement
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            name="fullName"
            size="small"
            fullWidth
            value={inputs.fullName}
            onChange={handleChange}
            error={errors.fullName !== ""}
            helperText={errors.fullName}
          />
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
              Sign Up
            </Button>
          )}
          <BottomText>
            Already a member? <BottomLink to="/login">Log in</BottomLink>
          </BottomText>
        </Form>
      </LeftSection>
      <RightSection>
        <RightContent>
          <Heading>Exploring Your Creativity</Heading>
          <SubHeading>
            Lorem ipsum dolor sit amet asit Lorem ipsum dolor sit amet asit
            Lorem ipsum dolor sit amet asit Lorem ipsum dolor sit amet asit
            Lorem ipsum dolor sit amet asit Lorem ipsum dolor sit amet asit
          </SubHeading>
        </RightContent>
      </RightSection>
    </SignupWrapper>
  );
};

export default Signup;
