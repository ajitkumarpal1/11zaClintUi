import { Component, ViewChild, ElementRef } from '@angular/core';
import { Doc, ImageSets } from './file-upload.models';
import { Helper } from '../../../../../core/utilities/helper';
import { swalHelper } from '../../../../../core/constants/swal-helper';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  public filePreviews: { url: string | ArrayBuffer | null, file: File, name: string, isImage: boolean }[] = [];
  public isDragging = false;


  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef;
  // Handle file selection from input and drag & drop
  onFileSelected(event: any): void {
    const files = event.target.files || event.dataTransfer.files;
    this.handleFiles(files);
  }

  constructor(private helpers: Helper) {
    this.imageSets.docs.forEach((element: Doc) => {
      element.file_actual_url = 'https://engees11zamedia.11za.in/internal-11za/' + element.file_url;
    })
  }


  copyToClipboard(item: Doc): void {
    if (item.file_actual_url) {
      item.isCopied = true;
      this.helpers.copy2clipboard(item.file_actual_url);

      setTimeout(() => {
        item.isCopied = false;
      }, 3000);
    }
  }

  // File handling and preview generation
  handleFiles(files: FileList): void {
    if (Array.from(files).length == 0) {
      swalHelper.showToast('Please select a file to upload', 'warning');
    } else {
      Array.from(files).forEach((file: File) => this.previewFile(file));
    }
  }

  clearDropZone(): void {
    this.filePreviews = [];
    this.fileInput.nativeElement.value = '';
  }

  previewFile(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.filePreviews.push({
        url: reader.result,
        file: file,
        name: file.name,
        isImage: file.type.startsWith('image/')
      });
    };
    reader.readAsDataURL(file);
    this.fileInput.nativeElement.value = '';
  }

  // Drag & Drop behavior
  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = true;
    console.log(this.isDragging);
  }

  onDragLeave(): void {
    this.isDragging = false;
  }

  removePreview(index: number): void {
    this.filePreviews.splice(index, 1);
    this.fileInput.nativeElement.value = '';
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = false;
    this.onFileSelected(event);
  }

  getFileIcon(fileType: string): string {
    if (fileType.includes('image')) {
      return 'ph-duotone ph-image';
    }
    if (fileType.includes('video')) {
      return 'ph-duotone ph-video';
    }
    if (fileType.includes('audio')) {
      return 'ph-duotone ph-music-note';
    }
    if (fileType.includes('pdf')) {
      return 'ph-duotone ph-file-pdf';
    }
    if (fileType.includes('text')) {
      return 'ph-duotone ph-file-text';
    }
    if (fileType.includes('code')) {
      return 'ph-duotone ph-file-code';
    }
    return 'ph-duotone ph-file';
  }

  imageSets: ImageSets = {
    "docs": [
      {
        "_id": "6708ef439294fad2b7ceb350",
        "uploadedBy": "667fad3a81722726f2dce419",
        "file_name": "Autoreply-1728638787461",
        "file_url": "FileUploader/IMG/IMG-20241011-WA0005-229799.jpg",
        "file_size": 0.177285,
        "file_mime": "image/jpeg",
        "timestamp": 1728638787507,
        "createdAt": "2024-10-11T09:26:27.509Z",
        "updatedAt": "2024-10-11T09:26:27.509Z",
        "__v": 0,
        "id": "6708ef439294fad2b7ceb350"
      },
      {
        "_id": "6708edef9294fad2b7ceb0dc",
        "uploadedBy": "667fad3a81722726f2dce419",
        "file_name": "Autoreply-1728638446982",
        "file_url": "FileUploader/IMG/IMG-20241011-WA0003-836977.jpg",
        "file_size": 0.403086,
        "file_mime": "image/jpeg",
        "timestamp": 1728638447078,
        "createdAt": "2024-10-11T09:20:47.082Z",
        "updatedAt": "2024-10-11T09:20:47.082Z",
        "__v": 0,
        "id": "6708edef9294fad2b7ceb0dc"
      },
      {
        "_id": "6708b2e7f89e66a4a0cdc968",
        "uploadedBy": "667fad3a81722726f2dce419",
        "file_name": "Autoreply-1728623335058",
        "file_url": "FileUploader/IMG/IMG-20241011-WA0003-953349.jpg",
        "file_size": 0.403086,
        "file_mime": "image/jpeg",
        "timestamp": 1728623335113,
        "createdAt": "2024-10-11T05:08:55.117Z",
        "updatedAt": "2024-10-11T05:08:55.117Z",
        "__v": 0,
        "id": "6708b2e7f89e66a4a0cdc968"
      },
      {
        "_id": "67055a37b87461cb69336c01",
        "uploadedBy": "668402a92eaf1dbfdc69b6d8",
        "file_name": "asddasas",
        "file_url": "FileUploader/DOC/8423974125-504862.pdf",
        "file_size": 0.473317,
        "file_mime": "application/pdf",
        "timestamp": 1728404023563,
        "createdAt": "2024-10-08T16:13:43.564Z",
        "updatedAt": "2024-10-08T16:13:43.564Z",
        "__v": 0,
        "id": "67055a37b87461cb69336c01"
      },
      {
        "_id": "67055a2cb87461cb69336bec",
        "uploadedBy": "668402a92eaf1dbfdc69b6d8",
        "file_name": "asddasas",
        "file_url": "FileUploader/IMG/my-profile-441038.png",
        "file_size": 0.362729,
        "file_mime": "image/png",
        "timestamp": 1728404012607,
        "createdAt": "2024-10-08T16:13:32.608Z",
        "updatedAt": "2024-10-08T16:13:32.608Z",
        "__v": 0,
        "id": "67055a2cb87461cb69336bec"
      },
      {
        "_id": "67055a17b87461cb69336bca",
        "uploadedBy": "668402a92eaf1dbfdc69b6d8",
        "file_name": "asddasas",
        "file_url": "FileUploader/IMG/my-profile-302249.png",
        "file_size": 0.362729,
        "file_mime": "image/png",
        "timestamp": 1728403991678,
        "createdAt": "2024-10-08T16:13:11.680Z",
        "updatedAt": "2024-10-08T16:13:11.680Z",
        "__v": 0,
        "id": "67055a17b87461cb69336bca"
      },
      {
        "_id": "67055a17b87461cb69336bad",
        "uploadedBy": "668402a92eaf1dbfdc69b6d8",
        "file_name": "asddasas",
        "file_url": "FileUploader/IMG/team-members-365257.png",
        "file_size": 0.503307,
        "file_mime": "image/png",
        "timestamp": 1728403991449,
        "createdAt": "2024-10-08T16:13:11.450Z",
        "updatedAt": "2024-10-08T16:13:11.450Z",
        "__v": 0,
        "id": "67055a17b87461cb69336bad"
      },
      {
        "_id": "67055a17b87461cb69336bab",
        "uploadedBy": "668402a92eaf1dbfdc69b6d8",
        "file_name": "asddasas",
        "file_url": "FileUploader/IMG/business-profile-033984.png",
        "file_size": 1.096472,
        "file_mime": "image/png",
        "timestamp": 1728403991437,
        "createdAt": "2024-10-08T16:13:11.438Z",
        "updatedAt": "2024-10-08T16:13:11.438Z",
        "__v": 0,
        "id": "67055a17b87461cb69336bab"
      },
      {
        "_id": "67055a17b87461cb69336b8c",
        "uploadedBy": "668402a92eaf1dbfdc69b6d8",
        "file_name": "asddasas",
        "file_url": "FileUploader/IMG/team-members-assign-customers-990903.png",
        "file_size": 0.224965,
        "file_mime": "image/png",
        "timestamp": 1728403991017,
        "createdAt": "2024-10-08T16:13:11.022Z",
        "updatedAt": "2024-10-08T16:13:11.022Z",
        "__v": 0,
        "id": "67055a17b87461cb69336b8c"
      },
      {
        "_id": "67055a16b87461cb69336b85",
        "uploadedBy": "668402a92eaf1dbfdc69b6d8",
        "file_name": "asddasas",
        "file_url": "FileUploader/IMG/mobile-menu-912329.png",
        "file_size": 0.119353,
        "file_mime": "image/png",
        "timestamp": 1728403990989,
        "createdAt": "2024-10-08T16:13:10.990Z",
        "updatedAt": "2024-10-08T16:13:10.990Z",
        "__v": 0,
        "id": "67055a16b87461cb69336b85"
      }
    ],
    "totalDocs": 2874,
    "limit": 10,
    "totalPages": 288,
    "page": 1,
    "pagingCounter": 1,
    "hasPrevPage": false,
    "hasNextPage": true,
    "prevPage": null,
    "nextPage": 2
  }

}
