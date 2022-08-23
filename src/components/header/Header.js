import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";

import TypeJobs from "./typeJobs/TypeJobs";
import styles from "./header.module.scss";
import SearchHeader from "./searchHeader/SearchHeader";
import { logoSvg } from "images/imageSvg";
import { useNavigate } from "react-router-dom";

function Header() {
  const { infoUserLogin } = useSelector((state) => state.manageUserReducer);
  const navigate = useNavigate()
  let nameUser = infoUserLogin?.user?.name;
  if (nameUser?.indexOf(" ") > 0) {
    nameUser = nameUser && nameUser.slice(0, nameUser.indexOf(" "));
  }
  return (
    <div className={` ${styles.header}`}>
      <Navbar expand="xl" variant="light">
        <LinkContainer to="/">
          <Navbar.Brand>{logoSvg}</Navbar.Brand>
        </LinkContainer>
        <Nav className="search d-none d-md-block">
          <SearchHeader />
        </Nav>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto align-items-lg-center font-weight-bold">
            <Nav.Link href="#">Fiverr Business</Nav.Link>
            <Nav.Link href="#">Explore</Nav.Link>
            <Nav.Link href="#">English</Nav.Link>
            <Nav.Link href="#">$ USD</Nav.Link>
            <Nav.Link href="#">Become a Seller</Nav.Link>

            {infoUserLogin.token ? (
              <NavDropdown title={`Welcome ${nameUser}`} id="dropdown-account">
                {infoUserLogin?.user?.role === "ADMIN" && (
                  <LinkContainer to="/admin/adduser">
                    <NavDropdown.Item>Admin</NavDropdown.Item>
                  </LinkContainer>
                )}
                <LinkContainer to="/profile">
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to="/createNewGig">
                  <NavDropdown.Item>Create New Gig</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to="/myGigs">
                  <NavDropdown.Item>My Gigs</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={() => {
                    localStorage.clear();
                    navigate('/')
                    window.location.reload();
                  }}
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : null}

            {!infoUserLogin.token ? (
              <>
                <LinkContainer to="/login">
                  <Nav.Link>Sign in</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/register">
                  <Nav.Link>
                    <Button variant="outline-success">John</Button>
                  </Nav.Link>
                </LinkContainer>
              </>
            ) : null}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="container">
        <TypeJobs />
      </div>
    </div>
  );
}

export default Header;
