import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";

function App() {

  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (username, password) => {
    // Check if username and password are correct
    if (username === "J3CK" && password === "chromeburned") {
      setAuthenticated(true);
    } else {
      setError("Invalid username or password.");
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
  };


  
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

}

export default App;
