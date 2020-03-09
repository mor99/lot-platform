import { Button,Form, Modal,Input} from 'antd'
import { Component} from 'react';

const { TextArea} = Input

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
    // eslint-disable-next-line
    class extends React.Component {
        render() {
            const { visible, onCancel, onCreate, form } = this.props;
            const { getFieldDecorator } = form;
            const content = this.props
            return (
                {content}
            );
        }
    },
);
export class Collection extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    state = {
        visible: false
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

    return(){
        return(
            <CollectionCreateForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                /> 
        )
    }

}  