import { Modal} from 'antd'
import { Component } from 'react';

export default class CreateModal extends Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { visible, onCancel, onCreate} = this.props;
        return (
            <Modal
            visible={visible}
            title={this.props.title}
            cancelText='取消'
            okText="添加"
            onCancel={onCancel}
            onOk={onCreate}
        >
            {this.props.formCreate}
            </Modal>          
        )
    }
}