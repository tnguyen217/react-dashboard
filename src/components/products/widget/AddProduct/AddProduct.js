import React, {useState} from 'react';
import { useNumberFormat } from 'hooks/useNumberFormat';
import { useAddNewProduct } from 'hooks/useAddNewProduct';
import {AddProductStyles} from './styles'
import { ProductEditor } from 'components/products/ProductEditor';
import { EditorFeedback } from 'components/products/EditorFeedback';
import ProductPreview from 'assets/images/8k2.jpg';

const defaults = {
  description: "Ullamcorper a lacus vestibulum sed arcu non. Imperdiet dui accumsan sit amet nulla. Velit egestas dui id ornare arcu odio ut sem. Vestibulum sed arcu non odio euismod lacinia. At auctor urna nunc id cursus metus aliquam eleifend mi.",
  name: "Product Name",
  price: "0.00"
}

function AddProduct ({children, ...props})  {
  const [isWriting, setIsWriting] = useState(false)
  const [productName, setProductName] = useState(defaults.name)
  const [productPrice, setProductPrice] = useState(defaults.price)
  const [productImage, setProductImage] = useState({previewImage:ProductPreview, file:null})
  const [productDescription, setProductDescription] = useState(defaults.description)
  const [loading, productLoader] = useAddNewProduct()
  
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

  function handleSubmit(e){
    e.preventDefault()

    const productData = {
      productName,
      productPrice,
      productDescription
    }

    setIsWriting(true)
    productLoader(productData, productImage.file)
    setProductDescription(defaults.description)
    setProductImage({previewImage:ProductPreview, file:null})
    setProductName(defaults.name)
    setProductPrice(defaults.price)

  }

  if(isWriting){
    return(
      <EditorFeedback status={loading} writeCompleted={setIsWriting} />
    )
  }
  else{
    return (
      <AddProductStyles  {...props}>
        <ProductEditor 
        productName={productName} handleProductName={handleProductName}
        productPrice={productPrice} handleProductPrice={handleProductPrice}
        productImage={productImage} setProductImage={setProductImage}
        productDescription={productDescription} handleProductDescription={handleProductDescription}
        handleSubmit={handleSubmit}
        />
      </AddProductStyles>
    )
  }


  
}

export default AddProduct