

// import css from './JS_3-5.module.css';


//-----------------------------------------------------
export const JS_3_5 = () => {
    console.log("JS_3-5:");
    
    const book = {
        title: "The Last Kingdom",
        author: "Bernard Cornwell",
        genres: ["historical prose", "adventure"],
        isPublic: true,
        rating: 8.38,
    };

    console.log("book:", book); // 'The Last Kingdom'

    //! Обращение к свойствам объекта через квадратные скобки и через точку:
    const bookTitle1 = book["title"];
    console.log("book['title']:", bookTitle1); // 'The Last Kingdom'

    const bookTitle2 = book.title;
    console.log("book.title:", bookTitle2); // 'The Last Kingdom'

    const bookGenres1 = book["genres"];
    console.log("book['genres']:", bookGenres1); // ['historical prose', 'adventurs']

    const bookGenres2 = book.genres;
    console.log("book.genres:", bookGenres2); // ['historical prose', 'adventurs']

    const bookGenres3 = book["genres"][0];
    console.log("book['genres'][0]:", bookGenres3); // historical prose
    
    const bookGenres4 = book.genres[0];
    console.log("book.genres[0]:", bookGenres4); // historical prose

    const propKey = "author";
    const bookAuthor = book[propKey];
    console.log("propKey='author' ---> book[propKey]:", bookAuthor); // 'Bernard Cornwell'

    //! Изменение значения свойства:
    book.rating = 9;
    console.log("book.rating:", book.rating); // historical prose

    //! Добавление свойств:
    book.pageCount = 836;;
    console.log("book.pageCount:", book.pageCount); // historical prose




    return (
        <>
            <p style={{ color: "tomato" }}>{`<---- ${"JS_3_5"} ---->`}</p>

            <p style={{ color: "red" }}>{`book: ${book}`}</p>

            <p style={{ color: "blue" }}>{`book["title"]: ${bookTitle1}`}</p>
            <p style={{ color: "black" }}>{`book.title: ${bookTitle2}`}</p>

            <p style={{ color: "blue" }}>{`book["genres"]: [${bookGenres1}]`}</p>
            <p style={{ color: "black" }}>{`bookbook.genres: [${bookGenres2}]`}</p>

            <p style={{ color: "blue" }}>{`book["genres"][0]: [${bookGenres3}]`}</p>
            <p style={{ color: "black" }}>{`book.genres[0]: [${bookGenres4}]`}</p>

            <p style={{ color: "orange" }}>{`propKey='author'--->book[propKey]: [${bookAuthor}]`}</p>

            <p style={{ color: "red" }}>{`book.rating: [${book.rating}]`}</p>

            <p style={{ color: "green" }}>{`book.pageCount: [${book.pageCount}]`}</p>
            
            
        </>
    )
}
