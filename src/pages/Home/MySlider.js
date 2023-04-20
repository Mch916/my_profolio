import React, { useEffect, useRef, useState } from "react";
import useWindowSize from "../../components/hooks/useWindowSize";
import IconArrowDown from "../../components/Icons/IconArrowDown";
import "./MySlider.css";

const MySlider = ({ children, title }) => {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [pageCount, setPageCount] = useState(5);
  const wrapperRef = useRef(null);
  const [width, height] = useWindowSize();

  const count = React.Children.count(children);

  useEffect(() => {
    const countPage = +getComputedStyle(wrapperRef.current).getPropertyValue(
      "--slider-total"
    );
    const pagetotal = Math.ceil(count / countPage);

    setPageCount(countPage);
    setTotalPage(pagetotal);
  }, [wrapperRef, width]);

  const pageHandler = () => {};

  const onPrevHandler = () => {
    setPage(Math.max(page - 1, 1));
  };
  const onNextHandler = () => {
    setPage(Math.min(page + 1, totalPage));
  };

  return (
    <>
      <div className="my-slider-title">{title}</div>
      <div ref={wrapperRef} className="my-slider-wrapper">
        <section
          className="my-slider-container"
          style={{
            transform: `translate3d(calc((100vw - (var(--slider-padding)*2) - (var(--slider-gap)))*${
              page - 1
            } *-1), 0, 0)`,
          }}
        >
          {children}
        </section>
        {page !== 1 && (
          <button className="my-slider-btn prev" onClick={onPrevHandler}>
            <span>
              <IconArrowDown />

            </span>
          </button>
        )}
        {totalPage > 1 && page < totalPage && (
          <button onClick={onNextHandler} className="my-slider-btn next">
            <span>
              <IconArrowDown /> 

            </span>
          </button>
        )}
      </div>
    </>
  );
};

export default MySlider;
