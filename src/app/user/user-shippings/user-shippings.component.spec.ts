import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserShippingsComponent } from './user-shippings.component';

describe('UserShippingsComponent', () => {
  let component: UserShippingsComponent;
  let fixture: ComponentFixture<UserShippingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserShippingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserShippingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
