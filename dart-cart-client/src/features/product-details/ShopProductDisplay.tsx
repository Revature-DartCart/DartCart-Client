import { useParams } from "react-router-dom";
import "./shopProduct.css";
import { useSelector } from "react-redux";
import { selectShopProductById } from "../../common/slices/shopProductSlice";
import { CompetingSellers } from "../competing-sellers/CompetingSellers";

//imgs
import cartoonBat from "../../imgs/cartoon-baseball-bat.png";
import cartoonComputer from "../../imgs/cartoon-computer.png";
import cartoonSteak from "../../imgs/cartoon-steak.png";
import cartoonClothing from "../../imgs/Clothing-baby-clothes.png";
import cartoonDiamond from "../../imgs/diamond-ring.png";
import cartoonMeds from "../../imgs/Free-medica.png";
import cartoonShoes from "../../imgs/Sneaker-tennis-shoes.png";
import { useEffect } from "react";
import ProductPageLayout from '../product-reviews/layouts/ProductPageLayout'
import ProductReviewDetail from "../product-reviews/ProductReviewDetail";

const ShopProductDisplay = () => {
  const { shop_product_id } = useParams();

  const id: number = parseInt(shop_product_id!);

  const ReduxShopProducts = useSelector((state) => selectShopProductById(state, id));

  useEffect((): void => {
  }, [ReduxShopProducts]);

  const ImgStyleBase = {
    backgroundImage: "",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "40%",
  };

  function ImgSplice(catagories: String[]) {
    let newImg = Object.assign({}, ImgStyleBase);
    catagories.forEach((catagory) => {
      switch (catagory) {
        case "perishable":
          newImg.backgroundImage = `url('${cartoonSteak}')`;
          break;
        case "furniture":
          newImg.backgroundImage = `url('${cartoonComputer}')`;
          break;
        case "entertainment":
          newImg.backgroundImage = `url('${cartoonComputer}')`;
          break;
        case "clothing":
          newImg.backgroundImage = `url('${cartoonClothing}')`;
          break;
        case "toys":
          newImg.backgroundImage = `url('${cartoonDiamond}')`;
          break;
        case "homegoods":
          newImg.backgroundImage = `url('${cartoonBat}')`;
          break;
        case "automotive":
          newImg.backgroundImage = `url('${cartoonBat}')`;
          break;
        case "personal-care":
          newImg.backgroundImage = `url('${cartoonMeds}')`;
          break;
        case "school&office":
          newImg.backgroundImage = `url('${cartoonShoes}')`;
          break;
      }
    });
    return newImg;
  }


  return (
    <>
      <div className="productInfoContainer">
        <div className="productIMGcontainer">
          <img className="testIMG" src={ReduxShopProducts?.imageURL} alt="Card image cap"></img>
        </div>
        {/* <div className="sellersContainer">
          <div className="sellerColumn">
            <CompetingSellers Seller={ReduxShopProducts?.id!}></CompetingSellers>
          </div>
        </div> */}
        {/* <div>
          <ProductReviewDetail product_id={shop_product_id} />
          <ProductPageLayout />
        </div> */}
      </div>
      <div className="sellersContainer">
        <div className="sellerColumn">
          <CompetingSellers Seller={ReduxShopProducts?.id!}></CompetingSellers>
        </div>
      </div>
      <div>
        <ProductReviewDetail product_id={shop_product_id} />
        <ProductPageLayout />
      </div>
    </>
  );

}
export default ShopProductDisplay;
