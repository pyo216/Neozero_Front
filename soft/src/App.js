import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './login/loginPage';  // ログインページ
import TopPage from './top/top';  // トップページ
import MyPage from'./mypage/mypage'; //マイページ
import MemberPage from'./member/member'; //会員情報選択

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<LoginPage />} /> {/* 初期表示でログインページ */}
          <Route path="/login" element={<LoginPage />} /> {/* ログインページ */}
          <Route path="/top" element={<TopPage />} /> {/* トップページ */}
          <Route path="/mypage" element={<MyPage />} /> {/*マイページ */}
          <Route path="/member" element={<MemberPage />} /> {/*会員情報選択*/}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
