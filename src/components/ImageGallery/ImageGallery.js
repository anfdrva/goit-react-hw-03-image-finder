import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { ImageGalleryStyled } from "./ImageGallery.styled"


export const ImageGallery = ({items}) => {
    return (
        <ImageGalleryStyled className="gallery">
            {items.map(item => (
                <ImageGalleryItem key={item.id} id={item.id} image={item} />
            ))}
        </ImageGalleryStyled>
    )
}