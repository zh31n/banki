import ChoiseItem from "@/components/ChoiseItem/ChoiseItem";
import React from "react";
import styles from "./Choise.module.scss";

const Choise = () => {
	type choisesT = {
		name: string;
		active: boolean;
	};
	const choises: choisesT[] = [
		{ name: "Все", active: true },
		{ name: "Вклады", active: false },
		{ name: "Потребительские кредиты", active: false },
		{ name: "Ипотека", active: false },
		{ name: "Кредитные карты", active: false },
		{ name: "Дебетовые карты", active: false },
		{ name: "Инвестиции", active: false },
		{ name: "Страхование", active: false }
	];
	return (
		<div className={styles.choiseItems}>
			{choises.map((el, index) => (
				<ChoiseItem key={index} name={el.name} active={el.active} />
			))}
		</div>
	);
};

export default Choise;
