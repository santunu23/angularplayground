import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineappComponent } from './offlineapp.component';

describe('OfflineappComponent', () => {
  let component: OfflineappComponent;
  let fixture: ComponentFixture<OfflineappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfflineappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflineappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
