import "react-toastify/dist/ReactToastify.min.css";
import { useCart } from "../../Context/CartLengthContext";

import { useLang } from "../../Context/LangContext";

import wishListApi from "../../services/msWishList";

import api from "../../services/api";
import FindPromotersComponent from "./findPromotersPage";

const FindPromotersPage = () => {
  const { routeTranslations } = useLang();

  const { setCartLength } = useCart();
  const headerUrl = process.env.NEXT_PUBLIC_REACT_APP_HEADER_URL;
  const mktName = process.env.NEXT_PUBLIC_REACT_APP_NAME;
  const companyId = process.env.NEXT_PUBLIC_REACT_APP_COMPANY_ID;

  return (
    <>
      <FindPromotersComponent
        api={api}
        routeTranslations={routeTranslations}
        setCartLength={setCartLength}
        wishListApi={wishListApi}
        headerUrl={headerUrl}
        mktName={mktName}
        companyId={companyId}
      />
    </>
  );
};

export default FindPromotersPage;
