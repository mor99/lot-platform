import { Component } from 'react';
import {Table, Button, Form, Modal, Input ,Select} from 'antd'

const { TextArea,Search } = Input



const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
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
                    title: '是否控制',
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
                    <div style={{height:'100vh'}}>
                    <div style={{float:'left',width:'30%'}}>
                        <Form layout="vertical">
                            <Form.Item label="策略名称:">
                                {getFieldDecorator('titie', {
                                    rules: [{ required: true, message: '请输入名称' }],
                                })(<Input placeholder="请输入名称"/>)}
                            </Form.Item>
                            <Form.Item label="策略描述:">
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
                                <div style={{border:'1px dashed #eeeeee',borderRadius:'20px', height:'80px',width:'350px',backgroundColor: '#F5F5F5',textAlign:'center'}}><br/>选择策略以预览</div>
                            </Form.Item>
                        </Form>
                    </div>
                    <div style={{float:'right',width:'65%',top:'100px'}}>
                        <Table style={{weigth:"100%"}}columns={columns} dataSource={null} locale={{
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
                dataIndex: 'age',

            },
            {
                title: '策略名称',
                dataIndex: 'address',
            },
            {
                title: '策略描述',
                dataIndex: 'age',
            },
            {
                title: '基于模型ID',
                dataIndex: 'age',
            },
            {
                title: '创建时间',
                dataIndex: 'age',
            },
            {
                title: '更新时间',
                dataIndex: 'age'
            }
        ];


        function onChange(pagination, filters, sorter, extra) {
            console.log('params', pagination, filters, sorter, extra);
        }
        return (
            <div style={{ padding: 24, background: '#fff', width: '100%', height: '100%' }}>
                <Button type="primary" onClick={this.showModal}>
                    新建策略
                </Button>
                <div style={{ padding: '24px 0px 0px 0px' }}>
                <Search placeholder="按策略参数名搜索" onSearch={value => console.log(value)} style={{ width: 200 ,float:'right'}} enterButton />
                    <CollectionCreateForm
                        wrappedComponentRef={this.saveFormRef}
                        visible={this.state.visible}
                        onCancel={this.handleCancel}
                        onCreate={this.handleCreate}
                    />
                    <Table columns={columns} dataSource={null} onChange={onChange}
                        locale={{
                            filterConfirm: '确定',
                            filterReset: '重置',
                            emptyText: '暂无数据'
                        }} />
                </div>
            </div>
        )
    }
}