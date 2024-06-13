import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import VirtualTours from "./pages/VirtualTours.jsx";
import Gallery from "./pages/Gallery.jsx";
import Pricing from "./pages/Pricing.jsx";
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
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/application" element={<Application />} />
      </Routes>
    </Router>
  );
}

export default App;