
import type {Product} from "./ProductList"

const ProductCard = ({product}: {product: Product}) => {

    return(
        <div className="product-card"> 
            <span>{product.category}</span>
            <h3>{product.pName}</h3>
            <p>{product.price.toLocaleString()}원</p>
        </div>
    )
}

export default ProductCard;