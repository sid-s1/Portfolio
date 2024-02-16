import React from "react";
import Tick from "../assets/homepage/ticcc.png";

const SubmittedFormView: React.FC = () => {
    return <div className="submitted-form-tick-container">
        <img src={Tick} alt="form-submitted-sucessfully" className="submitted-form-tick"/>
        <h3>Thank you for contacting me! I will get back to you shortly :)</h3>
    </div>
};

export default SubmittedFormView;