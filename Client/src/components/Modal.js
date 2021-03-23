import React, { Component } from 'react'
import Portal from './Portal'

import '../styles/_popup.scss'

export class Modal extends Component {
    render() {
        const { children, toggle, active, close } = this.props


        return (
            <Portal>
                {active && (
                    <div className='wrapper'>
                        <div className='window'>
                            {close ? <button className='closeBtn' onClick={toggle}>X</button>
                            : undefined
                        }
                           
                            <div>{children}</div>
                        </div>
                        <div onClick={toggle} className='background'/>
                    </div>
                )}
            </Portal>


        )
    }
}

export default Modal

