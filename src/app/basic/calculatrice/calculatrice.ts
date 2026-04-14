import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculatrice',
  imports: [FormsModule],
  templateUrl: './calculatrice.html',
  styleUrl: './calculatrice.scss',
})
export class Calculatrice {


  a : number = 0;
  b : number = 0;
  res : number = 0;
  montrerHistorique : boolean = false;
  historiqueCalculs : string[] = [];

  onCalculer(operateur: string){
    switch(operateur){
      case "+" :
        this.res = this.a + this.b; break;
      case "-" :
        this.res = this.a - this.b; break;
      case "*" :    
        this.res = this.a * this.b; break;
      default :
      this.res = 0;    
    }

    this.historiqueCalculs.push(`${this.a} ${operateur} ${this.b} = ${this.res} `)
  }

  x:number = 0;
  y:number = 0;

  onMouseMove(evt: MouseEvent) {
    let currentDiv : HTMLElement = <HTMLElement> evt.target;
    this.x = evt.pageX - currentDiv.offsetLeft;
    this.y = evt.pageY - currentDiv.offsetTop;
  }

  onMouseLeave(evt : MouseEvent){
    this.x = 0;
    this.y = 0;
  }
}
