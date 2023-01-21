// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) { 
    const allDirectors = moviesArray.map(movies => movies.director)
    return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(movies => movies.genre.includes('Drama') && movies.director === 'Steven Spielberg').length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
//toFixed()
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    const sumMoviesScores = moviesArray.reduce((acc, movie) => acc + (movie.score || 0) , 0 )
    return Number((sumMoviesScores / moviesArray.length).toFixed(2)) || 0
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    const dramaMovies = moviesArray.filter(movies => movies.genre.includes('Drama'))
    if (dramaMovies.length === 0) {
        return 0
    }

    const sumDramaScores = dramaMovies.reduce((acc, drama) => acc + (drama.score || 0) , 0 )
    return Number((sumDramaScores / dramaMovies.length).toFixed(2)) || 0
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesYear = structuredClone(moviesArray)
    moviesYear.sort((a, b) => {
        if (a.year !== b.year)
        {return a.year - b.year}
        else {
            return a.title.localeCompare(b.title)
        }
    })
    return moviesYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesAlphaOrder = structuredClone(moviesArray)
    const first20Titles = moviesAlphaOrder.sort((a, b) => (a.title.localeCompare(b.title)) && (a.title > b.title ? 1 : -1)).map(movies => movies.title)
    if (moviesAlphaOrder.length > 20) {
        return first20Titles.slice(0, 20)
    }
return first20Titles
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
