export class User {
  first_name: string;
  last_name: string;
  email: string;
  residency: string;
  citizenship: string;

  getCitizenship() {
    return this.citizenship;
  }
}
