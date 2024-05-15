import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  try {
    return JSON.parse(await fs.readFile(PATH_DB));
  } catch (error) {
    console.log(error);
  }
};

class MyContacts {
  constructor() {
    this.contacts = [];
    this.quantity = 0;
  }
  set setContacts(contacts) {
    this.contacts = [...this.contacts, ...contacts];
  }

  get printContacts() {
    console.log('Contacts stored in this instance:', this.contacts);
  }

  get getContacts() {
    return this.contacts;
  }

  updateQuantity() {
    this.quantity = this.getContacts.length;
  }
}

const instance = new MyContacts();
console.log('Initial instance = ', instance);

instance.setContacts = await getAllContacts();
console.log('Instance after setting contacts = ', instance);

console.log('Quantity before update = ', instance.quantity);
instance.updateQuantity();
console.log('Quantity after update = ', instance.quantity);

instance.printContacts;

const canBeUsed = instance.getContacts;
console.log('Contacts from instance stored inside a variable:', canBeUsed);
