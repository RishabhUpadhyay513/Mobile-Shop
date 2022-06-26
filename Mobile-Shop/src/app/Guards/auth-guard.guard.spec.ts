import { TestBed } from '@angular/core/testing';

import { AuthGuardGuard } from './auth-guard.guard';

describe('AuthGuardGuard', () => {
  let guard: AuthGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[{provide:AuthGuardGuard}]
    });
    guard = TestBed.inject(AuthGuardGuard);
    
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
  it('shoul check canActivate guard',()=>{
    guard.canActivate();
    expect(guard).toBeTruthy();
  });
  it('should check guard',()=>{
    guard.canActivate();
    expect(guard.status).toBe(false)
  });
  it('be able to hit route when user is logged in', () => {
    let result = 'true';
    spyOn(window.localStorage, 'getItem').and.returnValue(result);
    expect(guard.canActivate()).toBe(true);
  });
});
