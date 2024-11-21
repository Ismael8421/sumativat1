import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { AceptarComponent } from './aceptar/aceptar.component';
import { CancelarComponent } from './cancelar/cancelar.component';
import { PrimarioComponent } from './primario/primario.component';
import { SecundarioComponent } from './secundario/secundario.component';
import { ThemeComponent } from './theme/theme.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-botones',
  standalone: true,
  imports: [AceptarComponent, CancelarComponent, PrimarioComponent, SecundarioComponent, ThemeComponent, CommonModule],
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.css'
})
export class BotonesComponent {
  //Dark Mode
  @Output() themeChange = new EventEmitter<boolean>();
  @Input() isDarkMode: boolean = false;
  onThemeChange(isDark: boolean) {
    this.themeChange.emit(isDark);
  }

  //Boton Primario entrada
  firstRecib: boolean = false;

  isFirstRecib(firstPress: boolean){
    this.firstRecib = firstPress;
    this.isfirstSend();
  }

  //Boton Primario salida

  @Output() firstSendA = new EventEmitter<boolean>();

  isfirstSend(){
    this.firstSendA.emit(this.firstRecib);
  }  
}
