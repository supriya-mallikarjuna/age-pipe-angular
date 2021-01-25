import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeComponent } from './age.component';
import { AgePipe } from './age.pipe';

describe('AgeComponent', () => {
  let component: AgeComponent;
  let fixture: ComponentFixture<AgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeComponent ,AgePipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
