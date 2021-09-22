import React from 'react'
import { useHistory } from 'react-router-dom'

export default function ErrorReport() {
    const history = useHistory();
    return (
        <div className="error-page text-center">
            <h1 className="">
                An error occured!
            </h1>
            <p> Please check your internet connection and try again.</p>
            <div className="row justify-content-center m-auto">
                <div className="col-3">
                    <button onClick={() => history.go(0)} className="btn btn-dark">
                        Refresh
                    </button>
                </div>
                <div className="col-3 ">
                    <button onClick={() => history.goBack()} className="btn btn-default">
                        Go Back
                    </button>
                </div>
            </div>


        </div>
    )
}
