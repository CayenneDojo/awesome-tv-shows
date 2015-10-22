
/**
 * renderListItem
 * ---
 * Takes an object and a template string and returns a chunk of HTML code.
 * @param  {[object]} item                An object
 * @param  {[string]} listElementTemplate A template string
 * @return {[string]}                     A chunk of HTML code.
 */
var renderListItem = function(item, listElementTemplate) {
  var html = listElementTemplate;

  html = html.replace('_TITLE_', item['title']);
  html = html.replace('_OVERVIEW_', item['overview'].slice(0, 140).trim() + '&hellip;');
  html = html.replace('_PICTURE_', item['picture']);
  html = html.replace('_AVERAGE_STARS_', item['averageStars']);
  html = html.replace('_GENRES_', item['genres']);
  html = html.replace('_YEAR_', item['year']);

  return html;
}

function renderList(items, listElement, listElementTemplate) {
  listElement.innerHTML = '';

  items.forEach(function(item) {
    listElement.innerHTML += renderListItem(item, listElementTemplate);
  });
}

var listElement = document.querySelector('#list');
var listElementTemplate = document.querySelector('#template-list-item').innerHTML;

var showItems = function(whatToShow) {
  var itemsToShow = [];

  switch (whatToShow) {
    case 'all':
      itemsToShow = database.sort(function(first, second) {
        return first['year'] < second['year'];
      });
      break;
    case 'today':
      database.forEach(function(item) {
        if (item['airingToday']) { itemsToShow.push(item); }
      });
      break;
    case 'popular':
      itemsToShow = database.sort(function(first, second) {
        return first['popularity'] < second['popularity'];
      });
      break;
    case 'rating':
      itemsToShow = database.sort(function(first, second) {
        return first['averageStars'] < second['averageStars'];
      });
      break;
  }

  renderList(itemsToShow, listElement, listElementTemplate);
}

// function introduceYourself(name, age) {
//   return "Ciao, mi chiamo " + name + " ed ho " + age + " anni";
// }
//
// introduceYourself("vincenzo", 34);
