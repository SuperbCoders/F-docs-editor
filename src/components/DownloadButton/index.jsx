import React from "react";
import styles from "./styles.module.scss";

const DownloadButton = () => {
  return (
    <button type={"button"} className={styles.download_button}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_182_56)">
          <path
            d="M8 17L12 21L16 17"
            stroke="#7D70DD"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 12V21"
            stroke="#7D70DD"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.8802 18.0901C21.7496 17.4787 22.4015 16.6062 22.7415 15.5992C23.0814 14.5922 23.0916 13.5031 22.7706 12.4899C22.4496 11.4767 21.814 10.5921 20.9562 9.96462C20.0985 9.33709 19.063 8.99922 18.0002 9.00006H16.7402C16.4394 7.82793 15.8767 6.7393 15.0943 5.81614C14.3119 4.89297 13.3303 4.15932 12.2234 3.67041C11.1164 3.1815 9.91302 2.95008 8.7037 2.99357C7.49439 3.03706 6.31069 3.35433 5.24173 3.92148C4.17277 4.48864 3.2464 5.2909 2.53236 6.26788C1.81833 7.24487 1.33523 8.3711 1.11944 9.5618C0.903647 10.7525 0.960787 11.9767 1.28656 13.1421C1.61233 14.3075 2.19824 15.3838 3.00018 16.2901"
            stroke="#7D70DD"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_182_56">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
      Скачать
    </button>
  );
};

export default DownloadButton;
