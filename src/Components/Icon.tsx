import React from "react";

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('Icons', true, /\.svg$/));} catch (error) {console.log(error);}


type Props = {
    name?: string
} & React.SVGAttributes<SVGElement>

const Icon = (props: Props) =>{
    const {name,children,className, ...rest}  = props
    return(
        <svg className='icons' {...rest}>
            {props.name && <use xlinkHref={'#' + props.name}/>}
        </svg>
    )
}

export  default Icon;