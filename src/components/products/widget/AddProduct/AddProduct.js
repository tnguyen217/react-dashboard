import React, {useState} from 'react';
import { useNumberFormat } from 'hooks/useNumberFormat';
import {AddProductStyles} from './styles'
import { ProductEditor } from 'components/products/ProductEditor';
import ProductPreview from 'assets/images/8k2.jpg';

function AddProduct ({children, ...props})  {
  const [productName, setProductName] = useState('Product Name')
  const [productPrice, setProductPrice] = useState('0.00')
  const [productImage, setProductImage] = useState(ProductPreview)
  const [productDescription, setProductDescription] = useState('Ullamcorper a lacus vestibulum sed arcu non. Imperdiet dui accumsan sit amet nulla. Velit egestas dui id ornare arcu odio ut sem. Vestibulum sed arcu non odio euismod lacinia. At auctor urna nunc id cursus metus aliquam eleifend mi.')
  const formatter = useNumberFormat()

  function handleProductName(name){
    setProductName(name)
  }

  function handleProductPrice(price){
    setProductPrice(formatter(price))
  }

  function handleProductDescription(description){
    setProductDescription(description)
  }


  return (
        <AddProductStyles  {...props}>
          <ProductEditor 
          productName={productName} handleProductName={handleProductName}
          productPrice={productPrice} handleProductPrice={handleProductPrice}
          productImage={productImage} setProductImage={setProductImage}
          productDescription={productDescription} handleProductDescription={handleProductDescription}
          />

        </AddProductStyles>
  )
}

export default AddProduct