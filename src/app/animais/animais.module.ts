import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimaisRoutingModule } from './animais-routing.module';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';
import { AnimalComponent } from './animal/animal.component';
import { CardModule } from '../components/card/card.module';
import { AnimalsPhotosGridComponent } from './animals-photos-grid/animals-photos-grid.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { CommentsComponent } from './animal-detail/comments/comments.component';
import { NewAnimalComponent } from './new-animal/new-animal.component';

@NgModule({
  declarations: [
    ListaAnimaisComponent,
    AnimalComponent,
    AnimalsPhotosGridComponent,
    AnimalDetailComponent,
    CommentsComponent,
    NewAnimalComponent,
  ],
  imports: [CommonModule, AnimaisRoutingModule, CardModule, SharedModule],
})
export class AnimaisModule {}
