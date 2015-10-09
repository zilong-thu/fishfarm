$(function(){

    var util = {};
    util.renderView = function(data, _template, _target){
        var str = $(_template).html();
        var compiled = _.template(str);
        $(_target).html(compiled(data));
    };

    var videoList = [{
        title: '视频1：投料',
        img: {
            src: '/images/thumbnails/video-01.jpg'
        },
        video: {
            src: 'http://7xn4yl.com1.z0.glb.clouddn.com/vid_20150804_112223.m4v'
        }
    }, {
        title: '视频2：进食中的观赏鱼',
        img: {
            src: '/images/thumbnails/video-02.jpg'
        },
        video: {
            src: 'http://7xn4yl.com1.z0.glb.clouddn.com/vid_20150928_105055.m4v'
        }
    }];

    util.renderView({videoList: videoList}, '#tpl-video-list', '#video-list-container');

    $('#video-list-container').delegate('.item-pre', 'click', function(event){
        var _self = $(this);
        var src = _self.data('videosrc');

        $('#main-video-player').attr('src', src);
    });
});