import React, { useEffect, useState } from "react";
import Pagination from "../../../core/components/Pagination";
import Order from "../../../orders/models/Order";

interface OrderInformationProps {
    orders: Order[];
}

const OrderInformation: React.FC<OrderInformationProps> = ({ orders }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const ordersPerPage = 8;

    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

    const totalPages = Math.ceil(orders.length / ordersPerPage);

    const onPageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };


    useEffect(() => {
        setCurrentPage(1);
    }, [orders]);

    return (
        <div className="orders">
            <div className="orders__table">
                {orders?.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Order AWB</th>
                                <th>Height</th>
                                <th>Length</th>
                                <th>Weight</th>
                                <th>Width</th>
                                <th>Total Amount</th>
                                <th>Order Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentOrders.map((order, index) => (
                                <tr key={index}>
                                    <td>{order.awb}</td>
                                    <td>{order.height}</td>
                                    <td>{order.length}</td>
                                    <td>{order.weight}</td>
                                    <td>{order.width}</td>
                                    <td>{order.totalAmount} RON</td>
                                    <td>{new Date(order.orderDate).toLocaleDateString(undefined)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <h2>No orders available.</h2>
                )}

                {orders.length > ordersPerPage && (
                    <Pagination
                        totalPages={totalPages}
                        currentPage={currentPage}
                        onPageChange={onPageChange}
                    />
                )}
            </div>
        </div>
    );
};

export default OrderInformation;
