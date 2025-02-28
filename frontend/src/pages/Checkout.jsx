import Divider from "../components/Divider";
import Layout from "../components/Layout/Layout";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
	const [checkoutData, setCheckoutData] = useState(null);
	const [day, setToday] = useState("");
	const [nextTwoDays, setNextTwoDays] = useState("");
	const navigate = useNavigate();
	const delivery = 0;
	useEffect(() => {
		const storedData = JSON.parse(localStorage.getItem("checkoutData")) || [];
		if (storedData) {
			setCheckoutData(storedData);
		}
		const currentDate = new Date();

		setToday(
			new Intl.DateTimeFormat("en-US", {
				weekday: "short",
				month: "short",
				day: "2-digit",
				year: "numeric",
			}).format(currentDate)
		);
		const formatDate = (date) => {
			return new Intl.DateTimeFormat("en-US", {
				weekday: "short",
				month: "short",
				day: "2-digit",
				year: "numeric",
			}).format(date);
		};

		const futureDate = new Date();
		futureDate.setDate(currentDate.getDate() + 2);
		setNextTwoDays(formatDate(futureDate));
	}, []);

	if (!checkoutData) {
		return (
			<p className="mt-6 text-center text-gray-500">Loading checkout data...</p>
		);
	}
	const { userName, cartItems, totalPrice } = checkoutData;

	const fillOrders = () => {
		const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

		const newOrder = {
			name: userName,
			items: cartItems,
			price: totalPrice,
			date: nextTwoDays,
		};

		existingOrders.push(newOrder);

		localStorage.setItem("orders", JSON.stringify(existingOrders));

		setTimeout(() => {
			navigate("/orders");
		}, 500);
	};

	return (
		<>
			<Layout>
				<section className="mt-3">
					<header className="flex flex-col mb-4 gap-y-1 font-IBM">
						<h1 className="text-2xl font-semibold">Review Your Order</h1>
						<p className="text-xs font-IBM">
							By placing your order, you agree to <strong>Amazon&apos;s</strong>{" "}
							<a
								href="https://www.amazon.eg/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=201909010"
								target="_blank"
								rel="noopener noreferrer"
								className="text-[#2A8FD7] font-inika"
							>
								privacy notice
							</a>{" "}
							and{" "}
							<a
								href="https://www.amazon.eg/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=201909000"
								target="_blank"
								rel="noopener noreferrer"
								className="text-[#2A8FD7] font-inika"
							>
								Conditions of Use
							</a>
						</p>
					</header>
					<Divider />
					<div className="flex flex-col gap-3 lg:flex-row lg:justify-between font-IBM">
						<div className="flex flex-col gap-y-1">
							<h2 className="text-xl font-bold">Shipment details</h2>
							<p className="text-sm text-[#E47911]">
								<strong>Customer {userName}</strong>
							</p>
							<p className="text-sm text-green-700">
								Estimated delivery <strong>{day} - {nextTwoDays}</strong>{" "}
							</p>
							{/**Cart items */}
							<ul className="flex flex-col mt-4 gap-y-2">
								{cartItems.map((item) => {
									return (
										<li className="flex items-center gap-x-2" key={item.id}>
											<img
												src={item.image}
												alt={item.name}
												className="max-w-full w-[90px] object-contain"
											/>
											<p className="flex flex-col gap-1">
												<span className="text-sm">{item.name}</span>
												<span className="text-xs text-red-700">
													Quantity: <b>{item.quantity}</b>
												</span>
												<span className="text-xs text-red-700">
													Price: <b>{item.price.toFixed(2)}</b>
												</span>
											</p>
										</li>
									);
								})}
							</ul>
						</div>
						<div className="flex flex-col border rounded gap-y-2 border-[#d5d9d9]  lg:w-80">
							<div className="bg-[#f0f2f2] text-center py-3 px-4">
								<button
									type="button"
									className="w-full text-sm rounded-[2px] py-1 px-4  border border-black bg-[linear-gradient(to_bottom,#f7dfa5,#f0c14b)] cursor-pointer transition-colors ease-in-out duration-300 hover:bg-[linear-gradient(to_bottom,#f0c14b,#f0c14b)]"
									aria-label="Place your order"
									onClick={fillOrders}
									disabled={!cartItems.length}
								>
									Place your order
								</button>
							</div>
							<div className="relative px-4 py-3 font-IBM ">
								<h2 className="text-xl font-bold">Order summary</h2>
								<ul className="flex flex-col gap-y-1 after:block after:content-[''] after:w-full after:h-[1px] after:bg-[#d5d9d9] after:absolute after:bottom-[45px] after:left-0 text-sm">
									<li className="flex justify-between ">
										<span>Items:</span>
										<span>{totalPrice.toFixed(2)}</span>
									</li>
									<li className="flex justify-between">
										<span>Delivery:</span>
										<span>{delivery}</span>
									</li>
								</ul>
								<p className="flex justify-between mt-4">
									<span>
										<b>Order Total</b>
									</span>
									<span>{(totalPrice + delivery).toFixed(2)}</span>
								</p>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	);
};

export default Checkout;
