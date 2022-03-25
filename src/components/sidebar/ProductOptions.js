import React from "react"
import { Link } from "react-router-dom";
import styled from 'styled-components';

const ProducOptionStyles = styled.ul`
    margin: 3rem 0 0;
    
    a {
        font-size: 14px;
    }
`;

function ProductOptions($prop) {
    return ( 
        <ProducOptionStyles>
            <li>
                <Link to="/dashboard">View All Products</Link>
            </li>
            <li>
                <Link to="add">Add New Product</Link>
            </li>
        </ProducOptionStyles>
     );
}

export default ProductOptions;