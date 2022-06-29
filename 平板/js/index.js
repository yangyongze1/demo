$(function(){
    var userAgentInfo = navigator.userAgent.toLowerCase();
        var isIE11 = !!window.ActiveXObject || "ActiveXObject" in window,
            isEdgeOld = navigator.userAgent.indexOf("Edge/") > -1,
            isEdgeNew = navigator.userAgent.indexOf("Edg/") > -1,
            isSafari = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent),
            isUC = navigator.userAgent.indexOf('UCBrowser') > -1,
            isHW = userAgentInfo.indexOf("HuaweiBrowser") > -1,
            isFF = userAgentInfo.indexOf("Firefox") > -1,
            isWX = userAgentInfo.toLowerCase().match(/MicroMessenger/i) == 'micromessenger';
        var viewportWidth = document.documentElement.clientWidth,
            viewportHeight = document.documentElement.clientHeight,
            aspectRatio = viewportWidth / viewportHeight;
        var isMob = aspectRatio < 1.02, isMateX = aspectRatio < 1.1 && aspectRatio> 0.9;
        var headerHeight = $('#header-v4').height();
        var secNavHeight = $('#second-navigation-v4').height();

        // 颜色切换
        var sec_3_left_mySwiper = new Swiper('.sec3 .left .swiper', {
            slidesPerView: 1,
            effect: 'fade',
            allowTouchMove: false,
        })
        var sec_3_right_mySwiper = new Swiper('.sec3 .right .swiper', {
            slidesPerView: 1,
            effect: 'fade',
            allowTouchMove: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            controller: {
                control: sec_3_left_mySwiper,
            }
        });
        var trigger_4 = new TimelineMax();
        trigger_4.to($('.sec4'),1,{
            'transform' : 'translateY(0)',
        })
        var controller = new ScrollMagic.Controller();
        new ScrollMagic.Scene({
            triggerElement: '#trigger-4',
            triggerHook: '1',
            duration: '80%'
        })
            .setTween(trigger_4)
            .addTo(controller)
            .addIndicators({
                name: "staggering"
            })
        // var controller = new ScrollMagic.Controller();

		// new ScrollMagic.Scene({
		// 		triggerElement: "#trigger-4",
		// 		triggerHook: '.95',
		// 		duration: "100%"
		// 	})
		// 	.setTween(TweenMax.staggerFromTo('.sec4', 1, {
		// 		y: "-25vw"
		// 	}, {
		// 		y: "0vw"
		// 	}))
		// 	// .addIndicators({
		// 	// 	name: "staggering"
		// 	// })
		// 	.addTo(controller);
})