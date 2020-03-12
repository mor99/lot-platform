import { Component } from 'react';
import { Button } from 'antd'
import CreateTable from '../../../libs/components/create_table/index.jsx'
import styles from './index.less'

export default class Overall extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }
    render() {
        const columns = [
            {
                title: '设备名称',
                dataIndex: 'name',

            },
            {
                title: '采集策略',
                dataIndex: 'collect',
            },
            {
                title: '上传策略',
                dataIndex: 'upload',
            },
            {
                title: '控制策略',
                dataIndex: 'control',
            },
        ];

        return (
            <div className={styles.binding}>
                <div className={styles.button}>
                    <Button type="primary">
                        添加绑定
                </Button>
                </div>
                <div className={styles.createtable}>
                    <CreateTable columns={columns} dataSource={null} />
                </div>
            </div>
        )
    }
}