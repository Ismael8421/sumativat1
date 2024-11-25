import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-secundario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './secundario.component.html',
  styleUrl: './secundario.component.css'
})
export class SecundarioComponent {
  @Input() isDarkMode: boolean = false;

  onThemeChange(isDark: boolean) {
    this.isDarkMode = isDark;
  }

  //Boton secundario salida 
  private segPress: boolean = false;
  @Output() secPress = new EventEmitter<boolean>();

  isSecPress(){
    this.segPress = !this.segPress;
    this.secPress.emit(this.segPress);
  }
}
