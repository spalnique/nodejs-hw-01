import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';



export const addOneContact = async () => {
  try {
    const contacts = JSON.parse(await fs.readFile(PATH_DB));
    const newContact = createFakeContact();
    await fs.writeFile(PATH_DB, JSON.stringify([...contacts, newContact]));
  } catch (error) {
    throw new Error(error.message);
  }
};

await addOneContact();
