import { ImageGalleryItemImage, ImageGalleryItemStyled } from "./ImageGalleryItem.styled"

export const ImageGalleryItem = ({image}) => {
    return (
        <ImageGalleryItemStyled className="gallery-item">
            <ImageGalleryItemImage src={image.webformatURL} alt={image.tags} />
        </ImageGalleryItemStyled>
    )
}
