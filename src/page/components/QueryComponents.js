import React from 'react'
import MediaQuery from 'react-responsive'

export const QueryMobile = (props) => {
    return <MediaQuery query='(max-width:800px)'>
        { props.children }
    </MediaQuery>
}
export const QueryPC = (props) => {
    return <MediaQuery query='(min-width:800px)'>
        { props.children }
    </MediaQuery>
}