import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimaisRoutingModule } from './animais-routing.module';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';
import { AnimalComponent } from './animal/animal.component';
import { CardModule } from '../components/card/card.module';
import { AnimalsPhotosGridComponent } from './animals-photos-grid/animals-photos-grid.component';

@NgModule({
  declarations: [ListaAnimaisComponent, AnimalComponent, AnimalsPhotosGridComponent],
  imports: [CommonModule, AnimaisRoutingModule, CardModule],
})
export class AnimaisModule {}
