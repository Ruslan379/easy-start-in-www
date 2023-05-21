const { getCurrentMounth } = require("./trainingModule"); //! 1
const currentMounth2 = require("./trainingModule").getCurrentMounth(); //! 2

//! Вариант 1
const usersExport1 = require("./trainingModule/usersTest1");
const { admins1, clients1 } = require("./trainingModule/usersTest1");

//! Вариант 2
const {
    usersExport1: usersExportNew1,
    usersExport2: usersExportNew2
} = require("./trainingModule");


//----------------------------------------------------------
console.log("Welcome to Node.js again");

//! getCurrentMounth
const currentMounth = getCurrentMounth(); //! 1
console.log(`Now1 ${currentMounth} month`); //! 1
console.log(`Now2 ${currentMounth2} month`); //! 2


//! Вариант 1
console.log("usersExport:", usersExport1);

console.log("usersExport1.admins1:", usersExport1.admins1);
console.log("usersExport1.clients1:", usersExport1.clients1);

console.log("admins1:", admins1);
console.log("clients1:", clients1);

//! Вариант 2
console.log("usersExportNew1:", usersExportNew1);
console.log("usersExportNew2:", usersExportNew2);
