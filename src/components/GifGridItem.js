import React from 'react'

export const GifGridItem = ({ id, title, url }) => {

    // console.log( {id, title, url} );

    return (
        <div className="animate__fadeIn">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
            <hr />
        </div>
    )
}
