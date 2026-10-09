$(document).on('click', '.video-preview__play', function () {

    const $block = $(this).closest('.video-preview');
    const videoUrl = $block.data('video');

    if (!videoUrl) {
        return;
    }

    const $iframe = $('<iframe>', {
        src: videoUrl,
        frameborder: 0,
        allow: 'autoplay; fullscreen; picture-in-picture',
        allowfullscreen: true
    });

    $block.find('img, .video-preview__play').remove();

    $block.append($iframe);
});
