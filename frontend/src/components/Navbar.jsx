import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={{
      background: "#111",
      color: "white",
      padding: "15px",
      display: "flex",
      justifyContent: "space-between"
    }}>
      <h2>Log Engine</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "white" }}>Dashboard</Link>
        <Link to="/logs" style={{ color: "white" }}>Logs</Link>
      </div>
    </div>
  );
}