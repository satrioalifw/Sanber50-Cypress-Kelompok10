export default class RandomEmail {

    static generateRandomEmailAddress() {
      const randomNumber = Cypress._.random(5000);
      return `rifqi${randomNumber}@gmail.com`;
    }

  }