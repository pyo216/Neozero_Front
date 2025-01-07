import React from 'react';
import { useNavigate } from 'react-router-dom';  // ページ遷移用フック
import '../member/member.css';  // cssファイル

const Member = () => {
    const navigate = useNavigate(); // ページ遷移用のフック

    return (
        <div className="member-container">
            {/* 左側のメニュー */}
            <div className="left">
                <button className="menu" onClick={() => navigate('/top')}>
                    トップページに戻る
              </button>
                {/*<div id="advertisement">広告</div> */}
            </div> 

            {/* 会員情報選択エリア */}
            <div className="center">
                <div id="member">会員情報選択</div>
                <button className="menu" onClick={() => navigate('/change')}>
                    会員情報変更
                </button>
                <button className="important" onClick={() => navigate('/logout')}>
                    ログアウト
                </button>
                <button className="important" onClick={() => navigate('/account')}>
                    アカウント消去
                </button>
            </div>

            {/* 右側の広告エリア */}
            <div className="right">
                <div id="advertisement2">広告</div>
            </div>
        </div>
    );
};

export default Member;
