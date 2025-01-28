import NavBar from "./Components/Molecules/NavBar";
import Home from "./Components/Organisms/Home";
import Book from "./Components/Organisms/Book";
import SearchProfile from "./Components/Organisms/Search-profile";
import CreateProfile from "./Components/Organisms/Create-profile";
import Availability from "./Components/Organisms/Availability";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Book" element={<Book />} />
          <Route path="/Search-profile" element={<SearchProfile />} />
          <Route path="/Create-profile" element={<CreateProfile />} />
          <Route path="/Availability" element={<Availability />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
