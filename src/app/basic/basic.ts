import { Component } from '@angular/core';
import { Couleurs } from './couleurs/couleurs';
import { Calculatrice } from './calculatrice/calculatrice';
import { FormsModule } from '@angular/forms';
import { Produits } from './produits/produits';
import { Tva } from "./tva/tva";
import { Signals } from './signals/signals';
import { ComputedSignals } from './computed-signals/computed-signals';
import { Pipes } from './pipes/pipes';
import { ProduitsParent } from './produits-parent/produits-parent';
import { TpPanier } from './tp-panier/tp-panier';

@Component({
  selector: 'app-basic',
  imports: [Couleurs, Calculatrice, FormsModule, Produits, Tva, Signals, ComputedSignals, Pipes, ProduitsParent, TpPanier],
  templateUrl: './basic.html',
  styleUrl: './basic.scss',
})
export class Basic {


  message = "Bonjour l'AMU !";
  couleurMessage = "red";

  username: string = "";

  composants: string[] = ['calculatrice', 
    'couleurs', 
    'produits', 
    'tva', 
    'signals', 
    'computed-signals', 
    'pipes', 
    'produits-parent',
    'tp-panier'];
  selectedComponent: string = this.composants[6];

  onAction(): void {
    this.message = "Bonjour " + this.username;
    this.couleurMessage = this.username.length > 5 ? "green" : "blue";

    this.username = this.username + " message supplémentaire";
  }



}
