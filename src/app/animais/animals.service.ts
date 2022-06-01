import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Animal, Animals } from './animal';

const API = environment.apiURL;
const NOT_MODIFIED = '304';

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  constructor(private httpClient: HttpClient) {}

  userList(userName: string): Observable<Animals> {
    return this.httpClient.get<Animals>(`${API}/${userName}/photos`);
  }

  searchId(id: number): Observable<Animal> {
    return this.httpClient.get<Animal>(`${API}/photos/${id}`);
  }

  deleteAnimal(id: number): Observable<Animal> {
    return this.httpClient.delete<Animal>(`${API}/photos/${id}`);
  }

  likeAnimal(id: number): Observable<boolean> {
    return this.httpClient
      .post(`${API}/photos/${id}/like`, {}, { observe: 'response' })
      .pipe(
        map(() => true),
        catchError((error) => {
          return error.status === NOT_MODIFIED
            ? of(false)
            : throwError(() => new Error());
        })
      );
  }

  upload(description: string, allowComment: boolean, file: File) {
    const formData: FormData = new FormData();
    formData.append('description', description);
    formData.append('allowComments', allowComment ? 'true' : 'false');
    formData.append('imageFile', file);

    return this.httpClient.post(`${API}/photos/upload`, formData, {
      observe: 'events',
      reportProgress: true,
    });
  }
}
