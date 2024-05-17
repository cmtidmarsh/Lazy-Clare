import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/NavBar/navbar.component';
import { HeaderComponent } from './containers/Header/Header.component';
import { MainContentComponent } from './containers/Main Content/Main-Content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    HeaderComponent,
    MainContentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'lazy-clare';
}
