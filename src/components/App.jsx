import {
    useState,
    // useEffect
} from 'react';

import {
  Route,
  Routes,
  // Link,
  // NavLink,
  Outlet 
} from 'react-router-dom';

// import { useParams } from "react-router-dom";

import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Home } from 'components/Home/Home';
import { NotFound } from "page/NotFound";

import { HTML_2_3 } from 'components/HTML-Lesson/Html_2-3';
import { HtmlQuestion3Julia } from 'components/HTML-Lesson/Html_2-3_Question_Julia';
import { HTML_36 } from 'components/HTML-Lesson/Html_3-6';

import { JS_3_6 } from 'components/JavaScript-Lesson/JS_3-6';
import { JS_3_5 } from 'components/JavaScript-Lesson/JS_3-5';
import { JS_4_7 } from 'components/JavaScript-Lesson/JS_4-7';
import { JS_4_8 } from 'components/JavaScript-Lesson/JS_4-8';
import { JS_5_9 } from 'components/JavaScript-Lesson/JS_5-9';

import { React24 } from 'components/React-Lesson/React24';
import { React47 } from 'components/React-Lesson/React47';

import css from './App.module.css';

//------------------------------------------------------------------------------------
console.log("App.js:");

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

//! -------------------------------- JS_3-6 (5 вопрос)---------------------------------------------
//! Деструктуризация массивов
const rgb = [200, 255, 100];

//? Вариант 1
const [red, green, blue] = rgb;

//? Вариант 2: -- будет ОШИБКА
// let red, green, blue;
// [red, green, blue] = rgb;

//? Вариант 3: -- будет WARNING
// var [red, green, blue] = rgb;

const rgbArr = {
  red,
  green,
  blue
}

//! Будет ОШИБКА,  так переменные red, green, blue уже объявлены и определены
// const { red, green, blue } = rgbArr;

//? Вариант 1:
//! При дестуктуризации надо сделать переименование переменных:
// const {red: redNew, green: greenNew, blue: blueNew} = rgbArr;

//? Вариант 2: -- Будет ОШИБКА
// { red, green, blue } = rgbArr


//? Вариант 3: -- будет WARNING
//! WARNING in src\components\App.jsx
//! Line 81:7:   'red' is already defined    no-redeclare
//! Line 81:12:  'green' is already defined  no-redeclare
//! Line 81:19:  'blue' is already defined   no-redeclare
// var [red, green, blue] = rgb;
// var { red, green, blue } = rgbArr;


// console.log("App.js:");
console.log(`R:${red}, G:${green}, B:${blue}`); // "R:200,G:255,B:100"
console.log("rgbArr:", rgbArr); // rgbArr: {red: 200, green: 255, blue: 100}

//! ---------------------------------------------------------------------------------------



export const App = () => {
  // const { moduleId } = useParams();

  const [trigger, setTrigger] = useState(false);
  const [module, setModule] = useState(0);
  
  const toggleTrigger = () => {
    setTrigger(!trigger);
  }
  
  const handleChange = evt => {
    setModule(evt.target.value);
    // console.log("module:", evt.target.value);
  };

        // Вызывается при отправке формы
  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(`Signed up as: ${module}`);
  };

  // console.log(`moduleId:${moduleId}`); 

  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<SharedLayout />} >
        <Route index element={<Home />} />
        <Route path="/htmlcss" element={
          <div>
            <p className={css.titleTextBase}>HTML+CSS</p>
            <Outlet />
          </div>
        } >
          <Route path="module-23" element={
            <div>
              <p className={css.titleText}>HTML+CSS (module_2-3)</p>
              <HTML_2_3 />
            </div>
          } />
          <Route path="module-24" element={
          <div>
            <p className={css.titleText}>HTML+CSS (module_2-4)</p>
          </div>
          } />
          <Route path="question-julia" element={
            <div>
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
            </div>
          } />
          <Route path="module-36" element={
          <div>
            <p className={css.titleText}>HTML+CSS (module_3-6)</p>
            <HTML_36 />
        </div>
          } />
        </Route>

        <Route path="/javascript" element={
          <div>
            <p className={css.titleTextBase}>Java Script</p>
            <form
              // className={trigger ? css.complexFormForm :css.complexFormFormNone1}
              onSubmit={handleSubmit}>
                <label>
                    Module Java Script:
                <input
                    type="text"
                    placeholder="Enter module"
                    value={module}
                    onChange={handleChange}
                />
                </label>
                <button type="submit">Module JS</button>
            </form>
            <Outlet />
          </div>
        } >
          <Route path="module-35" element={
            <div>
              <p className={css.titleText}>Java Script (module_3-5)</p>
                <JS_3_5 />
            </div>
          } />
          <Route path="module-36" element={
            <div>
              <p className={css.titleText}>Java Script (module_3-6)</p>
              {`App.js --> R:${red}, G:${green}, B:${blue}`}
              <JS_3_6 />
            </div>
          } />
          <Route path="module-47" element={
            <div>
              <p className={css.titleText}>Java Script (module_4-7)</p>
              <JS_4_7 />
            </div>
          } />
          <Route path="module-48" element={
            <div>
              <p className={css.titleText}>Java Script (module_4-8)</p>
              <JS_4_8 />
            </div>
          } />
          <Route path="module-59" element={
            <div>
              <p className={css.titleText}>Java Script (module_5-9)</p>
              <JS_5_9 />
            </div>
          } />
            
            
            

    

        {/* <Route path="/javascript" element={
          <>
            <p className={css.titleText}>Java Script (module_3-5)</p>
            <JS_3_5 />
            <p className={css.titleText}>Java Script (module_3-6)</p>
            {`App.js --> R:${red}, G:${green}, B:${blue}`}
            <JS_3_6 />
            <p className={css.titleText}>Java Script (module_4-7)</p>
            <JS_4_7 />
            <p className={css.titleText}>Java Script (module_4-8)</p>
            <JS_4_8 />
            <p className={css.titleText}>Java Script (module_5-9)</p>
            <JS_5_9 />
          </>
        } /> */}
      </Route>


        <Route path="/react" element={
          <>
            <p className={css.titleText}>React (module_2-4)</p>
            <React24 />
            <p className={css.titleText}>React (module_4-7)</p>
            <React47 />
          </>
        } />
        <Route path="/node" element={
          <>
            <p className={css.titleText}>Node.js (module_1-1)</p>
            {/* <Node11 /> */}
            <p className={css.titleText}>Node.js (module_1-2)</p>
            {/* <Node12 /> */}
          </>
        } />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route> 
    </Routes> 
  );
};
