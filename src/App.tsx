import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Token from "./pages/Token";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/token" element={<Token />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;