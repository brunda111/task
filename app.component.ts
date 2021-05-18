import { Component } from '@angular/core';
import { ImageCroppedEvent, ImageTransform } from 'ngx-image-cropper';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
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
    title = 'ngImageCrop';
    state: string = 'default';

    imageChangedEvent: any = '';
    croppedImage: any = '';
    canvasRotation = 0;
    rotation = 0;
    scale = 1;
    showCropper = false;
    containWithinAspectRatio = false;
    transform: ImageTransform = {};


    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }
    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
    }
    imageLoaded() {
        this.showCropper = true;
        console.log('Image loaded');
    }
    cropperReady() {
        console.log('Cropper ready',);
    }
    loadImageFailed() {
        console.log('Load failed');

    }




}
