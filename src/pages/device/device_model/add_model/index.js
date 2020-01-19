import { Component } from 'react'
import { Form, Input } from 'antd'

export default class AddModel extends Component {
    constructor(props) {
        super()
        this.state = {}
    }
    render() {
        console.log(111)
        return (
            <Form layout='add'
                labelCol={{span:3,offset:0}}>
                <Form.Item 
                    label='模型名称'>
                        <Input style={{width:200}}/>
                </Form.Item>
                <Form.Item
                    label='模型描述'>
                        <Input style={{width:400}}/>
                </Form.Item>
            </Form>
        )
    }
}