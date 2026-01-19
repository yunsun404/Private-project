import { useNavigate } from "react-router-dom"
import "./LoginBox.css"


function LoginBox() {
  const navigate = useNavigate()

  return (
    <div className="login-box">
      <h3>로그인</h3>
      <p className="login-desc">
        로그인하고 나만의 에러 노트를 만들어보세요
      </p>

      <input type="text" placeholder="아이디" />
      <input type="password" placeholder="비밀번호" />

      <button className="login-btn">로그인</button>

      <div
        className="signup-link"
        onClick={() => navigate("/signup")}
      >
        회원가입하기
      </div>
    </div>
  )
}

export default LoginBox


