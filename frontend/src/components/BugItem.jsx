function BugItem({ bug }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
      <h3>{bug.title}</h3>
      <p>{bug.description}</p>

      <p>
        상태: {bug.solved ? "✅ 해결됨" : "❌ 미해결"}
      </p>

      <div>
        {bug.tags.map(tag => (
          <span key={tag} style={{ marginRight: "5px" }}>#{tag}</span>
        ))}
      </div>
    </div>
  )
}

export default BugItem
