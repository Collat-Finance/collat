import {
  background,
  blur_logo,
  left_hero_logo,
  right_hero_logo,
} from "../images";

const OverLay = () => {
  return (
    <div className="overlay">
      <img className="background_body_image" src={background} alt="" />
      <img className="left_image" src={left_hero_logo} alt="" />
      <img className="right_image" src={right_hero_logo} alt="" />
      <img className="blurry_image" src={blur_logo} alt="" />
    </div>
  );
};

export default OverLay;
