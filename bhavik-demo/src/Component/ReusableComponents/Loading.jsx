import React from 'react'

const Loading = () => {
    return (
        <React.Fragment>
            <div className="text-center">
                <div className="spinner-border m-5" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Loading
