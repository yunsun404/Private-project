function BugForm() {
  return (
    <section style={{ padding: "20px" }}>
      <h2>에러 기록</h2>

      <input placeholder="에러 제목" />
      <br />

      <textarea placeholder="발생 상황" />
      <br />

      <textarea placeholder="해결 방법" />
      <br />

      <button>저장</button>
    </section>
  )
}

export default BugForm
