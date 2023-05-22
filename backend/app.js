const fsOld = require("fs");
const fsPromises = require("fs/promises");
const fs = require("fs").promises;

//---------------------------------------------------------------------------
//! require("fs")
const appFilesOld = fsOld.readFile("./trainingModule/files/files.txt", (error, data) => {
    console.log("fsOld --> appFilesOld:".yellow);
    console.log("error:".red, error);
    console.log("data:".green, data);
    console.log("");
});



//! require("fs/promises")
const appFilesPromises = fsPromises.readFile("./trainingModule/files/files.txt")
    .then(data => {
        console.log("fsPromises --> appFilesPromises:".yellow);
        console.log("data:".green, data);
        console.log("");
    })
    .catch(error => console.log("error:".red, error));



//! async/await
const ReadFile = async () => {
    const buffer = await fs.readFile("./trainingModule/files/files.txt");
    console.log("fs --> async/await -> ReadFile:".yellow);
    console.log("buffer:".green, buffer);

    const textToString = buffer.toString();
    console.log("textToString:".bgGreen.black, textToString.red);

    console.log("");
};

const asyncAwaitReadFile = ReadFile();



//! async/await by "utf-8"
const ReadFileUtf8 = async () => {
    const textUtf8 = await fs.readFile("./trainingModule/files/files.txt", "utf-8");
    console.log("fs --> async/await -> ReadFileUtf8:".yellow);
    console.log("textUtf8:".bgGreen.black, textUtf8.red);
    console.log("");
};

const asyncAwaitReadFileUtf8 = ReadFileUtf8();


module.exports = {
    appFilesOld,
    appFilesPromises,
    asyncAwaitReadFile,
    asyncAwaitReadFileUtf8,
}