import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  if (!number || number < 0) return;

  try {
    const contacts = JSON.parse(await fs.readFile(PATH_DB));
    for (let i = 1; i <= number; i++) {
      const newContact = createFakeContact();
      contacts.push(newContact);
    }
    await fs.writeFile(PATH_DB, JSON.stringify(contacts));
  } catch (error) {
    throw new Error(error);
  }
};

await generateContacts(5);
