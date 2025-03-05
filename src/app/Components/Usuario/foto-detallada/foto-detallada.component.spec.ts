import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoDetalladaComponent } from './foto-detallada.component';

describe('FotoDetalladaComponent', () => {
  let component: FotoDetalladaComponent;
  let fixture: ComponentFixture<FotoDetalladaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FotoDetalladaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotoDetalladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
