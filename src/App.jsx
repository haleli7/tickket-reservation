import { useState } from "react";
import "./App.css";
import Login from "./compoents/SignIn/Logins";
import Register from "./compoents/SignUp/Register";
import Home from "./page/Home";
import Events from "./page/Events";
import NoMatch from "./page/404";
import Layout from "./page/Layout";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="*" element={<NoMatch />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
