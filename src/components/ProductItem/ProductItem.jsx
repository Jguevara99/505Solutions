import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";

const ProductItem =() =>{
   return(
    <div className="item productItem">
    <div className="imgWrapper">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/zobaze-pos.appspot.com/o/b%2FQpJwlBDl23L6WQeQwS6Q%2Fi%2FWzLSnyl3zXnIGLhKRaDh%2FOiiBImLhrfeyCmAvFQJG%2FHgeHbzzu5.png?alt=media"
        className="w-100"
      />

      <span className="badge badge-primary">20%</span>

      <div className="actions">
          <Button>{}</Button>
      </div>

    </div>

    <div className="info">
      <h4>Creality 3 V3 KE</h4>
      <span className="text-success d-block">En Stock</span>
      <Rating className="mt-2 mb-2"
        name="read-only"
        value={5}
        readOnly
        size="small"
        precision={0.5}
      />
      
      <div className="d-flex">
         <span className="oldPrice">C$300</span>
         <span className="netPrice text-danger ml-2">C$150</span>
      </div>

    </div>
  </div>
   )
}

export default ProductItem;