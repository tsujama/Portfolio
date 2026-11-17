import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-skills',
  styleUrl: './skills.scss',
  templateUrl: './skills.html',
})

export class Skills {
  techStack = [
    {
      name: "HTML", img: "/assets/icons/HTML.png"
    },
    {
      name: "CSS", img: "/assets/icons/CSS.png"
    },
    {
      name: "JS", img: "/assets/icons/JS.png"
    },
    {
      name: "TS", img: "/assets/icons/TS.png"
    },
    {
      name: "Angular", img: "/assets/icons/Angular.png"
    },
    {
      name: "Supabase", img: "/assets/icons/Supabase.png"
    },
    {
      name: "Git", img: "/assets/icons/Git.png"
    },
    {
      name: "REST-API", img: "/assets/icons/Rest-Api.png"
    },
    {
      name: "Scrum", img: "/assets/icons/Scrum.png"
    },
    {
      name: "Material Design", img: "/assets/icons/Material Design.png"
    }
  ];
}
