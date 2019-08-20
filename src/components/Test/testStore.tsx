import * as React from 'react';
import { Button } from 'antd-mobile';

import { ComponentsExt } from '@utils/reactExt';


class TestStore extends ComponentsExt {
    showMsg = () => {
        this.$message.success('这是另外一个通知');
    }

    linkto = () => {
        // this.props.history.push('/welcome')
        console.log('12');
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showMsg}>测试store</Button>
                <br/>
                <Button type="primary" onClick={this.linkto}>跳转页面</Button>
            </div>
        )
    }
}

export default TestStore;
