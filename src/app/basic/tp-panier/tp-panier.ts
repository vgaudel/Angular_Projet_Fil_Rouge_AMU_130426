import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

// ---------------------------------------------------------
// CORRIGÉ — TP Mini Panier d'Achat (Signals + Pipes)
// ---------------------------------------------------------

@Component({
  selector: 'app-tp-panier',
  imports: [CommonModule],
  templateUrl: './tp-panier.html',
  styleUrl: './tp-panier.scss',
})
export class TpPanier {

  produits = [
    this.creerProduit('Clavier USB', 29.99),
    this.creerProduit('Souris sans fil', 19.50),
    this.creerProduit('Tapis de souris', 9.99),
  ];

  total = computed(() =>
    this.produits.reduce((sum, p) => sum + p.sousTotal(), 0)
  );

  tauxRemise = computed(() => (this.total() > 50 ? 0.10 : 0));

  totalApresRemise = computed(() => this.total() * (1 - this.tauxRemise()));

  incrementer(produit: ReturnType<typeof this.creerProduit>) {
    produit.quantite.update((q) => q + 1);
  }

  decrementer(produit: ReturnType<typeof this.creerProduit>) {
    produit.quantite.update((q) => Math.max(0, q - 1));
  }

  private creerProduit(nom: string, prix: number) {
    const quantite = signal(0);
    return {
      nom,
      prix,
      quantite,
      // computed : se recalcule dès que quantite() change
      sousTotal: computed(() => prix * quantite()),
    };
  }
}
