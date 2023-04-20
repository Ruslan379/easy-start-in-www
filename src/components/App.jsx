import {
    useState,
    // useEffect
} from 'react';

import { Logo } from 'components/Logo/Logo';
import { HTML_2_3 } from 'components/HTML-Lesson/Html_2-3';
import { HtmlQuestion3Julia } from 'components/HTML-Lesson/Html_2-3_Question_Julia';
import { JS_3_6 } from 'components/JavaScript-Lesson/JS_3-6';


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

//! -------------------------------- JS_3-6 ---------------------------------------------
const rgb = [200, 255, 100];
const [red, green, blue] = rgb;
const rgbArr = {
  red,
  green,
    blue
}

console.log("App.js:");
console.log(`R:${red}, G:${green}, B:${blue}`); // "R:200,G:255,B:100"
console.log("rgbArr:", rgbArr); // rgbArr: {red: 200, green: 255, blue: 100}

//! ---------------------------------------------------------------------------------------



export const App = () => {

  const [trigger, setTrigger] = useState(false);
  
const toggleTrigger = () => {
        setTrigger(!trigger);
    }

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
      {/* --------------------- Lessons --------------------- */}
      <p className={css.titleTextBase}>HTML+CSS (module_2-3)</p>
      <HTML_2_3 />

      <p className={css.titleText}>HTML+CSS (module_2-4)</p>
      {/* ---------------- Юля (вопрос 3) ------------------- */}
      <p className={css.titleTextQuestion}>Юля (вопрос 3):</p>
      <br />
      <button
        className={
            `${css.buttonAlert} ${css.alert} ${
                trigger
                ?
                `${css.success} ${css.successBackgroundColor} ${css.buttonAlertBefore}`
                :
                // css.error
                `${css.error} ${css.errorBackgroundColor}`
                }
            `
        }
          onClick={toggleTrigger}
      >
        {trigger ? "Вопрос ЮЛИ включен" : "Вопрос ЮЛИ выключен"}
      </button>
      <br />
      {trigger && (
        <HtmlQuestion3Julia />
      )}
      <p className={css.titleText}>Java Script (module_3-6)</p>
      {`R:${red}, G:${green}, B:${blue}`}
      <JS_3_6 />


    </div>
  );
};
