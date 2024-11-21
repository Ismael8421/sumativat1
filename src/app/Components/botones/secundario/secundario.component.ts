import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

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
}
