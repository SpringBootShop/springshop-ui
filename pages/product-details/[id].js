import React from "react";
import { useRouter } from "next/router";
import CommonLayout from "../../components/shop/common-layout";
import ProductSection from "./common/product_section";
// import { withApollo } from '../../helpers/apollo/apollo';
import LeftImagePage from "./product/leftImagePage";

const LeftSidebar = () => {
  const router = useRouter();
  const id = router.query.id;

  return (
    <CommonLayout parent="Home" title="Product">
      <LeftImagePage pathId={id} />
      <ProductSection />
    </CommonLayout>
  );
};

export default LeftSidebar;
