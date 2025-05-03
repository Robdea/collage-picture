import { useEffect, useState } from "react"
import { Photo } from "../../src/types"
import { useSearchParams } from "react-router-dom"
import LoadImag from "../atoms/LoadImag"
import {getPhotosByName} from "../../src/services/api"

export default function SearchResult() {
    const [photos,setPhotos] = useState<Photo[]>([]);
    const [page, setPage] = useState(1);
    const [searchParams] = useSearchParams();
    const name = searchParams.get("name");
  
    useEffect(() => {
        setPhotos([]);
        setPage(1);
    }, [name]);


    useEffect(() => {
        if(!name) return;
        
        const fetchPhotos = async () => {
            try {
                const data = await getPhotosByName({ name, page });
                setPhotos(prev => {
                    const ids = new Set(prev.map(p => p.id));
                    const newPhotos = data.photos.filter(p => !ids.has(p.id));
                    return [...prev, ...newPhotos];
                });
            } catch (_error) {
            }
        };
        fetchPhotos();
    }, [page, name]);

    

    return(
        <div>
            <LoadImag
            list={photos}
            setPage={setPage}
            />
        </div>
    )

}