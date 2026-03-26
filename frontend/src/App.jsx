import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Logs from "./pages/Logs";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <h1 style={{ textAlign: "center" }}>
        High Throughput Log Analytics & Monitoring Engine
      </h1>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/logs" element={<Logs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;