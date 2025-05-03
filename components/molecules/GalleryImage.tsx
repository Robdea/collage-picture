import { useState, useEffect } from "react"
import { getPhotos } from "../../src/services/api"
import { Photo } from "../../src/types";
import LoadImag from "../atoms/LoadImag"

export default function GalleryImages({removeImgId}:{removeImgId?:number}) {
    const [photos,setPhotos] = useState<Photo[]>([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const data = await getPhotos({ page });
                setPhotos(prev => {
                    const ids = new Set(prev.map(p => p.id));
                    const newPhotos = data.photos.filter(p => !ids.has(p.id));
                    return [...prev, ...newPhotos];
                });
            } catch (error) {
                console.error(error);
            }
        };
        fetchPhotos();
    }, [page]);
    
    return(
        <>
            <LoadImag
            list={photos}
            setPage={setPage}
            removeImgId={removeImgId}
            />
        </>
    )    
}