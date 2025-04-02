export class IGallery {
    galleryId: string;
    title: string;
    dateCreated: string;
    thumbUrl: string;
    description: string;
    tags: any;
    photos: any;
    constructor(){
        this.galleryId = '';
        this.title = '';
        this.dateCreated = '';
        this.thumbUrl = '';
        this.description = '';
    }
}