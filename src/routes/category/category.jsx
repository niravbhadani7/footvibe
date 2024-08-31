import { useParams } from "react-router-dom";

const Category = () => {
    const { category } = useParams();
     
    let content;

    switch (category) {
        case "WOMEN": 
            content = <h1>WOMEN</h1>;
            break;
        case "MEN":
            content = <h1>MEN</h1>;
            break;
        case "KIDS":
            content = <h1>KIDS</h1>;
            break;
        case "COLLECTION":
            content = <h1>COLLECTION</h1>;
            break;
        case "SALE":
            content = <h1>SALE</h1>;
            break;
        default:
            content = <h1>HOME</h1>;
            break;
    }

    return content;
};

export default Category;