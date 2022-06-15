import React, { memo, useContext, useEffect } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import axios from 'axios';
import { Apikey, geoUrl, Url_Base } from '../../constants/Url';
import GlobalStateContext from '../../context/GlobalStateContext';
import { Container, ListVariants, Strong, ButtonDiv, Button, DateDiv, Input, H3, Select } from './styled';
import moment from 'moment'



function MapChart({ setTooltipContent }) {

  const lodash = require("lodash");

  const { info, setInfo, setDate, setStateButton, dateSelect, variantName, date, stateButton, setDateSelect, dateValue, setDateValue } = useContext(GlobalStateContext)
  
  const dataSelect = (value) => {
    setDateValue(value)
    setDateSelect(date[value - 1])
  }

  const playButton = () => {
    for (let x = dateValue; x <= date.length; x++) {
      (function (x) {
        setTimeout(function () {
          setDateSelect(date[x]);
          setDateValue(x)
        }, x * 1000)
      }(x));
    }
  }

  function totalCases(coutryName) {
    const filterName = info.filter((coutry) => coutry.location === coutryName);
    const filterInfo = lodash.uniq(filterName)
    const finalInfo = filterInfo.filter((info) => info.date === dateSelect && info.variant === variantName)
    return finalInfo.reduce((previousValue, currentValue) => previousValue + currentValue.num_sequences_total, 0)
  }

  const infoButton = () => {
    setTimeout(() => { setStateButton(false) }, 100)
  }

  const selectDate = () => {
    const duplicates = info?.map((res) => res.date)
    const select = lodash.uniq(duplicates)
    let covidArray = []
    for (let i = 0; i <= select.length; i += 1) {
      covidArray.push(select[i])
    }
    setDate(covidArray)
    infoButton();
  }

  const getInfo = () => {
    axios.get(`${Url_Base}`, Apikey).then((res) => {
      setInfo(res.data);
      selectDate();
    })
      .catch((err) => {
        console.log(err.response);
      })
  };

  useEffect(() => {
    getInfo()
  }, []);



  return (
    <>
    <Container>
      <ListVariants>
        <Strong>Lists of all variants</Strong>
        <Select>
          <option>Alpha</option>
          {info.slice(1, 24).map((dados) => {
            return (
              <option key={dados.id} value={dados.variant}>
                {dados.variant}
              </option>
            );
          })}
        </Select>
      </ListVariants>
      <ButtonDiv>
      <Button disabled={stateButton} onClick={() => playButton()}>Play</Button>
      </ButtonDiv>
        <Input
          value={dateValue}
          onChange={(e) => dataSelect(Number(e.target.value))}
          type="range"
          list="marks"
          min='1'
          max='45'
        />
        <DateDiv>
        <H3>{moment(dateSelect).format("DD/MM/YYYY")}</H3>
        </DateDiv>      
        <datalist id="marks">
        {date.map((mark, index) => (
          <option key={index} value={index} />
        ))}
      </datalist>
      </Container>

      <ComposableMap
        data-tip=""
        width={1250}
        height={450}
        projectionConfig={{ scale: 147 }}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const infoGeo = geo.properties.NAME.slice(0, 13);
              const result = totalCases(infoGeo)
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    let data = [];
                    const total = totalCases(infoGeo)
                    info.map((info) => {
                      if (info.location === infoGeo) {
                        data = info;
                      }
                    })

                    setTooltipContent(`
                    Country: ${data.location || infoGeo} |
                    Cases in the day: ${total}
                    `);
                  }}
                  onMouseLeave={() => setTooltipContent("")}
                  fill={result <= 4 ? '#cccccc' : result <= 200 ? '#ff6d65' : result <= 1000 ? '#ff554a' : '#ff4031'}
                  stroke={"white"}

                  style={{
                    hover: {
                      fill: "#333333",
                      outline: "none"
                    }
                  }}
                />
              )
            })
          }
        </Geographies>
      </ComposableMap>
    </>
  );
};
export default memo(MapChart);
