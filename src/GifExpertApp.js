import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    //const categories = ['Lizards', 'Birds', 'Sharks'];

    const [categories, setCategories] = useState(['Lizards']);

    /* const handleAdd = () => {
         setCategories(['Fishes', ...categories]);
     }*/

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr></hr>

            <ol>
                {
                    categories.map(category =>
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    )
                }
            </ol>

        </>
    );

}

export default GifExpertApp;