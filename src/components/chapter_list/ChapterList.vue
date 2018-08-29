<template>
	<div class="chapters_container">
		<ul class="chapters_list" >
			
				<li class="chapter" v-for='item in list'>
					<router-link :to="{name:'chapcontent',query:{novel_info:item}}" tag='span'>
						<span>
							{{item.chapter_name}}
						</span>
					</router-link>
				</li>
		</ul>

		<div class="loadmore-icon" v-show="showlaoding">
			加载更多
			<i class="fa fa-cog fa-spin"></i>
		</div>
	    <!-- <div class="loading" v-show="showlaoding"> -->
	      <!-- <i class="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i> -->
	    <!-- </div> -->
	    <!-- <i class="fa fa-home fa-lg"> 主页</i> -->
	</div>
</template>
<script>
	import {fetch} from '@/util/http'
	import axios from 'axios'
	export default{
		name:'chapters_list',
		data(){
			return{
				list:[],
				page:1,
				showlaoding:true,
				novel_id:null
			}
		},
		methods:{
			getData(page){
				this.showlaoding =true;
				 axios.get('http://localhost:8081/menuwork/novel/chapter/list', {
		            params: {
		            	pageNum: page,
            			pageSize: 20,
            			novel_id:this.novel_id
		            }
		        })
	            .then(response => {
	                // resolve(response.data);
	                
	                let list = response.data.list;
	                list.map(n => this.list.push(n));
	                this.showlaoding = false
	            })
	            .catch(err => {
	                // reject(err)
	            })
			}
		},
		computed:{
			addPageNum:function(){
				this.page = this.page+1;
				return this.page;
			}
		},
		 mounted(){
		 	console.log(document.documentElement.scrollTop)
		 	//获取传递的小说id
		 	this.novel_id = this.$route.query.novel_id;
		 	this.getData(this.page);
		 	// let _this = this;
		 	//滑动加载
			 window.addEventListener('scroll', () => {

			   //console.log('1111');
		       //console.info('可视区域大小' + document.documentElement.clientHeight + '........' + window.innerHeight)
		        //console.info('滚动高度' + document.body.scrollTop) //原生的方法存在的兼容性问题 mac上面就计算出来是0
		       var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop

		        //console.info('文档高度' + document.body.offsetHeight)

		        //判断是否滚动到底部
		      if (scrollTop + window.innerHeight + 0>= document.body.offsetHeight) { //0 表示距离底部多少的距离的开始触发loadmore效果
		          if (!this.showlaoding) { //防止多次加载
		            // let page = _this.page+1;
		            // var page = this.addPageNum;
		            this.getData(this.page += 1)
		          }
		        }
		      })

		 	
		 }
	}
</script>
<style lang="stylus" type='stylus' rel="stylesheet/stylus" scoped>
	.chapters_list
		display:flex;
		margin:0;
		padding: 0;
		flex-direction:column
		.chapter
			list-style:none
			line-height:40px
			padding 0 40px
			border-top:1px solid #eee
			span
				display:inline-block
				width:100%
</style>