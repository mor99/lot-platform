import {  Form, Input,Modal,Select} from 'antd'
import  CreateTable from '../../../libs/components/create_table/index.js'

const { TextArea } = Input

//策略内容
export const CollectionCreateForm1 = Form.create({ name: 'form_in_modal' })(
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
                    title: '是否上传',
                    dataIndex: 'isUpdate',
                },
                {
                    title: '上传间隔(秒)',
                    dataIndex: 'interval',
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
                        <CreateTable style={{weight:'50%'}} columns={columns} dataSource={null} />
                        </div>
                    </div>
                </Modal>
            );
        }
    },
);