import React from 'react';
import ReactDom from 'react-dom';
import { Menu, Icon } from 'antd';
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink  } from 'react-router';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class MainLeft extends React.Component {
		constructor(props) {
        super(props);
        this.state = {
            current: '1',
            username: '',
            theme: 'light',
        };
    }

    handleClick(e) {
        this.setState({
            current: e.key
        });
    }
    componentDidMount() {
        this.setState({
            username: 'wyq'
        });
    }

    render() {
        return (
        	<div>
	        	<div className ="mainLeft">
		        	<IndexLink to="/"><img src='src/images/logo.png' width="50" id="logo"/></IndexLink>
		          <Menu onClick={this.handleClick.bind(this)}
		          	theme={this.state.theme}
				        style={{ width: 240 }}
				        defaultOpenKeys={['sub1']}
				        selectedKeys={[this.state.current]}
				        mode="inline"
				      >
				        <Menu.Item key="1">没有子目录</Menu.Item>
				        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
				          <Menu.Item key="5"><Link to="TableFilters"  activeStyle={{}}><Icon type="mail" />筛选表格</Link></Menu.Item>
				          <Menu.Item key="6"><Link to="TableForPages"><Icon type="mail" />分页表格</Link></Menu.Item>
				          <SubMenu key="sub3" title="Tabs标签页">
				            <Menu.Item key="7"><Link to="TabsGroup"><Icon type="mail" />简单标签</Link></Menu.Item>
				            <Menu.Item key="8">Option 8</Menu.Item>
				          </SubMenu>
				        </SubMenu>
				        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
				          <Menu.Item key="9">Option 9</Menu.Item>
				          <Menu.Item key="10">Option 10</Menu.Item>
				          <Menu.Item key="11">Option 11</Menu.Item>
				          <Menu.Item key="12">Option 12</Menu.Item>
				        </SubMenu>
				      </Menu>
				    </div> 
		      </div>
        )
    }

}

export default MainLeft; 
