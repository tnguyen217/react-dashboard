import React from 'react';

import {ProductDataEntryFormStyles, ProductImage, ProductName, ProductPrice, ProductDescription } from './styles'
import { Label, Input } from 'ui/forms';
import { ProductImageDropBox } from '../ProductImageDropBox';
import { SubmitButton } from 'ui/buttons';

function ProductDataEntryForm ({children, handleProductName, handleProductPrice, setProductImage, handleProductDescription, handleSubmit, ...props})  {
  return (
        <ProductDataEntryFormStyles  {...props} onSubmit={handleSubmit}  >
          <ProductImage>
            <Label>Product Image</Label>
            <ProductImageDropBox setProductImage={setProductImage} />
          </ProductImage>

          <fieldset>
            <ProductName>
              <Label>Product Name</Label>
              <Input onChange={(e)=>handleProductName(e.target.value.trim())} maxLength={30} />
            </ProductName>

            <ProductPrice>
              <Label>Product Price</Label>
              <Input onChange={(e)=>handleProductPrice(e.target.value.trim())} maxLength={8}/>
            </ProductPrice>
          </fieldset>
          

          <ProductDescription>
            <Label>Product Description</Label>
            <Input onChange={(e)=>handleProductDescription(e.target.value.trim())} maxLength={1000} />
          </ProductDescription>

          <div>
            <SubmitButton width="100%" padding=".75rem" margin="1.125rem 0 0 0" type='submit' >Add Product</SubmitButton>
          </div>

        </ProductDataEntryFormStyles>
  )
}

export default ProductDataEntryForm