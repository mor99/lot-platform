import { Component } from 'react';
import { Row, Col } from 'antd';
import styles from './index.less'

export default class Overall extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className={styles.overall}>
                <Row>
                    <Col className={styles.col} span={8} >
                        <h3>Change Log</h3>
                        <p>
                        <li>7.27</li>
                        策略管理-采集策略-策略配置可用<br/>
                        部分重构了设备管理-设备列表的内容
                        </p>
                        <br/>
                        <p>    
                        <li>7.28</li>
                        策略部分增删查改全部可用<br/>
                        增加了设备管理-设备模型页面</p>
                        <p>   
                        <li>8.8</li>
                        重构设备模型组件<br/>
                        设计了卡片式的设备模型页面<br/>
                        设备模型增删查改完成</p><br/>
                        <p>
                        <li>8.17</li>
                        重构策略内容添加组件<br/>
                        完成其他功能内容
                        </p>
                    </Col>
                    <Col className={styles.col} span={8} push={1}>
                        <h3>策略管理->采集策略</h3>
                    </Col>
                    <Col className={styles.col} span={6} push={2} >
                        <h3>这里是平台的使用说明</h3>
                        <br/>
                        <ul>
                            <li>使用说明</li><br/>
                            <li>教程</li><br/>
                            <li>文档中心</li><br/>
                            <li>设备说明</li><br/>
                            <li>策略说明</li>
                        </ul>
                    </Col>
                </Row>
            </div>
        )
    }
}