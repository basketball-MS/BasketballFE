import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GMHomeComponent } from './gm-home.component';

describe('GMHomeComponent', () => {
  let component: GMHomeComponent;
  let fixture: ComponentFixture<GMHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GMHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GMHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
