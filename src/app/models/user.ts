export class User {
  // classes  enforce behavior around how an object can be initialized
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    email: string;
    role: string;

    // ctrl + shift + p > TypeScript Constructor Generator
    constructor(
      id: number,
      firstName: string,
      lastName: string,
      username: string,
      password: string,
      email: string,
      role: string
  ) {
      this.id = id
      this.firstName = firstName
      this.lastName = lastName
      this.username = username
      this.password = password
      this.email = email
      this.role = role
    }
  }
