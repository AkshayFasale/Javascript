//Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

function checkSeason(month) {
    let season;
    switch (month.toLowerCase()) {
        case 'december':
        case 'january':
        case 'february':
            season = "Winter"
            break;
        case 'march':
        case 'april':
        case 'may':
            season = "Spring"
            break;
        case 'june':
        case 'july':
        case 'august':
            season = 'Summer';
            break;
        case 'september':
        case 'october':
        case 'november':
            season = 'Autumn';
            break;
        
        default:
            console.log('Please enter valid month');
    }
    return season
    
}
const month = "April";
const season = checkSeason(month);
console.log(`${month} is in ${season}`); // Output: April is in Spring