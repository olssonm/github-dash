/**
 * Main script
 */
;(function(){
    var content = '';
    var items = [];
    var user = $('meta[name=user-login]').attr('content');
    var template = null;
    var url = 'https://github.com/' + user + '?tab=repositories&type=source';

    if (!user) {
        return;
    }

    // Inject spinner
    var $loader =
        '<div class="Box text-center p-3 my-4 js-loader">' +
            '<div class="loading-message">' +
                '<img alt="" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-64.gif" width="32" height="32">' +
                '<p class="text-gray my-2 mb-0">Loading recently updated...</p>' +
            '</div>' +
        '</div>';
    $loader = $($loader);
    $loader.insertBefore('.js-repos-container');

    // Fetch/setup template
    $.get(chrome.extension.getURL('src/html/template.html'), function(response){
        template = response;

        // Fetch the users sources
        $.get(url, function(response){

            // Go through each repo and build a simple item list
            $.each($(response).find('.source'), function(index, item){

                items.push({
                    title: user + '/' + $(this).find('h3 a').text().trim(),
                    url: 'https://github.com' + $(this).find('h3 a').attr('href'),
                    private: $(this).hasClass('private')
                });

                return (index < 4); // Fetch 5
            });

            // Setup
            for (var i = 0; i < items.length; i++) {

                var privateClass = (items[i].private) ? 'private' : null;
                var icon = '<svg class="octicon octicon-repo text-gray" aria-label="Repository" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>';

                if (items[i].private) {
                    icon = '<svg class="octicon octicon-lock repo-private-icon" aria-label="Repository" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M4 13H3v-1h1v1zm8-6v7c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h1V4c0-2.2 1.8-4 4-4s4 1.8 4 4v2h1c.55 0 1 .45 1 1zM3.8 6h4.41V4c0-1.22-.98-2.2-2.2-2.2-1.22 0-2.2.98-2.2 2.2v2H3.8zM11 7H2v7h9V7zM4 8H3v1h1V8zm0 2H3v1h1v-1z"></path></svg>';
                }

                content +=
                '<li class="' + privateClass + ' source no-description">' +
                    '<a class="d-flex flex-items-center f5 mt-2 css-truncate" href="' + items[i].url + '">' +
                        icon +
                        '<span class="text-bold css-truncate-target pl-2" style="max-width:240px">' +
                            items[i].title +
                        '</span>' +
                    '</a>' +
                '</li>';
            }

            // Delete spinner
            $loader.remove();

            // Process and inject template into DOM
            template = template.replace('%content%', content).replace('%url%', url);
            $(template).insertBefore('.js-repos-container');
        });
    });
})($);
