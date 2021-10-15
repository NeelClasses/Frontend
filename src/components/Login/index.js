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
} from "../Signup/styled";
import Logo from "../../constants/Images/Logo";
import { Button } from "@mui/material";
import { useState } from "react";
import validations from "../../constants/validations";
import { Link } from "react-router-dom";

const Login = () => {
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
        alert("Submitted");
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
          <Button fullWidth variant="contained" type="submit">
            Log In
          </Button>
          <BottomText>
            Don't have an account? <BottomLink to="/signup">Sign up</BottomLink>
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

export default Login;
