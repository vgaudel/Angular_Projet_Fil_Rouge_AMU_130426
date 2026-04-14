import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import localeFr from '@angular/common/locales/fr';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule],
  templateUrl: './pipes.html',
  styleUrl: './pipes.scss',
})
export class Pipes {


  // Pipes sur les chaînes de caractères
  nom = "John Legend BAGUETTE";

  // pipes sur les nombres
  prix = 1234.567;
  pourcentage = 0.8542;

  // pipes sur les dates
  maintenant =new Date();

  // Pipes sur les objets / JSON

  utilisateur = {
    prenom : 'Marie',
    nom : 'Curie',
    age : 66,
    prix_nobel : ['Physique','Chimie']
  }

}