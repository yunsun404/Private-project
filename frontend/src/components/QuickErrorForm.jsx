import { useState } from "react"
import { useNavigate } from "react-router-dom"

function QuickErrorForm() {
  const [title, setTitle] = useState("")
  const navigate = useNavigate()

  const goWritePage = () => {
    navigate("/write", {
      state: { title }
    })
  }

  return (
    <div className="card">
      <h2>에러 기록하기</h2>
      <p>내가 겪은 에러를 기록해보세요</p>

      <input
        placeholder="에러 제목 간단히 입력"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={goWritePage}>
        기록하러 가기
      </button>
    </div>
  )
}

export default QuickErrorForm
