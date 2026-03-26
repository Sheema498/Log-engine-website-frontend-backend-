export default function LogTable({ logs }) {
  return (
    <table border="1" width="100%">
      <thead>
        <tr>
          <th>Time</th>
          <th>Level</th>
          <th>Service</th>
          <th>Message</th>
        </tr>
      </thead>

      <tbody>
        {logs.map(log => (
          <tr key={log._id}>
            <td>{new Date(log.timestamp).toLocaleString()}</td>
            <td>{log.level}</td>
            <td>{log.service}</td>
            <td>{log.message}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}