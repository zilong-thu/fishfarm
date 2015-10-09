$(function(){

    var util = {};
    util.renderView = function(data, _template, _target){
        var str = $(_template).html();
        var compiled = _.template(str);
        $(_target).html(compiled(data));
    };

    var videoList = [{
        title: '视频',
        img: {
            src: '/images/slides/fish_01.jpg'
        },
        video: {
            src: ''
        }
    }, {
        title: '视频',
        img: {
            src: '/images/slides/fish_01.jpg'
        },
        video: {
            src: ''
        }
    }, {
        title: '视频',
        img: {
            src: '/images/slides/fish_01.jpg'
        },
        video: {
            src: ''
        }
    }, {
        title: '视频',
        img: {
            src: '/images/slides/fish_01.jpg'
        },
        video: {
            src: ''
        }
    }, {
        title: '视频',
        img: {
            src: '/images/slides/fish_01.jpg'
        },
        video: {
            src: ''
        }
    }];

    util.renderView({videoList: videoList}, '#tpl-video-list', '#video-list-container');
});