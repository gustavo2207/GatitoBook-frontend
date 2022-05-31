import { Component, Input, OnInit } from '@angular/core';
import { Animals } from '../animal';

@Component({
  selector: 'app-animals-photos-grid',
  templateUrl: './animals-photos-grid.component.html',
  styleUrls: ['./animals-photos-grid.component.css'],
})
export class AnimalsPhotosGridComponent implements OnInit {
  @Input() animals!: Animals;

  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}
}
