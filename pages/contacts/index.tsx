import { FC } from "react";
import { useEffect } from 'react';

// components
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";


const Contacts:FC = () => {
  useEffect( () => {
    document.title = 'Психолог Айгуль Дейнекина: Контакты';
  }, [])

  return (
    <>
    <Menu />

    <div style={{height:'100vh'}}>
      page contacts (under construction)
    </div>

    <Footer />
    </>
  )
}

export default Contacts;
