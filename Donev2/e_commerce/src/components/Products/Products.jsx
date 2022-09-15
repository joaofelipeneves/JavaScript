import React from "react";
import { Grid } from "@material-ui/core";

import Product from './Product/Product';
import useStyles from './styles';


//const products = [
//    {id : 1 , name : 'Shoes' , description : 'Running shoes.', price: '$5', image: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Sapatilhas_Ultraboost_22_Preto_GZ0127_01_standard.jpg'},
//    {id : 2 , name : 'Macbook' , description : 'Apple macbook.', price: '$10', image: 'https://cdn.pocket-lint.com/r/s/970x/assets/images/152137-laptops-review-apple-macbook-pro-2020-review-image1-pbzm4ejvvs-jpg.webp'},
//    {id : 3 , name : 'Ramen' , description : 'Ramen delicioso com porco.', price: '$15', image: 'https://t1.uc.ltmcdn.com/pt/posts/2/4/6/como_fazer_ramen_29642_600.jpg'},
//];


const Products = ({products, onAddToCart}) => {
    const classes = useStyles();

    return (
          <main className={classes.content}>
           <div className={classes.toolbar}/>   
        <Grid container justify = "center" spacing = {4}>
        {products.map((product) => (
            <Grid item key = {product.id} xs = {12} sm={9} md= {4} lg = {3}>
                <Product product={product} onAddToCart = {onAddToCart}/>
            </Grid>
        ))}
        </Grid>
    </main>  
    )

}

export default Products