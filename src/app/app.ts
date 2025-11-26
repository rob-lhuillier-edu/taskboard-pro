import { Component, signal } from '@angular/core';
import { Home } from './home/home'
import { About } from './about/about'
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, About, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  protected readonly title = signal('TaskBoard_Pro');
}
