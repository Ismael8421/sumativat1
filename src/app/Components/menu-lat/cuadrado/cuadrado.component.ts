import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cuadrado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cuadrado.component.html',
  styleUrl: './cuadrado.component.css'
})
export class CuadradoComponent{
  aceptPress: boolean = false;

  btnPress(isPress: boolean){
    this.aceptPress = isPress;
  }
  //Boton Primario entrada
  @Input() isFirstSend : boolean = false;
}
