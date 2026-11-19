import { Component, signal } from '@angular/core';
import { Home } from './pages/home/home';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { Contact } from './sections/contact/contact';

@Component({
  imports: [Home, Header, Contact, Footer],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Portfolio');
}
