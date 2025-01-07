import React from 'react';
import { useNavigate } from 'react-router-dom'; // 追加
import '../mypage/mypage.css';

const MyPage = () => {
    const navigate = useNavigate(); // ページ遷移用のフック
  
    return (
      <div className="mypage-container">
        {/* 左のメニュー */}
        <div className="left">
          <button id="main-btn" onClick={() => navigate('/top')}>
            トップページへ戻る
          </button>
          <button className="menu" onClick={() => navigate('/pet')}>
            ペット情報変更
          </button>
          <button className="menu" onClick={() => navigate('/nyakama')}>
            Nyakama
          </button>
          <button className="menu" onClick={() => navigate('/member')}>
            会員情報選択
          </button>
          <div id="inquiry">
            問い合わせは<br />
            general@ml.kochi-tech.ac.jp<br />
            まで
          </div>
        </div>
  
        {/* 中央の表示エリア */}
        <div className="center">
          <div id="mypage">マイページ</div>
          <div id="media"></div>
        </div>
  
        {/* 右のエリア */}
        <div className="right">
          <div id="advertisement">広告</div>
        </div>
      </div>
    );
  };
export default MyPage;
