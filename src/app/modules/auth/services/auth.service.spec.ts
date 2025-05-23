import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import user from '@app/data/user.json';
import { of } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;
  let mockUser: any = user;
  let httpClientSpy: { post: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);

    service = new AuthService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it ('🟡🟡👉👉 Debe retornar un objeto con $data y $tokenSession', (done: DoneFn) => {
    const user: any = mockUser.userOk
    const mockResponse = {
      data:{},
      tokkenSession:'0x0x0x0x0x0x0x0x0x'
    }

    httpClientSpy.post.and.returnValue(of(mockResponse))

    service.sendsCredentials(user.email, user.password)
      .subscribe(responseApi => {
        const getProperties = Object.keys(responseApi);
        expect(getProperties).toContain('data');
        expect(getProperties).toContain('tokkenSession');
        done();
      }
    )
  })

});
