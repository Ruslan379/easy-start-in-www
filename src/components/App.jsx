

import { Logo } from 'components/Logo/Logo';
import { HTML_2_3 } from 'components/HTML-Lesson/Html_2-3';


import css from './App.module.css';

//------------------------------------------------------------------------------------


//! ---------------------------------------------------------------------------------------
// const valueA = "5";
// console.log("valueA:", valueA); // 5
// console.log("Number(valueA):", Number(valueA)); // 5
// console.log("typeof Number(valueA):", typeof Number(valueA)); // "number"
// console.log("typeof Number(NaN):", typeof Number(NaN)); // "number"
// console.log("Number(NaN):", Number(NaN)); // NaN
//! ---------------------------------------------------------------------------------------
// console.log("--------------------------------------------");
// const valueB = "random string";
// console.log("valueB:", valueB); // random string
// console.log("Number(valueB)", Number(valueB)); // NaN
// console.log("typeof Number(valueB)", typeof Number(valueB)); // "number"
//! ---------------------------------------------------------------------------------------

// console.log((Math.random() * 100).toFixed(0)) // псевдослучайное число от 1 до 100
// console.log((Math.random() * (100 - 1) + 1).toFixed(0)); // псевдослучайное число от 1 до 100
//! ---------------------------------------------------------------------------------------


console.log("--------------------------------------------"); 
const cars = ['Audio', 'Volvo', 'Nissan', 'BMW', 'Mazda', 'Toyota'];
const cars1 = cars

const arrayCutter = function (array) {
  array.splice(3, array.length - 1);
  console.log(cars1);
  return;
};  
arrayCutter(cars);
console.log("--------------------------------------------"); 


//! --------------------------------- ERROR -------------------------------------------
// const post = (
//   <h2>Post Header</h2>
//   <p>Post text</p>
// );
//! ---------------------------------------------------------------------------------------



export const App = () => {
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
      {/* ------------------- Lessons --------------- */}
      <p className={css.titleTextBase}>HTML+CSS (module_2-3)</p>
      <HTML_2_3 />

      <p className={css.titleText}>HTML+CSS (module_2-4)</p>
      {/* ------------------- Юля (вопрос 3) ------------------- */}
      <p className={css.titleTextQuestion}>Юля (вопрос 3):</p>
      <br/>
      <div className={css.mainLinks}>
        <a href="https://cdn-icons-png.flaticon.com/512/599/599516.png">Читайте наш блог!</a>
            <ul className={css.socialLinks}>
              <li className={css.socialItems}>
                <p className={css.socialText}>Twitter</p>
                <a href="https://www.google.com.ua">Twitter-1</a>
                <br/>
                <a href="https://www.google.com.ua">Twitter-2</a>
                <br/>
                <a href="https://www.google.com.ua">Twitter-3</a>
              </li>
              <li>
                <p className={css.socialText}>Instagram</p>
                <a href="https://www.google.com.ua">Instagram-1</a>
                <br/>
                <a href="https://www.google.com.ua">Instagram-2</a>
                <br/>
                <a href="https://www.google.com.ua">Instagram-3</a>
              </li>
              <li>
                <p className={css.socialText}>Facebook</p>
                <a href="https://www.google.com.ua">Facebook-1</a>
                <br/>
                <a href="https://www.google.com.ua">Facebook-2</a>
                <br/>
                <a href="https://www.google.com.ua">Facebook-3</a>
              </li>
            </ul>
      </div>



    </div>
  );
};
