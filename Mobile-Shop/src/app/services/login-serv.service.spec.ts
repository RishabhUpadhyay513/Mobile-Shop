import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { LoginServService } from './login-serv.service';
import { of } from 'rxjs'
import { LoginDataInter } from 'src/app/ProductInter/login-data-inter';
describe('LoginServService', () => {
  let service: LoginServService;
  let httpClient: any;
  let loginData: any;
  let HttpTesting: HttpTestingController;

  beforeEach(() => {
    loginData = new LoginServService(httpClient);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })

      ;
    service = TestBed.inject(LoginServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should check login data service',()=>{
    service.sendLoginInformation(1);
    expect(service.sendLoginInformation).not.toEqual("")
  })


 // //testing for get method
  it('should return login data', () => {

   let mockResponse = [
     {
       firstName: "Manish",
       lastName: "Bhardwaj",
       password: 12345,
       email: "manishbhardwajgmailcom",
     }
   ]
    let response;
   spyOn(loginData, 'getLoginData').and.returnValue(of(mockResponse));
   service.getLoginData().subscribe((res)=>{
     response = res;
     expect(response).toEqual(mockResponse);
   })
  })


  // testing for post method
// it('should test UserApiHttpClient.Post', () => {
//   const testPost: any = [
//     {
      
//       firstName: 'Deepak Chaurasia',
//       lastName: 'deepakchaurasia2596',
//       email: 'deepakchauarsia2596@gmail.com',
//       password: 123456,
//     },
//   ];
//   service.sendLoginInformation(testPost).subscribe((addedPost:LoginDataInter) => {
//     expect(addedPost).toBe(testPost);
//   });
//   const req = HttpTesting.expectOne(service.baseurl);
//   expect(req.cancelled).toBeFalsy();
//   expect(req.request.responseType).toEqual('json');
//   req.flush(testPost);
//   HttpTesting.verify();
// });
});





