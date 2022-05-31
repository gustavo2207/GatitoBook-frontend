import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsPhotosGridComponent } from './animals-photos-grid.component';

describe('AnimalsPhotosGridComponent', () => {
  let component: AnimalsPhotosGridComponent;
  let fixture: ComponentFixture<AnimalsPhotosGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalsPhotosGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsPhotosGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
