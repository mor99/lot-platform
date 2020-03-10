
import { Component } from 'react';
import { Button,  Input } from 'antd'
import CreateTable from '../../../libs/components/create_table/index.js'
import styles from './index.less'
import {CollectionAddDevice} from './adddevice.js'

const {Search } = Input

export default class Overall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    state = {
        visible: false
    };

    showModal = () => {

        this.setState({ visible: true });
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    handleCreate = () => {
        const { form } = this.formRef.props;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }

            console.log('Received values of form: ', values);
            form.resetFields();
            this.setState({ visible: false });
        });
    };

    saveFormRef = formRef => {
        this.formRef = formRef;
    };

    render() {
        const columns = [
            {
                title: '设备编号',
                dataIndex: 'key',
                defaultSortOrder: 'descend',
                sorter: (a, b) => b.key - a.key,
            },
            {
                title: '设备名称',
                dataIndex: 'name',

            },
            {
                title: '设备描述',
                dataIndex: 'description',
            },
            {
                title: '创建时间',
                dataIndex: 'starttime',
            },
            {
                title: '更新时间',
                dataIndex: 'updatetime',
                defaultSortOrder: 'descend',
                sorter: (a, b) => a.age - b.age,
            },
            {
                title: '是否启用',
                dataIndex: 'isuse',
                defaultSortOrder: 'descend',
                sorter: (a, b) => a.age - b.age,
            },
            {
                title: '通信密码',
                dataIndex: 'msg',
            },
            {
                title: '操作',
                dataIndex: 'action',
            },
        ];

        return (
            <div className={styles.devicelist}>
                <Button
                className={styles.button}
                type="primary" 
                onClick={this.showModal}>
                    添加设备
                </Button>
                <Search 
                        className={styles.search}
                        placeholder="按设备名搜索" 
                        onSearch={value => console.log(value)} 
                        enterButton />
                <div className={styles.devicetable}>
                        <CollectionAddDevice
                            wrappedComponentRef={this.saveFormRef}
                            visible={this.state.visible}
                            onCancel={this.handleCancel}
                            onCreate={this.handleCreate}
                        /> 
                        <CreateTable columns={columns} dataSource={this.data} />
                </div>
            </div>
        )
    }
}