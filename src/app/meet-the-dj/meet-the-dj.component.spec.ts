import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetTheDjComponent } from './meet-the-dj.component';

describe('MeetTheDjComponent', () => {
  let component: MeetTheDjComponent;
  let fixture: ComponentFixture<MeetTheDjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetTheDjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetTheDjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
