import React, { useState } from 'react';

function ToggleVisibility() {
    const [isVisible, setIsVisible] = useState(true);

    function toShow() {
        setIsVisible(i => !i);  
    }

    return (
        <div>
            <button onClick={toShow}>Click Me</button>
            {isVisible && <p>Hi, how are you?</p>}
            
        </div>
        //If isVisible is true, the <p> element is shown.
        //If isVisible is false, the <p> element disappear
    );
}

export default ToggleVisibility;
