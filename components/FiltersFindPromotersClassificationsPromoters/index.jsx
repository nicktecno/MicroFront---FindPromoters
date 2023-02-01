import React, { useState } from "react";

import * as S from "./styles";

function FiltersFindPromotersClassificationsPromoters({
  classifications,
  handleOptionsId,
  optionId,
}) {
  const [chooseClassification, setChooseClassification] = useState(false);

  return (
    <S.EachClassification>
      <div
        className="containerClassification"
        onClick={() => setChooseClassification(!chooseClassification)}
      >
        <div className="name">{classifications.name}</div>
        <div className="arrow">
          <img
            src={
              chooseClassification
                ? "/images/icon-errow-up.png"
                : "/images/icon-errow-down.png"
            }
            alt=""
          />
        </div>
      </div>
      {chooseClassification &&
        classifications.options.map((option, optionIndex) => (
          <S.Options key={optionIndex}>
            <div
              className={
                optionId.includes(option.id) ? "checkBox active" : "checkBox"
              }
              onClick={() =>
                handleOptionsId({ id: option.id, name: option.name })
              }
            />
            <div className="optionName">{option.name}</div>
          </S.Options>
        ))}
    </S.EachClassification>
  );
}

export default FiltersFindPromotersClassificationsPromoters;
