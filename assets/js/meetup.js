(function() {
    // http://microjs.com/#

    // pegasus is from https://github.com/typicode/pegasus
    function pegasus(a, xhr) {
        xhr = new XMLHttpRequest();
        xhr.open('GET', a);
        a = [];

        xhr.onreadystatechange = xhr.then = function(onSuccess, onError, cb, data) {
            if (onSuccess && onSuccess.call) a = [,onSuccess, onError];
            if (xhr.readyState == 4) {
                cb = a[0|xhr.status / 200];
                if (cb) {
                    try {
                        data = JSON.parse(xhr.responseText)
                    } catch (e) {
                        data = null
                    }
                    cb(data, xhr);
                }
            }
        };

        xhr.send();

        return xhr;
    }

    function onSuccess(data, xhr) {
        console.log('data', data);
        console.log('xhr', xhr);

        var template = document.querySelector('#meetup-widget-template').innerHTML;
        data.results = data.results.slice(0, 3);
        data.results = data.results.map(function(result) {
            result.prettyDate = new Date(result.time).toDateString();
            return result;
        })
        var rendered = Mustache.render(template, data);
        document.querySelector('#meetup-widget').innerHTML = rendered;
    }

    function onError(data, xhr) {
        console.error('data', data);
        console.error('xhr', xhr);
    }

    pegasus('https://lhtgmc37pi.execute-api.us-west-2.amazonaws.com/prod/meetup-proxy-aws-lambda')
    .then(onSuccess, onError);
})();
