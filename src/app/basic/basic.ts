import { Component } from '@angular/core';
import { Couleurs } from './couleurs/couleurs';
import { Calculatrice } from './calculatrice/calculatrice';
import { FormsModule } from '@angular/forms';
import { Produits } from './produits/produits';
import { Tva } from "./tva/tva";

@Component({
  selector: 'app-basic',
  imports: [Couleurs, Calculatrice, FormsModule, Produits, Tva],
  templateUrl: './basic.html',
  styleUrl: './basic.scss',
})
export class Basic {


  message = "Bonjour l'AMU !";
  couleurMessage= "red";

  username : string = "";

  onAction(): void{
     this.message = "Bonjour " + this.username;
     this.couleurMessage = this.username.length>5 ? "green":"blue";

    this.username = this.username + " message supplémentaire";
  }

  

}
