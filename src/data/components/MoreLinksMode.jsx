import React from 'react'

export default function MoreLinksMode({children}) {
    return (
        <p className={`flex items-center gap-1`}> 
            {children}
        </p>
    )
}
