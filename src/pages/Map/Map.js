import React, { useContext } from 'react'
import { Main, MapDiv, H3 } from './styled'
import ReactTooltip from "react-tooltip";
import GlobalStateContext from '../../context/GlobalStateContext';
import MapChart from '../../components/MapChart/mapChart';


const Map = () => {

  const { content, setContent } = useContext(GlobalStateContext);

  return (
    <>
    <Main> 
    <H3>
      Here you can see the number of cases in each country on the end date
      in addition to also knowing all the variants found of covid. 
      The 'Play' button will show the evolution of all dates.
    </H3>
      <MapDiv>
      <MapChart setTooltipContent={setContent}/>
        <ReactTooltip html={true} className='custom-tooltip'>{content}</ReactTooltip>
      </MapDiv>
    </Main>
    </>
  )
}

export default Map

