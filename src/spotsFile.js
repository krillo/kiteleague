
 const spotsFile = [
    {id: 0, name: 'Doggen', alias:'Dogshit bay, Halmstad småbåtshamn', lat: 56.659373, lon: 12.847702, dirMin: 180, dirMax: 240, supMin: 225, supMax: 315, type: ['doggen', 'sup']},
    {id: 10, name: 'Laga Oset', alias:'Lagans mynning, Halland', lat: 56.551372, lon: 12.945732, dirMin: 225, dirMax: 315, supMin: 225, supMax: 315, type: ['kitesurf', 'sup']},
    {id: 20, name: 'Klitterhus', alias:'Klitterhus i Ängelholm', lat: 56.258255, lon: 12.832515, dirMin: 250, dirMax: 350, supMin: 225, supMax: 315, type: ['kitesurf', 'sup']},
    {id: 21, name: 'Sibirien', alias:'Sibirien stranden i Ängelholm', lat: 56.237052, lon: 12.814092, dirMin: 280, dirMax: 330, supMin: 225, supMax: 315, type: ['kitesurf', 'sup']},
    {id: 30, name: 'Farhult', alias:'Farhult', lat:56.225180, lon:12.713968, dirMin: 260, dirMax: 80, type: ['kitesurf', 'sup']},
    {id: 31, name: 'Revet Jonstorp', alias:'Revet, Jonstorp havsbad', lat: 56.232359, lon: 12.687725, dirMin: 337, dirMax: 60, supMin: 225, supMax: 315, type: ['kitesurf', 'sup']},
    {id: 40, name: 'Viken fortet', alias:'Fortet, Vikens havsbad', lat: 56.150989, lon:12.568444, dirMin: 170, dirMax: 10, supMin: 225, supMax: 315, type: ['kitesurf', 'sup']},
    {id: 45, name: 'Viking', alias:'Vikingstrand Helsingborg', lat: 56.072306, lon: 12.667749, dirMin: 160, dirMax: 315, supMin: 225, supMax: 315, type: ['kitesurf', 'sup']},
    {id: 50, name: 'Råå', alias:'Hundbadet Råå hamn', lat: 55.988419, lon: 12.749873, dirMin: 180, dirMax: 290, supMin: 225, supMax: 315, type: ['kitesurf', 'sup']},
    {id: 51, name: 'Listorp', alias:'', lat: 55.981995, lon:12.753446, dirMin: 180, dirMax: 315, supMin: 225, supMax: 315, type: ['kitesurf', 'sup']},
    {id: 55, name: 'Fortuna', alias:'Fortuna strand surfklubb', lat: 55.963216, lon: 12.757571, dirMin: 190, dirMax: 300, supMin: 225, supMax: 315, type: ['kitesurf', 'sup']},
    {id: 60, name: 'LA', alias:'Lundåkrahamnen i Landskrona, ARIS surfklubb ', lat: 55.856594, lon: 12.853831, dirMin: 50, dirMax: 225, supMin: 225, supMax: 315, type: ['kitesurf', 'sup']},
    {id: 61, name: 'JP', alias:'JP-håla, Saxtorp', lat: 55.821258, lon: 12.922751, dirMin: 180, dirMax: 290, supMin: 225, supMax: 315, type: ['kitesurf', 'sup']},
    {id: 62, name: 'BBC', alias:'Barsebäckstrand Camping och stugby', lat: 55.771482, lon: 12.926744, dirMin: 260, dirMax: 350, supMin: 225, supMax: 315, type: ['kitesurf', 'sup']},
    {id: 70, name: 'Habo', alias:'Habo ljung havsbad och camping, Lomma', lat: 55.689221, lon: 13.055601, dirMin: 225, dirMax: 290, supMin: 225, supMax: 315, type: ['kitesurf', 'sup']},
    {id: 80, name: 'Parkvägen', alias:'Ljunghusen havsbad', lat: 55.388616, lon: 12.930130, dirMin: 110, dirMax: 200, supMin: 225, supMax: 315, type: ['kitesurf', 'sup']},
    {id: 85, name: 'Falsterbo', alias:'Falsterbo strandbad', lat: 55.390493, lon: 12.848928, dirMin: 110, dirMax: 230, supMin: 225, supMax: 315, type: ['kitesurf', 'sup']},
    {id: 90, name: 'Skanör södra', alias:'Skanörs havsbad', lat: 55.414378, lon: 12.828246, dirMin: 180, dirMax: 320, supMin: 225, supMax: 315, type: ['kitesurf', 'sup']},


    {id: 200, name: 'Gnisvärd', alias:'Gnisvärd, Tofta,  Gotland', lat: 57.501328, lon:18.113843, dirMin: 180, dirMax: 300, supMin: 225, supMax: 315, type: ['kitesurf', 'sup']},
    {id: 210, name: 'Kovik', alias:'Kovik Sanda, Klintehamn,  Gotland', lat: 57.406496, lon: 18.156294, dirMin: 180, dirMax: 315, supMin: 225, supMax: 315, type: ['kitesurf', 'sup']},
    {id: 212, name: 'Tjuris', alias:'Tjurudden kite beach, Klintehamn,  Gotland', lat: 57.397218, lon: 18.172125, dirMin: 180, dirMax: 315, supMin: 225, supMax: 315, type: ['kitesurf', 'sup']},
    {id: 220, name: 'Åminne', alias:'Åminne,  Gotland', lat: 57.614356, lon: 18.765526, dirMin: 20, dirMax: 90, supMin: 225, supMax: 315, type: ['kitesurf', 'sup']},
    {id: 230, name: 'Hideviken', alias:'Hidevikens badplats, Gotland', lat: 57.736269, lon:18.878756, dirMin: 140, dirMax: 210, supMin: 225, supMax: 315, type: ['kitesurf', 'sup']},
    {id: 233, name: 'Valleviken', alias:'Sjökrogen Valleviken, Gotland', lat: 57.787030, lon:18.949839, dirMin: 140, dirMax: 180, supMin: 225, supMax: 315, type: ['kitesurf', 'sup']},



    {id: 1000, name: 'Idre', alias:'Idre fjäll', lat: 61.95, lon: 12.83, dirMin: 0, dirMax: 360, type: ['snowkite']},
    {id: 1001, name: 'Städjan', alias:'Städjan Nipfjällets naturreservat', lat: 61.89, lon: 12.85, dirMin: 0, dirMax: 360, type: ['snowkite']},
    {id: 1010, name: 'Storhogna', alias:'Vemdalen Storhogna', lat:62.518780, lon:14.095985, dirMin: 230, dirMax: 120, type: ['snowkite']},
    {id: 1011, name: 'Björnrike, Timmerkojan', alias:'Vemdalen Björnrike, Timmerkojan', lat:62.433494, lon:14.014375,dirMin: 0, dirMax: 360, type: ['snowkite']},
    {id: 1020, name: 'Hyllingesjön', alias:'Rössjön', lat: 56.09972694701641, lon: 12.827305703751486, dirMin: 0, dirMax: 360, type: ['snowkite']},

    {id: 2000, name: 'Finjagatan 6', alias:'Hemma', lat: 56.038138, lon: 12.729919, dirMin: 0, dirMax: 360, supMin: 225, supMax: 315, type: ['special']},
    {id: 2001, name: 'Rössjön', alias:'Rössjön', lat: 56.31815046910982, lon: 13.079239683733386, dirMin: 0, dirMax: 360, type: ['special', 'sup']},
    {id: 2002, name: 'Klåveröd', alias:'Klåverödsdammen strövområde', lat: 56.033947, lon: 13.180781, dirMin: 0, dirMax: 360, type: ['slask']},
    {id: 2003, name: 'Hålebäck', alias:'Hålebäck vindskydd', lat: 56.112292, lon:13.031894, dirMin: 0, dirMax: 360, type: ['slask']},
    {id: 2004, name: 'Vantalängan', alias:'Vantalängan Brösarp, windshelter', lat: 55.72, lon: 14.06, dirMin: 0, dirMax: 360, type: ['slask']},
    {id: 2005, name: 'Nieuwe Binnenweg', alias:'Rotterdam Nieuwe Binnenweg', lat: 51.915, lon: 4.466, dirMin: 0, dirMax: 360, type: ['special']},
    {id: 2006, name: 'Lärkesholssjön', alias:'', lat: 56.285285, lon:13.378515, dirMin: 0, dirMax: 360, type: ['special']},
    {id: 2006, name: 'Lörje', alias:'Lörje gård Gotland', lat: 57.741272, lon:18.945619, dirMin: 0, dirMax: 360, type: ['special']},
    {id: 2006, name: 'Smöjen', alias:'Smöjen Gotland', lat: 57.725641, lon:18.951206, dirMin: 0, dirMax: 360, type: ['special']},

 ];
export default spotsFile;