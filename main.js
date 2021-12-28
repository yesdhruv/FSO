#!/usr/bin/env node
let inputArr = process.argv.slice(2);
//console.log(inputArr);
let fs = require('fs');
let path = require('path');
let helpObj = require('./commands/help');
let treeObj = require('./commands/tree');
let organizeObj = require('./commands/organize');

// node main.js tree "directoryPath"
// node main.js organize "directoryPath"
// node main.js help
let command = inputArr[0];
let types ={
    media :["mp4","mkv",'jpg'],
    archives : ['zip','rar','iso'],
    documents : ['odp','odf','txt','doc','docx','pdf','xlsx','odt'],
    app :['exe','dmg','pkg',"deb"]
}
switch(command)
{
    case "tree":
        treeObj.treeKey(inputArr[1]);
        break;
    case "organize":
        organizeObj.organizeKey(inputArr[1]);
        break;
    case "help":
        helpObj.helpKey();
        break;
    default : 
        console.log("Please 🙏🏻 Input Right Command");
        break;
}
