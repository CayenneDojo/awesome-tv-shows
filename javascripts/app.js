var renderListItem = function(item, listElementTemplate) {
  var overview = item['overview'].slice(0, 140).trim() + '&hellip;';
  var genres = item['genres'].map(function(genre) {
    return '<li>' + genre + '</li>';
  }).join('');

  return listElementTemplate
    .replace('_TITLE_',         item['title'])
    .replace('_OVERVIEW_',      overview)
    .replace('_PICTURE_',       item['picture'])
    .replace('_AVERAGE_STARS_', item['averageStars'])
    .replace('_GENRES_',        genres)
    .replace('_YEAR_',          item['year'])
}

var renderList = function(items) {
  var listElement = document.querySelector('#list');
  var listElementTemplate = document.querySelector('#template-list-item').innerHTML;

  listElement.innerHTML = '';

  items.forEach(function(item) {
    listElement.innerHTML += renderListItem(item, listElementTemplate);
  });
}

var showItems = function(whatToShow) {
  var databaseCopy = database.slice();
  var itemsToShow = [];

  switch (whatToShow) {
    case 'today':
      itemsToShow = databaseCopy.filter(function(item) {
        return item['airingToday'];
      });
      break;
    case 'popular':
      itemsToShow = databaseCopy.sort(function(first, second) {
        return first['popularity'] < second['popularity'];
      });
      break;
    case 'rating':
      itemsToShow = databaseCopy.sort(function(first, second) {
        return first['averageStars'] < second['averageStars'];
      });
      break;
    default:
      itemsToShow = databaseCopy;
      break;
  }

  renderList(itemsToShow);
}

renderList(database);
