import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import VirtualTours from "./pages/VirtualTours.jsx";
import Gallery from "./pages/Gallery.jsx";
import Neighborhood from "./pages/Neighborhood.jsx";
import Retail from "./pages/Retail.jsx";
import Amenities from "./pages/Amenities.jsx";
import Contact from "./pages/Contact.jsx";
import Application from "./pages/Application.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/virtual-tours" element={<VirtualTours />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/neighborhood" element={<Neighborhood />} />
        <Route exact path="/retail" element={<Retail />} />
        <Route exact path="/amenities" element={<Amenities />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/application" element={<Application />} />
      </Routes>
    </Router>
  );
}

export default App;