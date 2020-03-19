try {
  var switchPage = function (language) {
    switch (language) {
      case 'cn':
        console.log('/cn' + window.location.pathname);
        window.location.href = 'cn.html' + window.location.pathname;
        return true;
        break;

      case 'zh':
      case 'tw':
        console.log('/tw' + window.location.pathname);
        window.location.href = 'tw.html' + window.location.pathname;
        return true;
        break;

      case 'en':
      case 'tw':
        console.log('/tw' + window.location.pathname);
        window.location.href = 'cn.html' + window.location.pathname;
        return true;
        break;

      default:
    }
    return false;
  };

  // detect window.navigator.languages
  var found = false;
  if (typeof(window.navigator.languages) === 'object') {
    for (var index in window.navigator.languages) {
      console.log(window.navigator.languages[index].toLowerCase());
      found = switchPage(window.navigator.languages[index].toLowerCase());
      if (found) break;
    }
  }

  if (!found) {
    var lang = window.navigator.userLanguage || window.navigator.language;
    var relang = lang.toLowerCase();
    found = switchPage(relang);
  }

  if (!found) {
    window.location.href = '/tw' + window.location.pathname;
  }
} catch (e) {
  window.location.href = '/tw' + window.location.pathname;
}