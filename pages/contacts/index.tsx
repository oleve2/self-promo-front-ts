import { FC } from "react";
import { useEffect } from 'react';

// components
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

// styles
import ce from '../../styles/CommonElements.module.scss';


const Contacts:FC = () => {
  useEffect( () => {
    document.title = 'Психолог Айгуль Дейнекина: Контакты';
  }, [])

  return (
    <div className={ce.rootWrapper}>
      <Menu />

      <div style={{height:'100vh'}}>
        page contacts (under construction)
      </div>

      <Footer />
    </div>
  )
}

export default Contacts;
