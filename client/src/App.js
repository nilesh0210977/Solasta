import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import EventDetails from "./pages/EventDetails";
import Register from "./pages/Register";
import "./App.css";
import Footer from "./components/Footer";

function App() {


  return (
    <>
    <Navbar />
    <Routes className='main'>
      <Route index path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/events/:id" element={<EventDetails />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<h1>NO PAGES FOUND</h1>} />
    </Routes>
      <Footer />
    </>


  );
}

export default App;
