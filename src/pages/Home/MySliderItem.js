const MySliderItem = ({image, title}) => {
  return (
    <>
      <div className="my-slider-item">
        <img src={image} />
        <div className="my-slider-desc">{title}</div>
      </div>
    </>
  );
};

export default MySliderItem;
