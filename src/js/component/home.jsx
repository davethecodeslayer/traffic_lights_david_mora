import React, {useState} from "react";

//create your first component
const Home = () => {
	const [color, setColor] = useState("red");	

	return (
		<div className="parent">
			<div className="traffic-light">
				<div className={"light red " + (color == "red"? "on-red": "")} onClick={() => {setColor("red")}}>
				</div>
				<div className={"light yellow " +  (color == "yellow"? "on-yellow": "")} onClick={() => {setColor("yellow")}}>
				</div>
				<div className={"light green " +  (color == "green"? "on-green": "")} onClick={() => {setColor("green")}}>
				</div>
			</div>
		</div>
	);
};

export default Home;
