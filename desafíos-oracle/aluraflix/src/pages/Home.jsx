import PropTypes from "prop-types";
import SliderTop from "../components/SliderTop";
import Category from "../components/Category";
import SliderVideos from "../components/SliderVideos";

export default function Home({ videosUse, formaciones }) {
  return (
    <main>
      <SliderTop />
      <Category formaciones={formaciones} />
      {formaciones.map((item, i) => (
        <SliderVideos key={i} formaciones={item} videosUse={videosUse} />
      ))}
    </main>
  );
}

Home.propTypes = {
  videosUse: PropTypes.array,
  formaciones: PropTypes.array,
};
