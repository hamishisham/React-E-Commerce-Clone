import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Orders = () => {
    const [selectVal, setSelectVal] = useState("");
    const [checkoutData, setCheckoutData] = useState([]);
    const { cartItems, totalPrice } = useSelector((state) => state.cart);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("checkoutData")) || [];
        setCheckoutData(Array.isArray(storedData) ? storedData : [storedData]);
    }, []);

    const options = [
        { optionVal: "30-days", optionText: "Past 30 days" },
        { optionVal: "3-months", optionText: "Past 3 months" },
        { optionVal: "2025", optionText: "2025" },
        { optionVal: "2024", optionText: "2024" },
        { optionVal: "2023", optionText: "2023" },
    ];

    const handleYearChange = (e) => setSelectVal(e.target.value);

    return (
        <Layout>
            <h1 className="mx-auto my-8 text-2xl font-bold font-IBM max-w-[600px]">Your Orders</h1>

            {/* Order Quantity */}
            <div className="mx-auto max-w-[600px] flex justify-start items-center font-IBM mb-3 gap-x-3">
                <p>
                    <span className="font-bold">
                        {selectVal === "2023" || selectVal === "2024" ? "0" : checkoutData.length} orders
                    </span>
                </p>
                <select
                    className="cursor-pointer bg-[#f0f2f2] rounded-md p-1 border border-[#d5d9d9]"
                    onChange={handleYearChange}
                    value={selectVal}
                >
                    {options.map((el, index) => (
                        <option value={el.optionVal} key={index}>
                            {el.optionText}
                        </option>
                    ))}
                </select>
            </div>

            {/* Order List */}
            {selectVal === "2023" || selectVal === "2024" || checkoutData.length === 0 ? (
                <p className="max-w-[600px] mx-auto font-IBM mt-10 text-xl">
                    Looks like you didn&apos;t place an order in this year.
                </p>
            ) : (
                checkoutData.map((order, index) => (
                    <div key={index} className="border border-[#d5d9d9] flex flex-col gap-y-2 max-w-[600px] mx-auto rounded-xl overflow-hidden">
                        {/* Order Header Information */}
                        <div className="bg-[#f0f2f2] flex flex-row gap-2 p-3 font-IBM justify-between md:justify-start text-sm md:gap-x-5">
                            <p className="flex flex-col text-[#565959]">
                                <span>TOTAL</span>
                                <span>EGP {order.totalPrice}</span>
                            </p>
                            <p className="flex flex-col text-[#565959]">
                                <span>SHIP TO</span>
                                <span>{order.userName}</span>
                            </p>
                        </div>

                        {/* Order Details */}
                        <section className="flex flex-col gap-4 p-3">
                            <h2 className="text-xl font-bold font-IBM">Arriving Wed, Mar 2025</h2>

                            {/* Loop through purchased items */}
                            {order.cartItems.map((item) => (
                                <div key={item.id} className="flex flex-col items-center gap-4 md:flex-row">
                                    {/* Order Thumbnail */}
                                    <img src={item.image || "default-image.jpg"} alt={item.name} className="max-w-full w-[90px]" />

                                    {/* Order Description */}
                                    <p>
                                        <Link
                                            to={`/products/${item.id}`}
                                            className="text-[#0c3353] hover:underline underline-offset-1"
                                        >
                                            {item.name}
                                        </Link>
                                        <span className="block text-sm text-gray-600">Price: EGP {item.price}</span>
                                    </p>
                                </div>
                            ))}
                        </section>
                    </div>
                ))
            )}
        </Layout>
    );
};

export default Orders;
