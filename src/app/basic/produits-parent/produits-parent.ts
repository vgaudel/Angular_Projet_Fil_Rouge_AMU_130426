import { Component } from '@angular/core';
import { IProduit } from '../../interfaces/IProduit';
import { ProduitEnfant } from '../produit-enfant/produit-enfant';

@Component({
  selector: 'app-produits-parent',
  imports: [ProduitEnfant],
  templateUrl: './produits-parent.html',
  styleUrl: './produits-parent.scss',
})
export class ProduitsParent {

  tousLesProduits: IProduit[] = [
    { ref: 'p1', label: 'iPhone 16', prix: 999, categorie: 'smartphone' },
    { ref: 'p2', label: 'Samsung Galaxy S25', prix: 899, categorie: 'smartphone' },
    { ref: 'p3', label: 'Google Pixel 9', prix: 799, categorie: 'smartphone' },
    { ref: 'p4', label: 'MacBook Air M4', prix: 1299, categorie: 'laptop' },
    { ref: 'p5', label: 'Dell XPS 15', prix: 1499, categorie: 'laptop' },
    { ref: 'p6', label: 'Lenovo ThinkPad X1', prix: 1399, categorie: 'laptop' },
    { ref: 'p7', label: 'AirPods Pro 3', prix: 279, categorie: 'accessoire' },
    { ref: 'p8', label: 'Logitech MX Master 4', prix: 119, categorie: 'accessoire' },
    { ref: 'p9', label: 'Clavier Keychron K8', prix: 89, categorie: 'accessoire' },
  ];

}
