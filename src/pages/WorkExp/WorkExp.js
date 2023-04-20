import "./WorkExp.css";
import WorkExpItem from "./WorkExpItem";

const WorkingExp = [
  {
    id: '01',
    title: "Hong Kong Observatory",
    description:
      "Developed an meteorological web application and Renewed static web services for retrieving real-time typhoon forecast and actual data",
    images: ["/images/hko01.png", "/images/hko02.png"],
    url: "https://www.hko.gov.hk/en/index.html",
  },
  {
    id: '02',
    title: "CT Inc",
    description:
      "Redesigned an eCommerce web application including membership system, reward point program, social media integration and payment gateway integration",
    images: ["/images/ct01.png", "/images/ct02.png"],
    url: "https://www.timecigar.com/index?lang=en",
  },
  {
    id: '03',
    title: "Mango Technology Consultant",
    description:
      "Designed and developed a professional web portal for Forex CFD provider offering trading solutions",
    images: ["/images/mango01.png", "/images/mango02.png"],
    url: "https://www.plotioglobal.com/",
  },
];
const WorkExp = () => {
  
  return (
    <>
      <div className="wx-title reveal-ele nav-reveal" id="work">
        <span>Working Experience</span>
      </div>
      {WorkingExp.map((item, index) => (
        <WorkExpItem key={item.id} workExpData={item} isEven={index % 2 === 1 ? true : false} />
      ))}
    </>
  );
};

export default WorkExp;
