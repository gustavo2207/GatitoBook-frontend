import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { UserService } from 'src/app/autenticacao/user/user.service';
import { Animals } from '../animal';
import { AnimalsService } from '../animals.service';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css'],
})
export class ListaAnimaisComponent implements OnInit {
  animals!: Animals;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (param) =>
        (this.animals = this.activatedRoute.snapshot.data['animals']),
    });
  }
}
