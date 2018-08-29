<template>
	<div class="section">
			<div class="book-list">
				<div class="heading comlay">
					<div class="header">{{blist[0].type_name}}</div>
				</div>
				<div class="book-items comlay">
					<div class="book" v-for='book in blist'>
						<!-- <router-link :to="{name:'chapters',query:{info:book}}" tag='div'> -->
						<div @click = "goToChapters(book)">
							<div class="book_item">
								<div class="cover">
									<img :src="'/static'+book.picture">
								</div>
								<div class="info">
									<div class="inwraper">
										<span class="book_name sty">{{book.book_name}}</span>
										<span class="author font sty">作者：{{book.author}}</span>
										<span class="left font sty">架上剩余: <span class="left_amount">{{book.left_amount}}本</span></span>
										<div class="info_bottom sty">
											<span class="score">{{book.marks}}分</span>
											<div>
												<span>
													<i class="iconfont icon-love"></i>
													<span>{{book.marks}}</span>
												</span>
												<span>
													<i class="iconfont icon-loveit"></i>
													<span>{{book.like_num}}</span>
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						<!-- </router-link> -->
						</div>
					</div>
				</div>
			</div>
	</div>
</template>
<script>
	import store from '@/store/store'
	export default{
		name:'booklist',
		props:{
			header:{
				type:String,
				default:'默认'
			},
			blist:{
				type:Array,
				default:[]
			}
		},
		methods:{
    		/**
    		 * @Author    Hybrid
    		 * @DateTime  2018-07-21
    		 * @copyright 跳转到目录详细页面
    		 * @license   [license]
    		 * @version   [version]
    		 * @return    {[type]}    [description]
    		 */
    		goToChapters:function(book){
    			this.$store.state.book = book;
    			// this.$router.push({name:'chapters',query:{info:book}})
    			// console.log('111');
    			this.$router.push({name:'chapters'})
    		}
		},
		store
	}
</script>
<style lang="stylus" type='stylus' rel="stylesheet/stylus" scoped>
	@import url('../../common/stylus/icon.styl')
	@import url('../../common/stylus/common.styl')
	.section
		.book-list
			padding:10px
			.heading
				display:flex
				justify-content:space-between
				flex-direction row
				background-color:#eee
				padding:8px 2px
				.header
					font-size:20px
			.book-items
				display flex
				flex-direction row
				flex-wrap wrap
				.book
					width:100%
					.book_item
						z-index:100
						display flex
						.cover
							img
								width:80px
								height: 100px 
						.info
							width:100%
							padding-left 10px
							font-size: 12px
							line-height 20px
							.inwraper
								display:flex
								flex-direction:column
								height:100px
								overflow:hidden
								.sty
									padding:2px 0
								.font
									color:#867a7a
									font-size:14px
								.book_name
									font-size:16px
									font-weight:300
								.left_amount
									color:orange
								.info_bottom
									display:flex
									flex-direction:row
									justify-content:space-between
									.score
										font-size:20px
										color:orange
									.iconfont
										font-size:20px
</style>