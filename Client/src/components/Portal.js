import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const portalRoot = document.getElementById('portal')


export class Portal extends Component {
constructor(props) {
    super(props)

    this.el = document.createElement('div')       
    
}

componentDidMount = () => {
    portalRoot.appendChild(this.el)
}

componentWillUndMount = () => {
    portalRoot.removeChild(this.el)
}

    render() {
        const  {children} = this.props;

        return ReactDOM.createPortal(children, this.el)
    }
}

export default Portal
