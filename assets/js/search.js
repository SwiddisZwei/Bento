// ┌─┐┌─┐┌─┐┬─┐┌─┐┬ ┬
// └─┐├┤ ├─┤├┬┘│  ├─┤
// └─┘└─┘┴ ┴┴└─└─┘┴ ┴

const runSearch = () => {
  let rawQuery = document.getElementById('searchBar').value;
  let query = encodeURIComponent(rawQuery);
  let link = CONFIG.searchBarLink(query);
  window.open(link, CONFIG.openInNewTab ? '_blank' : '')
}

document.getElementById('searchBar').addEventListener('keydown', e => {
  if (e.key == 'Enter') {
    runSearch();
  }
});
