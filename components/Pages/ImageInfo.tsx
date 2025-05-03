import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom"
import { Photo } from "../../src/types";
import { getPhotoById } from "../../src/services/api";
import "../../src/assets/InfoImage.css"
import { IconSpan } from "../atoms/IconSpan";
import React from "react";
import GalleryImages from "../molecules/GalleryImage";
import { useIsMobile } from "../atoms/MobileResize";

export default function ImageInfo() {
    const [infoPhoto, setInfoPhoto] = useState<Photo | null>(null);
    const {id} = useParams();
    const [isHover, setIsHover] = useState(false);

    const modalRef = useRef<HTMLDialogElement | null>(null);
    const idParse = parseInt(id);


    const handlerShowFullPhoto = () =>{
        modalRef.current?.showModal();
    }
    
    const handlerCloseModal = ()=>{
        modalRef.current?.close();
    }

    useEffect(()=>{
        async function searchImg() {
            try {

                const data = await getPhotoById({id:idParse});
                setInfoPhoto(data);
            } catch (error) {
                setInfoPhoto(null);
            }
        }
        searchImg();
    },[id])

    function closeModal(e: React.MouseEvent<HTMLDialogElement>) {
        if (e.target === e.currentTarget) {
            modalRef.current?.close();
        }
    }

    const [isMobile] = useIsMobile();

    return(
        <div className="container-info-page">
            <div className="container-image-info">
                <section className="details-image">
                    <div className="container-image">
                        <img 
                        src={infoPhoto?.src.medium} 
                        alt={infoPhoto?.alt} 
                        loading="lazy" 
                        className="image" />

                        {isMobile === false && (
                            <button 
                            onClick={handlerShowFullPhoto}
                            onMouseEnter={() => setIsHover(true)} 
                            onMouseLeave={() => setIsHover(false)} 
                            className={`container-icon-zoom ${isHover ? "is-hover" : ""}`}>
                                { isHover  && (<p className="text">Ver más grande</p>)}
                                <IconSpan nameIcon="pan_zoom"/>
                            </button>
                        )}

                    </div>
                    <div className="card-info-image">
                        <section className="info-user">
                            <div className="icon-user">
                                <IconSpan nameIcon="person"/>
                            </div>
                            <p>{infoPhoto?.photographer}</p>
                        </section>
                    </div>
                </section>
                <dialog ref={modalRef} onClick={closeModal} className="full-screen-photo">
                    <div className="container-icon-x">
                        <button 
                        onClick={handlerCloseModal}
                        className="bttn-icon-x">
                            <IconSpan nameIcon="close"/>
                        </button>
                    </div>
                    
                    <div className="dialog-body">
                        <img
                        src={infoPhoto?.src.medium}
                        />
                    </div>
                </dialog>
            </div>
            <GalleryImages removeImgId={idParse}/>

        </div>
    )
}
