const fsOld = require("fs");
const fsPromises = require("fs/promises");
const fs = require("fs").promises;

//---------------------------------------------------------------------------
//! readFile --> require("fs")
const appFilesOld = fsOld.readFile("./trainingModule/files/files.txt", (error, data) => {
    console.log("fsOld.readFile --> appFilesOld:".yellow);
    console.log("error:".red, error);
    console.log("data:".green, data);
    console.log("");
});



//! readFile --> require("fs/promises")
const appFilesPromises = fsPromises.readFile("./trainingModule/files/files.txt")
    .then(data => {
        console.log("fsPromises.readFile --> appFilesPromises:".yellow);
        console.log("data:".green, data);
        console.log("");
    })
    .catch(error => console.log("error:".red, error));



//! readFile --> async/await
const ReadFile = async () => {
    const buffer = await fs.readFile("./trainingModule/files/files.txt");
    console.log("fs.readFile --> async/await -> ReadFile:".yellow);
    console.log("buffer:".green, buffer);

    const textToString = buffer.toString();
    console.log("textToString:".bgGreen.black, textToString.red);

    console.log("");
};
const asyncAwaitReadFile = ReadFile();



//! readFile --> async/await by "utf-8"
const ReadFileUtf8 = async () => {
    const textUtf8 = await fs.readFile("./trainingModule/files/files.txt", "utf-8");
    console.log("fs.readFile --> async/await -> ReadFileUtf8:".yellow);
    console.log("textUtf8:".bgGreen.black, textUtf8.red);
    console.log("");
};
const asyncAwaitReadFileUtf8 = ReadFileUtf8();


//! appendFile --> async/await
const addText = async () => {
    const resultAppendFile = await fs.appendFile(
        "./trainingModule/files/files.txt",
        "\n++ Add this text to the end ++"
    );
    const textUtf8 = await fs.readFile("./trainingModule/files/files.txt", "utf-8");
    console.log("fs.appendFile --> async/await -> addText:".yellow);
    console.log("resultAppendFile:".bgCyan.black, resultAppendFile); //! undefined
    console.log("textUtf8:".bgGreen.black, textUtf8.red);
    console.log("");
};
const appendText = addText();


//! writeFile --> async/await
const replaceText = async () => {
    const resultWriteFile = await fs.writeFile(
        "./trainingModule/files/files2.txt",
        "-- Replace ALL text in this files --"
    );
    const textUtf8 = await fs.readFile("./trainingModule/files/files2.txt", "utf-8");
    console.log("fs.appendFile --> async/await -> addText:".yellow);
    console.log("resultWriteFile:".bgCyan.black, resultWriteFile); //! undefined
    console.log("textUtf8:".bgGreen.black, textUtf8.red);
    console.log("");
};
const writeText = replaceText();




module.exports = {
    appFilesOld,
    appFilesPromises,
    asyncAwaitReadFile,
    asyncAwaitReadFileUtf8,
    appendText,
    writeText,
}