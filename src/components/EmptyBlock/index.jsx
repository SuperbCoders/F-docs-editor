import React from "react";
import styles from "./styles.module.scss";

const EmptyBlock = ({ setSectionList }) => {
  const addTextBlock = () => {
    setSectionList((prevState) => [
      ...prevState,
      {
        id: prevState.length + 1,
        type: "text",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        isApprove: false,
      },
    ]);
  };

  return (
    <div className={styles.empty_block} onClick={addTextBlock}>
      <svg
        className={styles.plus}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 5V19"
          stroke="#BDBDBD"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 12H19"
          stroke="#BDBDBD"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p className={styles.text}>Добавьте текстовый блок</p>
    </div>
  );
};

export default EmptyBlock;
