import { getSpotIds } from './weatherData';

it(' test getSpotIds', () => {
    const spotIds = getSpotIds();
    //console.log(spotIds);
    expect(Array.isArray(spotIds)).toBeTruthy();
});
