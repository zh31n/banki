import React from "react";
import styles from "./BackGround.module.scss";
import img from "../../../../assets/icons/map-page-cards.svg";
import Image from "next/image";

const BackGround = () => {
  return (
    <div className={styles.main_container}>
      <svg
        className={styles.bg}
        xmlns="http://www.w3.org/2000/svg"
        width="648"
        height="376"
        viewBox="0 0 648 376"
        fill="none"
      >
        <path
          d="M808 0.809898C729.37 -48.9002 478.985 -99.9221 445.876 70.9139C396.148 327.5 272.465 274.604 146.869 327.5C21.273 380.397 -76.9085 531.688 83.7521 742L808 732.829V0.809898Z"
          fill="#7BBEFF"
        />
      </svg>
      <Image src={img} className={styles.image} alt="Карты и монетка" />
    </div>
  );
};

export default BackGround;
