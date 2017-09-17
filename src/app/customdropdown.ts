import {
  Directive,
  HostListener,
  HostBinding
} from '@angular/core';
@Directive({
  selector: '[appcustomdropdown]'
})
export class CustomdropdownDirective {
  constructor() {}
  @HostBinding('class.open') get opened() {
    return this.isOpen;
  }
  @HostListener('click') open() {
    this.isOpen = true;
  }
  @HostListener('mouseleave') close() {
    this.isOpen = false;
  }
  private isOpen = false;
}
