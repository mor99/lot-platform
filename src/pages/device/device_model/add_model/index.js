import { Component } from 'react';
import { Button, Form,  Input } from 'antd'
import Link from 'umi/link'

import CreateTable from '../../../../libs/components/create_table/index.js'
import {CollectionCreateForm} from '../add-attribute.js'
import styles from './index.less'

const{TextArea}= Input

const layout = {
    labelCol: {
      span: 2,
    },
    wrapperCol: {
      span: 16,
    },
  };
export class AddModel extends Component {
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
                        <CreateTable columns={columns} dataSource={this.data} />
                        <Button  onClick={this.showModal}>添加属性</Button>
                        <CollectionCreateForm
                            wrappedComponentRef={this.saveFormRef}
                            visible={this.state.visible}
                            onCancel={this.handleCancel}
                            onCreate={this.handleCreate}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button className={styles.button} onClick={this.onclick}>取消</Button>
                        <Button className={styles.button} type="primary">创建</Button>

                    </Form.Item>
                </Form>
            </div>
        )
    }
}