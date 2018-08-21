/* tslint:disable:no-unused-variable */
import {LoginComponent} from './login.component';
import {AuthService} from './auth.service';
import {TestBed, ComponentFixture} from '@angular/core/testing';

describe('Component: Login', () => {
  // Spy test
  // let component: LoginComponent;
  // let service: AuthService;
  // let spy: any;

  // beforeEach(() => {
  //   service = new AuthService();
  //   component = new LoginComponent(service);
  // });

  // afterEach(() => {
  //   service = null;
  //   component = null;
  // });


  // it('canLogin returns false when the user is not authenticated', () => {
  //   spy = spyOn(service, 'isAuthenticated').and.returnValue(false);
  //   expect(component.needsLogin()).toBeTruthy();
  //   expect(service.isAuthenticated).toHaveBeenCalled();

  // });

  // it('canLogin returns false when the user is not authenticated', () => {
  //   spy = spyOn(service, 'isAuthenticated').and.returnValue(true);
  //   expect(component.needsLogin()).toBeFalsy();
  //   expect(service.isAuthenticated).toHaveBeenCalled();
  // });
  // TestBed Test
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;

  beforeEach(() => {

    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [AuthService]
    });

    // create component and test fixture
    fixture = TestBed.createComponent(LoginComponent);

    // get test component from the fixture
    component = fixture.componentInstance;

    // UserService provided to the TestBed
    authService = TestBed.get(AuthService);

  });

  it('canLogin returns false when the user is not authenticated', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(false);
    expect(component.needsLogin()).toBeTruthy();
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });

  it('canLogin returns false when the user is not authenticated', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(true);
    expect(component.needsLogin()).toBeFalsy();
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });
});
