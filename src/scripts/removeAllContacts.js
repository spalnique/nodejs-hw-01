import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([]));
  } catch (error) {
    throw new Error(error.message);
  }
};

await removeAllContacts();
