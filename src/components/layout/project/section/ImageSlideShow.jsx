import { Carousel, IconButton } from "@material-tailwind/react";
import { ImageEight, ImageEleven, ImageFifteen, ImageFive, ImageFour, ImageFourteen, ImageNine, ImageOne, ImageSeven, ImageSix, ImageSixteen, ImageTen, ImageThirteen, ImageThree, ImageTwelve, ImageTwo, PIMAGES, QIMAGES, RIMAGES, SIMAGES, TIMAGES, UIMAGES } from "../../../../constants";


export function ImageSlideShow() {
  return (
    <Carousel
      className="rounded-xl"
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      <img
        src={PIMAGES}
        alt="image 1"
        className="h-full w-full"
      />
      <img
        src={QIMAGES}
        alt="image 1"
        className="h-full w-full"
      />
      <img
        src={RIMAGES}
        alt="image 1"
        className="h-full w-full"
      />
      <img
        src={SIMAGES}
        alt="image 1"
        className="h-full w-full"
      />
      <img
        src={TIMAGES}
        alt="image 1"
        className="h-full w-full"
      />
      <img
        src={UIMAGES}
        alt="image 1"
        className="h-full w-full"
      />
      <img
        src={ImageOne}
        alt="image 1"
        className="h-full w-full"
      />
      <img
        src={ImageTwo}
        alt="image 1"
        className="h-full w-full "
      />

      <img
        src={ImageThree}
        alt="image 1"
        className="h-full w-full objetc-fit"
      />

      <img
        src={ImageFour}
        alt="image 1"
        className="h-full w-full objetc-fit"
      />

      <img
        src={ImageFive}
        alt="image 1"
        className="h-full w-full objetc-fit"
      />

      <img
        src={ImageSix}
        alt="image 1"
        className="h-full w-full objetc-fit"
      />

      <img
        src={ImageSeven}
        alt="image 1"
        className="h-full w-full objetc-fit"
      />

      <img
        src={ImageEight}
        alt="image 1"
        className="h-full w-full objetc-fit"
      />

      <img
        src={ImageNine}
        alt="image 1"
        className="h-full w-full objetc-fit"
      />
      <img
        src={ImageTen}
        alt="image 1"
        className="h-full w-full objetc-fit"
      />
      <img
        src={ImageEleven}
        alt="image 1"
        className="h-full w-full objetc-fit"
      />
      <img
        src={ImageTwelve}
        alt="image 1"
        className="h-full w-full objetc-fit"
      />
      <img
        src={ImageFourteen}
        alt="image 1"
        className="h-full w-full objetc-fit"
      />
    </Carousel>
  );
}
