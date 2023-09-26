import PropTypes from "prop-types";
import SliderTop from "../components/SliderTop";
import Category from "../components/Category";
import ListVideos from "../components/ListVideos";

export default function Home({ videosUse, formaciones }) {
  return (
    <main>
      <SliderTop />
      <Category formaciones={formaciones} />
      {formaciones.map((item, i) => (
        <ListVideos key={i} formaciones={item} videosUse={videosUse} />
      ))}
    </main>
  );
}

Home.propTypes = {
  videosUse: PropTypes.array,
  formaciones: PropTypes.array,
};
