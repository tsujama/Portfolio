import { Component } from '@angular/core';
import { Hero } from '../../sections/hero/hero';
import { About } from '../../sections/about/about';
import { Skills } from '../../sections/skills/skills';
import { Projects } from '../../sections/projects/projects';
import { Thoughts } from '../../sections/thoughts/thoughts';
import { Contact } from '../../sections/contact/contact';
import { Footer } from '../../layout/footer/footer';

@Component({
  imports: [Hero, About, Skills, Projects, Thoughts, Contact, Footer],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {}
