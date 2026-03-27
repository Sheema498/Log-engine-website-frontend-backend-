import { useEffect, useState } from "react";
import API from "../services/api";
import LogTable from "../components/LogTable";

export default function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    API.get("/logs").then(res => setLogs(res.data.logs));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Logs</h2>
      <LogTable logs={logs} />
    </div>
  );
}