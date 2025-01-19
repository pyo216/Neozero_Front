import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './change_pass.module.css';
import fontstyles from '../font/font.module.css';
import Left1Img from '../image/Left1.png';
import Right1Img from '../image/Right1.png';

const ChangePass = () => {
  const navigate = useNavigate();
  const [nowEmail, setNowEmail] = useState('');
  const [nowPassword, setNowPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordCon, setNewPasswordCon] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validatePassword = (password) => {
    const passwordRegex = /^[a-zA-Z0-9]{8,16}$/;
    return passwordRegex.test(password);
  };

  const handleTop = () => {
    navigate('/top');
  };

  const handleok = async () => {
    if (!nowEmail) {
      setErrorMessage('※現在のメールアドレスを入力してくださいワン。');
      return;
    }

    if (!nowPassword) {
      setErrorMessage('※現在のパスワードを入力してくださいニャン。');
      return;
    }

    if (!validatePassword(nowPassword)) {
      setErrorMessage('※現在のパスワードは半角英数字8～16文字で入力してくださいワン。');
      return;
    }

    if (!newPassword) {
      setErrorMessage('※新しいパスワードを入力してくださいニャン。');
      return;
    }

    if (!validatePassword(newPassword)) {
      setErrorMessage('※新しいパスワードは半角英数字8～16文字で入力してくださいワン。');
      return;
    }

    if (newPassword !== newPasswordCon) {
      setErrorMessage('※パスワードが一致しませんニャン。');
      return;
    }

    if (newPassword === nowPassword) {
      setErrorMessage('※新しいパスワードは現在のパスワードと異なるものを設定してくださいワン。');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/pass_change/pass_change', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nowEmail, nowPassword, newPassword }),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.result === 0) {
          setErrorMessage('');
          navigate('/change_info');
        } else {
          setErrorMessage('※入力情報が間違っていますニャン。');
        }
      } else {
        setErrorMessage(data.error || '※ログインに失敗しましたワン。');
      }
    } catch (error) {
      setErrorMessage('※サーバーとの通信に失敗しましたニャン。');
    }
  };

  const inputStyle = {
    fontFamily: 'CraftMincho, serif'
  };

  return (
    <div className={fontstyles.fontFamily}>
      <div className={styles.body}>
        <div className={styles.left}>
          <button
            className={styles.topbutton}
            onClick={handleTop}
            style={inputStyle}
          >
            トップページへ戻る
          </button>

          <div className={styles.advertisement}>
            <img
              src={Left1Img}
              alt="Left1Img"
            />
          </div>
        </div>

        <div className={styles.center}>
          <div className={styles.password}>パスワード変更</div>

          {errorMessage && (
            <p className={styles.errorMessage}>{errorMessage}</p>
          )}

            <label htmlFor="nowEmail">現在のメールアドレス</label>
            <input
              type="email"
              id="nowEmail"
              className={styles.input}
              placeholder="現在のメールアドレスを入力してください"
              value={nowEmail}
              style={inputStyle}
              onChange={(e) => setNowEmail(e.target.value)}
            />

            <label htmlFor="nowPassword">現在のパスワード</label>
            <input
              type="password"
              id="nowPassword"
              className={styles.input}
              placeholder="現在のパスワードを入力してください"
              value={nowPassword}
              onChange={(e) => setNowPassword(e.target.value)}
            />
            <span className={styles.note}>※半角英数字8～16文字</span>

            <label htmlFor="newPassword">新しいパスワード</label>
            <input
              type="password"
              id="newPassword"
              className={styles.input}
              placeholder="新しいパスワードを入力してください"
              value={newPassword}
              style={inputStyle}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <span className={styles.note}>※半角英数字8～16文字</span>

            <label htmlFor="newPasswordCon">新しいパスワード（確認用）</label>
            <input
              type="password"
              id="newPasswordCon"
              className={styles.input}
              placeholder="新しいパスワード（確認用）を入力してください"
              value={newPasswordCon}
              onChange={(e) => setNewPasswordCon(e.target.value)}
            />

          <button
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
              src={Right1Img}
              alt="Right1Img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePass;