import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePhysicianComponent } from './update-physician.component';

describe('UpdatePhysicianComponent', () => {
  let component: UpdatePhysicianComponent;
  let fixture: ComponentFixture<UpdatePhysicianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatePhysicianComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatePhysicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
