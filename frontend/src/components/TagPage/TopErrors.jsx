function ErrorStats() {
  return (
    <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "10px" }}>
      <h2>많이 틀린 에러 TOP</h2>

      <table style={{ width: "100%", marginTop: "10px" }}>
        <thead>
          <tr>
            <th>에러</th>
            <th>횟수</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>NullPointerException</td>
            <td>12</td>
          </tr>
          <tr>
            <td>IndexOutOfBounds</td>
            <td>9</td>
          </tr>
          <tr>
            <td>SQLSyntaxError</td>
            <td>6</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ErrorStats;
