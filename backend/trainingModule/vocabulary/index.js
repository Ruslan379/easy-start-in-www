const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

//------------------------------------------
console.log("__dirname:".bgYellow.blue, __dirname);

const vocabularyEnUaRuPath = path.join(__dirname, "db/vocabularyEn-UaRu.json");
console.log("vocabularyEnUaRuPath:".bgYellow.black, vocabularyEnUaRuPath);

//! Получить ВСЕ слова
const getAll = async () => {
    // const data = await fs.readFile("./db/vocabularyEn-UaRu.json", "utf-8"); //! так ошибка пути
    // const data = await fs.readFile(`${__dirname}/db/vocabularyEn-UaRu.json`, "utf-8"); //* 1 вариант
    const allWords = await fs.readFile(vocabularyEnUaRuPath); //* 2 вариант
    return JSON.parse(allWords)
};


//! Получить слово по id
const getById = async (id) => {
    const allWords = await getAll();
    const result = allWords.find(item => item.id === id);
    return result || null;
};


//! Добавить слово 
const add = async (data) => {
    const allWords = await getAll();

    //? --------- Проверка на добалениее имеющегося слова ----------
    // allWords.map(item => {
    //     if (item.word === data.word) {
    //         console.log(`Слово ${data.word} уже есть в словаре!`.red);
    //         return
    //     }
    //     return
    // });

    const newAddWord = allWords.find(item => item.word === data.word);
    console.log("newAddWord:".bgGreen.blue, newAddWord);

    if (newAddWord) {
        console.log(`Слово ${data.word} уже есть в словаре!`.red);
        console.log("");
        return;
    }
    //? __________Проверка на добалениее имеющегося слова__________

    const newWord = {
        id: nanoid(),
        ...data,
        translationUa: [],
        memorize: false
    };
    allWords.push(newWord);
    await fs.writeFile(vocabularyEnUaRuPath, JSON.stringify(allWords, null, 2));
    console.log(`Слово ${data.word} добавлено в  словарь!`.green);
    console.log("");
    return newWord;
};


//! Изменить слово по id
const apdateById = async (id, data) => {
    const allWords = await getAll();
    const index = allWords.findIndex(item => item.id === id);

    if (index === -1) {
        return null;
    };

    allWords[index] = {
        id,
        ...data,
        translationUa: [],
        memorize: false
    };
    await fs.writeFile(vocabularyEnUaRuPath, JSON.stringify(allWords, null, 2));
    console.log(`Слово ${data.word} изменено!`.yellow);
    return allWords[index];
};

//! Удалить слово по id
const deleteById = async (id) => {
    const allWords = await getAll();
    const index = allWords.findIndex(item => item.id === id);

    if (index === -1) {
        return null;
    };
    const [deleteWord] = allWords.splice(index, 1);
    await fs.writeFile(vocabularyEnUaRuPath, JSON.stringify(allWords, null, 2));
    return deleteWord;
};


module.exports = {
    getAll,
    getById,
    add,
    apdateById,
    deleteById
}