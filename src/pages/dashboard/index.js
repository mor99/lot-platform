import {Component } from 'react';
import Link from 'umi/link';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div  style={{textAlign: 'center' }}>
                <div>
                    <img src='progressing.png' alt='测试' style={{margin:'0 Auto'}}/>
                </div>
                <div style={{position:'relative',bottom:'100px'}}>
                    <Link to ='/overall'><button>回到主页</button></Link>
                </div>
            </div>
            
        )
    }
}
