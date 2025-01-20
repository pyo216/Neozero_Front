//  アカウント登録
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // ページ遷移用
import styles from "./account_reg.module.css"; // CSSモジュールを使用
import fontstyles from '../font/font.module.css';

const AccountReg = () => {
  const navigate = useNavigate(); // ページ遷移用

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [comment, setComment] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleOk = () => {
    const passwordRegex = /^[a-zA-Z0-9]{8,16}$/; // パスワードの形式チェック

    if (!email || !name || !password || !passwordConfirm) {
      setErrorMessage("※必須項目が入力されていないワン。");
      return;
    }

    if (name.length > 8) {
      setErrorMessage("※ニックネームは8文字以内で入力してほしいニャン。");
      return;
    }

    if (!passwordRegex.test(password)) {
      setErrorMessage("※パスワードは半角英数字8~16文字で入力してほしいワン。");
      return;
    }

    if (password !== passwordConfirm) {
      setErrorMessage("※パスワードが一致しないニャン。");
      return;
    }

    if (comment.length > 100) {
      setErrorMessage("※フリーコメントは100文字以内で入力してほしいワン。");
      return;
    }

    setErrorMessage("");
    navigate('/'); // ログインページに移動
  };

  const inputStyle = {
    fontFamily: 'CraftMincho, serif'
  };

  return (
    <div className={fontstyles.fontFamily}>
      <div className={styles.body}>
        <div className={styles.title}>会員情報登録</div>

        <form className={styles.form}>
          {/* メールアドレス */}
          <div className={styles.item}>
            <label htmlFor="email">
              メールアドレス<span>※</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={inputStyle}
            />
          </div>

          {/* ニックネーム */}
          <div className={styles.item}>
            <label htmlFor="name">
              ニックネーム<span>※</span>
              <br />
              (ペットの名前)
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={inputStyle}
              //placeholder="8文字以内"
            />
          </div>
          <p className={styles.note}>※8文字以内</p>

          {/* パスワード */}
          <div className={styles.item}>
            <label htmlFor="password">
              パスワード<span>※</span>
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* パスワード確認 */}
          <p className={styles.note}>※半角英数字8~16文字</p>
          <div className={styles.item}>
            <label htmlFor="passwordConfirm">
              パスワード<span>※</span>
              <br />
              (再確認)
            </label>
            <input
              type="password"
              id="passwordConfirm"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              required
            />
          </div>

          {/* フリーコメント */}
          <div className={styles.item}>
            <label htmlFor="comment">フリーコメント</label>
            <textarea
              className={styles.comment}
              style={inputStyle}
              placeholder="ペットの性別や年齢、コメントなど(100文字以内)"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
        </form>

        {/* エラーメッセージ */}
        <p className={styles.errorMessage}>{errorMessage}</p>

        {/* OKボタン */}
        <button
          type="button"
          className={styles.okButton}
          onClick={handleOk}
          style={inputStyle}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default AccountReg;