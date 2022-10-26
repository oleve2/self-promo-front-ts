import { FC } from "react";

// style
import ce from '../styles/CommonElements.module.scss';
import commf from './CommunicationForm.module.scss';

const Communicationform:FC = (props) => {

  return (<>
    <form className={commf.formdiv}>
      <div className={commf.formContentwrapper}>
        <div className={commf.commform__inputsWrappers}>
          <input className={`${commf.commform__input} ${commf.commform__name}`} type="text" placeholder="Ваше имя"/>
          <input className={`${commf.commform__input} ${commf.commform__email}`} type="text" placeholder="Ваш email или телефон"/>
        </div>

        <div className={commf.commform__inputsWrappers}>
          <textarea className={commf.commform__textarea} placeholder="Сообщение"></textarea>
        </div>

        <div className={commf.commform__inputsWrappers} style={{marginTop:'180px'}}>
          <div className={ce.btnSignUp}>Записаться</div>

          <div style={{width:'calc(800px - 250px)', marginLeft:'10px'}}>
            Нажимая на кнопку &quot;Записаться&quot;, Вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности.
          </div>
        </div>
      </div>
    </form>
  </>
  )
}

export default Communicationform;
