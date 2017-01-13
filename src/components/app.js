'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink  } from 'react-router';

//引入组件文件
import MainHeader from './mainHead.js';
import MainLeft from './mainLeft.js';
import myIntroduce from './myIntroduce.js';
import TableFilters from './TableFilters.js';
import TableForPages from './TableForPages.js';
import TabsGroup from './TabsEasy.js';


// 配置导航
class Sider extends React.Component {
	  render() {
		    return (
			      <div>
				        <MainHeader />
				        <MainLeft />
				        <div className="rightWrap" id="rightWrap">
				        	{this.props.children}
				        </div>
			      </div>
		    )
	  }
}


// 配置路由
ReactDom.render((
    <Router history={hashHistory} >
        <Route path="/" component={Sider}>
        		<IndexRoute component={myIntroduce} />
          	<Route path="myIntroduce" component={myIntroduce} />
          	<Route path="TableFilters" component={TableFilters} />
          	<Route path="TableForPages" component={TableForPages} />
          	<Route path="TabsGroup" component={TabsGroup} />
        </Route>
    </Router>
), document.getElementById('app'));
