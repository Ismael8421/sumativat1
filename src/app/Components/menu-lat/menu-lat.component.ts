import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CuadradoComponent } from './cuadrado/cuadrado.component';

@Component({
  selector: 'app-menu-lat',
  standalone: true,
  imports: [CuadradoComponent],
  templateUrl: './menu-lat.component.html',
  styleUrl: './menu-lat.component.css'
})
export class MenuLatComponent {
  //Dark Mode
  @Input() isDarkMode: boolean = false;
  
  @Output() themeChange = new EventEmitter<boolean>();

  onThemeChange(isDark: boolean) {
    this.themeChange.emit(isDark);
  }

  //Boton Primario entrada
  @Input() firstValue: boolean = false;

  //Boton Primario salida
}
