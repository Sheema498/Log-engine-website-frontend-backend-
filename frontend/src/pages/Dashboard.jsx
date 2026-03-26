import { useEffect, useState } from "react";
import API from "../services/api";

export default function Dashboard() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    API.get("/logs/analytics").then(res => setStats(res.data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard</h2>

      {stats.map((item, i) => (
        <div key={i}>
          {item._id}: {item.count}
        </div>
      ))}
    </div>
  );
}