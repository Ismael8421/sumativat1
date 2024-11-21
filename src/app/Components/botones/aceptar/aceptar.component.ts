import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-aceptar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aceptar.component.html',
  styleUrl: './aceptar.component.css'
})
export class AceptarComponent {
  @Output() clickAcept = new EventEmitter<boolean>();

  private btnAceptPress: boolean = false;

  aceptarBtn(){
    this.btnAceptPress = !this.btnAceptPress;
    this.clickAcept.emit(this.btnAceptPress);
  }
}
