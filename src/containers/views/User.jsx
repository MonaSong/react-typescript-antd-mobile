import * as React from 'react';
import { Button } from 'antd-mobile';
import  Connect from '../store/connect';
import { Props, State } from '../models/propsAndState';

import { ComponentsExt } from '@utils/reactExt';

class User extends ComponentsExt<Props, State> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Button type="primary">用户首页</Button>
            </div>
        )
    }
}

export default Connect(User)
