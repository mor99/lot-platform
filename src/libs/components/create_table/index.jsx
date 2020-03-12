import { Component } from 'react';
import { Table } from 'antd'

export default class CreateTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
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

        function onChange(pagination, filters, sorter, extra) {
            console.log('params', pagination, filters, sorter, extra);
        }

        return (
            <div style={{ padding: 24, background: '#fff', width: '100%', height: '100%' }}>
                <Table columns={this.props.columns} dataSource={this.props.data} onChange={onChange}
                    locale={{
                        filterConfirm: '确定',
                        filterReset: '重置',
                        emptyText: '暂无数据'
                    }} />
            </div>

        )
    }
}