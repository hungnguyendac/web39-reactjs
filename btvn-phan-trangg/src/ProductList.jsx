import axios from "axios";
import { useEffect, useState } from "react";

const ProductList = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 2;
    const url = "https://qcshp3-8080.csb.app/products";

    // Call API
    useEffect(() => {
        const getApi = async () => {
            try {
                setIsLoading(true);
                const res = await axios.get(url);
                setData(res.data);
                setIsLoading(false);
            } catch (err) {
                console.log("Lỗi: ", err);
                setIsLoading(false);
            }
        };
        getApi();
    }, [url]);

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div style={{ textAlign: "center" }}>
            {isLoading ? (
                <p>Đang tải dữ liệu...</p>
            ) : (
                <>
                    <ul>
                        {currentItems.length > 0 ? (
                            currentItems.map((product) => (
                                <li
                                    key={product.id}
                                    style={{ listStyle: "none" }}
                                >
                                    <h2>{product.title}</h2>
                                    <p>Category: {product.category}</p>
                                    <img
                                        src={product.image}
                                        width="150"
                                        alt={product.title}
                                    />
                                    <p>Price: {product.price}</p>
                                    <p>{product.content}</p>
                                </li>
                            ))
                        ) : (
                            <li>No products available</li>
                        )}
                    </ul>
                    <div>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => handlePageChange(index + 1)}
                                disabled={currentPage === index + 1}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default ProductList;
