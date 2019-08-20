import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from './actions'
const mapStateToProps = (state:any) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        ...bindActionCreators(actions, dispatch)
    }
}

const ConnectComponent = (component: any) => (
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(component)
)

export default ConnectComponent