export class User {
  name: string;
  rg?: string;
  cpf?: string;
  birthdayDate: string;
  email: string;
  gender: string;
  registerDate: Date;
  profiles: [{ description: string }];
}
