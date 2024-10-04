import React, { useState, useEffect } from 'react'
import "./sale.scss";
import categoryApi from '../../categoryApi/categoryApi';
import { BsSearch } from 'react-icons/bs';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

function Sale() {

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        // Combine products from categories 1, 2, and 3
        const combinedProducts = [
            ...categoryApi[0].product,
            ...categoryApi[1].product,
            ...categoryApi[2].product
        ];
        setAllProducts(combinedProducts);
        setFilteredProducts(combinedProducts);
    }, []);

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);

        // Filter products based on search term
        const filtered = allProducts.filter(
            (product) =>
                product.name && product.name.toUpperCase().includes(term.toUpperCase())
        );
        setFilteredProducts(filtered);
    };

    const openDetails = (i) => {
        localStorage.setItem("id", JSON.stringify(i));
    };

    const addToCart = (i) => {
        const cartData = JSON.parse(localStorage.getItem("cartData")) || [];
        if (cartData.find((el) => el === i)) {
            toast.error("Item already in cart");
        } else {
            cartData.push(i);
            localStorage.setItem("cartData", JSON.stringify(cartData));
            toast.success("Item added to cart");
        }
    };

    return (
        <div className="sale-main">
            <div className="container">
                <div className="sale-search-main">
                    <div className="sale-search">
                        <input
                            type="text"
                            placeholder="Search"
                            className="sale-search-input"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                        <p className="sale-search-icon">
                            <BsSearch />
                        </p>
                    </div>
                </div>
                <div className="sale-card-main">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((item) => (
                            <div className="sale-card" key={item.id}>
                                <Link
                                    className="sale-image"
                                    onClick={() => openDetails(item.id)}
                                    to={`/product`}
                                >
                                    <img src={item.image} alt={item.name} />
                                </Link>
                                <div className="sale-details">
                                    <h3 className="sale-name">{item.name}</h3>
                                    <div className="sale-price-sec">
                                        <p className="sale-price">{item.discounted_price}</p>
                                        <del>{item.original_price}</del>
                                        <span>{item.offer}</span>
                                    </div>
                                    <div className="sale-size">
                                        {item.size.map((size, index) => (
                                            <p key={index}>{size}</p>
                                        ))}
                                    </div>
                                    <div className="sale-cart-wish">
                                        <button
                                            className="sale-add-to-cart-btn"
                                            onClick={() => addToCart(item.id)}
                                        >
                                            Add to Cart
                                        </button>
                                        {item.wishList && (
                                            <item.wishList className="sale-fav-icon" />
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <span className="sale-no-products">No products available</span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Sale;