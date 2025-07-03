import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApresentacaoInicialComponent } from './apresentacao-inicial.component';

describe('ApresentacaoInicialComponent', () => {
  let component: ApresentacaoInicialComponent;
  let fixture: ComponentFixture<ApresentacaoInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApresentacaoInicialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApresentacaoInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
