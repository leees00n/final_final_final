import Carousel from "react-bootstrap/Carousel";

export const FIRST_CAROUSEL_SIZE = {
  width: 900,
  height: 280,
};

function FirstCarousel() {
  return (
    <Carousel
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      {Array.from({ length: 3 }).map((_, index) => (
        <Carousel.Item
          interval={2000}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <img
            className="d-block w-100"
            src={`top-banner-${index + 1}.jpeg`}
            alt={`Top slide ${index + 1}`}
            style={{
              width: FIRST_CAROUSEL_SIZE.width,
              height: FIRST_CAROUSEL_SIZE.height,
              objectFit: "cover",
            }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export const THIRD_CAROUSEL_SIZE = {
  width: 500,
  height: 280,
};

function ThirdCarousel() {
  return (
    <Carousel
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      {Array.from({ length: 3 }).map((_, index) => (
        <Carousel.Item
          interval={2000}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <img
            className="d-block w-100"
            src={`small-banner-${index + 1}.jpeg`}
            alt={`Small slide ${index + 1}`}
            style={{
              width: THIRD_CAROUSEL_SIZE.width,
              height: THIRD_CAROUSEL_SIZE.height,
              objectFit: "cover",
            }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export { FirstCarousel, ThirdCarousel };
