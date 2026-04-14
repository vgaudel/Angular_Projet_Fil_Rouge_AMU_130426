import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-computed-signals',
  imports: [FormsModule],
  templateUrl: './computed-signals.html',
  styleUrl: './computed-signals.scss',
})
export class ComputedSignals {

  prixHT = signal(100);
  tva = signal(20);

  prixTTC = computed(() => this.prixHT() * (1 + this.tva()/100));

}
