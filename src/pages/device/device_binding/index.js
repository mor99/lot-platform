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
                    title="添加绑定"
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
        this.setState({ visible: false });
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


        function onChange(pagination, filters, sorter, extra) {
            console.log('params', pagination, filters, sorter, extra);
        }
        return (
            <div style={{ padding: 24,background: '#fff', width:'100%',height:'100%' }}>
                <Button type="primary" onClick={this.showModal}>
                    添加绑定
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