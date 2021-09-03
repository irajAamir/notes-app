const chalk = require("chalk")
const yargs = require("yargs")
//const getNotes = require('./notes.js')

const command = process.argv[2]
console.log(command)
 if(command === "add"){
     console.log("adding")
 }else if(command === "remove"){
     console.log("removing")
 }
 console.log(process.argv)
