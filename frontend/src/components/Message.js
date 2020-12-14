import React from 'react'

export const Message = ({children}) => {
    return (
        <div className="alert alert-danger" role="alert">
        {children}
      </div>
    )
}
