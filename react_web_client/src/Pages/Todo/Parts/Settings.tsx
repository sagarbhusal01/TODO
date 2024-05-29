import React from 'react'
import "../../../Styles/Todo/TodoStyles.css"
export default function Settings(props:any) {
  return (
    <button id='SettingButton'>
    <img src={require("../../../assets/Settings.png")} alt='Setting Button' id="SettingImage"/>
    </button>
  )
}
