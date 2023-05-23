require("colors");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
//! Работа с Vocabuary
const vocabuary = require("./trainingModule/vocabulary");




//--------------------------------------------
const invokeAction = async ({ action, id, word, translationRu }) => {
    switch (action) {
        case "getAll":
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
        default:
            return console.log("Unknow action");
    };
};


//? Вызовы функции invokeAction:
//! Получить ВСЕ слова
// invokeAction({ action: "getAll" });

//! Получить слово по id
// invokeAction({ action: "getById", id: "YxhM4QDxPeA3SmPHcEZPJ" });

//! Добавить слово
// invokeAction({ action: "add", word: "sight", translationRu: ["взгляд", "достопримечательность"] });
// invokeAction({ action: "add", word: "origin", translationRu: ["источник", "происхождение"] });
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



//? CLI process.argv:
const actionIdex = process.argv.indexOf("--action");
if (actionIdex !== -1) {
    const action = process.argv[actionIdex + 1];
    console.log("action:".bgRed.yellow, action);
    invokeAction({ action })
}

//? CLI yargs:

