import React from 'react'

const Hello = () => {
    // return(
    //     <div ClassName= 'dummyClass'>
    //         <h1>Hello Tasmia Roheel</h1>
    //     </div>
    // )
return React.createElement(
    'div',
    {id:'hello', className:'dummyClass'},
    React.createElement('h1', null, 'Tasmia Roheel1')
    )

}

export default Hello