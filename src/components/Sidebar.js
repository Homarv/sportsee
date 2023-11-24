import React from "react";
import SidebarBtn from "./SidebarBtn";
import yoga from "../assets/yoga.svg";
import swimming from "../assets/swimming.svg";
import cycling from "../assets/cycling.svg";
import dumbbell from "../assets/dumbbell.svg";

/**
 * Sidebar component displaying icon buttons for sports activities.
 *
 * @component
 * @returns {JSX.Element} JSX element representing the sidebar.
 */

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebar_container_btn">
				<SidebarBtn imageUrl={yoga} description="yogiste" />
				<SidebarBtn imageUrl={swimming} description="nageur" />
				<SidebarBtn imageUrl={cycling} description="cycliste" />
				<SidebarBtn imageUrl={dumbbell} description="haltérophile" />
			</div>
			<div className="copiryght">Copyright, SportSee 2020</div>
		</div>
	);
};

export default Sidebar;
