import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login/login';  // ログインページ
import TopPage from './top/top';  // トップページ
import MyPage from'./mypage/mypage'; //マイページ
import Member from'./member/member'; //会員情報選択
import Nyakama from'./nyakama/nyakama'; //にゃかま
import Logout from'./logout/logout'; //ログアウト
import Terms from'./terms/terms'; //利用規約
import Use from'./use/use'; //利用規約詳細
import RmAccount from'./account_rm/account_rm'; //アカウント消去
import AccountCon from'./account_con/account_con'; //アカウント消去確認
import MailChange from'./mail_change/mail_change'; //メールアドレス変更
import ChangePass from'./change_pass/change_pass'; //パスワード変更画面
import AccountReg from'./account_reg/account_reg'; //アカウント登録
import ChangeInfo from'./change_info/change_info'; //会員情報変更画面
import Deletion from'./deletion/deletion'; //投稿消去画面
import PetCon from './pet_con/pet_con'; //ペット変更確認画面
import PetChange from './pet_change/pet_change'; //ペット変更画面
import Post from './post/post'; //投稿画面
import Other_users from './other_users/other_users'; //投稿画面



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Login/>} /> {/* 初期表示でログインページ */}
          <Route path="/login" element={<Login />} /> {/* ログインページ */}
          <Route path="/top" element={<TopPage />} /> {/* トップページ */}
          <Route path="/mypage" element={<MyPage />} /> {/*マイページ */}
          <Route path="/member" element={<Member />} /> {/*会員情報選択*/}   
          <Route path="/nyakama" element={<Nyakama />} /> {/*にゃかま*/}  
          <Route path="/mail_change" element={<MailChange />} /> {/*メールアドレス変更*/}
          <Route path="/logout" element={<Logout />} /> {/*ログアウト*/}
          <Route path="/terms" element={<Terms />} /> {/*利用規約*/}
          <Route path="/use" element={<Use />} /> {/* 利用規約詳細 */}
          <Route path="/account_rm" element={<RmAccount />} /> {/*アカウント消去*/}   
          <Route path="/account_con" element={<AccountCon />} /> {/*アカウント消去確認*/}
          <Route path="/account_reg" element={<AccountReg />} /> {/*アカウント登録*/}
          <Route path="/change_info" element={<ChangeInfo />} /> {/*会員情報変更画面*/}
          <Route path="/change_pass" element={<ChangePass/>} /> {/*パスワード変更画面*/}
          <Route path="/deletion" element={<Deletion/>} /> {/*投稿消去画面*/}
          <Route path="/pet_con" element={<PetCon/>} /> {/*ペット変更確認画面*/}
          <Route path="/pet_change" element={<PetChange/>} /> {/*ペット変更画面*/}
          <Route path="/post" element={<Post/>} /> {/*投稿画面*/}
          <Route path="/other_users" element={<Other_users/>} /> {/*投稿画面*/}
        </Routes>
      </div>
    </Router>
  );
}



export default App;
