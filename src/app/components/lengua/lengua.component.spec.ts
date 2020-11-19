import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenguaComponent } from './lengua.component';

describe('LenguaComponent', () => {
  let component: LenguaComponent;
  let fixture: ComponentFixture<LenguaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LenguaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LenguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
