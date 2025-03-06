import React, { useState } from 'react'

function AccordionCard() {
const [open, setopen] = useState(false);
const handleOpenAndClose = () => {
    setopen(!open)
}
  return (
    <div className='accordionContainer'>
        <div onClick={handleOpenAndClose} className='accordionTitle'>Accordion</div>
        {open && <div className='accordionBody'>
            body
        </div>}
    </div>
  )
}

export default AccordionCard;