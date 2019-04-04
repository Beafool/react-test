/**
 * 主页面路由组件
 */
import React, {Component} from 'react';
import {Route,Switch,Redirect} from "react-router-dom";

import {
    Layout, Breadcrumb,
} from 'antd';

import Home from '../home';
import Category from '../category';
import Product from '../product';
import LeftNav from '../../components/left-nav';
import User from '../user';
import Role from '../role';
import Bar from '../charts/bar';
import Line from '../charts/line';
import Pie from '../charts/pie';

import { getItem } from "../../utils/storage-utils";
import memory from '../../utils/memory-utils';
import HeaderMain from "../../components/header-main";


const {
    Header, Content, Footer, Sider,
} = Layout;


export default class Admin extends Component {
    /*
      1.要持久化储存用户信息 --> localhost
      2.性能优化（反复使用这么getItem等方法，性能不好，所以保存在内存中）

     */
    constructor(props){
        super(props);
        //初始化状态
        this.state = {
            collapsed: false,
        }
        //判断用户是否登录过
        const user = getItem();
        if (user && user._id ){
            //在内存中储存用户信息
            memory.user = user;
        }

    }

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }

    render() {
        //说明用户没有登录过，跳转到登录页面
        if (!memory.user||!memory.user._id){
            return <Redirect to="/login" />
        }
    const { collapsed } = this.state;
    const opacity = collapsed ? 0 : 1;
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                  <LeftNav opacity={opacity}/>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 ,height:100}}>
                        <HeaderMain />
                    </Header>
                    <Content style={{ margin: '20px 16px' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            <Switch>
                                <Route path="/home" component={Home} />
                                <Route path="/category" component={Category} />
                                <Route path="/product" component={Product} />
                                <Route path="/user" component={User} />
                                <Route path="/role" component={Role} />
                                <Route path="/charts/bar" component={Bar}/>
                                <Route path="/charts/line" component={Line}/>
                                <Route path="/charts/pie" component={Pie}/>
                                <Redirect to="/home" />
                            </Switch>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Keep your eyes on the stars and your feet on the ground.<br />
                        仰望星空，脚踏实地。
                    </Footer>
                </Layout>
            </Layout>
        );
    }

}
