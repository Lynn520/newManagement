import React from 'react'
import { QueryPC, QueryMobile } from '$components/QueryComponents'
export default function withMediaQuery (PcComponent,MobileComponent){
    return class MediaQueryComponent extends React.Component{
        render(){
            return <div>
                <QueryPC>
                    <PcComponent { ...this.props } /> 
                </QueryPC>
                <QueryMobile>
                    <MobileComponent { ...this.props } /> 
                </QueryMobile>
            </div>
        }
    }
}