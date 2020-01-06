import { Component } from 'react';
import { Layout, Menu, Icon, Breadcrumb, Tabs, Dropdown } from 'antd';
import Link from 'umi/link';

const { Header, Content, Footer, Sider } = Layout;
//const { SubMenu } = Menu;

const { TabPane } = Tabs;
// 引入子菜单组件
const SubMenu = Menu.SubMenu;


const menu = (
    <Menu>
        <Menu.Item>
            <Link to="/strategy/data">个人中心</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/strategy/data">退出登录</Link>
        </Menu.Item>
    </Menu>)

export default class BasicLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo"
                        style={{
                            height: '64px',
                            background: 'rgba(0, 120, 64,)',
                            margin: '0px',
                        }}>
                        <h1 style={{ color: '#e8ecf0', 'padding-top': '20px', 'padding-bottom': '14px', 'text-align': 'center' }}>物联网平台</h1>
                    </div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Link to="/overall">
                                <Icon type="pie-chart" />
                                <span>总览</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/dashboard">
                                <Icon type="desktop" />
                                <span>运行监控</span>
                            </Link>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <Icon type="user" />
                                    <span>设备管理</span>
                                </span>
                            }
                        >
                            <Menu.Item key="3"><Link to="/device/list">设备列表</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/device/model">设备模型</Link></Menu.Item>
                            <Menu.Item key="5"><Link to="/device/binding">策略管理</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                                <span>
                                    <Icon type="team" />
                                    <span>策略管理</span>
                                </span>
                            }
                        >
                            <Menu.Item key="6"><Link to="/strategy/data">采集策略</Link></Menu.Item>
                            <Menu.Item key="7"><Link to="/strategy/upload">上传策略</Link></Menu.Item>
                            <Menu.Item key="8"><Link to="/strategy/control">控制策略</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', textAlign: 'right', padding: 20 }}>
                        <Tabs defaultActiveKey="2">
                            <TabPane
                                tab={
                                    <span>
                                        <Dropdown 
                                        overlay={menu}>
                                            <a>用户管理</a>
                                        </Dropdown>
                                    </span>
                                }
                                key="1"
                            />
                            <TabPane
                                tab={
                                    <span>
                                        <Icon type="apple" />
                                        联系我们
                                </span>
                                }
                                key="2"
                            />
                            <TabPane
                                tab={
                                    <span>
                                        <Icon type="android" />
                                        问题提交
                                </span>
                                }
                                key="3"
                            />
                        </Tabs>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>首页</Breadcrumb.Item>
                            <Breadcrumb.Item>总览</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', minHeight: 640 }}>{this.props.children}</div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>©2020 宁夏计算机软件与技术服务有限公司</Footer>
                </Layout>
            </Layout>
        )
    }
}