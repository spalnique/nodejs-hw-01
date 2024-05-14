import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  try {
    return JSON.parse(await fs.readFile(PATH_DB));
  } catch (error) {
    throw new Error(error.message);
  }
};

console.log(await getAllContacts());
