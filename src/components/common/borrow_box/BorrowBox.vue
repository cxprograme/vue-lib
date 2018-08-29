<template>
	<div class="box_container">
		<div class="like_box" @click="loveBook"><i class="iconfont" :class="{'icon-love':iconLove,'icon-loveit':iconLoveIt}"></i></div>
		<div class="borrow_box" @click="borrowAction">
			<span>立即借阅</span>
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	import {fetch} from '@/util/http'
	export default{
		name:'borrowbox',
		data(){
			return{
				iconLove:true,
				iconLoveIt:false,
				isflag:false
			}
		},
		props:{
			'bookId':String,
			'book':Object
		},
		mounted:function(){
			console.log(JSON.stringify(this.book.novel_id)+','+this.bookId);
		},
		methods:{
			loveBook:function(){
				if (this.isflag) {
					this.iconLove = false;
					this.iconLoveIt = true;
					this.isflag = false;
				}else{
					this.iconLove = true;
					this.iconLoveIt = false;
					this.isflag = true;
				}
				
			},
			/**
			 * 借阅数据
			 * @Author    Hybrid
			 * @DateTime  2018-08-19
			 * @copyright [copyright]
			 * @license   [license]
			 * @version   [version]
			 * @return    {[type]}    [description]
			 */
			borrowAction:function(){
				var _this = this;
		  		$.ajax({
		  			type:'GET',
		  			url:'http://localhost:8081/menuwork/hs/lib/book/borrow',
		  			dataType: "json",
		  			xhrFields: {withCredentials: true},
		  			success:function(data){
		  				_this.$router.push({name:'confirm',query:{'bookinfo':_this.book}});
		  			},
		  			error:function(err){
		  				_this.$router.push({ path:'/hslib/lib/login',query:{'bookinfo':_this.book}})
		  			}
		  		})
			}
		}
	}
</script>
<style lang="stylus" type='stylus' rel="stylesheet/stylus" scoped>
	@import url('../../../common/stylus/icon.styl')
	@import url('../../../common/stylus/common.styl')
	.box_container
		display:flex
		flex-direction:row
		position:fixed
		bottom:46px
		width:100%
		height:40px
		.like_box
			width:20%
			text-align:center
			background-color:#fff
			border-top:1px solid #eee
			.icon-love
				font-size:25px
				line-height:40px
			.icon-loveit
				color:red
				font-size:25px
				line-height:40px
		.borrow_box
			width:80%
			background-color:rgb(25,158,216)
			text-align:center
			line-height:40px
			span
				display:inline-block
				font-size:18px
				color:#fff

</style>