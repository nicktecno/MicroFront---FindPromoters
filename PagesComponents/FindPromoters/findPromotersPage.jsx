import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { User } from "@styled-icons/boxicons-regular/User";

import * as S from "./styles";

import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";

import { useQuery } from "@apollo/client";
import { GET_OPTIONS, GET_PROMOTERS } from "./Querys";
import FiltersFindPromotersClassificationsPromoters from "../../components/FiltersFindPromotersClassificationsPromoters";

function FindPromotersComponent() {
  const history = useRouter();
  const [optionId, setOptionId] = useState([]);
  const [optionNamesIds, setOptionNamesIds] = useState([]);

  const {
    data: promotersData,
    // eslint-disable-next-line no-unused-vars
    error: promotersError,
    // eslint-disable-next-line no-unused-vars
    loading: promotersLoading,
    refetch: refetchPromoters,
  } = useQuery(GET_PROMOTERS, {
    variables: {
      options: `[${optionId.toString()}]`,
      page: 1,
    },
  });

  const {
    data: optionsData,
    // eslint-disable-next-line no-unused-vars
    error: optionsError,
    // eslint-disable-next-line no-unused-vars
    loading: optionsLoading,
    refetch: refetchOptions,
  } = useQuery(GET_OPTIONS);

  function handleOptionsId(objectNameId) {
    const filterNamesIds = optionNamesIds.filter(
      (option) => option.id === objectNameId.id
    );

    if (filterNamesIds.length > 0) {
      const filterDifferentNameIds = optionNamesIds.filter(
        (optionName) => optionName.id !== objectNameId.id
      );
      setOptionNamesIds(filterDifferentNameIds);
      const mapOnlyIds = filterDifferentNameIds.map((filter) => filter.id);
      setOptionId(mapOnlyIds);
    } else {
      setOptionNamesIds([...optionNamesIds, objectNameId]);
      setOptionId([...optionId, objectNameId.id]);
    }
  }

  useEffect(() => {}, [promotersData, optionsData]);

  return (
    <>
      <S.GeneralContainerExternal>
        <S.GeneralContainer>
          <S.BannerContainer>
            <span>Encontre Profissionais</span>
          </S.BannerContainer>
          <S.GeneralDataContainer>
            <S.ContainerFilters>
              <div className="labelFilter">Filtrar</div>
              <div className="containerFiltered">
                {optionNamesIds.length > 0 &&
                  optionNamesIds.map((optionNameId, optionNameIdIndex) => (
                    <div className="boxNameFilter" key={optionNameIdIndex}>
                      <div className="name">{optionNameId.name}</div>
                      <div
                        className="excludeButton"
                        onClick={() => handleOptionsId(optionNameId)}
                      >
                        <CloseOutline />
                      </div>
                    </div>
                  ))}
              </div>
              <div className="filters">
                <div className="title">Filtros</div>
                <div className="classifications">
                  {optionsData !== undefined &&
                    optionsData.classification.map(
                      (classifications, classificationsIndex) => (
                        <FiltersFindPromotersClassificationsPromoters
                          classifications={classifications}
                          handleOptionsId={handleOptionsId}
                          optionId={optionId}
                          key={classificationsIndex}
                        />
                      )
                    )}
                </div>
              </div>
            </S.ContainerFilters>
            <S.ContainerProfessionalBoxes>
              {promotersData !== undefined &&
                promotersData.promoter.map((promoter, promoterIndex) => (
                  <div
                    className="containerBox"
                    key={promoterIndex}
                    onClick={() => {
                      history.push(`/profilepublicpromoter/${promoter.id}`);
                    }}
                  >
                    {promoter.cover !== "" ? (
                      <div className="promoterCover">
                        <img
                          src={promoter.cover}
                          alt="imagem de capa do promotor"
                        />
                      </div>
                    ) : (
                      <div className="promoterCover">
                        <img
                          src="/images/bannerLojista.jpg"
                          alt="imagem de capa do promotor"
                        />
                      </div>
                    )}

                    <div className="promoterBox">
                      <div className="promoterImage">
                        {promoter.img_profile !== "" ? (
                          <img src={promoter.img_profile} alt={promoter.name} />
                        ) : (
                          <User />
                        )}
                      </div>
                      <div className="promoterData">
                        <div className="name">{promoter.name}</div>
                        <div className="description">
                          {promoter.description}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </S.ContainerProfessionalBoxes>
          </S.GeneralDataContainer>
        </S.GeneralContainer>
      </S.GeneralContainerExternal>
    </>
  );
}

export default FindPromotersComponent;
