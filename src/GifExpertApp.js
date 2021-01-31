import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={setCategories} />
            <hr />
            
            <ol>
                {
                    // categories.map( category =>  <li key={ category } >{ category }</li>
                    categories.map( category => (
                        <GifGrid 
                            key={ category } 
                            category={ category } />
                    ))
                }
            </ol>
        </>
    )
}
