import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginReactiveFormsComponent } from './login-reactive-forms.component';

describe('LoginReactiveFormsComponent', () => {
  let component: LoginReactiveFormsComponent;
  let fixture: ComponentFixture<LoginReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginReactiveFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
