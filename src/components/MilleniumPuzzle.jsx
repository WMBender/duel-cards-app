import React from "react";
import "./style/milleniumPuzzle.css";
import { ReactComponent as MilleniumEye } from '../svg/millenium-eye.svg';


export default function MilleniumPuzzle(){
  return (
  <div>
    <div className="triangle">
        <MilleniumEye className="millenium-eye"/>
    </div>
  </div>
  )
}