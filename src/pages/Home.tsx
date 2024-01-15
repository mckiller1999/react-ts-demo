import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { ProductModel } from "../models/Product";
import axios from "axios";

type Props = {};

const Home = (props: Props) => {
  const [product, setProduct] = useState<ProductModel[]>([]);
  const getProductApi = async () => {
    const res = await axios({
      url: "https://shop.cyberlearn.vn/api/Product",
      method: "GET",
    });
    setProduct(res.data.content);
  };
  useEffect(() => {
    getProductApi();
  }, []);

  return (
    <div className="container">
      <h3 className="text-center">Shop shoe</h3>
      <div className="row">
        {product.map((prod: ProductModel) => (
          <div className="col-4" key={prod.id}>
            <ProductCard prod={prod} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
