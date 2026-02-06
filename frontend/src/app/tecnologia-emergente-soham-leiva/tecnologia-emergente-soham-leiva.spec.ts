import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiaEmergenteSohamLeiva } from './tecnologia-emergente-soham-leiva';

describe('TecnologiaEmergenteSohamLeiva', () => {
  let component: TecnologiaEmergenteSohamLeiva;
  let fixture: ComponentFixture<TecnologiaEmergenteSohamLeiva>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TecnologiaEmergenteSohamLeiva]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnologiaEmergenteSohamLeiva);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
