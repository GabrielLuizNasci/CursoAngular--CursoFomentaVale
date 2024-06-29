import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarPessoasComponent } from './criar-pessoas.component';

describe('CriarPessoasComponent', () => {
  let component: CriarPessoasComponent;
  let fixture: ComponentFixture<CriarPessoasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarPessoasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CriarPessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
