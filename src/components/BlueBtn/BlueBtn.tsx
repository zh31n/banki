import React from "react";
import s from "./BlueBtn.module.scss";

type Props = {
	text: string;
	width: number;
	height?: number;
	fSize?: number;
};

const BlueBtn = ({ text, width, height, fSize }: Props) => {
	return (
		<button
			className={s.btn}
			style={{
				width: `${width}px`,
				height: height ? `${height}px` : "",
				fontSize: fSize ? `${fSize}px` : ""
			}}
		>
			{text}
		</button>
	);
};

export default BlueBtn;
