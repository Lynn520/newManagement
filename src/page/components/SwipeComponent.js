import React from 'react'
import styled, { withTheme } from 'styled-components'
import { QueryPC, QueryMobile } from '$components/QueryComponents'
const ComponentStyled = styled.div`
    .mobileSwipeContainer{
        width:100%;
        overflow:hidden;
        height:auto;
        -webkit-overflow-scrolling:touch;
        position:relative;
        .swipe-pointer-left,.swipe-pointer-right{
            height:0.78rem;
            width:0.78rem;
            position:${ ({fixedIcon})=>(fixedIcon?'fixed':'absolute') };
            top:${ ({fixedIcon})=>(fixedIcon?'60%':'50%') };
            transform:translate(0, -50%);
            z-index:10;
        }
        .swipe-pointer-left{
            left:0.2rem;
            background:url(${({theme})=>theme.mobileImages.scorllIconLeft}) no-repeat center center;
            background-size:100% auto; 
        }
        .swipe-pointer-right{
            right:0.2rem;
            background:url(${({theme})=>theme.mobileImages.scorllIconRight}) no-repeat center center;
            background-size:100% auto; 
        }
        .mobileSwipe{
            width:100%;
            overflow-x:scroll;
            overflow-y:hidden;
        }
    }
`
class SwipeComponent extends React.Component{
    state = {
        leftIcon:false,
        rightIcon:true,
        showIcon:true
    }
    scrollHandler = (e) => {
        let scrEle = this.scrollEle
        if(scrEle){
            //检测左右箭头的隐藏和显示
            this.checkScrollIcon(scrEle)
        }
        //外部要使用滚动事件时用这个属性
        if(typeof this.props.scrollFn === 'function'){
            this.props.scrollFn(e)
        }
    }
    checkScrollIcon = (scrEle) => {
        const left = scrEle.scrollLeft;
        const scrollWidth = scrEle.scrollWidth;
        const clientWidth = document.documentElement.clientWidth;
        const preLeft = this.preLeft || 0;
        //这里只在状态应该变化时触发setState
        if((left < 5) && (preLeft >= 5)){
            this.setState({
                leftIcon:false
            })
        }else if((left > 5 )&&(preLeft <=  5)){
            this.setState({
                leftIcon:true
            })
        }
        if((scrollWidth - left - clientWidth < 5)&&(scrollWidth - preLeft - clientWidth >= 5)){
            this.setState({
                rightIcon:false
            })
        }else if((scrollWidth - left - clientWidth > 5)&&(scrollWidth - preLeft - clientWidth <= 5)){
            this.setState({
                rightIcon:true
            })
        }
        this.preLeft = left
    }
    //点击箭头时翻一屏
    scrollLeftHandler = (e) => {
        this.scrollEle.scrollLeft = this.scrollEle.scrollLeft - document.documentElement.clientWidth
    }
    scrollRightHandler = (e) => {
        this.scrollEle.scrollLeft = this.scrollEle.scrollLeft + document.documentElement.clientWidth
    }
    componentDidMount(){
        const scrollWidth = this.scrollEle&&this.scrollEle.scrollWidth
        this.preWidth = scrollWidth
        console.log(scrollWidth)
        if(scrollWidth<= document.documentElement.style.fontSize.slice(0,-2)/50*375){
            this.setState({
                showIcon:false
            })
        }else{
            this.setState({
                showIcon:true
            })
        }
    }
    componentWillReceiveProps(){
        const scrollWidth = this.scrollEle&&this.scrollEle.scrollWidth
        if(this.preWidth!==scrollWidth){
            if(scrollWidth<= document.documentElement.style.fontSize.slice(0,-2)/50*375){
                this.setState({
                    showIcon:false
                })
            }else{
                this.setState({
                    showIcon:true
                })
            }
            this.preWidth = scrollWidth
        }
    }
    render(){
        const { theme, fixedIcon } = this.props
        const { leftIcon, rightIcon, showIcon } = this.state
        return <ComponentStyled theme = { theme } fixedIcon = { fixedIcon }>
            <QueryMobile>
                <div className = "mobileSwipeContainer"  >
                    {leftIcon&&showIcon&&<div className='swipe-pointer-left' onClick = { this.scrollLeftHandler } ></div>}
                    {rightIcon&&showIcon&&<div className='swipe-pointer-right' onClick = { this.scrollRightHandler }></div>}
                    <div className="mobileSwipe" onScroll = { this.scrollHandler } ref = { ele => { this.scrollEle = ele } }>
                        { this.props.children }
                    </div>
                    {/* 要插入滚动容器的自定义render 这里主要是为了兼容移动端table 因为要嵌入外部分页器并保持定位位置 */}
                    { this.props.customRender&&this.props.customRender() }
                </div>
            </QueryMobile>
            <QueryPC>
                <div>
                    { this.props.children }
                </div>
            </QueryPC>
        </ComponentStyled>
    }
    componentWillUnmount(){

    }
}
export default withTheme(SwipeComponent)