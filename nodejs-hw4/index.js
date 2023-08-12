import yargs from 'yargs'
import { readFileSync, readFile, writeFileSync, appendFileSync}  from 'fs' ; 
import { log } from 'console';

const loadNotes =() => {
    const notes =readFileSync('./notes.json')
    const mynotes = notes.toString();
    const notesJson =JSON.parse(mynotes)
    return notesJson
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    console.log(dataJson);
    writeFileSync('./notes.json', dataJson)
}

const checkIfExist = (notes, title) => {
 // return notes.find((notes) => notes.title === title) // avec methode find
  return notes.filter((notes) => notes.title === title) //avec la methode filter
}
yargs.command({
  

    command:'addNotes',
    describe:'add note to file',
    handler:(arg) => {
        const { title, body } = arg
        const notes =loadNotes()
        console.log('test', checkIfExist(notes, title));
        const newArr = checkIfExist(notes, title)
        console.log(newArr);
        if (newArr.length ==0) notes.push({title, body})
       // if(!checkIfExist(notes, title)) notes.push({title, body})
       else console.log('this notes already exist');
       // notes.push({title: arg.title, body: arg.body})
        saveNotes(notes)
       // console.log({notes});

}
})
yargs.command({
  

    command:'updateNotes',
    describe:'update note to file by title',
    handler:(arg) => {
        const { title, body } = arg
        const notes =loadNotes()
        const findNotes =notes.find((notes) => notes.title === title)
        findNotes.body= body
        //finNotes= {...finNotes,body:body} si a la base let pas const
        console.log({findNotes});
       
       // notes.push({title: arg.title, body: arg.body})
        saveNotes(notes)
       // console.log({notes});

}
})

yargs.command({
  

  command:'removeNotes',
  describe:'remove note to file by title',
  handler:(arg) => {
      const { title} = arg
      const notes =loadNotes()
      const updatedNotes = notes.filter((note) => note.title !== title);
      if (notes.length === updatedNotes.length) {
        console.log('Note not found.');
      } else {
        saveNotes(updatedNotes);
        console.log('Note removed successfully.');
      }

}
})
yargs.command({
  

  command:'listNotes',
  describe:'list all notes',
  handler:(arg) => {
    const notes = loadNotes();
    console.log('Notes:');
    notes.forEach((note) => {
      console.log(`Title: ${note.title}`);
      console.log(`Body: ${note.body}`);
      console.log('---');
    });

}
})

yargs.parse()

