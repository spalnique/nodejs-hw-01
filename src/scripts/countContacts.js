import { getAllContacts } from './getAllContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await getAllContacts();
    return contacts.length;
  } catch (error) {
    throw new Error(error.message);
  }
};

console.log(await countContacts());
