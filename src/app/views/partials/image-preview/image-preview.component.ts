import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ModalService } from '../../../core/utilities/modal';

@Component({
  selector: 'app-image-preview',
  standalone: false,
  templateUrl: './image-preview.component.html',
  styleUrl: './image-preview.component.scss'
})
export class ImagePreviewComponent {
  @Input() imageUrl: string = ''; // Image URL to load
  @Input() width: string = '100%'; // Dynamic width
  @Input() height: string = 'auto'; // Dynamic height
  @Input() isOverlay: boolean = false; // Show overlay if true
  @Input() showModal: boolean = false; // Open image in modal if true

  isLoading: boolean = true; // Loading state
  modalImage: string = '';

  constructor(private modal: ModalService) { }

  ngOnInit() {
    this.loadImage();
  }

  // Method to simulate image loading
  loadImage() {
    const img = new Image();
    img.src = this.imageUrl;
    img.onload = () => {
      this.isLoading = false; // Image loaded, hide skeleton
    };
    img.onerror = () => {
      console.error('Error loading image');
    };
  }

  // Method to handle click if modal is enabled
  onImageClick() {
    if (this.showModal) {
      this.modalImage = this.imageUrl;
      this.modal.open('imagePreviewModal');
    }
  }

  onCloseClick() {
    if (this.showModal) {
      this.modalImage = '';
      this.modal.close('imagePreviewModal');
    }
  }

  getImageUrl() {
    return this.modalImage;
  }
}
