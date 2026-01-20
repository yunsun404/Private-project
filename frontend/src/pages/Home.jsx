import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Home.css"

function Home() {
  const navigate = useNavigate()

  // 간편 입력을 위한 상태 (제목, 상황)
  const [quickTitle, setQuickTitle] = useState("")
  const [quickSituation, setQuickSituation] = useState("")

  // 에러 목록
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

  // 버튼 클릭 시 작성 페이지로 이동 
  const handleGoToWrite = () => {
    navigate("/write", {
      state: {
        title: quickTitle,
        situation: quickSituation,
      },
    })
  }

  // [추가] 회원가입 페이지 이동 함수
  const handleGoToSignup = () => {
    navigate("/signup")
  }

  return (
    <div className="home">
      {/* 히어로 섹션 (파란 박스) */}
      <div className="hero-box">
        <div className="title">코드 오류 기록</div>
        <div className="subtitle">
          코딩 중 발생하는 에러를 해결방법을 찾고 공유해요
        </div>
      </div>

      <div className="home-layout">
        {/*  왼쪽: 에러 기록하기 (미니 폼 적용) */}
        <div className="card">
          <h3>에러 기록하기</h3>
          <p>내가 겪은 에러를 빠르게 시작해보세요</p>

          {/* 간편 입력 폼 */}
          <div className="quick-form">
            {/* 1. 에러 제목 선택 */}
            <select
              className="home-input"
              value={quickTitle}
              onChange={(e) => setQuickTitle(e.target.value)}
            >
              <option value="">에러 유형을 선택하세요</option>
              {errorTitleList.map((title, i) => (
                <option key={i} value={title}>
                  {title}
                </option>
              ))}
            </select>

            {/* 2. 발생 상황 간단 입력 */}
            <textarea
              className="home-textarea"
              placeholder="어떤 상황인가요? (간단 메모)"
              rows="3"
              value={quickSituation}
              onChange={(e) => setQuickSituation(e.target.value)}
            ></textarea>

            {/* 3. 기록하러 가기 버튼 */}
            <button onClick={handleGoToWrite}>기록하러 가기 &rarr;</button>
          </div>
        </div>

        {/* 오른쪽: 로그인 */}
        <div className="login-box">
          <h3>로그인</h3>
          <div className="login-form">
            <input type="text" placeholder="아이디" />
            <input type="password" placeholder="비밀번호" />
            
            {/* 버튼 색상은 Home.css에서 .login-form button { background-color: #007bff; } 로 설정됩니다 */}
            <button>로그인</button>
            
            {/*  클릭 시 회원가입으로 이동하도록 수정됨 */}
            <div className="signup-link" onClick={handleGoToSignup}>
              회원가입하기
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home



