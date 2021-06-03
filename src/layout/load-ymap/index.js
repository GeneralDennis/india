let isLoaded = false;
let isLoading = false;

const defer = function() {
  const result = {};
  result.promise = new Promise(function(resolve, reject) {
    result.resolve = resolve;
    result.reject = reject;
  });
  return result;
};

const dfd = defer();

const mapSrc = "https://api-maps.yandex.ru/2.1/?lang=ru_RU&onload=ymapLoaded";

function ymapLoad() {
  if (isLoaded || isLoading) {
    return dfd.promise;
  }

  isLoading = true;
  const scr = document.createElement('script');
  scr.setAttribute("type", "text/javascript");
  scr.setAttribute("src", mapSrc);
  (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(scr);
  return dfd.promise;
}

window.ymapLoaded = function() {
  isLoaded = true;
  dfd.resolve();
};

export default {
  load: ymapLoad,
  promise: dfd.promise,
  isLoaded: isLoaded,
  isLoading: isLoading
}