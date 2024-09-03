import { useParams } from "react-router-dom";
import Women from "../../components/women";
import Men from "../../components/men";

const Category = () => {
    const { category } = useParams();
     
    let content;

    switch (category) {
        case "Women": 
            content = <Women/>;
            break;
        case "Men":
            content = <Men/>;
            break;
        case "Kids":
            content = <h1>KIDS</h1>;
            break;
        case "Collections":
            content = <h1>COLLECTION</h1>;
            break;
        case "Sale":
            content = <h1>SALE</h1>;
            break;
        default:
            content = <h1>HOME</h1>;
            break;
    }

    return content;
};

export default Category;