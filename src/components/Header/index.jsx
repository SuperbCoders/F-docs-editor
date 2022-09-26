import React from "react";
import CustomButton from "../CustomButton";

const Header = ({ sendData }) => {
  return (
    <div>
      <div className="right-header__buttons">
        <CustomButton
          text={"Сохранить"}
          style={{ marginRight: "24px" }}
          onClick={sendData}
        />
        <CustomButton text={"Скачать"} style={{ marginRight: "24px" }} />
        <CustomButton text={"Предпросмотр"} />
      </div>
      <div className="right-header__info">
        <p className="title">Бланк банковской гарантии №1234567</p>
        <div className="recipient">
          <p className="recipient__name">ООО “Получатель гарантии”</p>
          <p className="recipient__value">5 000 000 руб</p>
          <p className="recipient__date">01.02.2022</p>
        </div>
        <div className="categories">
          <div className="category">ФЗ 44</div>
          <div className="category">участие</div>
        </div>
      </div>
    </div>
  );
};

export default Header;