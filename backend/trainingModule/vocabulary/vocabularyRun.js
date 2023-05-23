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
            return console.log("allVocabuary:".bgGreen, allVocabuary);
        case "getById":
            const wordById = await vocabuary.getById(id);
            console.log(`Word by ID=${id}`.bgGreen.black);
            return console.log("wordById:".bgGreen.blue, wordById);
        case "add":
            const newWord = await vocabuary.add({ word, translationRu });
            console.log(`Word by ID=${id}`.bgGreen.black);
            return console.log("newWord:".bgGreen.blue, newWord);

    }


};


//! Вызовы функции invokeAction:
// invokeAction({ action: "read" });
invokeAction({ action: "getById", id: "YxhM4QDxPeA3SmPHcEZPJ" });
// invokeAction({ action: "add", word: "sight", translationRu: ["взгляд", "достопримечательность"] });