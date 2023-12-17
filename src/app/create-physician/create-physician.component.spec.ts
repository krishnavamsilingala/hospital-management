import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePhysicianComponent } from './create-physician.component';

describe('CreatePhysicianComponent', () => {
  let component: CreatePhysicianComponent;
  let fixture: ComponentFixture<CreatePhysicianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatePhysicianComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatePhysicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
