import movies from './movies';

const fakeData = [...movies];
fakeData.sort(function(a, b){ 
      
    return new Date(a.timeAndDate) - new Date(b.timeAndDate); 
}); 

export default fakeData;