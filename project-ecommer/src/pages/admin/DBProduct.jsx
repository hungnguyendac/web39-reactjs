import React from "react";
import TheadDashboard from "../../components/admin/table/Thead";
import PaginationDashboard from "../../components/admin/common/Pagination";
import TbodyDashboard from "../../components/admin/table/Tbody";
import useCallApiNoPagination from "../../hooks/useCallApiNoPagination";
import { urlProducts } from "../../untils/variable";

const DBProduct = () => {

    // Call dữ liệu
    const { data, isLoading } = useCallApiNoPagination(urlProducts);

    
    
    return (
        <>
            <div className="title-group mb-3">
                <h1 className="h2 mb-0">Quản Lý Sản Phẩm</h1>
            </div>
            <div className="row my-4">
                <div className="col-lg-12 col-12">
                    <div className="custom-block bg-white">
                        <button className="bg-teal-500 px-4 py-2 mb-3 rounded-xl text-white">
                            Thêm mới
                        </button>
                        <div className="table-responsive">
                            <table className="account-table table">
                                <TheadDashboard />
                                {isLoading && (
                                    <tbody>
                                        <tr>
                                            <td
                                                colSpan={6}
                                                className="text-center bg-white py-3 text-[12px]"
                                            >
                                                Dữ liệu đang được tải...
                                            </td>
                                        </tr>
                                    </tbody>
                                )}
                                {!isLoading && (<TbodyDashboard data={data}/>)}
                            </table>
                        </div>
                        <PaginationDashboard />
                    </div>
                </div>
            </div>
        </>
    );
};

export default DBProduct;
