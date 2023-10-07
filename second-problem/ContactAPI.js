export class ContactAPI {
  // ...
}
class ContactAPI {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async getContacts(params = {}) {
    // ...
  }

  // ...
}
const contactAPI = new ContactAPI('https://contact.mediusware.com/api');
const contacts = await contactAPI.getContacts();
