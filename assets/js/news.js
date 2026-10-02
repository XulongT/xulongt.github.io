(function () {
  var heading = document.getElementById('-news');
  var list = heading && heading.nextElementSibling;
  if (!list || list.tagName !== 'UL') return;

  var earlierUpdates = Array.prototype.slice.call(list.children, 5);
  if (!earlierUpdates.length) return;

  list.id = 'news-updates';
  list.classList.add('news-updates');
  var button = document.createElement('button');
  button.type = 'button';
  button.className = 'news-toggle';
  button.setAttribute('aria-controls', list.id);
  list.insertAdjacentElement('afterend', button);

  function setExpanded(expanded) {
    earlierUpdates.forEach(function (item) { item.hidden = !expanded; });
    button.setAttribute('aria-expanded', String(expanded));
    button.textContent = expanded ? 'Show fewer updates' : 'Show earlier updates';
  }

  button.addEventListener('click', function () {
    setExpanded(button.getAttribute('aria-expanded') !== 'true');
  });
  setExpanded(false);
})();
