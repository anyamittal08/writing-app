import React, { useState} from 'react';

import HighlightSpans from './HighlightSpans';

const HighlightTextarea = () => {

    const [text, setText] = useState("")

    return (
        <section className="editor">
            <div id='text'>
                <HighlightSpans text={text}/>
            </div>
            <textarea 
            name="textarea" id="textarea" 
            onInput={(event) => {setText(event.currentTarget.value)}} 
            value={text}>
            </textarea>
        </section>
    )
}

export default HighlightTextarea;