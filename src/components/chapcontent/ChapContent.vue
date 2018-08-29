<template>
	<div class="chapter_content" @click="clickContanier">
		<div class="title">{{book.chapter_name}}</div>
		<p class="chap" v-bind:style="{ backgroundColor:activeBgColor, fontSize: fontSize + 'px' }">{{book.chpater_content}}</p>
		<div class="utilContainer" v-show="showLoading">
			<ul>
				<li>目录</li>
				<li @click.stop="setFontBack">设置</li>
				<li>夜间</li>
				<li>评论</li>
			</ul>
		</div>
		<div class="backSet" v-show="setLoading">
			<ul class="colorSet">
				<!-- <li @click="setBgColor"></li>
				<li @click="setBgColor"></li>
				<li @click="setBgColor"></li>
				<li @click="setBgColor"></li> -->
				<li v-for="item in bgArray" 
				v-bind:style="{ backgroundColor:item}" @click.stop="setBgColor(item)"></li>
			</ul>
			<ul class="fontSizeSet">
				<li @click.stop="decrFontSize">-</li>
				<li @click.stop="addFontSize">+</li>
			</ul>
			
		</div>
	</div>
	
</template>
<script>
	// import UtilBox from '@/components/utilbox/UtilBox'
	export default{
		data(){
			return{
				book:{},
				showLoading:false,
				flag:true,
				setLoading:false,
				sflag:true,
				fontSize:16,
				activeBgColor:'#fff',
				bgArray:['red','blue','yellow','orange']
			}
			
		},
		components:{
			// utilbox:UtilBox
			// decrFontSize:function(){
			// 	return 
			// }
		},
		methods:{
			clickContanier:function(){
				// console.log('1111');
				if (this.flag) {
					this.showLoading = true
					this.flag = false;

				}else{
					this.flag = true
					this.showLoading = false
					if (this.setLoading) this.setLoading = false
					this.sflag = true
				}
							
			},
			setFontBack:function(){
				if (this.sflag) {
					this.setLoading = true
					this.sflag = false;	
				}else{
					this.sflag = true
					this.setLoading = false
				}
			},
			decrFontSize:function(){
				this.fontSize = this.fontSize-1;
			},
			addFontSize:function(){
				this.fontSize = this.fontSize+1;
			},
			setBgColor:function(e){
				this.activeBgColor = e;
			}


		},
		mounted(){
			document.documentElement.scrollTop=0
			this.book = this.$route.query.novel_info;

		}
	}
</script>
<style lang="stylus" type='stylus' rel="stylesheet/stylus" scoped>
.chapter_content
	.title
		text-align: center;
		font-size: 18px;
	.chap
		margin:0px
		padding: 5px 2px
		text-indent: 2em
		font-family:'微软雅黑'
		font-size:16px
	.utilContainer
		position:fixed
		bottom:46px
		width:100%
		height:40px
		background-color:#000
		color:#fff
		z-index:100
		padding:0 5px
		ul
			padding:0
			margin: 0
			display:flex
			flex-direction:row
			li
				list-style:none
				flex:1
				text-align:center
				line-height:40px
	.backSet
		position:fixed
		bottom:85px
		width:100%
		height:91px
		z-index:200
		color:#fff
		background-color:#eee
		ul
			padding:0
			margin: 0
			display:flex
			flex-direction:row
			li
				list-style:none
				flex:1
				text-align:center
		.colorSet
			padding:10px 5px
			height:40px
			li
				flex-direction:row
				margin-left:3px
		.fontSizeSet
			border-bottom:1px solid #eee
			background-color:#e2e
			color:#000
			height: 30px
			font-size:20px
			font-weight:blod
			line-height:30px
			li
				&:nth-child(1)
					border-right:1px solid #eee
</style>