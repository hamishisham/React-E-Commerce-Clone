import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Orders = () => {
	const [orders, setOrders] = useState([]);
	const [selectVal, setSelectVal] = useState("");
	const options = [
		{
			optionVal: "30-days ",
			optionText: "Past 30 days",
		},
		{
			optionVal: "3-months",
			optionText: "Past 3 months",
		},
		{
			optionVal: "2025",
			optionText: "2025",
		},
		{
			optionVal: "2024",
			optionText: "2024",
		},
		{
			optionVal: "2023",
			optionText: "2023",
		},
	];
	const formatDate = (dateString) => {
		if (!dateString) return "N/A";
		const date = new Date(dateString);
		return new Intl.DateTimeFormat("en-US", {
			weekday: "short",
			month: "short",
			day: "2-digit",
			year: "numeric",
		}).format(date);
	};
	const nextTwoDays = (dd) => {
		if (!dd) return "N/A";
		const date = new Date(dd);
		date.setDate(date.getDate() + 2);
		return formatDate(date);
	};

	useEffect(() => {
		const storedData = JSON.parse(localStorage.getItem("orders")) || [];
		if (storedData) {
			setOrders(storedData);
		}
	}, []);

	const handleYearChange = (e) => setSelectVal(e.target.value);

	return (
		<>
			<Layout>
				{/**Orders header */}
				<h1 className="mx-auto my-8 text-2xl font-bold font-IBM max-w-[600px] ">
					Your Orders
				</h1>
				{/**Order quantity */}
				<div className="mx-auto max-w-[600px] flex justify-start items-center font-IBM mb-3 gap-x-3">
					<p>
						<span className="font-bold">
							{selectVal === "2023" || selectVal === "2024"
								? "0"
								: orders.length}{" "}
							order
						</span>{" "}
						placed
					</p>
					<select
						className="cursor-pointer bg-[#f0f2f2] rounded-md p-1 border border-[#d5d9d9]"
						onChange={handleYearChange}
						value={selectVal}
					>
						{options.map((el, index) => {
							return (
								<option value={el.optionVal} key={index}>
									{el.optionText}
								</option>
							);
						})}
					</select>
				</div>
				{/**Order container */}
				{selectVal === "2023" || selectVal === "2024" ? (
					<p className="max-w-[600px] mx-auto font-IBM mt-10 text-xl">
						Looks like you didn&apos;t place an order in this year.
					</p>
				) : (
					orders.map((order, index) => {
						return (
							<div
								key={index}
								className="border border-[#d5d9d9] flex flex-col gap-y-2 max-w-[600px] mx-auto rounded-xl overflow-hidden mb-4"
							>
								{/**Order header information */}
								<div className="bg-[#f0f2f2]  p-3 font-IBM  text-sm">
									<p className="flex flex-row justify-between text-[#565959]">
										<span>SHIP TO</span>
										<span>{order.name}</span>
									</p>
								</div>
								{/**Order details */}
								{order.orderData.map((item, index) => {
									return (
										<section
											key={index}
											className="flex flex-col items-start justify-between gap-4 p-4"
										>
											<h2 className="flex-grow w-full mb-4 text-xl font-bold font-IBM">
												Arriving {nextTwoDays(item.date)}
											</h2>
											{item.cartItems.map((orderItem) => {
												return (
													<div
														key={orderItem.id}
														className="flex items-center gap-4 md:flex-row"
													>
														{/**Order thumbnail */}
														<img
															src={orderItem.image}
															alt={orderItem.name}
															className="max-w-full w-[90px]"
														/>
														{/**Order description */}
														<p>
															<Link
																to="/products/1"
																className="text-[#0c3353] hover:underline underline-offset-1"
															>
																{orderItem.name}{" "}
																<span className="text-xs text-red-700">
																	<b>✕{orderItem.quantity}</b>
																</span>
															</Link>
														</p>
													</div>
												);
											})}
											<div className=" w-full bg-[#f0f2f2] p-3 font-IBM  text-sm border border-[#d5d9d9] rounded">
											<p className="flex flex-row justify-between text-[#565959]">
												<span>TOTAL</span>
												<span>{item.totalPrice.toFixed(2)}</span>
											</p>
											</div>
										</section>
									);
								})}
							</div>
						);
					})
				)}
			</Layout>
		</>
	);
};

export default Orders;
