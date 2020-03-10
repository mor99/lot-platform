import {  Form, Input ,Modal, Cascader} from 'antd'

const { TextArea } = Input
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
            value:'Privitr RS485',
            label:'pri'
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
                value:'privitalora',
                label:'priwan'
            }
          ],
    },
  ];

 //配置策略弹窗
export const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
    // eslint-disable-next-line
    class extends React.Component {
        render() {
            const { visible, onCancel, onCreate, form } = this.props;
            const { getFieldDecorator } = form;
            return (
                <Modal
                    visible={visible}
                    title="添加采集策略"
                    cancelText='取消'
                    okText="添加"
                    onCancel={onCancel}
                    onOk={onCreate}
                >
                    <Form layout="vertical">
                        <Form.Item label="配置名称">
                            {getFieldDecorator('titie', {
                                rules: [{ required: true, message: '请输入名称' }],
                            })(<Input placeholder="给策略的配置起个名字吧"/>)}
                        </Form.Item>
                        <Form.Item label="配置描述">
                            {getFieldDecorator('description', {
                                rules: [{ required: true, message: '采集策略内容的描述' }],
                            })(<TextArea rows={2} />)}
                        </Form.Item>
                        <Form.Item>
                        <Cascader options={options}  placeholder="请选择通信协议" />
                        </Form.Item>
                    </Form>
                </Modal>
            );
        }
    },
);