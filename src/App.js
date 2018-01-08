import React from 'react';
import {connect} from 'react-redux';

class App extends React.Component {
    render() {
        return(
            <div>
                <h1 onClick={this.props.cambio}> {this.props.text}</h1>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        text: state.text
    }
}

const mapDispatchToProps = dispatch => {
    return {
        cambio() {
            dispatch({
                type: "CAMBIAR",
                text:"se cambio"
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
