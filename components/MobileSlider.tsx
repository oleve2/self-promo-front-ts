import { FC } from "react";
import Image from "next/image";

// images
import arrToLeft  from '../public/homepage/arrToLeft.png';
import arrToRight from '../public/homepage/arrToRight.png';
import img_fdbck from '../public/common/feedback.png';
import img_fdbck_active from '../public/common/feedback_active.png';

// components

// style
import ms from './MobileSlider.module.scss';


interface MobileSliderProps {
  children?: React.ReactNode,
  itemNumActive: number,
  funcUpdateItemactive: (num: number) => void,
  arraySlider: number[],
}

//
const MobileSlider:FC<MobileSliderProps> = (props) => {
  const changeANPlus = () => {
    if (props.itemNumActive === (props.arraySlider.length -1)) {
      props.funcUpdateItemactive(0);
    } else {
      props.funcUpdateItemactive(props.itemNumActive + 1);
    }
  }

  const changeANMinus = () => {
    if (props.itemNumActive === 0) {
      props.funcUpdateItemactive(props.arraySlider.length -1);
    } else {
      props.funcUpdateItemactive(props.itemNumActive - 1);
    }
  }

  const changeDirectly = (num: number) => {
    props.funcUpdateItemactive(num);
  }

  //
  return (<div className={ms.ms_wrapper}>
    <div>
      {props.children}
    </div>

    <div className={ms.ms_arrowsDiv}>
      <div className={ms.ms_arrow} onClick={() => { changeANMinus() }}> 
        <Image src={arrToLeft} alt="arr_left"></Image> 
      </div>

      <div className={ms.ms_arrow} onClick={() => { changeANPlus() }}> 
        <Image src={arrToRight} alt="arr_right"></Image> 
      </div>
    </div>
  
    <div style={{marginTop:'10px'}}>
      <div className={ms.ms_arrowsDiv}> 
        { props.arraySlider.map( (item) => {
          return <div key={item} style={{marginRight:'10px'}} onClick={() => { changeDirectly(item) }}>
            <Image src={(item === props.itemNumActive) ? img_fdbck_active : img_fdbck} alt="fbd_num"></Image> 
          </div>
        })  }
      </div>
    </div>
  </div>)
}

export default MobileSlider;
