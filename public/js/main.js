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
        },
        poster: {
            src: ''
        }
    }, {
        title: '视频2：进食中的观赏鱼',
        img: {
            src: '/images/thumbnails/video-02.jpg'
        },
        video: {
            src: 'http://7xn4yl.com1.z0.glb.clouddn.com/vid_20150928_105055.m4v'
        },
        poster: {
            src: ''
        }
    }];

    util.renderView({videoList: videoList}, '#tpl-video-list', '#video-list-container');


    /** 
     * 播放器组件, 右侧
    **/
    var domObj = {};
    domObj.video = $('#main-video-player')[0];
    domObj.isPlaying = false;

    var _videoListContainer = $('#video-list-container');
    _videoListContainer.delegate('.item-pre', 'click', function(event){
        var _self = $(this);
        var src = _self.data('videosrc');

        _videoListContainer.find('.item-pre.active').removeClass('active');
        _self.addClass('active');

        $(domObj.video).attr('src', src);
        domObj.video.play();
        domObj.isPlaying = true;
    });


    /** 
     * 播放器组件, 视频本身
    **/
    $('#main-video-player').click(function(event){
        var _self = $(this);

        if (domObj.isPlaying) {
            domObj.video.pause();
            domObj.isPlaying = false;
        }else{
            domObj.video.play();
            domObj.isPlaying = true;
        }
    });

    /** 
     * 播放器组件, 视频结束时
    **/
    $(domObj.video).on('ended', function(event){
        domObj.isPlaying = false;
    });

});