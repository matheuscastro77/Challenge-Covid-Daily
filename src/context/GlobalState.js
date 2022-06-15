import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext"

const GlobalState = (props) => {

  const [info, setInfo] = useState([])
  const [content, setContent] = useState("");
  const [date, setDate] = useState([])
  const [stateButton, setStateButton] = useState(true)
  const [dateSelect, setDateSelect] = useState('2020-07-06')
  const [dateValue, setDateValue] = useState(0)
  const [variantName, setVariantName] = useState('Alpha')

 
  return (
    <GlobalStateContext.Provider value={{ info, setInfo, content, setContent, date, setDate, stateButton, variantName, setVariantName, setStateButton, dateSelect, setDateSelect, dateValue, setDateValue }}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}
export default GlobalState
