import React, { useState } from 'react'
import './Content.scss'
import sample from '../images/firstInit.png'

const Content = () => {

  const [sensorType, setSensorType] = useState("Volume");
  const [styleType, setStyleType] = useState("Ink Wash");
  const [modificationsActive, setModificationsActive] = useState(true);

  return (
    <div className='content'>
      <div className={'content-wrapper'  + (modificationsActive ? " active" : " minimized")}>
        <div className='screen'>
          <img src={sample}></img>
        </div>
        <div className={'modification-wrapper'}>
          <div className='control-wrapper'>
            <div className='sensor-style-indicator'>
              <h2>{"Current Sensor: " + sensorType}</h2>
              <h2>{"Current Style: " + styleType}</h2>
            </div>
            <div className='sensor-ui-wrapper'>
              <div className='input-header'>Sensor Inputs</div>
              <div className='sensor-inputs'>
                <button onClick={() => setSensorType("Volume")}>Volume</button>
                <button onClick={() => setSensorType("Webcam")}>Webcam</button>
                <button onClick={() => setSensorType("Data 1")}>Data 1</button>
                <button onClick={() => setSensorType("Data 2")}>Data 2</button>
              </div>

              <div className='input-header'>Styles</div>
              <div className='style-inputs'>
                <button onClick={() => setStyleType("Ink Wash")}>Ink Wash</button>
                <button onClick={() => setStyleType("Ukiyo-e")}>Ukiyo-e</button>
                <button onClick={() => setStyleType("Impressionism")}>Impressionism</button>
                <button onClick={() => setStyleType("Cubism")}>Cubism</button>
              </div>
            </div>
          </div>
          <button className='minimize-btn' onClick={() => setModificationsActive(!modificationsActive)}>{modificationsActive ? "Minimize" : "Maximize"}</button>
        </div>
      </div>
    </div>
  )
}

export default Content