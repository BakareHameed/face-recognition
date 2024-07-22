import React, {useState} from 'react'
import './imageLinkForm.css'

const ImageLinkForm = ({onInputChange, onButtonSubmit}) =>{
    const [input, setInput] = useState('');

    return (
        <div>
            <p className='pa3 center'>{'This magic brain will detect faces in your picture, Give it a try!'}</p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input type="text" name="" value={input} onChange={onInputChange} id="" className='f4 pa2 w-70 center' />
                    <button onClick={onButtonSubmit} className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>                    
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm