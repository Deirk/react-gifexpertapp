import { shallow } from 'enzyme';
import React from 'react';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en GifGridItem.js', () => {
    
    const title = "Titulo de prueba";
    const url = "url/de/prueba";

    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('debe mostrar correctamente el componente en el snapshot', () => {


        expect(wrapper).toMatchSnapshot();    
    
    });

    test('debe de tener un parrafo con el title ', () => {
        
        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(title);

    })
    
    test('debe de tener la imagen igual al url y alt de los props', () => {
        
        const img = wrapper.find('img');

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);

    })
    
    test('debe tener animate__fadeIn', () => {
        
        const div = wrapper.find('div');

        expect(div.prop('className')).toContain('animate__fadeIn');

    })
    
    

});
