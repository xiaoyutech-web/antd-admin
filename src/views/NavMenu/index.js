import React from 'react';
import {Link} from 'react-router-dom';
import { Menu, Icon } from 'antd';
import Cookies from 'js-cookie';

const SubMenu = Menu.SubMenu;

export default class NavMenu extends React.Component{
    menuItemClicked(message){
        switch(message.key){
            case "logout":
                Cookies.remove("token");
                this.props.setlogin(false);
                break;
            default:
                break;
        }
    }
    render(){
        return (
            <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            onClick = {this.menuItemClicked.bind(this)}
            style={{ height: '100%', borderRight: 0 }}
            >
                <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                    <Menu.Item key="1"><Link to="/">系统信息</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/network">网络</Link></Menu.Item>
                    <Menu.Item key="3">option3</Menu.Item>
                    <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                    <Menu.Item key="5">option5</Menu.Item>
                    <Menu.Item key="6">option6</Menu.Item>
                    <Menu.Item key="7">option7</Menu.Item>
                    <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                    <Menu.Item key="9">option9</Menu.Item>
                    <Menu.Item key="10">option10</Menu.Item>
                    <Menu.Item key="11">option11</Menu.Item>
                    <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
                <Menu.Item key="logout">
                    <Icon type="logout" />
                    <span>注销用户</span>
                </Menu.Item>            
            </Menu>
        )
    }
}
