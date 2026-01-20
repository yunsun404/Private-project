import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import "./BugWrite.css" 
function ErrorWrite() {
  const location = useLocation()

  const [status, setStatus] = useState("resolved")
  const [errorTitle, setErrorTitle] = useState("")

  
  const [tags, setTags] = useState([]) 
  const [tagInput, setTagInput] = useState("")

  const errorTitleList = [
    "널 값 참조 오류 (NullPointerException)",
    "배열/리스트 범위 초과 오류",
    "문법 오류",
    "타입 오류",
    "변수/함수 참조 오류",
    "컴파일 오류",
    "실행 중 오류",
    "서버 통신 오류",
    "권한/인증 오류",
    "라이브러리/의존성 오류",
    "환경 설정 오류",
    "기타",
  ]


  useEffect(() => {
    if (location.state) {
      
      if (location.state.title) {
        setErrorTitle(location.state.title);
      }
    }
  }, [location.state]);

  
  const handleTagKeyDown = (e) => {
    
    if (e.key === "Enter" && !e.nativeEvent.isComposing) {
      e.preventDefault() 
      
      const newTag = tagInput.trim()
      
      
      if (newTag && !tags.includes(newTag)) {
        setTags([...tags, newTag])
        setTagInput("") 
      }
    }
  }

 
  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  return (
    <div className="error-write">
      <h1>에러 기록하기</h1>

      <form onSubmit={(e) => e.preventDefault()}>
        {/* 에러 제목 선택 */}
        <div className="form-group">
          <label>에러 제목</label>
          <select
            value={errorTitle}
            onChange={(e) => setErrorTitle(e.target.value)}
          >
            <option value="">에러 유형을 선택하세요</option>
            {errorTitleList.map((title, i) => (
              <option key={i} value={title}>
                {title}
              </option>
            ))}
          </select>
        </div>

        {/* 발생 상황 */}
        <div className="form-group">
          <label>발생 상황</label>
          <textarea placeholder="어떤 상황에서 발생했나요?" />
        </div>

        {/* 해결 여부 */}
        <div className="form-group">
          <label>해결 여부</label>
          <div className="status-box">
            <label>
              <input
                type="radio"
                checked={status === "resolved"}
                onChange={() => setStatus("resolved")}
              />
              해결됨
            </label>

            <label>
              <input
                type="radio"
                checked={status === "unresolved"}
                onChange={() => setStatus("unresolved")}
              />
              미해결
            </label>
          </div>
        </div>

        {/* 해결 방법 */}
        <div className="form-group">
          <label>해결 방법</label>
          <textarea
            disabled={status === "unresolved"}
            placeholder={
              status === "resolved"
                ? "어떻게 해결했나요?"
                : "아직 해결하지 못했어요"
            }
          />
        </div>

        {/*  [추가] 태그 입력 칸 */}
        <div className="form-group">
          <label>태그</label>
          <div className="tag-input-wrapper">
            {/* 등록된 태그 리스트 */}
            <div className="tag-list">
              {tags.map((tag, index) => (
                <span key={index} className="tag-item">
                  #{tag}
                  <button type="button" onClick={() => removeTag(tag)}>
                    ×
                  </button>
                </span>
              ))}
            </div>

            {/* 태그 입력창 */}
            <input
              type="text"
              className="tag-input"
              placeholder="태그 입력 후 Enter"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleTagKeyDown}
            />
          </div>
        </div>

        <button className="save-btn">저장</button>
      </form>
    </div>
  )
}

export default ErrorWrite






