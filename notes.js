//importing modules
const chalk = require('chalk')
const fs = require('fs')

const getNotes = function () {
    return 'Your notes..'
}
//add note function
const addNote = function (title, body) {
    const notes = loadNotes()

    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })
    if (duplicateNotes.length === 0) {

        notes.push({
            title: title,
            body: body

        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New Note Added'))
    } else {

        console.log(chalk.red.inverse('Note title already exist'))
    }

}
//remove note function
const removeNote = function (title) {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title
    })
    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note Removed'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse("No Note Found"))
    }

}
//list node method
const listNotes = function () {
    const notes = loadNotes()
    console.log(chalk.inverse('Your Notes'))

    notes.forEach(function (note) {

        console.log(chalk.blue.inverse(note.title))
    })
    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found'))
    }
}
//read node function
const readNote = function (title) {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if (note) {
        console.log(chalk.blue.inverse('title:' + note.title))
        console.log(chalk.green.inverse('body:' + note.body))
    } else {
        console.log(chalk.red.inverse('Note not found'))
    }
}
//save node function
const saveNotes = function (notes) {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)

}

const loadNotes = function () {

    try {

        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (e) {
        return []
    }
}

//exports
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}



