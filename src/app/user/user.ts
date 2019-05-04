export class User {
  name: string;
  rg?: string;
  cpf?: string;
  birthdayDate: Date;
  email: string;
  gender: string;
  registerDate: Date;
  profiles = [{ description: 'ROLE_USER' }];
}
