<template>
	<div class="book_chapter">
		<div class="book_top">
			<div class="book_item">
				<div class="cover">
					<img :src="'/static'+book.picture">
				</div>
				<div class="info">
					<div class="inwraper">
						<span>书名：{{book.book_name}}</span>
						<span>作者：{{book.author}}</span>
					</div>
				</div>
			</div>
			<div class="book_opt">
				<ul>
					<li>免费阅读</li>
					<li>免费阅读</li>
					<li>免费阅读</li>
				</ul>
			</div>
			<div class="book_desc">
				{{book.description}}
			</div>
			<router-link :to="{name:'chapterslist',query:{novel_id:book.novel_id}}" tag='div'>
				<div class="book_cp">
					<ul>
						<li>目录</li>
						<li>连载至339章></li>
					</ul>

				</div>
			</router-link>
			<borrow-box  :book='book'></borrow-box>
		</div>
	</div>
</template>
<script>
	import store from '@/store/store'
	import BorrowBox from '@/components/common/borrow_box/BorrowBox'
	export default{
		name:'bookchapter',
		data() {
			return{
				book: {}
			}
		},
		components:{
			BorrowBox:BorrowBox
		},
		beforeMount:function(){
			// this.book = this.$route.query.info;
			this.book = this.$store.state.book
		},
		mounted:function(){
			
			//console.log(this.book.novel_id);
			//获取
			//console.log('img_url:'+this.book.img_url);
			//this.book = this.$state.state.book
		}
	}
</script>
<style lang="stylus" type='stylus' rel="stylesheet/stylus" scoped>
	.book_chapter
		.book_top
			.book_item
				z-index:100
				padding: 15px
				display flex
				.cover
					img
						width:80px
						height: 100px 
				.info
					padding-left 10px
					font-size: 12px
					line-height 20px
					.inwraper
						display:flex
						flex-direction:column
						height:100px
						overflow:hidden
			.book_opt
				margin:10px 0
				ul
					margin:0 auto
					padding:0
					display:flex
					justify-content:space-around;
					li
						width:25%
						list-style:none
						text-align:center
						line-height:30px;
						height:30px
						border: 1px solid #eee
						border-radius:4px
						background-color:red
						color: #fff
			.book_desc
				padding:0 15px
				font-size:14px
			.book_cp
				background-color:#eee
				width:92%
				margin:10px auto
				padding: 5px 5px
				ul
					margin:0 auto
					padding:0px
					display:flex
					justify-content:space-between;
					li
						list-style: none
</style>