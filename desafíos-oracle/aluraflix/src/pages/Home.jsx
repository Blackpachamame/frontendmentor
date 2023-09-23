import SliderTop from "../components/SliderTop";
import Category from "../components/Category";
import ListVideos from "../components/ListVideos";
import { formaciones } from "../assets/data/formaciones";

export default function Home() {
  return (
    <main className="home">
      <SliderTop />
      <Category />
      {formaciones.map((item, i) => (
        <ListVideos key={i} formaciones={item} />
      ))}
    </main>
  );
}
