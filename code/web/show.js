define(['jquery'], function ($) {
    'use strict';
    return {
        do: function () {
            console.log('I am a show module');
                $(document.body).append('<div>I am dynamically generated</div>');
        }
    }
});