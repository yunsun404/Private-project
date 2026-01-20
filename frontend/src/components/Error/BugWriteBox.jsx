function ErrorWriteBox({ onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        width: "300px",
        height: "200px",
        border: "1px solid #aaa",
        cursor: "pointer",
        padding: "20px"
      }}
    >
      <h3>에러 기록하기</h3>
      <p>발생한 오류를 기록해보세요</p>
    </div>
  )
}

export default ErrorWriteBox
