import React, { forwardRef } from 'react';

import { MdDashboard } from 'react-icons/md'
import { signOut } from 'firebase/auth';
import { auth } from 'libs/firebase';

import { Button } from 'ui/buttons'
import {SidebarStyles, SideBarHeader} from './styles'
import ProductOptions from './ProductOptions';


function SideBar($prop) {

    function onLogOutRequest(e){
        signOut(auth)
    }

    return ( 
        <SidebarStyles>
            <SideBarHeader>
                <MdDashboard size="1.75rem"/>
                <h2>Side Bar</h2>
            </SideBarHeader>

            <ProductOptions/>

            <div className="content">
                <Button onClick={onLogOutRequest}>Log Out</Button>
            </div>
        </SidebarStyles>
        
     );
}

export default SideBar;