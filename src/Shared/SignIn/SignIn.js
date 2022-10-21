import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserBookingContext";
const SignIn = () => {
  const { loginUser } = useContext(AuthContext);
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handlerSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log("signin", email, password);
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };
  // const GoogleHandler = () => {
  //   googleSignUp()
  //     .then((result) => {
  //       const user = result.user;
  //       console.log(user);
  //     })
  //     .catch((error) => console.error(error));
  // };

  return (
    <div className=" bg-info rounded-3 w-75 mt-5 mx-auto">
      <h1 className="text-center pt-3">Login</h1>
      <Form onSubmit={handlerSignIn} className="w-50 mx-auto my-5 pb-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <p>
          New user? <Link to="/signup">Sign up</Link>
        </p>
        <Button variant="primary" type="submit">
          sign in
        </Button>
      </Form>
      {/* <Button className="d-block w-50 mx-auto " onClick={GoogleHandler}>
        Sign with Google
      </Button> */}
    </div>
  );
};

export default SignIn;
