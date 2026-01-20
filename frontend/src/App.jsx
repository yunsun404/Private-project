import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css" // CSS 연결 확인

import Header from "./components/Layout/Header"
import Home from "./pages/Home"
import ErrorWrite from "./pages/BugWrite"
import ErrorList from "./pages/BugList"
import MyPage from "./pages/MyPage"
import Signup from "./pages/Signup"
import TagPage from "./pages/TagPage"
import EditProfile from "./pages/EditProfile";


function App() {
  return (
    <BrowserRouter>
      {/* 헤더는 전체 너비를 써야 하므로 컨테이너 바깥에 둠 */}
      <Header />

      {/*  모든 페이지 내용을 감싸는 중앙 정렬 박스 추가 */}
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/write" element={<ErrorWrite />} />
          <Route path="/list" element={<ErrorList />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mypage/edit" element={<EditProfile />} />
          <Route path="/tags" element={<TagPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App









