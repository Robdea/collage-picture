import { ApiPexelData,Photo } from "../types";

const API_KEY = "oXpmxgiEUBVq6cnZtlEbc0XIohMvhPVALleB2myx1rKMCRjir5m5ubau"

async function fetchRes<T>({url}:{url:string}):Promise<T> {
    const res = await fetch(url, {
        headers: {
            Authorization: API_KEY
        }
    });
    const resJSON = await res.json();
    return resJSON;
}

export const getPhotos = async ({ page = 1 }: { page?: number }): Promise<ApiPexelData> => {
    const url = `https://api.pexels.com/v1/curated?page=${page}&per_page=18`;

    return await fetchRes<ApiPexelData>({url});
};

export const getPhotoById = async ({id}:{id:number}):Promise<Photo> =>{
    const url = `https://api.pexels.com/v1/photos/${id}`;

    return await fetchRes<Photo>({url})
}

export const getPhotosByName = async ({name, page}:{name:string, page?:number}):  Promise<ApiPexelData> =>{
    const url = `https://api.pexels.com/v1/search?query=${name}&per_page=18&page=${page}`;

    return await fetchRes<ApiPexelData>({url});
}
