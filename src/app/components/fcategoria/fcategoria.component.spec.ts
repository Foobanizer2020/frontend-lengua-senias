import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FcategoriaComponent } from './fcategoria.component';

describe('FcategoriaComponent', () => {
  let component: FcategoriaComponent;
  let fixture: ComponentFixture<FcategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FcategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FcategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
