import {Directive, HostListener, ElementRef, Input} from '@angular/core';
import {Renderer} from "@angular/core"

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  color: string;
  renderer: Renderer;
  el: HTMLElement;

  @Input() appHighlight: string;

  constructor(el: ElementRef, renderer: Renderer) {
    this.color = "black";
    this.el = el.nativeElement;
  }

  setColor(color: string) {
    this.color = color;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.change(this.appHighlight || this.color);
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.change(null);
  }

  change(color: string) {
    this.el.style.backgroundColor = color;
  }
}
