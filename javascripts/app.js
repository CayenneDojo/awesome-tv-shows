var renderListItem = function(item, listElementTemplate) {
  var html = listElementTemplate;

  html = html.replace('_TITLE_', item['title']);
  html = html.replace('_OVERVIEW_', item['overview'].slice(0, 140).trim() + '&hellip;');
  html = html.replace('_PICTURE_', item['picture']);
  html = html.replace('_AVERAGE_STARS_', item['averageStars']);
  html = html.replace('_YEAR_', item['year']);

  return html;
}

var renderList = function(items, listElement, listElementTemplate) {
  listElement.innerHTML = '';

  items.forEach(function(item, i) {
    listElement.innerHTML += renderListItem(item, listElementTemplate);
  });
}

var showItems = function(whatToShow) {
  console.log('will display shows!', whatToShow);
}

var listElement = document.querySelector('#list');
var listItemTemplate = document.querySelector('#template-list-item').innerHTML;

// renderList(database, listElement, listItemTemplate);
