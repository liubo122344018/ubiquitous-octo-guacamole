import React, { useRef, useEffect } from 'react'

function Icon(props){
    const {type} = props
    return (
        <i className={`iconfont ${type}`} />
    )
}
export default Icon