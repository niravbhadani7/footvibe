import { useParams } from "react-router-dom";
import Women from "../../components/women";
import Men from "../../components/men";
import DelaySuspense from "../../common/loader/delaySuspense/delaySuspense";
import Kids from "../../components/kids";

const Category = () => {
  const { category } = useParams();

  let content;

  switch (category) {
    case "Women":
      content = (
        // <DelaySuspense>
        <Women />
        // </DelaySuspense>
      );
      break;
    case "Men":
      content = <Men />;

      break;
    case "Kids":
      content = <Kids />;
      break;
    case "Collections":
      content = <h1>COLLECTION</h1>;
      break;
    case "Sale":
      content = <h1>SALE</h1>;
      break;
    default:
      content = <h1>category not found</h1>;
      break;
  }

  return content;
};

export default Category;
