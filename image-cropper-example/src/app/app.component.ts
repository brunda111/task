import { Component, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ImageCroppedEvent, ImageTransform, } from 'ngx-image-cropper';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(-180deg)' })),
      transition('rotated => default', animate('1500ms ease-out')),
      transition('default => rotated', animate('400ms ease-in'))
    ])
  ]
})

export class AppComponent {
  ready: boolean = false;
  scale: number = 0;
  minScale: number = 0;
  @ViewChild(LyImageCropper, { static: true }) cropper: LyImageCropper;
  myConfig: ImgCropperConfig = {
    width: 150, // Default `250`
    height: 150, // Default `200`
    type: 'image/png', // Or you can also use `image/jpeg`
    output: {
      width: 200
    }
  };
  onCropped(e: ImgCropperEvent) {
    console.log('Cropped img: ', e);
  }

  onReady(e: ImgCropperEvent) {
    this.ready = true;
    console.log('Img ready for cropper', e);
  }

  onError(e: ImgCropperErrorEvent) {
    console.warn(`'${e.name}' is not a valid image`, e);
  }
}

function LyImageCropper(LyImageCropper: any, arg1: { static: boolean; }) {
  throw new Error('Function not implemented.');
}
