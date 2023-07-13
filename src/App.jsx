import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import MeetupDetails from "./pages/MeetupDetails/MeetupDetails";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-[1280px] mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meetupDetails/:meetupId" element={<MeetupDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
