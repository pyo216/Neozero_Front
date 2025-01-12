// パスワード変更画面
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ページ遷移用
import styles from './change_pass.module.css'; // CSSモジュール(cssファイルかく)

const ChangePass = () => {
    //ここから下変える
   const navigate = useNavigate(); // ページ遷移用

  // useState フックを使用して状態を管理
  const [nowEmail, setNowEmail] = useState('');
  const [nowPassword, setNowPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordCon, setNewPasswordCon] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleTop = () => { // 「トップページへ戻る」ボタン押下
    navigate('/top'); // トップページに移動
  };

  const handleok = () => { // 「OK」ボタン押下
    if (!nowEmail || !nowPassword || !newPassword || !newPasswordCon) {
      setErrorMessage('※間違っています。もう一度入力してください。');
      return;
    }
  
  // 新パスワードの一致確認
  if (newPassword !== newPasswordCon) {
    setErrorMessage('※間違っています。もう一度入力してください。');
    return;
  }

  // 認証確認
  //if (nowEmail === 'admin@example.com' && nowPassword === 'password123') {
    navigate('/change_info');
  //} else {
    //setErrorMessage('※間違っています。もう一度入力してください。');
  //}
};

  return (
    <div className={styles.body}>
    <div className={styles.left}>

      <button   //トップページへ戻るボタン
        className={styles.topbutton}
        onClick={handleTop}
      >
        トップページへ戻る
        </button>

      <div className={styles.advertisement}>広告</div>
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
      </div>

      <div className={styles.inputContainer}>
        <input 
        type="password" 
        className={styles.input} 
        placeholder="新しいパスワード" 
        value={newPassword}
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
      >
        OK
      </button>
    </div>

    <div className={styles.right}>
      <div className={styles.advertisement2}>広告</div>
    </div>
  </div>

    );
};

export default ChangePass;