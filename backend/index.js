require("colors");

//! getCurrentMounth
const { getCurrentMounth } = require("./trainingModule"); //! 1
const currentMounth2 = require("./trainingModule").getCurrentMounth(); //! 2

//! usersExport1 - Вариант 1
const usersExport1 = require("./trainingModule/usersTest1");
const { admins1, clients1 } = require("./trainingModule/usersTest1");

//! usersExport1 + usersExport2 - Вариант 2
const {
    usersExport1: usersExportNew1,
    usersExport2: usersExportNew2
} = require("./trainingModule");

//! Работа с файлами
// const {
//     // appFilesOld,
//     // appFilesPromises,
//     // asyncAwaitReadFile,
//     // asyncAwaitReadFileUtf8,
//     // appendText,
//     // writeText,
// } = require('./trainingModule/files/filesOperations.js');


//! Работа с Vocabuary
// const vocabuary = require("./trainingModule/vocabulary");
// console.log("vocabuary:".bgRed, vocabuary);

// const {
//     getAll
// } = require("./trainingModule/vocabulary");

console.log("");
const vocabuaryMain = require("./trainingModule/vocabulary/vocabularyRun.js");


//----------------------------------------------------------
console.log("");
console.log("----------- Welcome to Node.js again!!! -----------".bgRed.yellow);
console.log("");

//! getCurrentMounth
console.log("Get Current Mounth:".yellow);
const currentMounth = getCurrentMounth(); //! 1
console.log(`Now1 ${currentMounth} month`.bgRed.green); //! 1
console.log(`Now2 ${currentMounth2} month`.bgGreen.red); //! 2
console.log("");


//! usersExport1 - Вариант 1
console.log("usersExport1 - Вариант 1:".yellow);
console.log("usersExport1:".bgBlue, usersExport1);
console.log("");

console.log("usersExport1.admins1:".bgCyan, usersExport1.admins1);
console.log("usersExport1.clients1:".bgMagenta, usersExport1.clients1);
console.log("");

console.log("admins1:".bgCyan, admins1);
console.log("clients1:".bgMagenta, clients1);
console.log("");

//! usersExport1 + usersExport2 - Вариант 2
console.log("usersExport1 + usersExport2 - Вариант 2:".yellow);
console.log("usersExportNew1:".bgBlue, usersExportNew1);
console.log("");
console.log("usersExportNew2:".bgRed, usersExportNew2);
console.log("");

const { admins2, clients2 } = usersExportNew2;
console.log("admins2:".bgCyan, admins2);
console.log("clients2:".bgMagenta, clients2);
console.log("");