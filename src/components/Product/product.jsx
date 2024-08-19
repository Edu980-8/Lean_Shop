"use client"
import React, { useContext } from "react";
import { ApiContext } from "@/components/Providers";
import styles from "./Product.module.scss";
import { FaStar, FaStarHalfAlt, FaRegStar} from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";

const Product = () => {
    const { status, data } = React.useContext(ApiContext);

    console.log('Status in Product:', status); // Imprime el estado actual
    console.log('Data in Product:', data); // Imprime los datos en el componente

    if (status === 'initial') {
        return <p>Loading...</p>;
    }

    if (status === 'error') {
        return <p>Error fetching products. Please try again later.</p>;
    }

    if (status === 'done' && data.length === 0) {
        return <p>No products available</p>;
    }

    // Ordenar los productos por número de reseñas de mayor a menor
    const sortedData = data.sort((a, b) => b.reviews_number - a.reviews_number);

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
        return (
            <>
                {[...Array(fullStars)].map((_, index) => (
                    <FaStar key={index} color="#ffc107" />
                ))}
                {halfStar && <FaStarHalfAlt color="#ffc107" />}
                {[...Array(emptyStars)].map((_, index) => (
                    <FaRegStar key={index} color="#ffc107" />
                ))}
            </>
        );
    }
    return (
        <div className={styles.products_container}>
            {sortedData.map((product, index) => (
                <div key={product.id}>
                    {product.discount === 0 ? <></>: <p id="discount" className={styles.discount_container}>{product.discount}% OFF</p>}
                    <div className={styles.image_container}>
                        <img src={product.image} alt={product.name} />
                        <div className={styles.icons}>
                            <i className={styles.icon}>❤️</i>
                            <i className={styles.icon}>🛒</i>
                            <i className={styles.icon}>👁️</i>
                        </div>
                    </div>
                                            <p>{renderStars(product.rating)} <>({product.reviews_number})</></p>
                    <h2>{product.name}</h2>
                    <p>${product.price}</p>
                    {index === 0 && 
                    <button><FiShoppingCart></FiShoppingCart> ADD TO CART</button>}
                        
                </div>
            ))}
        </div>
    );
};

export default Product;
