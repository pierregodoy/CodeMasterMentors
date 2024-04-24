import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementManagementComponent } from './advertisement-management.component';

describe('AdvertisementManagementComponent', () => {
  let component: AdvertisementManagementComponent;
  let fixture: ComponentFixture<AdvertisementManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvertisementManagementComponent]
    });
    fixture = TestBed.createComponent(AdvertisementManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
