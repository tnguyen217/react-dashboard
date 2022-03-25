import styled from 'styled-components';



const ProductPreviewStyles  = styled.div`
    max-width: 360px;
    align-self: strech;
    padding: 3rem 2rem;
    background-color: #f8fafc;
`;

const ProductImage = styled.div`
    margin: 1rem auto 0;
    width: 300px;

    img {
        width: 100%;
        height: auto;

    }
`;

const ProductName  = styled.h2`
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 2.5;
    letter-spacing: -.5px;
    color: #1e293b;
    word-wrap: break-word;
`;

const ProductPrice  = styled.p`
    font-size: 2rem;
    font-weight: 100;
    letter-spacing: -1px;
    color: #64748b;
    margin: 0.3rem 0 .25rem;

`;

const ProductDescription  = styled.div`
    font-size: 14px;
    color: #94a3b8;
`;




export {ProductPreviewStyles, ProductImage, ProductName, ProductPrice, ProductDescription}