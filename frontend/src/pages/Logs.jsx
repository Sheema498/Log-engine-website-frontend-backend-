import { useEffect, useState } from "react";
import API from "../services/api";
import LogTable from "../components/LogTable";

export default function Logs() {
  const [logs, setLogs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    API.get("/logs").then(res => setLogs(res.data.logs));
  }, []);

  const filteredLogs = logs.filter(log =>
    log.message.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Logs</h2>

      <input
        type="text"
        placeholder="Search logs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px" }}
      />

      <LogTable logs={filteredLogs} />
    </div>
  );
}