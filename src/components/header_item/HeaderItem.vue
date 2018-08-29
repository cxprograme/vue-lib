<template>
	<header class="evaluate-header">
		<!-- <router-link :to="backUrl" tag='span'> -->
		<span>
			<i class="iconfont icon-back" @click="back"></i>
		</span>
		<!-- </router-link> -->
		<div class="title"><span>{{message}}</span></div> 
		<slot class='right'></slot>
	</header>
</template>
<script >
	export default{
		name:'header-item',
		props:{'message':String,'backUrl':String,book:Object},
		data(){
			return{

			}
		},
		methods:{
			back:function(){
				console.log(this.backUrl);
				this.$router.push({path:this.backUrl,query:{info:this.book}});
			}
		}
	}
</script>
<style lang="stylus" type='stylus' rel="stylesheet/stylus" scoped>
	@import url('../../common/stylus/icon.styl')
	@import url('../../common/stylus/common.styl')
	.evaluate-header
		display:flex
		width:100%
		height:50px
		flex-direction:row
		background-color:#000
		span
			text-align:left
			flex:1
			line-height:50px
			i
				font-size:20px
				color:#fff
				font-weight:blod
		.title
			line-height:50px
			flex:6
			text-align:center
			color:#fff
		.right
			flex:1
</style>