const read = require ('./read')
const write = require ('./write')
const add = require ('./add')
const del = require('./del')
const update = require('./update')
const present = require('./present')
const cmd = process.argv

if  (cmd[2]==='add' ) {

const note = {
    "id":cmd[3] ,
    "title" : cmd [4] ,
    "body" :cmd [5]
}

const oldNote = read()
add(note, oldNote)
console.log('---------add----------')

}

if (cmd [2]==='read') {
console.log(read())
console.log('---------read----------')

if (cmd[2] == 'write') {
    console.log(write())
}

}

if ( cmd[2]==='delete') {
    id = cmd[3]
    oldNote = read()
    del(id,oldNote)
    read()
    console.log('---------delete----------')
}


if (cmd[2]== 'update') {
    let note  = {
        id: cmd[3],
        title: cmd[4],
        body: cmd[5]
    }
    const oldNote = read ()
    update (note, oldNote)

    present(read())
    
    console.log ('---------update----------')
 }  











