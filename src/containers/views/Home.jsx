import * as React from 'react';
import { Button } from 'antd-mobile';

import { ComponentsExt } from '@utils/reactExt';

export default  class Home extends ComponentsExt {
    render() {
        return (
            <div>
                <Button type="primary">首页</Button>
            </div>
        )
    }
}
