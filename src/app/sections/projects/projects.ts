import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-projects',
  styleUrl: './projects.scss',
  templateUrl: './projects.html',
})
export class Projects {
  projects = [
    {
      name: "Join", 
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, id possimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, id possimus.",
      img: "/assets/img/join.png"
    },
    {
      name: "El Pollo Loco", 
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, id possimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, id possimus.",
      img: "/assets/img/el-pollo-loco.png"
    },
    {
      name: "Pokedex", 
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, id possimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, id possimus.",
      img: "/assets/img/el-pollo-loco.png"
    },
  ];
}
