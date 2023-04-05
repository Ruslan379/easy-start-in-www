import whel from 'images/roulette-wheel.png';

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
