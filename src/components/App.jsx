import whel from 'images/roulette-wheel.png';

//! ---------------------------------------------------------------------------------------
const valueA = "5";
console.log("valueA:", valueA); // 5
console.log("Number(valueA):", Number(valueA)); // 5
console.log("typeof Number(valueA):", typeof Number(valueA)); // "number"
console.log("typeof Number(NaN):", typeof Number(NaN)); // "number"
console.log("Number(NaN):", Number(NaN)); // NaN
//! ---------------------------------------------------------------------------------------
console.log("--------------------------------------------"); 
const valueB = "random string";
console.log("valueB:", valueB); // random string
console.log("Number(valueB)", Number(valueB)); // NaN
console.log("typeof Number(valueB)", typeof Number(valueB)); // "number"
//! ---------------------------------------------------------------------------------------

export const App = () => {
  return (
    <div
    style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}>
      <img
        style={{
          marginBottom: '40px',
          
        }}
            alt={whel}
            src={whel}
            width="200"
          />
      <div>
        Easy Start in WWW (What? Where? When?) 
      </div>
    </div>
  );
};
