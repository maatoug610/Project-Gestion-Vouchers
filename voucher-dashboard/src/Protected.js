import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
function Protected(props) {
    let Cmp = props.Cmp
    const history = useHistory();
    
    if (!localStorage.getItem('user-info')) {
        history.push("/login")
    }else{
        return (
            <div>
                <Cmp />
            </div>

        )
    }
    // setTimeout(() => {
    //     return (
    //         <div>
    //             <Cmp />
    //         </div>

    //     )
    // }, 1000);
    return (
        <div>

        </div>
    )

}
export default Protected;