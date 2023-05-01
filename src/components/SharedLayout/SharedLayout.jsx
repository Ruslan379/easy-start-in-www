import {
  NavLink,
  Outlet 
} from 'react-router-dom';


import { Logo } from 'components/Logo/Logo';

import css from './SharedLayout.module.css';

//------------------------------------------------------------------------------------
console.log("SharedLayout.js:");

//! ---------------------------------------------------------------------------------------



export const SharedLayout = () => {

  return (
    <div
      className={css.Container}
      // style={{
      //     height: '100vh',
      //     display: 'flex',
      //     flexDirection: 'column',
      //     justifyContent: 'center',
      //     alignItems: 'center',
      //     fontSize: 20,
      //     color: '#010101'
      // }}
    >
      <Logo />
      <NavLink className={css.navLink} to="/">H O M E</NavLink>
      <nav className={css.navFlex}>
        {/* <NavLink className={css.navLink} to="/">HOME</NavLink> */}
        <div className={css.navBlock}>
          <NavLink className={css.navLink} to="/htmlcss">HTML+CSS</NavLink>
          <NavLink to="/htmlcss/module-23">Module_2-3</NavLink>
          <NavLink to="/htmlcss/module-24">Module_2-4</NavLink>
          <NavLink to="/htmlcss/question-julia">Юля (вопрос 3)</NavLink>
          <NavLink to="/htmlcss/module-36">Module_3-6</NavLink>
        </div>
        {/* <NavLink className={css.navLink} to="/javascript">Java Script</NavLink> */}
        <div className={css.navBlock}>
          <NavLink className={css.navLink} to="/javascript">Java Script</NavLink>
          <NavLink to="/javascript/module-35">Module_3-5</NavLink>
          <NavLink to="/javascript/module-24">Module_2-4</NavLink>
          <NavLink to="/javascript/question-julia">Юля (вопрос 3)</NavLink>
          <NavLink to="/javascript/module-36">Module_3-6</NavLink>
        </div>
        <NavLink className={css.navLink} to="/react">React</NavLink>
        <NavLink className={css.navLink} to="/node">Node</NavLink>
      </nav>

      <Outlet />
      
    </div>
  );
};
