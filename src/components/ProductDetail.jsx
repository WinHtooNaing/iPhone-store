import { useParams } from "react-router-dom";
import { useState } from "react";
import DATA from "../Data";
import { useDispatch } from "react-redux";
import {addItem , delItem} from "../redux/actions/index"


const ProductDetail = () => {
    const [cartBtn , setCartBtn] = useState("Add to Cart");
    /* now we need a product id which is pass from the product page.*/
    const proid = useParams();
    const proDetail = DATA.filter(x=> x.id == proid.id);
    const product = proDetail[0];

// we need to store usedispatch in a variable
const diaspatch = useDispatch();

    const handleCart = (product) => {
        if(cartBtn === "Add to Cart"){
            diaspatch(addItem(product))
            setCartBtn("Remove from Cart");
        }else {
            diaspatch(delItem(product))
            setCartBtn("Add to Cart");
        }
    }
    return (
        <>
            <div className="container my-5 py-3">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center mx-auto product" >
                        <img src={product.image} alt={product.title} height="400px" />
                    </div>
                    <div className="col-md-5 d-flex flex-column justify-content-center" >
                        <h1 className="display-5 fw-bold">{product.title}</h1>
                        <hr/>
                        <h2 className="my-4">${product.price}</h2>
                        <p className="lead">{product.description}</p>
                        <button onClick={() => handleCart(product)} className="btn btn-outline-primary my-5">{cartBtn}</button>
                    </div>
                </div>
            </div>
        </>
    )
}



export default ProductDetail;