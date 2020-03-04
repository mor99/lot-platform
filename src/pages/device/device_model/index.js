import { Component } from 'react';
import { Button, Icon, Form, Modal, Input, Table, Select } from 'antd'
import Link from 'umi/link'

const { Option } = Select
const{TextArea}= Input

const layout = {
    labelCol: {
      span: 2,
    },
    wrapperCol: {
      span: 16,
    },
  };
class AddModel extends Component {
    constructor(props) {
        super()
        this.state = {}
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
    onclick = ()=>{
        window.location.reload(true)
    }
    render() {
        const columns = [
            {
                title: '属性名称',
                dataIndex: 'name',
                defaultSortOrder: 'descend',
            },
            {
                title: '属性别名',
                dataIndex: 'alias',

            },
            {
                title: '类型',
                dataIndex: 'type',
            },
            {
                title: '单位',
                dataIndex: 'unit',
            },
            {
                title: '操作',
                dataIndex: 'action',
                defaultSortOrder: 'descend',
            },
        ];
        return (
            <div>
               <Link to='/device/model'><Button onClick={this.onclick}>返回模型列表</Button></Link>
                <br />
                <br />
                <Form {...layout}
                layout="vertical"
                    title="添加设备"
                    cancelText='取消'
                    okText="添加">
                    <Form.Item label='模型名称:'
                            required='true'>
                        < Input placeholder="请输入设备名称" />
                    </Form.Item >
                    <Form.Item label='模型描述:'>
                        <TextArea />
                    </Form.Item>
                    <Form.Item label='更新时间:'>
                        <p />
                    </Form.Item>
                    <Form.Item label='属性列表:'>
                        <Table columns={columns} dataSource={null}
                            locale={{
                                filterConfirm: '确定',
                                filterReset: '重置',
                                emptyText: '暂无数据'
                            }} />
                        <Button  onClick={this.showModal}>添加属性</Button>
                        <CollectionCreateForm
                            wrappedComponentRef={this.saveFormRef}
                            visible={this.state.visible}
                            onCancel={this.handleCancel}
                            onCreate={this.handleCreate}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button onClick={this.onclick}style={{ float: 'right' }}>取消</Button>
                        <Button type="primary" style={{ float: 'right' }}>创建</Button>

                    </Form.Item>
                </Form>
            </div>
        )
    }
}
const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
    // eslint-disable-next-line
    class extends React.Component {
        render() {
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
            const { visible, onCancel, onCreate, form } = this.props;
            const { getFieldDecorator } = form;
            return (
                <Modal
                    visible={visible}
                    title="添加属性"
                    cancelText='取消'
                    okText="确定"
                    onCancel={onCancel}
                    onOk={onCreate}
                >
                    <Form layout="vertical">
                        <Form.Item label="属性名称:">
                            {getFieldDecorator('titie', {
                                rules: [{ required: true, message: '请输入设备名称' }],
                            })(<Input placeholder="由英文字母,数字,下划线组成" />)}
                        </Form.Item>
                        <Form.Item label="属性别名:">
                            {getFieldDecorator('description', {
                                rules: [{ required: false, message: '请输入通信密码' }],
                            })(<Input type="textarea" placeholder="表明属性描述的内容" />)}
                        </Form.Item>
                        <Form.Item label="类型:">
                            <Select options={options} placeholder="请选择类型" >
                                <Option value="jack">Bool</Option>
                                <Option value="lucy">Number</Option>
                                <Option value="tom">String</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="单位:">
                            <Input placeholder="属性的单位" />
                        </Form.Item>
                    </Form>
                </Modal>
            );
        }
    },
);

export default class DeviceModel extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    state = {
        visible: this.props.visible,
    };

    showModal = () => {
        this.setState({ visible: true })
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
        return (
            <div style={{ padding: 24, background: '#fff', width: '100%', height: '60%' }}>
                {!this.state.visible ? (<Button type='dashed'
                    onClick={this.showModal}
                    style={{
                        width: '50%',
                        height: '100%',
                        backgroundColor: 'rgb(231,246,253)',
                        borderColor: '',
                        borderRadius: ''
                    }}>
                    <Icon type='plus' /><br />点击新建模型
                </Button>) : (<AddModel />)}
            </div>
        )
    }
}