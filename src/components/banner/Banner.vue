<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
    </div>
    <!-- 如果需要分页器 -->
    <!-- <div class="swiper-pagination"></div> -->
    <!-- 如果需要导航按钮 -->
    <!-- <div class="swiper-button-prev"></div> -->
    <!-- <div class="swiper-button-next"></div> -->
    <!-- 如果需要滚动条 -->
    <!-- <div class="swiper-scrollbar"></div> -->
  </div>
</template>
<script>
	import Swiper from 'swiper';
	import 'swiper/dist/css/swiper.min.css';
	export default{
		name:'banner',
		data(){
			return{

			}
		},
		mounted(){
		    var mySwiper = new Swiper('.swiper-container', {
		    	effect : 'coverflow',
				slidesPerView: 3,
				centeredSlides: true,
				coverflow: {
				            rotate: 30,
				            stretch: 10,
				            depth: 60,
				            modifier: 2,
				            slideShadows : true
        		}
		    })
	  	}
	}
</script>
<style lang="stylus" type='stylus' rel="stylesheet/stylus" scoped>
.swiper-container
	padding:20px 0 0 0
	height: 160px;
	.swiper-slide
		width:200px
		height:120px
		background-color:blue
</style>