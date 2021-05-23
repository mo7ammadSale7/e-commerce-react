import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Subscripe from "../components/Subscripe";
import HeroProduct from "../components/HeroProduct";
import RelatedProducts from "../components/RelatedProducts";

const ProductDetail = (props) => {
  const [item, setItem] = useState({});
  const itemID = props.match.params.id;
  useEffect(() => {
    setItem(props.items.find((item) => item.id === +itemID));
  }, [itemID]);

  return (
    <>
      <Header halfColor={false} />
      <HeroProduct item={item} onClick={props.onClick} />
      <RelatedProducts items={props.items} />
      <Subscripe />
      <Footer />
    </>
  );
};

export default ProductDetail;
