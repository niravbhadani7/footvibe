import { useParams } from "react-router-dom";
import Women from "../../components/women";
import Men from "../../components/men";
import DelaySuspense from "../../common/loader/delaySuspense/delaySuspense";
import Kids from "../../components/kids";
import Sale from "../../components/sale";

const Category = () => {
  const { category } = useParams();

  let content;

  switch (category) {
    case "women":
      content = (
        // <DelaySuspense>
        <Women />
        // </DelaySuspense>
      );
      break;
    case "men":
      content = <Men />;
      break;
    case "kids":
      content = <Kids />;
      break;
    case "sale":
      content = <Sale />;
      break;
    default:
      content = <h1>category not found</h1>;
      break;
  }

  return content;
};

export default Category;
