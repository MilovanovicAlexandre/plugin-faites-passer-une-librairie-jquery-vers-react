[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)](https://forthebadge.com)

# Modal window in React

<img onerror="this.onerror=null; this.src='image_README_plugin_modal.png';" src='src/Assets/image_README_plugin_modal.png' alt='Image README plugin modal' title='image_README_plugin_modal'/>

A customized modal used in Openclassrooms project entitled 'Faites passer une librairie jQuery vers React'.
This is a plugin in React.

## Setup

You can find my plugin at <a href='https://www.npmjs.com'>www.npmjs.com</a>

- npm i alex-modal-in-react

## Modal's Props 

- containerModalStyle <br />
Used to personalized container of modal's style <br />
Example: containerModalStyle={{backgroundColor: blue}}

- closeModal <br />
Used to close the modal. This prop is a function. <br />
Example: closeMosal={() => setModalOpening(false)}

- textModal <br />
Used to personalized the message inside the modal. <br />
Example: textModal='Employee Created!'

- styleModal <br />
Used to personalized the css styles of the modal window. <br />
Example: styleModal={{height:'30px', width:'60px', color:'red'}}

- styleButton <br />
Used to personalized css styles of the modal's closure button <br />
Example: styleButton={{height:'15px'}}

## Example of use

<pre>
import React, {useState} from 'react'

import {Modal} from 'alex-modal-in-react'

function App() {
</pre>
    const [modalOpening,setModalOpening] = useState(false)

    return(

        <button onClick={() => setModalOpening(true)}>Open modal window</button>
        {modalOpening ?
            <Modal
            closeModal={() => setModalOpening(false)}
            textModal='Employee Created!'    
            />
        : null
        }      
    )
<pre>
}

export default App
</pre>

## Explanations about example of use

When user clicks on button, it will open modal window. Next, when the user clicks on modal's closure button it will
close the modal window. The useState's hook is used to control the display of the modal window. When button is
clicked modalOpening has a value equal true so modal is displayed. When modal's closure button is clicked modalOpening
has a value of false so the modal windows is not displayed. With the prop textModal the text displayed inside the
modal window is 'Employee Created!'. 

## Entire JSX Modal's code

<pre>
function Modal({containerModalStyle, closeModal, textModal, styleModal, styleButton}) {
</pre>
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
<pre>
}

export default Modal
</pre>