import { Component } from 'react';
import { Button, Form, Input, Radio } from 'antd'
import CreateTable from '../../../libs/components/create_table/index.jsx'

import { CollectionCreateForm } from './addstrategy.jsx'
import { CollectionCreateForm1 } from './addcontent.jsx'
import styles from './index.less'

const { Search } = Input

//import { DownOutlined } from '@ant-design/icons';

export default class StrategyData extends Component {
    constructor(props) {
        super(props);
        this.state = { formLayout: 'deploy' }
        this.newone = ''
    }
    state = {
        visible: false,
        visible1: false,
    };
    showModal = () => {
        if (this.state.newone === '新建策略') {
            this.setState({ visible: true });
        }
        else {
            this.setState({ visible1: true });
        }
    };

    handleCancel = () => {
        this.setState({ visible: false, visible1: false });
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
    handleFormLayoutChange = e => {
        this.setState({ formLayout: e.target.value });
    }
    render() {
        const deploycolumns = [
            {
                title: '配置编号',
                dataIndex: 'id',
                defaultSortOrder: 'descend',
                sorter: (a, b) => a.age - b.age,
            },
            {
                title: '参数名称',
                dataIndex: 'name',

            },
            {
                title: '配置描述',
                dataIndex: 'description',
            },
            {
                title: '数据流向',
                dataIndex: 'dateFlow',
            },
            {
                title: '上传协议',
                dataIndex: 'uploadingDeal',
                defaultSortOrder: 'descend',
            },
            {
                title: '创建时间',
                dataIndex: 'start',
                defaultSortOrder: 'descend',
            },
            {
                title: '更新时间',
                dataIndex: 'update',
            },
            {
                title: '是否启用',
                dataIndex: 'isUsing',
            },
        ];
        const contentcolumns = [
            {
                title: '内容编号',
                dataIndex: 'id',
                defaultSortOrder: 'descend',
                sorter: (a, b) => a.age - b.age,
            },
            {
                title: '内容名称',
                dataIndex: 'name',

            },
            {
                title: '内容描述',
                dataIndex: 'description',
            },
            {
                title: '基于模型ID',
                dataIndex: 'modelId',
            },
            {
                title: '创建时间',
                dataIndex: 'start',
                defaultSortOrder: 'descend',
                sorter: (a, b) => a.age - b.age,
            },
            {
                title: '更新时间',
                dataIndex: 'update',
                defaultSortOrder: 'descend',
                sorter: (a, b) => a.age - b.age,
            },
        ];

        const { formLayout } = this.state;
        const columns =
            formLayout === 'deploy'
                ? deploycolumns
                : contentcolumns;
        this.newone =
            formLayout === 'deploy'
                ? '新建策略'
                : '添加内容';
        return (

            <div className={styles.strategyupload}>
                <Form layout={formLayout}>
                    <Form.Item className={styles.formitem}>
                        <Radio.Group defaultValue="deploy" onChange={this.handleFormLayoutChange}>
                            <Radio.Button value="deploy">策略配置</Radio.Button>
                            <Radio.Button value="content">策略内容</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item>
                        <Button className={styles.button} type="primary" onClick={this.showModal}>
                            {this.newone}
                        </Button>
                        <Search className={styles.search} placeholder="按策略参数名搜索" onSearch={value => console.log(value)} style={{ width: 200, float: 'right' }} enterButton />
                        <CollectionCreateForm
                            wrappedComponentRef={this.saveFormRef}
                            visible={this.state.visible}
                            onCancel={this.handleCancel}
                            onCreate={this.handleCreate}
                        />
                        <CollectionCreateForm1
                            wrappedComponentRef={this.saveFormRef}
                            visible={this.state.visible1}
                            onCancel={this.handleCancel}
                            onCreate={this.handleCreate}
                        />
                        <CreateTable columns={columns} dataSource={null} />
                    </Form.Item>
                </Form>
            </div>
        );
    }
}