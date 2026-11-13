import { Component } from '@angular/core';
import { Hero } from '../../sections/hero/hero';
import { About } from '../../sections/about/about';
import { Skills } from '../../sections/skills/skills';
import { Projects } from '../../sections/projects/projects';
import { Contact } from '../../sections/contact/contact';
import { Thoughts } from '../../sections/thoughts/thoughts';

@Component({
  imports: [Hero, About, Skills, Projects, Thoughts, Contact],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {}
