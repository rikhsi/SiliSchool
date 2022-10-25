import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[siliTitle]'
})
export class TitleDirective implements AfterViewInit{

  @Input() titleColor!: string;

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.elRef.nativeElement.style.color = this.titleColor;
  }

}
