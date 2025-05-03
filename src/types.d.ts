
export interface Photo {
    id: number;
    alt: string;
    photographer: string,
    src: {
      medium: string;
    };
}
  
export interface ApiPexelData {
    photos: Photo[];
}
  