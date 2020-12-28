import React from 'react'
import {Helmet} from "react-helmet";
const Meta = ({title,description,keywords}) => {
    return (
        <Helmet>
        <title>{title} </title>
        <meta name="description" content={description} />
        <meta name="keyword" content={keywords} />
            
        </Helmet>
    )
}



 Meta.defaultProps = {
     title:'Welcome to youssef_Shop',
     keywords:'buy you are the winner',
     description:'We sell the best products for cheap'

 }
export default Meta
