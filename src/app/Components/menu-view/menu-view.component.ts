import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BotonesComponent } from '../botones/botones.component';
import { RegistroComponent } from '../registro/registro.component';
import { MenuLatComponent } from '../menu-lat/menu-lat.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-view',
  standalone: true,
  imports: [BotonesComponent, RegistroComponent, MenuLatComponent, CommonModule],
  templateUrl: './menu-view.component.html',
  styleUrl: './menu-view.component.css'
})
export class MenuViewComponent {
  //Dark Mode
  isDarkMode: boolean = false;

  onThemeChange(isDark: boolean) {
    this.isDarkMode = isDark;
  }

  //Boton Primario entrada  
  firstRecibAb: boolean = false;

  onFirstRecib(firstSend: boolean){
    this.firstRecibAb = firstSend;
  }
}
