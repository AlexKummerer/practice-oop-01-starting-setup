
const intervalId = setInterval(() => {
    console.log('Sending analytics data...');
    // var timeSpent = parseInt(localStorage.getItem('timeSpentOnPage')) || 0;
    // localStorage.setItem('timeSpentOnPage', timeSpent + 1);

}, 2000);

document.getElementById('stop-analytics-btn').addEventListener('click', () => {
    clearInterval(intercalId);
});
