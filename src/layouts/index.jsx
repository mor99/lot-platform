import { Component } from 'react';
import { Layout, Menu, Icon, Breadcrumb, Tabs, Dropdown } from 'antd';
import Link from 'umi/link';
import withRouter from 'umi/withRouter'
//import Bread from './Breadcrumbs.jsx'
import styles from './index.less'


const { Header, Content, Footer, Sider } = Layout;
//const { SubMenu } = Menu;

const { TabPane } = Tabs;
// 引入子菜单组件
const SubMenu = Menu.SubMenu;

const menu = (
    <Menu>
        <Menu.Item>
            <Link to="/overall">个人中心</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/overall">退出登录</Link>
        </Menu.Item>
    </Menu>)

const routes = {
    '/': '总览',
    '/overall': '总览',
    '/dashboard': '运行监控',
    '/device/binding': '策略绑定',
    '/device/list': '设备列表',
    '/device/model': '设备模型',
    '/strategy/data': '采集策略',
    '/strategy/upload': '上传策略',
    '/strategy/control': '控制策略'
}

@withRouter
class BasicLayout extends Component {
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
        console.log(this.props.children)
        return (
            <Layout className={styles.layout}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className={styles.logo}>
                        <p className={styles.title}>物联网平台</p>
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
                                    <Icon type="setting" />
                                    <span>设备管理</span>
                                </span>
                            }
                        >
                            <Menu.Item key="3"><Link to="/device/list">设备列表</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/device/model">设备模型</Link></Menu.Item>
                            <Menu.Item key="5"><Link to="/device/binding">策略绑定</Link></Menu.Item>
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
                    <Header className={styles.header}>
                        <Tabs>
                            <TabPane
                                tab={
                                    <span>
                                        <Icon type="team" />
                                        <Dropdown
                                            overlay={menu}>
                                            <a href='/overll'>用户管理</a>
                                        </Dropdown>
                                    </span>
                                }
                                key="1"
                            />
                            <TabPane
                                tab={
                                    <Link to="/overall">
                                        <span>
                                            <Icon type="phone" />
                                            联系我们
                                     </span>
                                    </Link>
                                }
                                key="2"
                            />
                            <TabPane
                                tab={
                                    <Link to="/overall">
                                        <span>
                                            <Icon type="info-circle" />
                                            问题提交
                                    </span>
                                    </Link>
                                }
                                key="3"
                            />
                        </Tabs>
                    </Header>
                    <Content className={styles.content}>
                        <Breadcrumb className={styles.breadcrumb}>
                            <Breadcrumb.Item><Link to=""><Icon type="home" />首页</Link></Breadcrumb.Item>
                            <Breadcrumb.Item><Link to={this.props.location.pathname}>{routes[this.props.location.pathname]}</Link></Breadcrumb.Item>
                        </Breadcrumb>
                        <div className={styles.children}>{this.props.children}</div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>©2020 宁夏计算机软件与技术服务有限公司</Footer>
                </Layout>
            </Layout>
        )
    }
}
export default BasicLayout