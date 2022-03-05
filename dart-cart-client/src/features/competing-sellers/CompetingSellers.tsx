import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompetitorProducts, selectCompetitorProducts } from "../../common/slices/competitorsSlice";
import { selectShopProductById } from "../../common/slices/shopProductSlice"
import { ShopProduct } from "../../common/models";
import "./competingSellers.css"
import Logo from "../../imgs/boldDart.jpg"

interface SellerProduct {
    Seller: number//product ID
}

export function CompetingSellers ({Seller}: SellerProduct) {

    const dispatch = useDispatch()
    
    const ReduxCompetitorProducts = useSelector(selectCompetitorProducts)

    console.log(ReduxCompetitorProducts)

    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
    //Competing sellers are fetched by using the shopProduct ID of the product card from /DISPLAY
    //We then use shopProduct to retrieve all other shopproducts with matching product ID inside of Shop product model
    //finally, then use the shopID inside all of the retrieved shopProducts to get seller information
    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
    useEffect(()=> {
        dispatch(fetchCompetitorProducts(Seller)) // places return value into REDUX global state
    }, [])

    function handleAddtoCard (event) {

    }

    return (
        
            <div className="Competitors">

            {ReduxCompetitorProducts && ReduxCompetitorProducts.
            map(competitors => {
                return (
                    
                    <div className="SellerContainer">
                        <div className="SellerWindow">

                            
                            <img className="SellerLogo"src={Logo}></img>

                        </div>

                        <div className="SellerPocket">
                        
                            <div className="SellerInfo">
                                <span>{competitors.product.name}</span><br/>
                                <span>Price: ${competitors.price}.99</span><br/>
                                {competitors.discount > 0 && <span className="SellerDiscount">Discount: ${competitors.discount}.00</span>}
                            </div>
                            <div className="SellerInfo">
                                <span>Location: {competitors.location}</span><br/>
                                <span>In Stock: {competitors.quantity}</span><br/>
                            </div>

                        </div>
                       
                        <button className="btn btn-primary" value={competitors.shop_product_id} onClick={(e) => handleAddtoCard(e)} >Add to card</button>

                    </div>
                    
                )
                

            }) || ""
            }

            </div>
         
    )

}