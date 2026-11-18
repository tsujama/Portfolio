import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [NgStyle],
  selector: 'app-thoughts',
  styleUrl: './thoughts.scss',
  templateUrl: './thoughts.html',
})
export class Thoughts {
  thoughts = [
      {
        text: "Michelle is a very dedicated developer....",
        name: "Max Mustermann",
        position: "Frontend Developer",
        linkedin: "https://linkedin.com/",
        backgroundImg: "/Design material/03_Stickers/02_Testimonials/Color option 2/A.png",
        rotation: "-3deg"
    },
    {
        text: "Working with Michelle was a great experience...",
        name: "Anna Musterfrau",
        position: "UX Designer",
        linkedin: "https://linkedin.com/",
        backgroundImg: "/Design material/03_Stickers/02_Testimonials/Color option 2/B.png",
        rotation: "0deg"
    },
    {
        text: "Michelle always brings great ideas...",
        name: "John Doe",
        position: "Project Manager",
        linkedin: "https://linkedin.com/",
        backgroundImg: "/Design material/03_Stickers/02_Testimonials/Color option 2/A.png",
        rotation: "3deg"
    },
  ];
}
