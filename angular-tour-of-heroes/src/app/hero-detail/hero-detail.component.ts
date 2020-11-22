import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { Location } from '@angular/common'; // <- by defaults it adds some 
// strange location which do not have back() function

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero | undefined;

  constructor(
    private messageService: MessageService,
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.heroService.getHero(id)
      .subscribe(_hero => {
        this.hero = _hero;
        this.messageService.add(`HeroesComponent: Selected hero id=${_hero?_hero.id:""}`);
        this.messageService.add(`Note that this construction do not work with ' or "`);
      });
  }

  goBack() {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero!)
      .subscribe(() => this.goBack());
  }
}
