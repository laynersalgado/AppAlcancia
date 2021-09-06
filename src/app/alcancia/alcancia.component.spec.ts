import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcanciaComponent } from './alcancia.component';

describe('AlcanciaComponent', () => {
  let component: AlcanciaComponent;
  let fixture: ComponentFixture<AlcanciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlcanciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlcanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
