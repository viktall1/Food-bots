import React from 'react'
import { FiMail } from "react-icons/fi";

export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row text-center ">
                    <div className="col-lg-10 col-md-8 m-auto pt-4"> 
                        <p>Website developed by <span> <a href="mailto:victoroyelayo1@gmail.com"> Oyelayo Victor</a>   </span> </p>
                        <p> <a href="mailto:victoroyelayo1@gmail.com">  
                            <FiMail className=""/> victoroyelayo1@gmail.com
                        </a> 
                        </p>
                        <p> 2021 </p>

                    </div>
                </div>
            </div>
        </div>
    )
}
