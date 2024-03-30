import ImageCard from "../components/ImageCard/ImageCard";

const ImageGallery = ({ images, modalToggle }) => {
  return (
    <ul>
      {images !== null &&
        images.map((image) => {
          return (
            <li key={image.id}>
              <ImageCard
                imgSrc={image.urls.small}
                imgModal={image.urls.regular}
                likes={image.likes}
                description={image.alt_description}
                modalToggle={modalToggle}
              />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;
