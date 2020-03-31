let date = new Date();
console.log('Semana ' + getWeekNumber(date));

function getWeekNumber(date) {
    date = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7));
    var yearStart = new Date(Date.UTC(date.getFullYear(), 0, 1));
    var week = Math.ceil((((date - yearStart) / 86400000) + 1) / 7);
    return week;
}