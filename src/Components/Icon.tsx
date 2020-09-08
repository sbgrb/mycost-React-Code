import React from "react";

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('Icons', true, /\.svg$/));} catch (error) {console.log(error);}


type Props = {
    name: string
}

const Icon = (props: Props) =>{
    return(
        <svg className='icons'>
            <use xlinkHref={'#' + props.name}/>
        </svg>
    )
}

export  default Icon;