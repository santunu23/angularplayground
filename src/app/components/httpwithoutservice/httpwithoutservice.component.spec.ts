import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpwithoutserviceComponent } from './httpwithoutservice.component';

describe('HttpwithoutserviceComponent', () => {
  let component: HttpwithoutserviceComponent;
  let fixture: ComponentFixture<HttpwithoutserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpwithoutserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpwithoutserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
