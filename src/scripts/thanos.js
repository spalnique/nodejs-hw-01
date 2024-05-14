import { PATH_DB } from '../constants/contacts.js';
import { getAllContacts } from './getAllContacts.js';
import fs from 'node:fs/promises';

export const thanos = async () => {
  try {
    const initContacts = await getAllContacts();
    const resultContacts = initContacts.filter(() => Math.round(Math.random()));
    fs.writeFile(PATH_DB, JSON.stringify(resultContacts));
  } catch (error) {
    throw new Error(error.message);
  }
};

await thanos();
