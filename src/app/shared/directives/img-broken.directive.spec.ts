import { ImgBrokenDirective } from './img-broken.directive';
import { ElementRef} from '@angular/core';

describe('ImgBrokenDirective', () => {
  it('should create an instance', () => {
    const elementRefMock = { nativeElement: document.createElement('img') } as ElementRef;
    const renderer2Mock = jasmine.createSpyObj('Renderer2', ['setAttribute']);
    const directive = new ImgBrokenDirective(elementRefMock, renderer2Mock);
    expect(directive).toBeTruthy();
  });
});