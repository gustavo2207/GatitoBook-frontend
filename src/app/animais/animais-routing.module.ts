import { NewAnimalComponent } from './new-animal/new-animal.component';
import { AnimalsListResolver } from './lista-animais/animals-list.resolver';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';

const routes: Routes = [
  {
    path: '',
    component: ListaAnimaisComponent,
    resolve: {
      animals: AnimalsListResolver,
    },
  },
  { path: 'new', component: NewAnimalComponent },
  { path: ':animalId', component: AnimalDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimaisRoutingModule {}
