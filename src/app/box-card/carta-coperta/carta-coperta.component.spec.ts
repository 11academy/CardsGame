import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaCopertaComponent } from './carta-coperta.component';

describe('CartaCopertaComponent', () => {
  let component: CartaCopertaComponent;
  let fixture: ComponentFixture<CartaCopertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaCopertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaCopertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
