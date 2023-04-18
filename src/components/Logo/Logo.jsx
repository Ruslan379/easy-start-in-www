import whel from 'images/roulette-wheel.png';

import css from './Logo.module.css';


//------------------------------------------------------
export const Logo = () => {
    return (
        <div className={css.logoContainer}>
            <img
                className={css.logoImage}
                // style={{
                //     marginBottom: '15px',
                // }}
                alt={whel}
                src={whel}
                width="150"
            />
            <div>
                Easy Start in WWW (What? Where? When?) 
            </div>
        </div>
    );
};
