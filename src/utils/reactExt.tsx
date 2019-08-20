import * as React from 'react';
import { Toast } from 'antd-mobile';

// 这里用到泛型来灵活化state和props的interface

export class ComponentsExt<P = {}, S = {}> extends React.Component<P, S> {
    $message = Toast;
}