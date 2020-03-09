import { Component } from 'react';
import { Button, Icon } from 'antd'

import {AddModel} from './add_model/index.js'
import styles from './index.less'



export default class DeviceModel extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    state = {
        visible: this.props.visible,
    };

    showModal = () => {
        this.setState({ visible: true })
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
            <div className={styles.devicemodel}>
                {!this.state.visible ? (<Button className={styles.button}
                    type='dashed'
                    onClick={this.showModal}
>
                    <Icon type='plus' /><br />点击新建模型
                </Button>) : (<AddModel />)}
            </div>
        )
    }
}