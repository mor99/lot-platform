import { Component } from 'react';
import { Table, Button, Form, Modal, Input } from 'antd'

const { TextArea } = Input



const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
    // eslint-disable-next-line
    class extends React.Component {
        render() {
            const { visible, onCancel, onCreate, form } = this.props;
            const { getFieldDecorator } = form;
            return (
                <Modal
                    visible={visible}
                    title="添加设备"
                    cancelText='取消'
                    okText="添加"
                    onCancel={onCancel}
                    onOk={onCreate}
                >
                    <Form layout="vertical">
                        <Form.Item label="设备名称">
                            {getFieldDecorator('titie', {
                                rules: [{ required: true, message: '请输入设备名称' }],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="通信密码">
                            {getFieldDecorator('description', {
                                rules: [{ required: true, message: '请输入通信密码' }],
                            })(<Input type="textarea" />)}
                        </Form.Item>
                        <Form.Item label="设备描述">
                            {getFieldDecorator('descriptionS')(<TextArea rows={2} />)}
                        </Form.Item>
                    </Form>
                </Modal>
            );
        }
    },
);
export default class Overall extends Component {
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
                title: '设备编号',
                dataIndex: 'name',
                defaultSortOrder: 'descend',
                sorter: (a, b) => a.age - b.age,
            },
            {
                title: '设备名称',
                dataIndex: 'age',

            },
            {
                title: '设备描述',
                dataIndex: 'address',
            },
            {
                title: '创建时间',
                dataIndex: 'age',
            },
            {
                title: '更新时间',
                dataIndex: 'age',
                defaultSortOrder: 'descend',
                sorter: (a, b) => a.age - b.age,
            },
            {
                title: '是否启用',
                dataIndex: 'age',
                defaultSortOrder: 'descend',
                sorter: (a, b) => a.age - b.age,
            },
            {
                title: '通信密码',
                dataIndex: 'age',
            },
            {
                title: '操作',
                dataIndex: 'age',
            },
        ];

        const data = [
            {
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
            },
            {
                key: '2',
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park',
            },
            {
                key: '3',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
            },
            {
                key: '4',
                name: 'Jim Red',
                age: 32,
                address: 'London No. 2 Lake Park',
            },
        ];

        function onChange(pagination, filters, sorter, extra) {
            console.log('params', pagination, filters, sorter, extra);
        }
        return (
            <div style={{ padding: 24,background: '#fff', width:'100%',height:'100%' }}>
                <Button type="primary" onClick={this.showModal}>
                    添加设备
                </Button>
                <div style={{padding:'24px 0px 0px 0px'}}>
                <CollectionCreateForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
                <Table columns={columns} dataSource={null} onChange={onChange} 
                locale={{filterConfirm: '确定',
                        filterReset: '重置',
                        emptyText: '暂无数据'}} />
                </div>
            </div>
        )
    }
}