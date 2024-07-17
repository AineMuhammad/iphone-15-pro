import "./App.css";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Home from "./Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
