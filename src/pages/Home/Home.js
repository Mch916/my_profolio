import MainHeader from "../../components/Header/MainHeader";
import classes from "./Home.module.css";
import Button from "../../components/UI/Button";
import Slider from '../../components/NetflixSlider'
import IconInfo from '../../components/Icons/IconInfo';


const movies = [
  {
    id: 1,
    image: "/images/slide1.jpg",
    imageBg: "/images/slide1b.webp",
    title: "1983",
  },
  {
    id: 2,
    image: "/images/slide2.jpg",
    imageBg: "/images/slide2b.webp",
    title: "Russian doll",
  },
  {
    id: 3,
    image: "/images/slide3.jpg",
    imageBg: "/images/slide3b.webp",
    title: "The rain",
  },
  {
    id: 4,
    image: "/images/slide4.jpg",
    imageBg: "/images/slide4b.webp",
    title: "Sex education",
  },
  {
    id: 5,
    image: "/images/slide5.jpg",
    imageBg: "/images/slide5b.webp",
    title: "Elite",
  },
  {
    id: 6,
    image: "/images/slide6.jpg",
    imageBg: "/images/slide6b.webp",
    title: "Black mirror",
  },
];

const Home = () => {
  return (
    <>
      <MainHeader />
      <div className={classes["bg-container"]}>
        <img className={classes["bg-img"]} src='/images/background.jpeg' alt="Background" />
      </div>
      <div className={classes["bg-info-container"]}>
        <div className={classes["bg-info"]}>
          <div className={classes["bg-desc"]}>Software Developer</div>
          <div className={classes["bg-info-btns"]}>
            <Button text="More Info" icon={IconInfo} />
          </div>
        </div>
      </div>
      <div className={classes["main-view"]}>
        <Slider>
          {movies.map((movie) => (
            <Slider.Item movie={movie} key={movie.id}>
              item1
            </Slider.Item>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Home;
