import { Component } from 'react';
import { Select, Table, Button, Form, Input, Radio, Modal, Menu, Dropdown, Cascader } from 'antd'

const { TextArea, Search } = Input

//import { DownOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const options = [
    {
        value: 'RS485',
        label: 'RS485',
        children: [
            {
                value: 'Modbus-RTU',
                label: 'RTU',
            },
            {
                value: 'Privitr RS485',
                label: 'pri'
            }
        ],
    },
    {
        value: 'LoRa',
        label: 'lora',

        children: [
            {
                value: 'LoraWan',
                label: 'wan',
            },
            {
                value: 'privitalora',
                label: 'priwan'
            }
        ],
    },
];
//策略配置
const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
    // eslint-disable-next-line
    class extends React.Component {
        render() {
            const { visible, onCancel, onCreate, form } = this.props;
            const { getFieldDecorator } = form;
            return (
                <Modal
                    visible={visible}
                    title="添加控制策略"
                    cancelText='取消'
                    okText="添加"
                    onCancel={onCancel}
                    onOk={onCreate}
                >
                    <Form layout="vertical">
                        <Form.Item label="配置名称">
                            {getFieldDecorator('titie', {
                                rules: [{ required: true, message: '请输入名称' }],
                            })(<Input placeholder="给策略的配置起个名字吧" />)}
                        </Form.Item>
                        <Form.Item label="配置描述">
                            {getFieldDecorator('description', {
                                rules: [{ required: true, message: '采集策略内容的描述' }],
                            })(<TextArea rows={2} />)}
                        </Form.Item>
                        <Form.Item label="数据流向">
                            {getFieldDecorator('titie', {
                                rules: [{ required: true, message: '请输入数据流向' }],
                            })(<Input/>)}
                        </Form.Item>
                        <Form.Item label="上传协议">
                            {getFieldDecorator('titie', {
                                rules: [{ required: true, message: '请上传协议' }],
                            })(<Input/>)}
                        </Form.Item>
                    </Form>
                </Modal>
            );
        }
    },
);
//策略内容
const CollectionCreateForm1 = Form.create({ name: 'form_in_modal' })(
    // eslint-disable-next-line
    class extends React.Component {
        render() {
            const { visible, onCancel, onCreate, form } = this.props;
            const { getFieldDecorator } = form;
            const columns = [
                {
                    title: '属性名称',
                    dataIndex: 'name',
                },
                {
                    title: '属性别名',
                    dataIndex: 'age',

                },
                {
                    title: '类型',
                    dataIndex: 'address',
                },
                {
                    title: '单位',
                    dataIndex: 'age',
                },
                {
                    title: '是否上传',
                    dataIndex: 'age',
                },
                {
                    title: '上传间隔(秒)',
                    dataIndex: 'age',
                }]
            return (
                <Modal
                    visible={visible}
                    title="添加控制策略"
                    cancelText='取消'
                    okText="添加"
                    onCancel={onCancel}
                    onOk={onCreate}
                    width='100%'
                    style={{ top: '0px' }}
                >
                    <div style={{ height: '100vh' }}>
                        <div style={{ float: 'left', width: '30%' }}>
                            <Form layout="vertical">
                                <Form.Item label="配置名称:">
                                    {getFieldDecorator('titie', {
                                        rules: [{ required: true, message: '请输入名称' }],
                                    })(<Input placeholder="请输入名称" />)}
                                </Form.Item>
                                <Form.Item label="配置描述:">
                                    {getFieldDecorator('description', {
                                        rules: [{ required: false, message: '采集策略内容的描述' }],
                                    })(<TextArea placeholder="采集策略内容的描述" rows={2} />)}
                                </Form.Item>
                                <Form.Item label="选择模型:">
                                    {getFieldDecorator('description', {
                                        rules: [{ required: true, message: '请选择模型' }],
                                    })(<Select />)}
                                </Form.Item>
                                <Form.Item label='绑定结果:'>
                                    <div style={{ border: '1px dashed #eeeeee', borderRadius: '20px', height: '80px', width: '350px', backgroundColor: '#F5F5F5', textAlign: 'center' }}><br />选择策略以预览</div>
                                </Form.Item>
                            </Form>
                        </div>
                        <div style={{ float: 'right', width: '65%', top: '100px' }}>
                            <Table style={{ weigth: "100%" }} columns={columns} dataSource={null} locale={{
                                filterConfirm: '确定',
                                filterReset: '重置',
                                emptyText: '暂无数据'
                            }} />
                        </div>
                    </div>
                </Modal>
            );
        }
    },
);
export default class StrategyData extends Component {
    constructor(props) {
        super(props);
        this.state = { formLayout: 'deploy' }
    }
    state = {
        visible: false,
        visible1: false,
        newone: ''
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
                dataIndex: 'name',
                defaultSortOrder: 'descend',
                sorter: (a, b) => a.age - b.age,
            },
            {
                title: '参数名称',
                dataIndex: 'age',

            },
            {
                title: '配置描述',
                dataIndex: 'address',
            },
            {
                title: '数据流向',
                dataIndex: 'age',
            },
            {
                title: '上传协议',
                dataIndex: 'age',
                defaultSortOrder: 'descend',
            },
            {
                title: '创建时间',
                dataIndex: 'age',
                defaultSortOrder: 'descend',
            },
            {
                title: '更新时间',
                dataIndex: 'age',
            },
            {
                title: '是否启用',
                dataIndex: 'age',
            },
        ];
        const contentcolumns = [
            {
                title: '内容编号',
                dataIndex: 'name',
                defaultSortOrder: 'descend',
                sorter: (a, b) => a.age - b.age,
            },
            {
                title: '内容名称',
                dataIndex: 'age',

            },
            {
                title: '内容描述',
                dataIndex: 'address',
            },
            {
                title: '基于模型ID',
                dataIndex: 'age',
            },
            {
                title: '创建时间',
                dataIndex: 'age',
                defaultSortOrder: 'descend',
                sorter: (a, b) => a.age - b.age,
            },
            {
                title: '更新时间',
                dataIndex: 'age',
                defaultSortOrder: 'descend',
                sorter: (a, b) => a.age - b.age,
            },
        ];

        const { formLayout } = this.state;
        const columns =
            formLayout === 'deploy'
                ? deploycolumns
                : contentcolumns;
        this.state.newone =
            formLayout === 'deploy'
                ? '新建策略'
                : '添加内容';
        return (

            <div style={{ padding: 24, background: '#fff', width: '100%', height: '100%' }}>
                <Form layout={formLayout}>
                    <Form.Item>
                        <Radio.Group defaultValue="deploy" onChange={this.handleFormLayoutChange}>
                            <Radio.Button value="deploy">策略配置</Radio.Button>
                            <Radio.Button value="content">策略内容</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" onClick={this.showModal}>
                            {this.state.newone}
                        </Button>
                        <Search placeholder="按策略参数名搜索" onSearch={value => console.log(value)} style={{ width: 200, float: 'right' }} enterButton />
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
                        <Table columns={columns} dataSource={null}
                            locale={{
                                filterConfirm: '确定',
                                filterReset: '重置',
                                emptyText: '暂无数据'
                            }} />
                    </Form.Item>
                </Form>
            </div>
        );
    }
}