// TopPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../top/top.css';

const TopPage = () => {
  const navigate = useNavigate();
  
  const handlePost = () => {
    console.log("投稿ボタンがクリックされました");
    // navigate('/post');
  };
  
  const handleRegister = () => {
    console.log("マイページボタンがクリックされました");
    navigate('/mypage');
  };

  return (
    <>
      <div className="top">
        <button id="post-btn" onClick={handlePost}>投稿する</button>
        <button id="mypage-btn" onClick={handleRegister}>マイページ</button>
      </div>

      <div className="bottom">
        <div className="advertisement">　広告　</div>
        <div className="media">　</div>
        <div className="advertisement">　広告　</div>
      </div>
    </>
  );
};

export default TopPage;