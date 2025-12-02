import { Component } from '@angular/core';

interface IUser {
  firstName: string,
  lastName: string,
  age: number
}

enum BankAccountEnum {
  EPARGNE = "EPARGNE",
  COURANT = "COURANT",
  SECONDAIRE = "SECONDAIRE"
}

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

  // Typeage de types simples
  title: string = "Bienvenue sur angular :) "
  myNumber: number = 0;
  myBoolean: boolean = true;

  // Typage avec deux types possibles
  myData: string | number = "test"

  // Typage sur une fonction et getter
  displayTitle(): string {
    return "Bienvenue sur angular :) "
  }

  get titleGetter(): string {
    return "Bienvenue sur angular (en passant par le getter) :) "
  }

  // Le typage avec les tableaux
  myTable: number[] = [1, 2, 3, 4, 5]
  myTable2: any[] = [1, 2, 3, "Riri", "Fifi", "Loulou"]

  myTable3: (string | number)[] = [1, 2, 3, "Riri", "Fifi", "Loulou"]

  // 4. Typages des objets avec interface
  user: { firstName: string, lastName: string, age: number } = {
    firstName: "John",
    lastName: "Doe",
    age: 30
  }

  user2: IUser = {
    firstName: "John",
    lastName: "Doe",
    age: 30
  }

  // 5. Enum
  bankAccount: "EPARGNE" | "COURANT" | "SECONDAIRE" = "EPARGNE"
  bankAccount2: BankAccountEnum = BankAccountEnum.EPARGNE
}
