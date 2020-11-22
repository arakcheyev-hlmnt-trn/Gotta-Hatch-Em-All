import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes!: Hero[];

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  selectedHero!: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
    this.messageService.add(`Note that this construction do not work with ' or "`);
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe(_heroes =>
        this.heroes = _heroes
      );
  }
}
