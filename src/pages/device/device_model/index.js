import { Component } from 'react';
import { Button, Icon ,Form,Modal,Input} from 'antd'
import Link from 'umi/link'

const {TextArea} = Input

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
export default class DeviceModel extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    state = {
        visible: false,
    };

    showModal = () =>{
        this.setState({visible:true})
        console.log('cao')
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
            <div style={{ padding: 24, background: '#fff', width: '100%', height: '250px' }}>
                <Link to='/device/model/add'>
                <Button type='dashed'
                        onClick={this.showModal}
                        style={{
                        width: '30%',
                        height: '80%',
                        backgroundColor: 'rgb(231,246,253)',
                        borderColor: '',
                        borderRadius: ''
                }}>
                    <Icon type='plus' /><br/>点击新建模型
                </Button>
                </Link>
                <CollectionCreateForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                    />
            </div>
                )   
             }
        }