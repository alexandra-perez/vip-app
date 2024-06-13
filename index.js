const { index, create, destroy } = require('./src/guestController');
const {
  readFileSync,
  writeFileSync,
  readJSONFile,
  writeJSONFile,
} = require('./src/helpers');
const inform = console.log;

function run() {
  const action = process.argv[2];
  const guest = process.argv[3];
  let guests = readJSONFile('./data', 'guests.json');
  let writeToFile = false;
  let updatedGuests = [];

  switch (action) {
    case 'index':
      const guestsView = index(guests);
      inform(guestsView);
      break;
    case 'create':
      updatedGuests = create(guests, guest);
      writeToFile = true;
      break;
    case 'show':
      break;
    case 'update':
      break;
      case 'destroy':
          updatedGuests = destroy(guests, guest);
          writeToFile = true;
      break;
    case 'total':
      break;
    default:
      inform('Error.');
  }
  if (writeToFile) {
    writeJSONFile('./data', 'guests.json', updatedGuests);
  }
}

run();
