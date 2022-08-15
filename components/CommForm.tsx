import { FC } from "react";

// style
import commform from '../styles/CommForm.module.scss';

const CommForm:FC = (props) => {
  return (<>
    <form className={commform.formdiv}>
      <div className={commform.commform__inputsWrappers}>
        <input className={commform.commform__input} type="text" placeholder="Ваше имя"/>
        <input className={commform.commform__input} type="text" placeholder="Ваш email или телефон"/>
      </div>

      <div className={commform.commform__inputsWrappers}>
        <textarea className={commform.commform__textarea} placeholder="Сообщение"></textarea>
      </div>

      <div className={commform.commform__inputsWrappers}>
        <div className={commform.btnSignUp}>Записаться</div>

        <div style={{width:'calc(800px - 250px)', marginLeft:'10px'}}>
          Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности.
        </div>
      </div>
    </form>
  </>
  )
}

export default CommForm;
