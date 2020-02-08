//module initialization
const chalk = require('chalk')
const notes = require('./notes.js')
const yargs = require('yargs')

// create add command
yargs.command({
    command: "add",
    describe: "add a new note",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'This is a body',
            demandOption: true,
            type: 'string'
        }

    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//create remove command
yargs.command({
    command: "remove",
    describe: "removing note",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})

//create  read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function (argv) {
        notes.readNote(argv.title)
    }
})

//create a list command
yargs.command({
    command: 'list',
    describe: 'listing  notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function () {
        notes.listNotes()
    }
})

yargs.parse()
