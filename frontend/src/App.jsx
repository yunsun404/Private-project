import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css" // CSS 연결 확인

import Header from "./components/Header"
import Home from "./pages/Home"
import ErrorWrite from "./pages/ErrorWrite"
import ErrorList from "./pages/ErrorList"
import MyPage from "./pages/MyPage"
import Signup from "./pages/Signup"

// ❌ 아직 파일이 없어서 에러가 나므로 주석 처리 해둘게요!
// 만들고 나서 주석을 푸시면 됩니다.
// import TagPage from "./pages/TagPage" 

function App() {
  return (
    <BrowserRouter>
      {/* 헤더는 전체 너비를 써야 하므로 컨테이너 바깥에 둠 */}
      <Header />

      {/* ⭐ 핵심: 모든 페이지 내용을 감싸는 중앙 정렬 박스 추가 */}
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/write" element={<ErrorWrite />} />
          <Route path="/list" element={<ErrorList />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/signup" element={<Signup />} />
          {/* 파일 만든 후 주석 해제하세요 */}
          {/* <Route path="/tags" element={<TagPage />} /> */}
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App









