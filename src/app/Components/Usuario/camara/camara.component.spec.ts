import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamaraComponent } from './camara.component';

describe('CamaraComponent', () => {
  let component: CamaraComponent;
  let fixture: ComponentFixture<CamaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CamaraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
