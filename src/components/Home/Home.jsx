import whel from 'images/roulette-wheel.png';

import css from './Home.module.css';


//------------------------------------------------------
export const Home = () => {
    return (
        <div className={css.logoContainer}>
            <img
                className={css.logoImage}
                alt={whel}
                src={whel}
                width="100"
            />
            <div className={css.titleText}>
                HOME Component
            </div>
        </div>
    );
};
