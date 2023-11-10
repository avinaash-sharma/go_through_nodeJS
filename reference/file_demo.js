const fs = require("fs");
const path = require("path");

//create folder
// fs.mkdir(path.join(__dirname,'test'),{},function(error){
//     if(error) throw error;
//     console.log('Folder created successfully');
// })

//create & write to file
// fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'Hello World!', error => {
//     if (error) throw error;
//     console.log('File Written to..');

//     //if we need to appened to it the use appenFile instead of writeFile.
//     fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), '2nd text - from NodeJS', error => {
//         if (error) throw error;
//         console.log('File Written to..');
       
//     })
// })

//this would replace the existing text in the file since thats what it does.
// fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'Hello World! from NodeJS', error => {
//     if (error) throw error;
//     console.log('File Written to');
// })



 //read file
 fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf8', (error, data) => {
    if (error) throw error;
    console.log(data);
})

//rename file
fs.rename(path.join(__dirname, 'test', 'hello.txt'),path.join(__dirname, 'test', 'helloTextUpdated.txt'), error =>{
    if(error) throw error;
    console.log('File Renamed..');
})