import React from 'react'; // React用
import { useNavigate } from 'react-router-dom'; // ページ遷移用
/*
import styles from './account_rm.module.css'; // CSSモジュール(cssファイルかく)
*/

const RmAccount = () => {
    //ここから下変える
 const navigate = useNavigate(); // ページ遷移用

 const handletop = () => { // 「トップページ」ボタン押下
    navigate('/top'); // <トップページ画面>に移動
  };

  const handlelogin = () => { // 「<ログイン>」ボタン押下
    navigate('/login'); // <ログイン画面>に移動
  };


  return (
    <div className={StyleSheet.body}>
    <div class="left">
      <button id="main-btn" onclick="location.href='./main.html'">トップページへ戻る</button>
      <div id="advertisement">広告</div>
    </div>

    <div class="center">
      <div id="account">アカウント消去</div>
      <p id="error-message"></p>
      <input type="email" id="email" placeholder="メールアドレス" />
      <input type="password" id="password" placeholder="パスワード" />
      <button id="ok">OK</button>
    </div>

    <div class="right">
      <div id="advertisement2">広告</div>
    </div>

    <script>
      const ok = document.getElementById('ok'); //OKボタン取得
      const errorMessage = document.getElementById('error-message'); //エラーメッセージ取得

      // OKボタンが押された時
      ok.addEventListener('click', () => {
          const email = document.getElementById('email').value; //メールアドレス取得
          const password = document.getElementById('password').value; //パスワード取得

          if (!email && !password) { //入力欄が空白の時
              errorMessage.textContent = '※間違っています。もう一度入力してください。'; //エラーメッセージを表示させる
              return;
          }else if (email === 'admin@example.com' && password === 'password123') { //成功時
              window.location.href = './login.html'; // ログイン画面に遷移
          } else { //失敗時
              errorMessage.textContent = '※間違っています。もう一度入力してください。'; //エラーメッセージを表示させる
          }
      });

    </script>

  </div>
    );
};

export default RmAccount;
