import { useState } from "react";
import "./App.css";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import { Button, Stack } from "@chakra-ui/react";
import Login from "./compoents/SignIn/Logins";
import Register from "./compoents/SignUp/Register";



function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />

        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
        </ul>
        <Stack direction="row" spacing={4}>
        <Link to="/login">
          <Button colorScheme="pink" variant="outline">
              Login
            </Button>
        </Link>

        <Link to="/register">
          <Button colorScheme="blue" variant="outline">
            Register
          </Button>
        </Link>
          
        </Stack>
      </nav>

      <hr />

      <Outlet />
     
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Events() {
  return (
    <div>
      <h2>Etkinlikler Yaklaşıyor!</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}


export default App;
