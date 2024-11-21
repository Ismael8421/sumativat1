import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, input } from '@angular/core';

@Component({
  selector: 'app-primario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './primario.component.html',
  styleUrl: './primario.component.css'
})
export class PrimarioComponent {
  //Boton Primario salida
  private primPress: boolean = false;
  @Output() firstPress = new EventEmitter<boolean>();

  isPress(){
    this.primPress = !this.primPress;
    this.firstPress.emit(this.primPress);
  }

  //Dark Mode
  isDarkMode: boolean = false;

  onThemeChange(isDark: boolean) {
    this.isDarkMode = isDark;
  }
}
