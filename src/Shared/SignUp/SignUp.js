import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserBookingContext";
const SignUp = () => {
  const { createUser, googleSignUp } = useContext(AuthContext);
  const [errors, setErrors] = useState(null);
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password);
    if (password !== confirm) {
      setErrors("Password not matched");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  const googleHandler = () => {
    googleSignUp()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className=" bg-info rounded-3 w-75 mt-5 mx-auto">
      <h1 className="text-center pt-3">Sign up</h1>
      <Form onSubmit={handleSignUp} className="w-50 mx-auto my-5 pb-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirm"
            placeholder="Confirm Password"
          />
        </Form.Group>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
        <h4 className="text-danger">{errors}</h4>
        <Button variant="primary" type="submit">
          Sign up
        </Button>
      </Form>
      <Button onClick={googleHandler} className="d-block w-100 my-5">
        Sign up by Google
      </Button>
    </div>
  );
};

export default SignUp;
