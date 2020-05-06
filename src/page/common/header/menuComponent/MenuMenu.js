import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Menu, Modal } from 'antd';
const { SubMenu } = Menu;
class MenuMenu extends Component {
    state = {
        current: 'informationOverview',
      };

    handleClick = e => {
    console.log('click ', e);
    this.setState({
        current: e.key,
    });
    };

    render(){
        const { theme } = this.props
        return(
            <Menu
                onClick={this.handleClick}
                mode="horizontal"
                defaultSelectedKeys={['informationOverview']}
                selectedKeys={[this.state.current]}
                className={`menu`}
            >
                
                <Menu.Item key="onDuty" className={`li`}>
                    <Link to='schedule'>值班值守</Link>
                </Menu.Item>
                <Menu.Item key="informationOverview" className={`li`}>
                    <Link to='transactions'>信息总览</Link>
                </Menu.Item>
                <Menu.Item key="dynamicMonitoring" className={`li`}>
                    <Link to='ram'>动态监测</Link>
                </Menu.Item>
                <Menu.Item key="riskAssessment" className={`li`} >
                    <Link to='ram'>
                        风险研判
                    </Link>
                </Menu.Item>
                <div className="headTitle" style={{width:'784px',height:'70px',}}>
                    <img style={{width: '100%'}} src={theme.images.headTitle}/>
                </div>
                <Menu.Item key="riskEarlyWarning" className={`li`}>
                    <Link to='newBlock'>风险预警</Link>
                </Menu.Item>
                <Menu.Item key="consultationAnalysis" className={`li`}>
                    <Link to='transactions'>会商分析</Link>
                </Menu.Item>
                <Menu.Item key="operationManagement" className={`li`}>
                    <Link to='ram'>运行管理</Link>
                </Menu.Item>
                <Menu.Item key="knowledgeBase" className={`li`}>
                    <Link to='ram'>知识库</Link>
                </Menu.Item>
                <SubMenu title={"系统管理"}>
                    <Menu.ItemGroup >
                        <Menu.Item key="userManagement"><Link to='userManagement'>用户管理</Link></Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
            </Menu>
        )
    }
}

export default MenuMenu
