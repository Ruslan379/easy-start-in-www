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
    const newWord = {
        id: nanoid(),
        ...data,
        translationUa: [],
        memorize: false
    };
    allWords.push(newWord);
    await fs.writeFile(vocabularyEnUaRuPath, JSON.stringify(allWords))
    return newWord;
};




module.exports = {
    getAll,
    getById,
    add,

}