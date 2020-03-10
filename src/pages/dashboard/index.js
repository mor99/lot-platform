import {Component } from 'react';
import Link from 'umi/link';
import styles from './index.less'

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div  className={styles.big}>
                <div>
                    <img src='progressing.png' alt='测试' className={styles.img}/>
                </div>
                <div className={styles.button}>
                    <Link to ='/overall'><button>回到主页</button></Link>
                </div>
            </div>
            
        )
    }
}
