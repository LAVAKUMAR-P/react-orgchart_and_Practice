import React from "react"

type allData = {
  name:string,
  element?: JSX.Element,
  style: React.CSSProperties,
  refs?: React.Ref<HTMLButtonElement>,
}

function Button({name,element,style,refs}:allData) {
  return (
    <> 
      { element }
      <button ref={refs} style = {style}>${name}</button>
    </>

  )
}

export default Button