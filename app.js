const chalk = require("chalk")
const yargs = require("yargs")
const notes = require("./notes.js")
//customize yargs version
yargs.version('1.2.0')
//console.log(yargs.argv)

//create add command
yargs.command({
    command:"add",
    describe:"Add a new note",
    builder:{
        title:{
            describe:"add title",
            demandOption: true,
            type:"string"
        },
        body:{
            describe:"add body",
            required: true,
            type: 'string'
        }
    },
    handler: (argv)=>{
        notes.addNotes(argv.title, argv.body)
    }
})

//create remove command

yargs.command({
    command:"remove",
    describe:"remove note",
    builder:{
        title:{
            describe:"note title",
            required: true,
            type: "string"
        }
    },
    handler: (argv)=>{
        notes.removeNote(argv.title)
    }
})
//create list command
yargs.command({
    command:"list",
    describe:"listing notes",
    handler(){
       notes.listNotes()
    }
})

//create read command
yargs.command({
    command:"read",
    describe:"reading notes",
    builder:{
        title:{
            describe: "read note title",
            required: true,
            type: "string"
        }

    },
    handler(argv){
       notes.readNote(argv.title)
    }
})
yargs.parse()
//console.log(yargs.argv)