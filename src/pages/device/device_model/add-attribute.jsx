import { Form, Modal, Input, Select } from 'antd'

const { Option } = Select

export const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
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