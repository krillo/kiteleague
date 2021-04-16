
 const spotsFile = [
    {id: 0, name: 'Doggen', alias:'Dogshit bay, Halmstad småbåtshamn', lat: 56.66, lon: 12.847, dirMin: 180, dirMax: 240, supMin: 225, supMax: 315, type: ['doggen', 'sup']},
    {id: 10, name: 'Laga Oset', alias:'Lagans mynning, Halland', lat: 56.54, lon: 12.94, dirMin: 225, dirMax: 315, supMin: 225, supMax: 315, type: ['kitesurf', 'sup']},
    {id: 20, name: 'Klitterhus', alias:'Klitterhus i Ängelholm', lat: 56.263905, lon: 12.834864, dirMin: 250, dirMax: 350, supMin: 225, supMax: 315, type: ['kitesurf', 'sup']},
    {id: 21, name: 'Sibirien', alias:'Sibirien stranden i Ängelholm', lat: 56.23, lon: 12.81, dirMin: 280, dirMax: 330, supMin: 225, supMax: 315, type: ['kitesurf', 'sup']},
    {id: 30, name: 'Farhult', alias:'Farhult', lat:56.225180, lon:12.713968, dirMin: 260, dirMax: 80, type: ['kitesurf', 'sup']},
    {id: 31, name: 'Jonstorp', alias:'Revet, Jonstorp havsbad', lat: 56.23, lon: 12.69, dirMin: 337, dirMax: 60, supMin: 225, supMax: 315, type: ['kitesurf', 'sup']},
    {id: 40, name: 'Viken fortet', alias:'Fortet, Vikens havsbad', lat: 56.151064, lon:12.567371, dirMin: 170, dirMax: 10, supMin: 225, supMax: 315, type: ['kitesurf', 'sup']},
    {id: 50, name: 'Råå', alias:'Hundbadet Råå hamn', lat: 56.0, lon: 12.72, dirMin: 180, dirMax: 290, supMin: 225, supMax: 315, type: ['kitesurf', 'sup']},
    {id: 55, name: 'Fortuna', alias:'Fortuna strand surfklubb', lat: 55.95, lon: 12.75, dirMin: 190, dirMax: 300, supMin: 225, supMax: 315, type: ['kitesurf', 'sup']},
    {id: 60, name: 'LA', alias:'Lundåkrahamnen i Landskrona', lat: 55.85, lon: 12.86, dirMin: 50, dirMax: 225, supMin: 225, supMax: 315, type: ['kitesurf', 'sup']},
    {id: 61, name: 'JP', alias:'JP-håla, Saxtorp', lat: 55.81, lon: 12.91, dirMin: 180, dirMax: 290, supMin: 225, supMax: 315, type: ['kitesurf', 'sup']},
    {id: 62, name: 'BBC', alias:'Barsebäckstrand Camping och stugby', lat: 55.77, lon: 12.92, dirMin: 260, dirMax: 350, supMin: 225, supMax: 315, type: ['kitesurf', 'sup']},
    {id: 70, name: 'Habo', alias:'Habo ljung havsbad', lat: 55.69, lon: 13.04, dirMin: 225, dirMax: 290, supMin: 225, supMax: 315, type: ['kitesurf', 'sup']},
    {id: 80, name: 'Parkvägen', alias:'Ljunghusen havsbad', lat: 55.38, lon: 12.93, dirMin: 110, dirMax: 200, supMin: 225, supMax: 315, type: ['kitesurf', 'sup']},
    {id: 85, name: 'Falsterbo', alias:'Falsterbo strandbad', lat: 55.39, lon: 12.85, dirMin: 110, dirMax: 230, supMin: 225, supMax: 315, type: ['kitesurf', 'sup']},
    {id: 90, name: 'Skanör södra', alias:'Skanörs havsbad', lat: 55.41, lon: 12.82, dirMin: 180, dirMax: 320, supMin: 225, supMax: 315, type: ['kitesurf', 'sup']},

    {id: 1000, name: 'Idre', alias:'Idre fjäll', lat: 61.95, lon: 12.83, dirMin: 0, dirMax: 360, type: ['snowkite']},
    {id: 1001, name: 'Städjan', alias:'Städjan Nipfjällets naturreservat', lat: 61.89, lon: 12.85, dirMin: 0, dirMax: 360, type: ['snowkite']},
    {id: 1010, name: 'Storhogna', alias:'Vemdalen Storhogna', lat:62.518780, lon:14.095985, dirMin: 230, dirMax: 120, type: ['snowkite', 'special']},
    {id: 1011, name: 'Björnrike, Timmerkojan', alias:'Vemdalen Björnrike, Timmerkojan', lat:62.433494, lon:14.014375,dirMin: 0, dirMax: 360, type: ['snowkite', 'special']},
    {id: 1020, name: 'Hyllingesjön', alias:'Rössjön', lat: 56.09972694701641, lon: 12.827305703751486, dirMin: 0, dirMax: 360, type: ['snowkite', 'special']},

    {id: 2000, name: 'Finjagatan 6', alias:'Hemma', lat: 56.04, lon: 12.73, dirMin: 0, dirMax: 360, supMin: 225, supMax: 315, type: ['special']},
    {id: 2001, name: 'Rössjön', alias:'Rössjön', lat: 56.31815046910982, lon: 13.079239683733386, dirMin: 0, dirMax: 360, type: ['special']},
    {id: 2002, name: 'Klåveröd', alias:'Klåverödsdammen strövområde', lat: 56.033947, lon: 13.180781, dirMin: 0, dirMax: 360, type: ['slask']},
    {id: 2003, name: 'Hålebäck', alias:'Hålebäck vindskydd', lat: 56.112292, lon:13.031894, dirMin: 0, dirMax: 360, type: ['snowkite', 'special']},
    {id: 2004, name: 'Vantalängan', alias:'Vantalängan Brösarp, windshelter', lat: 55.72, lon: 14.06, dirMin: 0, dirMax: 360, type: ['slask']},
    {id: 2005, name: 'Nieuwe Binnenweg', alias:'Rotterdam Nieuwe Binnenweg', lat: 51.915, lon: 4.466, dirMin: 0, dirMax: 360, type: ['special']},
    {id: 2006, name: 'Lärkesholssjön', alias:'', lat: 56.285285, lon:13.378515, dirMin: 0, dirMax: 360, type: ['special']},
    {id: 2006, name: 'Lörje', alias:'Lörje gård Gotland', lat: 57.741272, lon:18.945619, dirMin: 0, dirMax: 360, type: ['special']},
    {id: 2006, name: 'Smöjen', alias:'Smöjen Gotland', lat: 57.725641, lon:18.951206, dirMin: 0, dirMax: 360, type: ['special']},


 ];
export default spotsFile;