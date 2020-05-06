import React from "react"
import styled, { withTheme } from "styled-components"
import { connect } from 'react-redux'
const ErrorDataStyled = styled.div`
    .error-data-container{
        overflow:hidden;
        position:relative;
        width:100%;
        min-height:500px;
        span{
            position:absolute;
            left:50%;
            top:35%;
            font-size:20px;
            z-index:20;
        }
        img{
            width:534px;
            height:212px;
            position:absolute;
            left:50%;
            top:50%;
            transform:translate(-50%,-50%);
        }
    }

`
const MobileStyled = styled.div`
${({theme})=> theme.styleMixin.queryM}{
    .error-data-container{
        min-height:5rem;
        span{
            font-size:0.24rem;
        }
        img{
            width:80%;
            height:auto;
        }
    }
}
`
class ErrorData extends React.Component{
    
    render(){
        const { theme } = this.props
        return <ErrorDataStyled theme={theme} >
            <MobileStyled theme={theme}>
                <div className='error-data-container'>
                    <span>{this.props.language.errorData}</span>
                    <img src = { this.props.theme.images.noDataEmpty } />
                </div>
            </MobileStyled>
        </ErrorDataStyled>
        
        
    }

}
function mapStateToProps(state){

    //  console.log(state);
    return{
        language: state.settingLanguageReducer.language,
    }
}

function mapDispatchToProps(dispatch) {
    return {
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withTheme(ErrorData));