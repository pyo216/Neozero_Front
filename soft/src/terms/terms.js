<<<<<<< HEAD
//利用規約画面
=======
//利用規約
>>>>>>> f378882e (変更)
import React from 'react'; // React用
import { useNavigate } from 'react-router-dom'; // ページ遷移用
import styles from './terms.module.css'; // CSSモジュール(cssファイルかく)


const Post = () => {
    //ここから下変える
const navigate = useNavigate(); // ページ遷移用
const handleTop = () => { //「同意」ボタン押下 
  navigate('/top'); // トップページに移動
};
return (
  <div className={styles.body}>

  <p>&nbsp;</p>  

  <div className={styles.term}>利用規約 </div>

  <p>&nbsp;</p>   

  <div className={styles.context}>
      <p>&nbsp;</p>
      利用規約<br/>本サービスを利用してくれてありがとニャン！<br/>ぜひこのサービスで色々な動物たちと<br/>出会ってくれると嬉しいワン！
      <p>&nbsp;</p>
      NeoZero.Inc
      <p>&nbsp;</p>
  </div>

  <p id="error-message">　</p>
  <button   //「OK」ボタン
    className={styles.ok}
    onClick={handleTop}>利用規約に同意して次に進む</button>


</div>
    );
};
export default Post;
