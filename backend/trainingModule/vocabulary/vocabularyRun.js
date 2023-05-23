//! Работа с Vocabuary
const vocabuary = require(".");
console.log("vocabuary:".bgRed, vocabuary);

const {
    getAll
} = require(".");


//--------------------------------------------
const invokeAction = async ({ action, id, word, translationRu }) => {
    switch (action) {
        case "read":
            const allVocabuary = await vocabuary.getAll();
            console.log("allVocabuary:".bgGreen, allVocabuary);
            break;
        case "getById":
            const wordById = await vocabuary.getById(id);
            console.log(`Word by ID=${id}`.bgGreen.black);
            console.log("wordById:".bgGreen.blue, wordById);
            break;
        case "add":
            const newWord = await vocabuary.add({ word, translationRu });
            console.log("newWord:".bgGreen.blue, newWord);
            break;
        case "apdateById":
            const apdateWord = await vocabuary.apdateById(id, { word, translationRu });
            return console.log("apdateWord:".bgGreen.blue, apdateWord);
        case "deleteById":
            const deleteWord = await vocabuary.deleteById(id);
            console.log(`Word ${deleteWord.word} by ID=${id} deleted`.bgRed.black);
            // console.log(`Word by ID=${id} deleted`.bgRed.black);
            console.log("deleteWord:".bgRed.yellow, deleteWord);
            break;
    };
};


//? Вызовы функции invokeAction:
//! Получить ВСЕ слова
invokeAction({ action: "read" });

//! Получить слово по id
invokeAction({ action: "getById", id: "YxhM4QDxPeA3SmPHcEZPJ" });

//! Добавить слово
invokeAction({ action: "add", word: "sight", translationRu: ["взгляд", "достопримечательность"] });
invokeAction({ action: "add", word: "origin", translationRu: ["источник", "происхождение"] });
// invokeAction({ action: "read" });

// //! Изменить слово по id
// invokeAction({
//     action: "apdateById",
//     id: "BBmLEyAFfoNthZ99hv5W",
//     word: "origin",
//     translationRu: ["источник", "происхождение"]
// });

//! Удалить слово по id
// invokeAction({ action: "deleteById", id: "BBmLEyAFfoNthZ99hv5W" });
// invokeAction({ action: "read" });