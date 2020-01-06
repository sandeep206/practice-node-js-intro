const fs = require('fs')
const path = require('path')

// this path needs to be relative to work with fs
const contactsLocation = path.join(__dirname, './contacts.json');

/**
 * should read the contacts at the
 * @contactsLocation path and convert
 * it to a js object
 */
const getContacts = () => {
  const fileData = fs.readFileSync(contactsLocation).toString();
  return JSON.parse(fileData);
}

/**
 * takes a contacts object, converts it to JSON
 * and saves it at the @contactsLocation path
 * @param {Object} contacts contacts object
 */
const saveContacts = (contacts) => {
  const data = JSON.stringify(contacts);
  fs.writeFileSync(contactsLocation, data);
}

module.exports = {
  contactsLocation,
  getContacts,
  saveContacts
}

