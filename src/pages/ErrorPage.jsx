import React from 'react'
import { useHistory } from 'react-router-dom'


export default function ErrorPage() {
    const history = useHistory();

    return (
        <div className="error-page text-center">
            <h1 className="">
               404 Page Not Found!
            </h1>
            <p> The page you are requesting for does not exist.</p>
            <div className="row justify-content-center m-auto">
            
                <div className="col-3 ">
                    <button onClick={() => history.goBack()} className="btn btn-default">
                        Go Back
                    </button>
                </div>
            </div>


        </div>
    )
}
