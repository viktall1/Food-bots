import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

export default function Loading() {
    
    return (
        <div>
            <h1 className="text-center loading-page">
                <ClipLoader color=""  size={150} />
            </h1>
        </div>
    )
}
