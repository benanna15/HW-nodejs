import { readFileSync, readFile, writeFileSync, appendFileSync}  from 'fs' ; 


export const addText = (title, body) => {
    const data = readFileSync('./notes.json', 'utf-8');
    const notes = data ? JSON.parse(data) : [];

    notes.push({ title, body });

    writeFileSync('./notes.json', JSON.stringify(notes, null, 2));
    
    console.log('Note ajoutée avec succès.');
}

export const updateTitle = (oldTitle, newTitle) => {
    const data = readFileSync('./notes.json', 'utf-8');
    const notes = JSON.parse(data);

    const noteToUpdate = notes.find(note => note.title === oldTitle);

    if (noteToUpdate) {
      noteToUpdate.title = newTitle;
      writeFileSync('./notes.json', JSON.stringify(notes, null, 2));
      console.log('Titre de la note modifié avec succès.');
    } else {
      console.log('Note non trouvée.');
    }
}