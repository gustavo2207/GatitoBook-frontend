import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css'],
})
export class AnimalComponent {
  private originalUrl = '';

  @Input() description: string = '';
  @Input() set url(url: string) {
    if (url.startsWith('data')) {
      this.originalUrl = url;
    } else {
      this.originalUrl = `${API}/imgs/${url}`;
    }
  }

  get url(): string {
    return this.originalUrl;
  }

  constructor() {}
}
