import { Component } from 'react';
import { Button, Input } from 'antd'
import  CreateTable from '../../../libs/components/create_table/index.js'
import {CollectionCreateForm} from './addstrategy.js'
import styles from './index.less'

const { Search } = Input

export default class StrategyControl extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }
    state = {
        visible: false,
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
                title: '策略编号',
                dataIndex: 'id',

            },
            {
                title: '策略名称',
                dataIndex: 'name',
            },
            {
                title: '策略描述',
                dataIndex: 'description',
            },
            {
                title: '基于模型ID',
                dataIndex: 'modelid',
            },
            {
                title: '创建时间',
                dataIndex: 'start',
            },
            {
                title: '更新时间',
                dataIndex: 'update'
            }
        ];

        return (
            <div className={styles.control}>
                <div>
                    <Button className={styles.button} type="primary" onClick={this.showModal}>
                        新建策略
                    </Button>
                    <Search className={styles.search} placeholder="按策略参数名搜索" onSearch={value => console.log(value)}enterButton />
                </div>
                    <CollectionCreateForm
                        wrappedComponentRef={this.saveFormRef}
                        visible={this.state.visible}
                        onCancel={this.handleCancel}
                        onCreate={this.handleCreate}
                    />
                    <CreateTable columns={columns} dataSource={null} />
            </div>
        )
    }
}