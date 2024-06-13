const { nanoid } = require('nanoid');
const inform = console.log;

// Show list of all guests
function index(guests) {
  return guests.map((guest) => guest.id + ' ' + guest.name).join('\n');
}

// Create new guest
function create(guests, guestName) {
  const guest = {
    name: guestName,
    id: nanoid(4),
    vip: false,
  };

  guests.push(guest);

  return guests;
}

// Delete a guest
function destroy(guests, guestId) {
  const index = guests.findIndex((guest) => guest.id === guestId);

  if (index > -1) {
    guests.splice(index, 1);
    inform('Guest successfully deleted. ');
  } else {
    inform('Guest not found. No action taken.');
  }

  return guests;
}

module.exports = { index, create, destroy };
