import * as React from 'react';
import { Button } from 'antd';
import { ComponentsExt } from '@utils/reactExt';
import * as ccc from '@styles/index.scss';

class Test extends ComponentsExt {
    showMsg = () => {
        this.$message.success('这是一个通知');
    }
    render() {
        return (
            <div>
                <Button type="primary" className={ccc.test} onClick={this.showMsg}>Primary</Button>
            </div>
        )
    }
}

export default Test;
