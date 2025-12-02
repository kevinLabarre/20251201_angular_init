import { Component } from '@angular/core';
import { IUser } from '../../interfaces/IUser';
import { BankAccountEnum } from '../../enums/BankAccountEnum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-angular-fondamentaux',
  imports: [CommonModule],
  templateUrl: './angular-fondamentaux.html',
  styleUrl: './angular-fondamentaux.css',
})
export class AngularFondamentaux {

  displayText: boolean = true

  user?: { firstName: string, lastName: string } = {
    firstName: "John",
    lastName: "Doe"
  }

  // user: { firstName: string, lastName: string } | undefined
  // user?: { firstName: string, lastName: string }


  fruits: string[] = ["apple", "banana", "cherry", "durian", "elderberry", "apple"];

  users: IUser[] = [
    {
      id: 1,
      firstName: "Jean",
      lastName: "Dupont",
      age: 35,
      bankAccount: BankAccountEnum.COURANT
    },
    {
      id: 2,
      firstName: "Marie",
      lastName: "Martin",
      age: 28,
      bankAccount: BankAccountEnum.COURANT
    },
    {
      id: 3,
      firstName: "Pierre",
      lastName: "Durand",
      age: 42,
      bankAccount: BankAccountEnum.EPARGNE
    },
    {
      id: 4,
      firstName: "Sophie",
      lastName: "Lefebvre",
      age: 31,
      bankAccount: BankAccountEnum.EPARGNE
    },
    {
      id: 5,
      firstName: "Thomas",
      lastName: "Bernard",
      age: 45,
      bankAccount: BankAccountEnum.SECONDAIRE
    }
  ];


}
