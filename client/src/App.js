import "./App.css";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nevbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Courses } from "./components/Courses";
import { Signup } from "./components/Signup/Signup";

function App() {
  return (
    <>
      <Router>
        <Nevbar />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/courses" element={<Courses />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
