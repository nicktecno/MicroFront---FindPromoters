import styled from "styled-components";

import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktop: "1200px",
  notebook: "991px",
  tablet: "768px",
  mobile: "576px",
});

export const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const BannerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  background: url("/images/bannerFindPromoter.jpg");
  max-width: 1640px;
  background-size: cover;
  background-repeat: no-repeat;
  align-items: flex-end;
  padding: 20px;

  span {
    color: #ffffff;
    font-size: 50px;

    margin-left: 100px;
    line-height: 50px;
    text-transform: uppercase;

    ${customMedia.lessThan("mobile")`
      margin-left:0px;
      font-size: 30px;
      line-height: 30px;
    `}
  }
`;

export const GeneralDataContainer = styled.div`
  display: flex;
  margin-top: 20px;
  width: 90%;
  max-width: 1640px;
  justify-content: center;

  ${customMedia.lessThan("tablet")`
     flex-direction:column;
    `}
`;

export const ContainerFilters = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
  ${customMedia.lessThan("tablet")`
     width: 100%;
    `}

  .labelFilter {
    width: 100%;
    display: flex;
    background: var(--default-color);
    font-size: 20px;
    padding: 10px;
    color: var(--title-color);
    text-align: center;
    justify-content: center;
    font-weight: 600;
    margin-bottom: 5px;
    cursor: pointer;
    :hover {
      background: var(--default-color-hover);
    }
  }

  .containerFiltered {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 5px;

    .boxNameFilter {
      display: flex;
      background: var(--default-color);
      color: var(--title-color);
      align-items: center;
      padding: 2px 7px;
      height: 30px;

      .name {
        margin-right: 5px;
      }
      .excludeButton {
        display: flex;
        width: 20px;

        svg {
          width: 100%;
          transition: 0.3;
          cursor: pointer;

          :hover {
            // color: #b9cb96;
          }
        }
      }
    }
  }
  .filters {
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    box-shadow: rgb(134 133 133 / 16%) 3px 3px 80px,
      rgb(92 91 91 / 23%) 0px 0px 3px;
    .title {
      background: #f4f4f5;
      color: #000;
      padding: 10px;
      padding-left: 20px;
    }
    .classifications {
      display: flex;
      flex-direction: column;

      ${customMedia.lessThan("tablet")`
        flex-direction:row;
        flex-wrap:wrap;
    `}
    }
  }
`;

export const ContainerProfessionalBoxes = styled.div`
  display: flex;
  width: 70%;
  align-items: flex-end;
  flex-direction: column;
  max-height: 420px;
  gap: 10px;
  overflow: auto;
  position: relative;

  ${customMedia.lessThan("tablet")`
     width: 100%;
    `}

  ::-webkit-scrollbar {
    width: 7px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #f4f4f5;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #ccc;
  }

  .containerBox {
    display: flex;
    flex-direction: column;
    width: 90%;
    transition: 0.3s;
    border-bottom: 2px solid transparent;
    cursor: pointer;

    :hover {
      border-bottom: 2px solid var(--default-color);
    }

    ${customMedia.lessThan("tablet")`
     width: 100%;
     margin-top:15px;
    `}
  }
  .promoterCover {
    display: flex;
    width: 100%;
    height: 100px;
    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .promoterBox {
    width: 100%;
    display: flex;
    background: #ffffff;
    height: 100px;
    border: 1px solid #595959;
    padding: 10px;

    .promoterImage {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 75px;
      position: absolute;
      margin-top: -50px;
      background: #ffff;
      border-radius: 60px;
      border: 1px solid var(--default-color);
      svg {
        width: 95%;
        color: #292728;
      }
      img {
        border-radius: 60px;
        width: 100%;
      }
    }

    .promoterData {
      display: flex;
      flex-direction: column;
      width: 100%;

      .name {
        padding-left: 80px;

        color: #292728;
        font-size: 20px;
      }
      .description {
        display: flex;
        width: 100%;
        margin-top: 15px;
        padding: 0px 20px;
        overflow: auto;

        ::-webkit-scrollbar {
          width: 7px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
          box-shadow: inset 0 0 5px #f4f4f5;
          border-radius: 10px;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: #ccc;
          border-radius: 5px;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
          background: #ccc;
        }
      }
    }
  }
`;

export const ContainerFooter = styled.div`
  display: flex;
  ${customMedia.lessThan("tablet")`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
    `}
`;

export const GeneralContainerExternal = styled.div`
  height: 100%;
  min-height: 100vh;
`;
