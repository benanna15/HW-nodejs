import yargs from 'yargs';
import { addText, updateTitle } from './addText.js';

yargs
  .command({
    command: 'addTextToFile',
    describe: 'add text to file',
    builder: {
      title: {
        describe: 'Title of the note',
        demandOption: true,
        type: 'string'
      },
      body: {
        describe: 'Body of the note',
        demandOption: true,
        type: 'string'
      }
    },
    handler: (argv) => {
      const { title, body } = argv;
      addText(title, body);
    }
  })
  .command({
    command: 'updateTitle',
    describe: 'Modifier le titre d\'une note existante',
    builder: {
      oldTitle: {
        describe: 'Ancien titre de la note',
        demandOption: true,
        type: 'string'
      },
      newTitle: {
        describe: 'Nouveau titre de la note',
        demandOption: true,
        type: 'string'
      }
    },
    handler: (argv) => {
      const { oldTitle, newTitle } = argv;
      updateTitle(oldTitle, newTitle);
    }
  })
  .parse();