import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisEstadoComponent } from './pais-estado.component';

describe('PaisEstadoComponent', () => {
  let component: PaisEstadoComponent;
  let fixture: ComponentFixture<PaisEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisEstadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
