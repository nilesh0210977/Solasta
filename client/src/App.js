import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import EventDetails from "./pages/EventDetails";
import "./App.css";

function App() {


  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        
        <Route index path="" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/teams" element={<Teams/>} />
        <Route path="*" element={<h1>NO PAGES FOUND</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
