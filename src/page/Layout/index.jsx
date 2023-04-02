/** @format */

import { Link, Outlet } from "react-router-dom";
import { Button, Spinner, Stack } from "@chakra-ui/react";

import logo from "../../assets/etkinlik-logo.svg";
import "./index.css";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../../compoents/Profile/Profile";

function Layout() {
  const { user, isAuthenticated, loginWithRedirect, isLoading } = useAuth0();

  return (
    <div className="header">
      <nav className="nav">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/events">Events</Link>
          </li>
        </ul>
        <Stack direction="row" spacing={4}>
          {!isAuthenticated ? (
            isLoading ? (
              <Spinner />
            ) : (
              <Button
                colorScheme="pink"
                variant="outline"
                onClick={loginWithRedirect}
              >
                Login
              </Button>
            )
          ) : (
            <Profile user={user} />
          )}
        </Stack>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

export default Layout;
