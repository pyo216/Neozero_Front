//アカウント消去
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './account_rm.module.css';

const RmAccount = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleOkClick = () => {
    if (!email || !password) {
      setErrorMessage('※入力に不備があります。');
      return;
    }

    //if (email === 'admin@example.com' && password === 'password123') {
    navigate('/login');
    //} else {
    //setErrorMessage('※間違っています。もう一度入力してください。');
    //}
  };

  const handleTopClick = () => {
    navigate('/top');
  };

  return (
    <div className={styles.body}>
      <div className={styles.left}>
        <button
          type="button"
          onClick={handleTopClick}
          className={styles.mainBtn}
        >
          トップページに戻る
        </button>
        <div className={styles.advertisement}>広告</div>
      </div>

      <div className={styles.center}>
        <div className={styles.account}>アカウント消去</div>
        <p className={styles.errorMessage}>{errorMessage}</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          placeholder="メールアドレス"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          placeholder="パスワード"
        />
        <button
          type="button"
          onClick={handleOkClick}
          className={styles.okButton}
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

export default RmAccount;