import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Animal } from '../animal';
import { AnimalsService } from '../animals.service';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.css'],
})
export class AnimalDetailComponent implements OnInit {
  animalId!: number;
  animal$!: Observable<Animal>;

  constructor(
    private animalsService: AnimalsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.animalId = this.activatedRoute.snapshot.params?.['animalId'];
    this.animal$ = this.animalsService.searchId(this.animalId);
  }

  like() {
    this.animalsService.likeAnimal(this.animalId).subscribe({
      next: (haveLike) => {
        if (haveLike) {
          this.animal$ = this.animalsService.searchId(this.animalId);
        }
      },
    });
  }

  delete() {
    this.animalsService.deleteAnimal(this.animalId).subscribe({
      next: () => {
        this.router.navigateByUrl('/animais');
      },
      error: (error) => console.log(error),
      complete: () => console.log('complete'),
    });
  }
}
