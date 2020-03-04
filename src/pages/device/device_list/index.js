import { Component } from 'react';
import { Table, Button, Form, Modal, Input } from 'antd'
import axios from 'axios'

const { TextArea,Search } = Input



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
                            })(<Input placeholder="由英文字母,数字,下划线组成"/>)}
                        </Form.Item>
                        <Form.Item label="通信密码">
                            {getFieldDecorator('description', {
                                rules: [{ required: true, message: '请输入通信密码' }],
                            })(<Input type="textarea" placeholder="密码必须大于6位"/>)}
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
        this.state = {
            data:[]
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
        axios.get('/api/data')
            .then((response)=>{this.setState({data:response.data})})
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


        function onChange(pagination, filters, sorter, extra) {
            console.log('params', pagination, filters, sorter, extra);
        }
        return (
            <div style={{ padding: 24,background: '#fff', width:'100%',height:'100%' }}>
                <Button type="primary" onClick={this.showModal}>
                    添加设备
                </Button>
                <Search placeholder="按设备名搜索" onSearch={value => console.log(value)} style={{ width: 200 ,float:'right'}} enterButton />
                <div style={{padding:'24px 0px 0px 0px'}}>
                <CollectionCreateForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
                <Table columns={columns} dataSource={this.data} onChange={onChange} 
                locale={{filterConfirm: '确定',
                        filterReset: '重置',
                        emptyText: '暂无数据'}} />
                </div>
            </div>
        )
    }
}