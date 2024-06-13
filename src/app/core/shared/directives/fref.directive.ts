import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { UploadFileService } from '@d-services/wms/upload-file.service';

@Directive({
  selector: '[fref]',
  standalone: true,
})
export class FrefDirective implements OnInit {
  @Input() defaultFref?: string;
  @Input('frefAttr') frefAttr: string = 'src';

  _ref?: string;

  get fref(): string | undefined {
    return this._ref;
  }

  @Input() set fref(value: string | undefined) {
    this._ref = value;
    if (this._ref) {
      this.uploadFileService
        .getPreSignedUrls([this._ref])
        .subscribe(({ data }) => {
          const url = data[this._ref!];
          this.renderer2.setAttribute(
            this.el.nativeElement,
            this.frefAttr,
            url,
          );
        });
    }
  }

  constructor(
    private el: ElementRef,
    private uploadFileService: UploadFileService,
    private renderer2: Renderer2,
  ) {}

  ngOnInit(): void {
    if (this.defaultFref) {
      this.renderer2.setAttribute(
        this.el.nativeElement,
        this.frefAttr,
        this.defaultFref,
      );
    }
  }
}
