import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurMissonComponent } from './our-misson.component';

describe('OurMissonComponent', () => {
  let component: OurMissonComponent;
  let fixture: ComponentFixture<OurMissonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurMissonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurMissonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
