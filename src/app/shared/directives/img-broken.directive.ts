import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import e from 'express';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  //private fallbackUrl = 'assets/images/placeholder.jpg';
  private fallbackUrl = 'http://descargas.pntic.mec.es/cedec/atencion_diver/contenidos/nee/discapacidadauditiva/eror404.jpg';
  private fallbackAlt = 'Imagen no encontrada';
  private alreadyTried = false; // <-- bandera para evitar el bucle


  constructor(private elemHost: ElementRef, private renderer: Renderer2) {}
  @Input() customImg: string | boolean = false
  @HostListener('error')
  handlerError() {
    if (!this.alreadyTried) {
      this.renderer.setAttribute(this.elemHost.nativeElement, 'src', this.fallbackUrl);
      this.renderer.setAttribute(this.elemHost.nativeElement, 'alt', this.fallbackAlt);
      this.alreadyTried = true; // <-- solo lo hace una vez      
    } else {
      this.renderer.setAttribute(this.elemHost.nativeElement, 'src', '@assets/images/placeholder.jpg');
      this.renderer.setAttribute(this.elemHost.nativeElement, 'alt', this.fallbackAlt);
    }
  }
}

