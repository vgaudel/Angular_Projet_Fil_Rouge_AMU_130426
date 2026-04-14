import { Component, input } from '@angular/core';
import { IProduit } from '../../interfaces/IProduit';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produit-enfant',
  imports: [CommonModule],
  templateUrl: './produit-enfant.html',
  styleUrl: './produit-enfant.scss',
})
export class ProduitEnfant {

  produit = input.required<IProduit>();

}
