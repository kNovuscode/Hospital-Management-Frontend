import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditStaffComponent } from './add-edit-staff.component';

describe('AddEditStaffComponent', () => {
  let component: AddEditStaffComponent;
  let fixture: ComponentFixture<AddEditStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditStaffComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
