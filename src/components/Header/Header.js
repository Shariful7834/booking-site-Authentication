import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Context/UserBookingContext";
import { Button } from "react-bootstrap";

function Header() {
  const { user, logOut } = useContext(AuthContext);
  const signout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Al-Helal Hotel</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="me-5 py-3 align-items-center">
              <NavLink
                style={{ color: "white", textDecoration: "none" }}
                className="me-3 ts-none "
                to="/home"
              >
                Home
              </NavLink>

              <NavLink
                style={{ color: "white", textDecoration: "none" }}
                className="me-3 "
                to="/pricing"
              >
                Pricing
              </NavLink>
              {user?.uid ? (
                <NavLink>
                  <Button className="me-3" onClick={signout}>
                    LogOut
                  </Button>
                </NavLink>
              ) : (
                <div>
                  <NavLink
                    style={{ color: "white", textDecoration: "none" }}
                    className="me-3 "
                    to="/login"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    style={{ color: "white", textDecoration: "inherit" }}
                    className="me-3 "
                    to="/signup"
                  >
                    Sign Up
                  </NavLink>
                </div>
              )}

              <div className="d-flex align-items-center">
                <div>
                  {user?.photoURL && (
                    <div>
                      <img
                        className="img-fluid w-50 h-50 rounded-5"
                        src={user.photoURL}
                        alt=""
                      />
                    </div>
                  )}
                </div>
                <div>
                  {user?.uid && (
                    <span className="text-white">{user.email}</span>
                  )}
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
