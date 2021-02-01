import { getGif } from "../../helpers/getGifs";

describe('Pruebas con getGifs Fecth', () => {
    
    test('debe traer 10 elementos', async () => {
        
        const gifs = await getGif('Birds');

        expect(gifs.length).toBe(10);

    });
    
    test('debe traer 0 elementos', async () => {
        
        const gifs = await getGif('');

        expect(gifs.length).toBe(0);

    });
    

});
