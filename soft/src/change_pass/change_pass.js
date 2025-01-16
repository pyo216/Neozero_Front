// パスワード変更画面
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ページ遷移用
import styles from './change_pass.module.css'; // CSSモジュール(cssファイルかく)
import fontstyles from '../font/font.module.css';
import samplePet1Img from '../image/samplePet1.png'; //259:550
import samplePet2Img from '../image/samplePet2.png'; //259:750


const ChangePass = () => {
  //ここから下変える
  const navigate = useNavigate(); // ページ遷移用

  // useState フックを使用して状態を管理
  const [nowEmail, setNowEmail] = useState('');
  const [nowPassword, setNowPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordCon, setNewPasswordCon] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // パスワードバリデーション用の関数
  const validatePassword = (password) => {
    // 半角英数字のみを許可する正規表現
    const passwordRegex = /^[a-zA-Z0-9]{8,16}$/;
    return passwordRegex.test(password);
  };

  const handleTop = () => { // 「トップページへ戻る」ボタン押下
    navigate('/top'); // トップページに移動
  };

  const handleok =async () => { // 「OK」ボタン押下

    if (!nowEmail) {
      setErrorMessage('※現在のメールアドレスを入力してくださいワン。');
      return;
    }

    // 現在のパスワードのチェック
    if (!nowPassword) {
      setErrorMessage('※現在のパスワードを入力してくださいニャン。');
      return;
    }

    // パスワードの形式チェック（現在のパスワード）
    if (!validatePassword(nowPassword)) {
      setErrorMessage('※現在のパスワードは半角英数字8～16文字で入力してくださいワン。');
      return;
    }


    // 新しいパスワードのチェック
    if (!newPassword) {
      setErrorMessage('※新しいパスワードを入力してくださいニャン。');
      return;
    }

    // パスワードの形式チェック（新しいパスワード）
    if (!validatePassword(newPassword)) {
      setErrorMessage('※新しいパスワードは半角英数字8～16文字で入力してくださいワン。');
      return;
    }

    // パスワードの一致確認
    if (newPassword !== newPasswordCon) {
      setErrorMessage('※パスワードが一致しませんニャン。');
      return;
    }

    // 同一パスワードチェック
    if (newPassword === nowPassword) {
      setErrorMessage('※新しいパスワードは現在のパスワードと異なるものを設定してくださいワン。');
      return;
    }

    // 認証確認
    try {
      const response = await fetch('http://localhost:8000/pass_change/pass_change', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        //送信情報
        body: JSON.stringify({ nowEmail, nowPassword,newPassword }),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.result === 0) {  // 認証成功
          setErrorMessage('');
          navigate('/change_info');
        } else {  // 認証失敗
          setErrorMessage('※入力情報が間違っていますニャン。');
        }
      } else {
        setErrorMessage(data.error || '※ログインに失敗しましたワン。');
      }
    } catch (error) {
      setErrorMessage('※サーバーとの通信に失敗しましたニャン。');
    }
    //if (nowEmail === 'admin@example.com' && nowPassword === 'password123') {
    //navigate('/change_info');
    //} else {
    //setErrorMessage('※間違っています。もう一度入力してください。');
    //}
  };
  const inputStyle = {
    fontFamily: 'CraftMincho, serif'
  };

  return (
    <div className={fontstyles.fontFamily}>
      <div className={styles.body}>
        <div className={styles.left}>

          <button   //トップページへ戻るボタン
            className={styles.topbutton}
            onClick={handleTop}
            style={inputStyle}
          >
            トップページへ戻る
          </button>

          <div className={styles.advertisement}>
            <img
              src={samplePet1Img} // 広告サンプル
              alt="samplePet1Img" // 代替テキスト
            />
          </div>
        </div>

        <div className={styles.center}>
          <div className={styles.password}>パスワード変更</div>

          {/* エラーメッセージ表示 */}
          {errorMessage && (
            <p className={styles.errorMessage}>{errorMessage}</p>
          )}

          <div className={styles.inputContainer}>
            <input
              type="email"
              className={styles.input}
              placeholder="今のメールアドレス"
              value={nowEmail}
              style={inputStyle}
              onChange={(e) => setNowEmail(e.target.value)}
            />
          </div>

          <div className={styles.inputContainer}>
            <input
              type="password"
              className={styles.input}
              placeholder="今のパスワード"
              value={nowPassword}
              onChange={(e) => setNowPassword(e.target.value)}
            />
            <p className={styles.note}>※半角英数字8~16文字</p>
          </div>

          <div className={styles.inputContainer}>
            <input
              type="email"
              className={styles.input}
              placeholder="新しいパスワード"
              value={newPassword}
              style={inputStyle}
              onChange={(e) => setNewPassword(e.target.value)}
            />

            <p className={styles.note}>※半角英数字8~16文字</p>
          </div>

          <div className={styles.inputContainer}>
            <input
              type="password"
              className={styles.input}
              placeholder="新しいパスワード(再確認)"
              value={newPasswordCon}
              onChange={(e) => setNewPasswordCon(e.target.value)}
            />
          </div>

          <button     //「OK」ボタン
            className={styles.okbutton}
            onClick={handleok}
            style={inputStyle}
          >
            OK
          </button>
        </div>

        <div className={styles.right}>
          <div className={styles.advertisement2}>
            <img
              src={samplePet2Img} // 広告サンプル
              alt="samplePet2Img" // 代替テキスト
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePass;