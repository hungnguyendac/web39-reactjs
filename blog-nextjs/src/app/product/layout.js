import React from "react";

const ProductLayout = ({children}) => {
    return (
        <>
            <h3 className="text-red-600">Thành phần dùng chung cho trang Product và ProductDetail</h3>
            {children}
        </>
    );
};

export default ProductLayout;
