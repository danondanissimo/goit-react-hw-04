const ImageCard = ({ likes, description, imgSrc, imgModal, modalToggle }) => {
  const handleClick = () => {
    // const { src, alt } = event.target.attributes.value;
    // const src = event.target.attributes.src.value;
    // const alt = event.target.attributes.alt.value;
    // const likes = event.target.nextElementSibling.textContent;

    modalToggle(likes, description, imgModal);
  };
  return (
    <div>
      <img src={imgSrc} alt={description} onClick={handleClick} />
      <p>Likes:{likes}</p>
    </div>
  );
};

export default ImageCard;
