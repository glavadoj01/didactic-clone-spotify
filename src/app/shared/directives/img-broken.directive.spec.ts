import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImgBrokenDirective } from './img-broken.directive';
import { Component, ElementRef} from '@angular/core';
import { By } from '@angular/platform-browser';


@Component({
  template: `<img class="testing-directive" appImgBroken src="invalid-url.jpg">`,
  imports: [ImgBrokenDirective]
})

class TestComponent {
  public srcMock = null
  constructor(public elementRef: ElementRef) {}
}

describe('ImgBrokenDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent, ImgBrokenDirective]
    })

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })


  it('should create an instance', () => {
    const elementRefMock = { nativeElement: document.createElement('img') } as ElementRef;
    const renderer2Mock = jasmine.createSpyObj('Renderer2', ['setAttribute']);
    const directive = new ImgBrokenDirective(elementRefMock, renderer2Mock);
    expect(directive).toBeTruthy();
  });

  it('🟡👉 Directiva ImgBroken ',()=>{
    expect(component).toBeTruthy();
  })

  it('🟡👉 ', (done: DoneFn) => {
    const beforeImgElement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement
    
    beforeImgElement.dispatchEvent(new Event('error'));

    setTimeout(() => {
      const afterImgElement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement

      expect(afterImgElement.src).toContain('http://descargas.pntic.mec.es/cedec/atencion_diver/contenidos/nee/discapacidadauditiva/eror404.jpg')
      done()
    }, 300);

    
    
  });
});