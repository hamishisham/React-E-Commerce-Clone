const AuthFooter = () => {
	return (
		<>
			{/*divider*/}
			<div className=" w-full h-5  after:w-full after:h-5 after:content-[''] bg-footer-divider after:block after:bg-footer-after"></div>
      {/**footer */}
			<footer className="flex flex-col items-center py-5 gap-y-3 font-IBM">
        {/**footer links */}
				<ul className="flex items-center justify-center gap-x-2">
					<li className="no-underline link">
						<a
							href="https://www.amazon.eg/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=201909000"
							target="_blank"
							rel="noopener noreferrer"
						>
							Conditions of Use
						</a>
					</li>
					<li className="no-underline link">
						<a
							href="https://www.amazon.eg/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=201909010"
							target="_blank"
							rel="noopener noreferrer"
						>
							Privacy Notice
						</a>
					</li>
					<li className="no-underline link">
						<a
							href="https://www.amazon.eg/gp/help/customer/display.html?nodeId=508510"
							target="_blank"
							rel="noopener noreferrer"
						>
							Help
						</a>
					</li>
				</ul>
        {/**footer copyright */}
				<p className="text-[10px] md:text-[12px] text-black">
					© 1996-2024, Amazon.com, Inc. or its affiliates
				</p>
			</footer>
		</>
	);
};
export default AuthFooter;