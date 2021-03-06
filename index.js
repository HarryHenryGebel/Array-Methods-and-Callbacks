// import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by
 * console.logging the following pieces of data

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

function findFinalMatchFieldByYear(year, fieldName) {
  return fifaData.find(
    match => (match.Year === year && match.Stage === "Final"))[fieldName];
}
{
  const awayGoals = findFinalMatchFieldByYear(2014, "Away Team Goals");
  const homeGoals = findFinalMatchFieldByYear(2014, "Home Team Goals");
  const homeName = findFinalMatchFieldByYear(2014, "Home Team Name");
  const awayName = findFinalMatchFieldByYear(2014, "Away Team Name");
  console.log(homeName);
  console.log(awayName);
  console.log(homeGoals);
  console.log(awayGoals);
  if (homeGoals > awayGoals)
    console.log(homeName);
  else
    console.log(awayName);
}

/* Task 2: Create a function called getFinals that takes `data` as an
 * argument and returns an array of objects with only finals data */

function getFinals(data) {
  return data.filter(match => match.Stage === "Final");
};

/* Task 3: Implement a higher-order function called `getYears` that
 * accepts the callback function `getFinals`, and returns an array
 * called `years` containing all of the years in the dataset */

function getYears(data, getFinals) {
  // pretty sure arrays don't have a name property. who is writing
  // these specifications?
  return getFinals(data).map(match => match.Year);
};

/* Task 5: Implement a higher-order function called `getWinners`, that
 * accepts the callback function `getFinals()` and determine the
 * winner (home or away) of each `finals` game. Return the name of all
 * winning countries in an array called `winners` */

function getWinners(data, getFinals) {
  function getWinner(match) {
    if (match["Home Team Goals"] > match["Away Team Goals"])
      return match["Home Team Name"];
    else
      return match["Away Team Name"];
  }

  return getFinals(data).map(getWinner);
};

/* Task 6: Implement a higher-order function called `getWinnersByYear`
 * that accepts the following parameters and returns a set of strings
 * "In {year}, {country} won the world cup!"

 Parameters:
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(getWinners, getYears) {
  const winners = getWinners(fifaData, getFinals),
        years = getYears(fifaData, getFinals),
        strings = [];

  for (i = 0; i < winners.length; i++)
    strings.push(`In ${years[i]}, ${winners[i]} won the World Cup!`);

  return strings;
};

/* Task 7: Write a function called `getAverageGoals` that accepts a
 * parameter `data` and returns the the average number of home team
 * goals and away team goals scored per match (Hint: use .reduce and
 * do this in 2 steps) */

function getAverageGoals(data) {
  // function t (acc, match) {
  //   return acc + match["Home Team Goals"];
  // }
  const games = data.length;
  const homeAverageGoals = data.reduce(
    (acc, match) => acc + match["Home Team Goals"], 0) / games;
  const awayAverageGoals = data.reduce(
    (acc, match) => acc + match["Away Team Goals"], 0) / games;

  return {homeAverageGoals: homeAverageGoals.toFixed(2),
          awayAverageGoals: awayAverageGoals.toFixed(2)};
};

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had.

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamInitials) {
  function reducer(acc, match) {
    let winnerInitials;
    if (match["Home Team Goals"] > match["Away Team Goals"])
      winnerInitials = match["Home Team Initials"];
    else
      winnerInitials = match["Away Team Initials"];

    // if teamInitials matches the winner increment the accumulator,
    // otherwise return the accumulator unaltered
    if (winnerInitials === teamInitials)
      return acc + 1;
    else
      return acc;
  }

  return getFinals(data).reduce(reducer, 0);
};

/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
