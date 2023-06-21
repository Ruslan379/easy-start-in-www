import whel from 'images/roulette-wheel.png';

import css from './Home.module.css';


//------------------------------------------------------
export const Home = () => {
    return (
        <div className={css.logoHomeContainer}>
            <div className={css.logoHomeShadowContainer}>
                <img
                    className={css.logoHomeImage}
                    alt={whel}
                    src={whel}
                    width="100"
                />
            </div>
            <div className={css.titleText}>
                HOME Component
            </div>
        </div>
    );
};
