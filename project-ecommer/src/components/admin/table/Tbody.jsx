import React from "react";
import EditButtonDashBoard from "./EditButton";
import DeleteButtonDashBoard from "./DeleteButton";

const TbodyDashboard = ({ data }) => {
    
    return (
        <tbody>
            {data.length > 0 && data.map((product) => {
                
                return (
                    <tr key={product.id}>
                        <td scope="row">{product.id}</td>
                        <td scope="row">{product.title}</td>
                        <td scope="row">{product.content}</td>
                        <td className="text-danger" scope="row">
                            {product.price} VNĐ
                        </td>
                        <td scope="row">
                            <EditButtonDashBoard/>
                        </td>
                        <td scope="row">
                            <DeleteButtonDashBoard id={product.id}/>
                        </td>
                    </tr>
                );
            })}

        </tbody>
    );
};

export default TbodyDashboard;
