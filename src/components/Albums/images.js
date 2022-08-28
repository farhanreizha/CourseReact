import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Loading from "../utils/loading";
import Carousel from "../utils/carousel";
import { SwiperSlide } from "swiper/react";
import Button from "../utils/button";

function Images() {
  const [images, setImages] = useState([]);
  const [limit, setLimit] = useState(4);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let flush = false;
    if (flush === false) {
      setLoading(true);
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_BASEURL}/photos?_limit=${limit}`,
      })
        .then((result) => setImages(result.data))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }
    return () => (flush = true);
  }, [limit]);

  const handleLimit = (option) => {
    option === "+"
      ? setLimit((prev) => prev + 1)
      : setLimit((prev) => (prev === 1 ? 1 : prev - 1));
  };

  if (loading) return <Loading />;
  if (!images) return <div>404 Not Found</div>;
  return (
    <Fragment>
      <div className="my-5">
        <Carousel>
          {images.map((image, i) => (
            <SwiperSlide key={i}>
              <span className="flex justify-center rounded-t-md py-2 bg-blue-500 text-white text-md md:text-xl font-semibold">
                {image.title}
              </span>
              <img
                src={image.url}
                style={{ height: "50vh" }}
                className="relative w-full rounded-b-md"
                alt={image.title}
              />
            </SwiperSlide>
          ))}
        </Carousel>
        <div className="flex justify-center pt-5">
          <Button
            className="border-l-2 border-y-2 rounded-l-md  w-1/2 border-blue-500 hover:bg-blue-500 hover:text-white px-10 py-1"
            onClick={() => handleLimit("-")}
          >
            -
          </Button>
          <Button
            className="border-2 rounded-r-md w-1/2 border-blue-500 hover:bg-blue-500 hover:text-white px-10 py-1"
            onClick={() => handleLimit("+")}
          >
            +
          </Button>
        </div>
      </div>
    </Fragment>
  );
}

export default Images;
