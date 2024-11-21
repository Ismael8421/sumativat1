import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.css'
})
export class ThemeComponent {
  thisTheme: boolean = false;
  @Output() themeChange = new EventEmitter<boolean>();
  private isDarkTheme: boolean = false;

  toggleTheme() {
    this.thisTheme = !this.thisTheme;
    this.isDarkTheme = !this.isDarkTheme;
    this.themeChange.emit(this.isDarkTheme);
  }
}