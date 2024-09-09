import "./mainInfoBlock.css";
import Image from "next/image";

const MainInfoBlock = ({
  svgImage,
  num,
  heading,
  para,
  bgColor,
  showArrow,
}) => {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        marginBottom: `${showArrow ? "4em" : ""}`,
      }}
      className="info-block-container"
    >
      <div className="info-block-image-wrapper">
        <div className="info-block-image-container">
          <Image
            src={svgImage}
            fill
            alt={`sum image ${num}`}
            className="info-block-image"
          />
        </div>
      </div>
      <div className="info-block-first-label-container">
        <div className="info-block-first-label">
          <span className="info-block-first-label-num">{num}</span>
          <h3 className="info-block-first-label-text">{heading}</h3>
        </div>
      </div>
      <div className="info-block-line" />
      <div className="info-block-second-label-container">{para}</div>
      <div className="info-block-arrow">
        {showArrow && (
          <div className="info-block-arrow-svg-wrapper">
            <div className="info-block-arrow-svg-container">
              <Image
                src="./downArrowCircle.svg"
                fill
                alt="flowing down arrow"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainInfoBlock;
