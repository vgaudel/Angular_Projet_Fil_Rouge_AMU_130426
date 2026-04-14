import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-couleurs',
  imports: [FormsModule],
  templateUrl: './couleurs.html',
  styleUrl: './couleurs.scss',
})
export class Couleurs {

  listeCouleurs : string[] = ["blue", "red", "pink", "green", "yellow"];
  couleurChoisie : string = "black";

  message : string = "quelques valeurs au carré";
  values :number[] = [1,2,4,10,25];

  nouvelleValeur : number=0;

  onAjoutNouvelleValeur(){
    this.values.push(this.nouvelleValeur);
  }

  onSupprimerLigne(index : number){
    this.values.splice(index,1);
  }

}
