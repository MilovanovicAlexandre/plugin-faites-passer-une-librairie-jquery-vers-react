import React from 'react'
import { useEffect } from 'react'
import './modal.css'

/**
 * Component that displays a window modal. With props you can change the message inside the modal, the button'CSS style,
 * the container modal's CSS style ands the modal's CSS style.
 * @namespace
 * @property {Object} containerModalStyle An object with CSS properties customized to modify the CSS style of modal's container
 * @property {Function} closeModal Function that closes the modal when user clicks on the shutdown button 
 * @property {String} textModal Text that is displaying inside the modal
 * @property {Object} styleModal An object with CSS properties customized to modify the CSS style of the modal
 * @property {Object} styleButton An object with CSS properties customized to modify the CSS style of shutdown button
 * @returns {JSX.Element} A JSX element containing the modal component 
 */

function Modal({containerModalStyle, closeModal, textModal, styleModal, styleButton}) {

    useEffect(() => {

        function escapeKeyManagement(event){
            if( event.code === 'Escape'){
                closeModal()
            }
        }

        document.addEventListener('keydown', escapeKeyManagement)
        return function(){
            document.removeEventListener('keydown', escapeKeyManagement)
        }
    })

    return (
        <div className='containerModal' style={containerModalStyle}>
            <div className='modal' style={styleModal}>
                <button className='modalButton' style={styleButton} onClick={closeModal}>X</button>
                <p>{textModal}</p>
            </div>
        </div>
    )
}

export default Modal