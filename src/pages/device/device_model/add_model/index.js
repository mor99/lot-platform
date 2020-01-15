import { Component } from 'react'
import {Form,Input} from 'antd'

export default class AddModel extends Component {
    constructor(props){
        super()
        this.state={}
    }
    render() {
        console.log(111)
        return(
            <Form>
                <Form.Item>
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Input/>
                </Form.Item>
            </Form>
        )
    }
}