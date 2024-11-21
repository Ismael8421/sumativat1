import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuViewComponent } from './Components/menu-view/menu-view.component';
import { MenuLatComponent } from './Components/menu-lat/menu-lat.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
