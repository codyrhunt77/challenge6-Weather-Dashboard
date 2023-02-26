const recentSearches = [];
const weatherAPI = 'https://api.openweathermap.org';
const APIKey = 'e704ceda822600458251d98ecbd243a1'
const search =  document.querySelector('#search');
const searchInput = document.querySelector('#weather-search');
const searchHistory = document.querySelector('#previous-searches');

function renderRecentSearches() { 
    searchHistory.innerHTML = ''};
for (var i = recentSearches.length - 1; i >= 0; i--) {
    const btn = document.createElement('button');
    btn.setAttribute('type','button')
    btn.classList.add('history-btn', 'btn-history');
    btn.setAttribute('data-search', recentSearches[i]);
    btn.textContent = recentSearches[i];
    searchHistory.append(btn);
}
function updateHistory(search) {
    if ( recentSearches.indexOf(search) !== -1) {
        return;
    }
    recentSearches.push(search);
    localStorage.setItem('search-history', JSON.stringify(recentSearches));
    renderRecentSearches();
}
function initRecentSearches() {
    const storedHistory = localStorage.getItem('search-history');
    if (storedHistory) {
        searchHistory = JSON.parse(storedHistory);
    }
    renderRecentSearches();
}

