import { useState } from "react";
import { Link } from "react-router-dom";
import "./WorkExpItem.css";

const WorkExpItem = ({ workExpData, isEven }) => {
  const [activeImg, SetActiveImg] = useState(0);

  const evenClass = isEven ? 'even' : '';

  const imgClickHandler = (id) => {
    SetActiveImg(id);
  };

  return (
    <>
      <div className={`wx-item-wrapper reveal-ele ${evenClass}`}>
        <div
          className="wx-item-hero"
          style={{ backgroundImage: `url(${workExpData.images[activeImg]})` }}
        >
          <div className="wx-item-container">
            <div className={`wx-item-number `}>{ workExpData.id}</div>
            <div className="wx-item-info">
              <h1>{ workExpData.title}</h1>
              <p>
              { workExpData.description}
              </p>
              <Link
                className="wx-item-link"
                to={ workExpData.url}
                target="_blank"
              >
                Website <i className="fa-solid fa-up-right-from-square"></i>
              </Link>
            </div>
            <div className="wx-item-slider">
              <div className="wx-item-preview">
                {workExpData.images.map((item, index) => (
                  <img
                    key={index}
                    src={item}
                    alt={item}
                    onClick={imgClickHandler.bind(null, index)}
                    className={`wx-item-thumbnail ${
                      index === activeImg ? "active" : ""
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkExpItem;
