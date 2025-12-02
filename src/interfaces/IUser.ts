import { BankAccountEnum } from "../enums/BankAccountEnum";

export interface IUser {
  id: number,
  firstName: string,
  lastName: string,
  age: number,
  bankAccount: BankAccountEnum
}
