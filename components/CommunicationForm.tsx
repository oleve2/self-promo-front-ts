import { FC } from "react";
import { useState, useEffect, useRef } from "react";

// style
import ce from '../styles/CommonElements.module.scss';
import commf from './CommunicationForm.module.scss';

interface CommunicationFormProps {
  consType?: string,
}

interface CheckResult {
  email_check: boolean,
  name_check: boolean,
  phone_check: boolean
}

//
const Communicationform:FC<CommunicationFormProps> = (props) => {
  const backUrl    = process.env.NEXT_PUBLIC_BACKEND_URL!;
  const backToken  = process.env.NEXT_PUBLIC_BACKEND_TOKEN!;  

  const [formName, setformName] = useState('');
  const [formMailPhone, setformMailPhone] = useState('');
  const [formRequest, setformRequest] = useState('');
  
  const [checkResult, setcheckResult] = useState<CheckResult | undefined>(undefined);

  const errorMsg: string = "Произошла ошибка при отправке письма! Попробуйте позже!";

  // async check data (returns status)
  const validatedata = async () => {
    let formdata = {name: formName, email_phone: formMailPhone};
    //console.log('formdata', formdata);

    try {
      let resp = await fetch(backUrl + '/api/v1/check_name_emailphone', {
        method: 'POST',
        headers: {"Authorization": backToken},
        body: JSON.stringify(formdata),
      })
      let respData: CheckResult = await resp.json();
      //console.log('respData', respData);
      setcheckResult(respData);
      //
      return respData.name_check && (respData.email_check || respData.phone_check) && (formRequest.length > 5);      
    } catch (e) {
      alert(errorMsg);
      return false;
    }   
  }

  // async send email
  const sendEmail = async () => {
    // sending email
    let isReady: boolean = false;
    try {    
      isReady = await validatedata();
      //console.log(isReady);
    } catch (e) {
      alert('Ошибка сервера при валидации формы');
    } 

    // ---------------------
    if (isReady === true) {
      //console.log('sending email');
      let newCR = {
        name: formName,
        email_phone: formMailPhone,
        request: `Переход с типа консультации: ${props.consType}
Имя: ${formName}
Email/телефон: ${formMailPhone}
Обращение: ${formRequest}`,
      };
      //console.log(newCR);

      try {    
        let respEmail = await fetch(backUrl + '/api/v1/send_email', {
          method: 'POST',
          headers: {"Authorization": backToken},
          body: JSON.stringify(newCR),        
        })
        //console.log(respEmail.status);
  
        if (respEmail.status !== 200) {
          alert(errorMsg);
        } else {
          // clear form
          setformName('');
          setformMailPhone('');
          setformRequest('');
        }
      } catch (e) {
        alert(errorMsg);
      } 

    } else {
      //alert('Некорректные данные для отправки письма!');
    }
  }


  //
  return (<>
    <form className={commf.formdiv}>
      <div className={commf.formContentwrapper}>
        <div className={commf.commform__inputsWrappers}>
          <input className={`${commf.commform__input} ${commf.commform__name}`} 
            type="text" placeholder="Ваше имя"
            value={formName}
            onChange={(event) => { setformName(event.target.value) }}
          />

          <input className={`${commf.commform__input} ${commf.commform__email}`} 
            type="text" placeholder="Ваш email или телефон"
            value={formMailPhone}
            onChange={(event) => { setformMailPhone(event.target.value) }}            
          />
        </div>

        <div className={commf.commform__inputsWrappers}>
          <textarea className={commf.commform__textarea} placeholder="Сообщение" 
            value={formRequest}
            onChange={(e) => { setformRequest(e.target.value) }}
          >
          </textarea>
        </div>

        {( checkResult !== undefined && !checkResult!.name_check ) && 
        <div className={commf.commform__errordiv}>
          Пожалуйста введите корректное имя! (допускаются только русские и латинские буквы)
        </div>
        }
        {( checkResult !== undefined && !(checkResult!.email_check || checkResult!.phone_check)  ) && 
        <div className={commf.commform__errordiv}>
          Пожалуйста введите корректный email или номер телефона!
        </div>
        }
        { (!(formRequest.length > 5) && formRequest !== '') && 
        <div className={commf.commform__errordiv}>
          Пожалуйста укажите причину обращения! (более 5 символов)
        </div>
        }



        <div className={commf.commform__inputsWrappers} style={{marginTop:'180px'}}>
          <div className={ce.btnSignUp} onClick={sendEmail}>Записаться</div>

          <div className={commf.commform__agreement}>
            Нажимая на кнопку &quot;Записаться&quot;, Вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности.
          </div>
        </div>
      </div>
    </form>
  </>
  )
}

export default Communicationform;
