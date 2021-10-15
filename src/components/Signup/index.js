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

const Signup = () => {
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
    },
    handleSubmit = (e) => {
      e.preventDefault();
      const fullNameError = validations("fullName", inputs.fullName),
        numberError = validations("number", inputs.number);
      setErrors({
        fullName: fullNameError,
        number: numberError,
      });
      if (fullNameError === "" && numberError === "") {
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
          <Button fullWidth variant="contained" type="submit">
            Sign Up
          </Button>
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
