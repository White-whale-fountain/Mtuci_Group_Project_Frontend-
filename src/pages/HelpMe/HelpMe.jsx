import styles from './HelpMe.module.css'
import form_success from '../public/form_success.png'
import {useEffect, useState} from "react";
import LayoutSideBar from "../Layout/LayoutSideBar/LayoutSideBar.jsx";
import LayoutHeader from "../Layout/LayoutHeader/LayoutHeader.jsx";
import {profile} from "../../service/profile.js";
import {Link} from "react-router-dom";

export default function HelpMe() {
  const [send, setSend] = useState(false)
  const auth_user = JSON.parse(localStorage.getItem("user"));
  const [avatar, setAvatar] = useState()
  useEffect(() => {
    async function takeAvatar() {
      const response = await profile.downAvatar(auth_user);
      return setAvatar(response);
    }
    takeAvatar();
  }, []);
  return (
    <div className={styles.help_me_container}>
      <LayoutSideBar user={auth_user} active={'help'}/>
      <div className={styles.help_me_main}>
        <LayoutHeader avatar={avatar}/>
      {
        !send ?
          <div className={styles.help_me_form}>
            <h1>Служба поддержки</h1>
            <p>Задайте нам свой вопрос, и мы ответим на него в кратчайшие сроки</p>
            <form>
              <input type="email" placeholder={'Укажите почту для связи с вами'} className={styles.help_me_form_inputs}/>
              <input type="text" placeholder={'Опишите свою проблему'} className={styles.help_me_form_inputs}/>
              <button onClick={() => setSend(!send)}>Отправить</button>
            </form>
          </div>
          :
          <div className={styles.help_me_succes}>
            <h1>Спасибо!</h1>
            <p>Мы свяжемся с вами как можно скорее</p>
            <img src={form_success} alt="Успешно!"/>
            <form>
              <Link to = {'/main'}><button>На главную</button></Link>
              <Link to = {`/${auth_user}`}><button>В профиль</button></Link>
            </form>

          </div>
      }
      </div>

    </div>
  )
}