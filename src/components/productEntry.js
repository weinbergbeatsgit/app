import { useState } from 'react';
import Variant from './productVariant';

const Product = props => {

  const childToParent = (variant, index, pfand) => {
    props.product.variants[index] = variant;
    props.childToParent(props.product, props.index, props.pfand);
  }


  return (
    <div key={props.product.name} className='flex-column margin-bottom-25 product-entry-panel align-center'>
      <h3 className='productName'>{props.product.name}</h3>
      <div key={props.product.name + "Variants"} className="flex-row gap-10">
        {
          props.product.variants.map((thisVariant, index) =>
            <Variant variant={thisVariant} index={index} pfand={props.pfand} childToParent={childToParent}/>
          )
        }
      </div>
    </div>
  )
}
export default Product