import './Signup.css'

function Signup() {
  return (
    <div className="signup-page">
      <h1>회원가입</h1>

      <input placeholder="아이디" />
      <input placeholder="이메일" />
      <input type="password" placeholder="비밀번호" />

      <button>가입하기</button>
    </div>
  )
}

export default Signup
