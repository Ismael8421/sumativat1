import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimarioComponent } from './primario.component';

describe('PrimarioComponent', () => {
  let component: PrimarioComponent;
  let fixture: ComponentFixture<PrimarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
