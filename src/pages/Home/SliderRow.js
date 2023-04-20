import MySlider from "./MySlider";
import MySliderItem from "./MySliderItem";
import './SliderRow.css';

const SliderRow = ({ listData, title}) => {
  return (
    <>
      <div className={`main-view`}>
        <div className={`reveal-ele slider-title`}>
          <span>{title}</span>
        </div>
        <MySlider>
          {listData.map((item) => (
            <MySliderItem {...item} key={item.id} />
          ))}
        </MySlider>
        
      </div>
    </>
  );
};

export default SliderRow;
