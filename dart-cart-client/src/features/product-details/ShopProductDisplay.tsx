import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import "./shopProduct.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchShopProducts,
  selectShopProductById,
} from "../../common/slices/shopProductSlice";
import { CompetingSellers } from "../competing-sellers/CompetingSellers";

//imgs
import cartoonBat from "../../imgs/cartoon-baseball-bat.png";
import cartoonComputer from "../../imgs/cartoon-computer.png";
import cartoonSteak from "../../imgs/cartoon-steak.png";
import cartoonClothing from "../../imgs/Clothing-baby-clothes.png";
import cartoonDiamond from "../../imgs/diamond-ring.png";
import cartoonMeds from "../../imgs/Free-medica.png";
import cartoonShoes from "../../imgs/Sneaker-tennis-shoes.png";

const ShopProductDisplay = () => {
  const shopProduct_id = useParams()?.shopProduct_id || "";
  const dispatch = useDispatch();

  //console.log(params)
  const ReduxShopProducts = useSelector((state) =>
    selectShopProductById(state, shopProduct_id)
  );

  useEffect(() => {
    dispatch(fetchShopProducts()); // places return value into REDUX global state
  }, []);

  const ImgStyleBase = {
    backgroundImage: "",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "40%",
  };

  var axios = require("axios").default;

  async function thumbnail (name: string) {

    var options = {
      method: 'GET',
      url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',
      params: {q: name, pageNumber: '1', pageSize: '1', autoCorrect: 'true'},
      headers: {
        'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
        //my API KEY
        'x-rapidapi-key': 'ebb3d6a9f7mshb5df2130626bb61p1ff74ajsn6c0cd15383aa'
      }
    };

    let response = await axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });

    let thumbnail = await response.data[0].thumbnail

    return thumbnail
  }
      

  function ImgSplice (categories: [{id: number, name: string}]) {

    let newImg = Object.assign({}, ImgStyleBase)
    
    categories.forEach(category => {
        switch( category.name ){
            case "Perishable":
            newImg.backgroundImage = `url('${cartoonSteak}')`
            break
            case "Electronics":
            newImg.backgroundImage = `url('${cartoonComputer}')`
            break
            case "Clothing":
            newImg.backgroundImage = `url('${cartoonClothing}')`
            break
            case "Luxury":
            newImg.backgroundImage = `url('${cartoonDiamond}')`
            break
            case "Entertainment":
            newImg.backgroundImage = `url('${cartoonBat}')`
            break
            case "Medical":
            newImg.backgroundImage = `url('${cartoonMeds}')`
            break
            case "Footware":
            newImg.backgroundImage = `url('${cartoonShoes}')`
            break
        }
    })
    return newImg

}

  return (
    <>
      <Header></Header>

      <div className="ProductContainer">
        <div className="InnerProduct">
          <div className="ProductInfoContainer">
            {ReduxShopProducts && (
              <div
                style={ImgSplice(ReduxShopProducts?.product.categories!)}
              ></div>
            )}

            <div className="ProductInfoPocket">
              <h2>{ReduxShopProducts?.product.name?.toUpperCase()}</h2>
              <br />
              <h3>Price: $ {ReduxShopProducts?.price}</h3>
              <h3>In Stock: {ReduxShopProducts?.quantity}</h3>
              <h3>Seller: {ReduxShopProducts?.shop_id}</h3>
            </div>
          </div>

          <div className="ProductDescriptionPocket">
            <p>{ReduxShopProducts?.product.description}</p>
            {
              // ReduxShopProducts &&
              // <img src={thumbnail(ReduxShopProducts?.product.name!)}></img>
            }
            
          </div>
        </div>
        <CompetingSellers Seller={ReduxShopProducts?.shop_product_id!}></CompetingSellers>
      </div>

      <Footer></Footer>
    </>
  );
};

export default ShopProductDisplay;
