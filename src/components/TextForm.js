import React, { useState } from 'react'

export default function TextForm(props) {

    const HandelUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upperCase!", "success")
    }
    const HandelDownClick = () => {
        let newTexts = text.toLowerCase();
        setText(newTexts);
        props.showAlert("Converted to lowerCase!", "success")
    }

    const HandelCopyClick = () => {
        var text = document.getElementById("myBox");
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied text!", "success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'rgb(11,48,143) ' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'rgb(11,48,143)' : 'white', color: props.mode === 'dark' ? 'white' : 'rgb(11,48,143) ' }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary" onClick={HandelUpClick}>Convert to UPPERCASE</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-3" onClick={HandelDownClick}>Convert to lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary" onClick={HandelCopyClick}>Copy text</button>
            </div>
            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'rgb(11,48,143)' }}>
                <h1>Your text summery</h1>
                <p> {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p >
                <p> {0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minute read</p>
                <h2>Preview</h2>
                <p> {text.length > 0 ? text : "Enter some text..."}</p>
            </div>
        </>
    )
}

// TextForm.prototype = {
//     heading: propTypes.string.isRequired,
// }
