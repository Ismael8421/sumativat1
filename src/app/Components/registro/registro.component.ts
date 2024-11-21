import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CorreoComponent } from './correo/correo.component';
import { ContrasenaComponent } from './contrasena/contrasena.component';
import { TextoComponent } from './texto/texto.component';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CorreoComponent, ContrasenaComponent, TextoComponent],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  @Input() isDarkMode: boolean = false;

  @Output() themeChange = new EventEmitter<boolean>();

  onThemeChange(isDark: boolean) {
    this.themeChange.emit(isDark); // Reenvía al abuelo
  }
}
