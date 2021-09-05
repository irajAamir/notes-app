const fs = require('fs')
const chalk = require("chalk")


const addNotes = (title,body)=>{
    const notes = loadNotes()
    const duplicateNote = notes.find((note)=> note.title === title)
    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
    
      saveNotes(notes) 
    console.log(chalk.bgGreen("New note added")) 
    
    }else{
        console.log(chalk.bgRed("Note title taken"))
}
}
const removeNote =(title)=>{
    const notes = loadNotes()
    const notesToKeep = notes.filter((note)=> note.title !== title
        ) 
  
    if(notesToKeep.length===notes.length){
        console.log(chalk.bgRed("No note found"))

    }else{
        console.log(chalk.bgGreen("Note removed"))
    }  saveNotes(notesToKeep) 

    }

    const listNotes = ()=>{
        const notes = loadNotes()
        console.log(chalk.bgGrey("your Notes"))
        notes.forEach((note) => console.log(note.title))

    }

    const readNote = (title)=>{
        const notes = loadNotes()
        const findNote = notes.find((note)=> note.title === title)
        if(findNote){
            console.log(chalk.greenBright(findNote.title))
            console.log(findNote.body)
            }else{
                console.log(chalk.red("No note found"))
            }
        }

    




const saveNotes = (notes)=>{
    const JSONdata= JSON.stringify(notes)
    fs.writeFileSync("notes.json", JSONdata) 

}
const loadNotes = ()=>{
    try{
        const bufferData = fs.readFileSync("notes.json")
        const dataJson = bufferData.toString()
        return JSON.parse(dataJson)
    

    } catch (e){
        return []

    }
 
}

    

module.exports = {
   
    addNotes : addNotes,
    removeNote: removeNote,
    listNotes :listNotes,
    readNote: readNote
}