import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { UploadFileService } from '@d-services/wms/upload-file.service';

@Directive({
  selector: '[download]',
  standalone: true,
})
export class DownloadDirective {
  @Input('download') path?: string;

  @HostListener('click', ['$event']) onClick(e: PointerEvent) {
    e.preventDefault();
    if (this.path) {
      this.uploadFileService
        .getPreSignedUrls([this.path])
        .subscribe(({ data }) => {
          window.open(data[this.path!], '_blank');
        });
    }
  }

  @HostListener('mouseover') onHover(e: PointerEvent) {
    this.el.nativeElement.style.cursor = 'pointer';
  }

  constructor(
    private el: ElementRef,
    private uploadFileService: UploadFileService,
  ) {
    this.el.nativeElement.style.textDecoration = 'underline';
  }
}
