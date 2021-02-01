import React from 'react';
import { shallow } from "enzyme"
import { GifGrid } from "../../components/GifGrid"

describe('Pruebas en el archivo GifGrid.js', () => {
    
    const category = 'Mia';
    const wrapper = shallow(<GifGrid category={category}/>);

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
})
