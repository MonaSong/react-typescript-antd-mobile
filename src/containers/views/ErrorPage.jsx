import * as React from 'react';
import { Button } from 'antd-mobile';

import { ComponentsExt } from '@utils/reactExt';


class ErrorPage extends ComponentsExt {
    render() {
        return (
            <div>
                <Button type="primary">这是错误页</Button>
            </div>
        )
    }
}

export default ErrorPage;
