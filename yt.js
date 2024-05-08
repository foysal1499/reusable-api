jQuery(document).ready(function () {
    const isYtExist = sessionStorage.getItem('ytData')
    if (!isYtExist) {
        jQuery.get(
            'https://www.googleapis.com/youtube/v3/search',
            {
                part: 'snippet',
                channelId: 'UCZu4Nl6i5IseEJBqp1IPd3g',
                type: 'video',
                order: 'date',
                maxResults: 6,
                key: 'AIzaSyC12bi5qsWtdoa7IXCPSz5P1ac8zb8MW6s',
            },
            function (data) {
                setYtVideos(data);
                sessionStorage.setItem("ytData", JSON.stringify(data))

            }
        )
    } else {
        const data = JSON.parse(isYtExist)
        setYtVideos(data);
    }


    function setYtVideos(data) {
        jQuery('.videoSource1').attr('src', 'https://www.youtube.com/embed/' + data.items[0].id.videoId + '?modestbranding=1&rel=0')
        jQuery('.desc1').html(data.items[0].snippet.title)

        jQuery('.videoSource2').attr('src', 'https://www.youtube.com/embed/' + data.items[1].id.videoId + '?modestbranding=1&rel=0')
        jQuery('.desc2').html(data.items[1].snippet.title)

        jQuery('.videoSource3').attr('src', 'https://www.youtube.com/embed/' + data.items[2].id.videoId + '?modestbranding=1&rel=0')
        jQuery('.desc3').html(data.items[2].snippet.title)

        jQuery('.videoSource4').attr('src', 'https://www.youtube.com/embed/' + data.items[3].id.videoId + '?modestbranding=1&rel=0')
        jQuery('.desc4').html(data.items[3].snippet.title)

        jQuery('.videoSource5').attr('src', 'https://www.youtube.com/embed/' + data.items[4].id.videoId + '?modestbranding=1&rel=0')
        jQuery('.desc5').html(data.items[4].snippet.title)

        jQuery('.videoSource6').attr('src', 'https://www.youtube.com/embed/' + data.items[5].id.videoId + '?modestbranding=1&rel=0')
        jQuery('.desc6').html(data.items[5].snippet.title)
    }
})