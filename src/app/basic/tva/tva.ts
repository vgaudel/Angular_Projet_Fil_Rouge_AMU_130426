import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tva',
  imports: [FormsModule],
  templateUrl: './tva.html',
  styleUrl: './tva.scss',
})
export class Tva {

  calcul = {
    ht: 0,
    taux: 20,
    tva: 0,
    ttc: 0
  };

  listeTaux = [5, 10, 20];

  onCalculerTvaEtTtc() {
    this.calcul.tva = this.calcul.ht * this.calcul.taux / 100;
    this.calcul.ttc = Number(this.calcul.ht) + Number(this.calcul.tva);
  }


}
