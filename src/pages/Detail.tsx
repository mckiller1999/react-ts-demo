import React, { useEffect, useState } from "react";
import { DetailMode } from "../models/DetailMode";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { RelaProduct } from "../models/Product";
type Props = {};

const Detail = (props: Props) => {
  const [prodDetail, setProdDetail] = useState<DetailMode | null>(null);
  const param = useParams();
  const getDetailApi = async () => {
    const res = await axios({
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${param.id}`,
      method: "GET",
    });
    setProdDetail(res.data.content);
  };

  useEffect(() => {
    getDetailApi();
  }, [param.id]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img src={prodDetail?.image} alt="" />
        </div>
        <div className="col-6">
          <h3>{prodDetail?.name}</h3>
          <p>{prodDetail?.description}</p>
          {prodDetail?.size.map((size) => (
            <button key={size} className="btn btn-primary m-2">
              {size}
            </button>
          ))}
          <div>
            <button className="btn btn-dark">
              Add to cart <i className="fa fa-cart"></i>
            </button>
          </div>
        </div>
      </div>
      <h3 className="text-center">relatedProducts</h3>
      <div className="row">
        {prodDetail?.relatedProducts.map((prod: RelaProduct) => (
          <div className="col-4" key={prod.id}>
            <ProductCard prod={prod} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
