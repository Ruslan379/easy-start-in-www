

import css from './Html_2-1.module.css';


//-----------------------------------------------------
export const SectionText = () => {


    const sectionText1 = (
        <section className={css.section}>
            <h1 className={css.sectionTitle}>Section title</h1>
        </section>
    );


    return (
        <>
            {sectionText1}
            <br />
            <section className={css.section}>
                <h1 className={`${css.sectionTitle} ${css.fontSizeColorTitle}`}>Section title</h1>
            </section>
        </>
    )
}
