import React from 'react';
import { shallow } from "enzyme"
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el archivo GifGrid.js', () => {
    
    const category = 'Mia';

    test('debe mostrarse correctamente', () => {
    
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true, 
        });

        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
    
    })

    test('debe de mostrar items cuando se cargan imagenes con nuestro useFetchGifs', () => {
        
        const gifs = [{
            id: 'ABS',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa',
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false, 
        });

        const wrapper = shallow(<GifGrid category={category}/>);

        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

    });
    
    
});
