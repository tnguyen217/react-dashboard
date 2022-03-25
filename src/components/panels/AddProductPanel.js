import React, { forwardRef } from 'react';
import { PanelStyles, PanelBody, PanelHeader } from './styles';

import { AddProduct } from 'components/products/widget/AddProduct';

function AddProductPanel({title, ...$prop}) {
    return ( 
        <PanelStyles>
            <PanelHeader>
                <h2>{ title || "Display Panel" }</h2>
            </PanelHeader>
            <PanelBody>
                <AddProduct/>
            </PanelBody>
        </PanelStyles>
     );
}

export default AddProductPanel;