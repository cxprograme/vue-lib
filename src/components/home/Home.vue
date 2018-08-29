/**
 * autor:cxpro
 * date:2017-01-08 15:15:20
 * project-name: ${project_base_name}
 */
<template>
	<div class="home">
		<header-item message="图书借阅" backUrl="/">
			<div>
				<span @click="search">
					<i class="iconfont icon-love"></i>
				</span>
				<span style="color: #fff;margin:0 10px" @click='want'>想看</span>
			</div>
		</header-item>
		<banner></banner>
		<div class="novel_item" v-for="book in novelLists">
			<booklist :blist="book" ></booklist>
		</div> 
	</div>
</template>

<script>

import HeaderItem from '@/components/header_item/HeaderItem'
import img5 from '../../../static/image/5.jpg'
import booklist from '@/components/booklist/BookList'
import {fetch} from '@/util/http'
import Banner from '@/components/banner/Banner'
	export default{
		name: 'home',
		data() {
			return{
				img5:img5,
				novelLists:[],

			}
		},
		mounted: function(){
			this.getBook();
		},
		components:{
			banner:Banner,
			booklist:booklist,
			headerItem:HeaderItem
		},
		methods:{
			getBook: function() {
		      var _this = this;
		      fetch ('http://localhost:8081/menuwork/hs/lib/book/list').then(response => {
		    		this.booklist = response;
		    		var arr1=[];
		    		var arr2=[];
		    		//分类
		    		//强推类型
		    		for(var i=0;i<this.booklist.length;i++){
		    			var item = this.booklist[i];
		    			
	    			 	switch(item['type']){
		    			 	case 'N1':
		    			 		arr1.push(item)
		    			 		break
		    			 	case 'N2':
		    			 		arr2.push(item)
		    			 		break
		    			}
		    		}
		    		this.novelLists.push(arr1);
		    		this.novelLists.push(arr2);
		    		
		      })
    		},
    		search:function(){
    			this.$router.push({ name: 'search'})
    		},
    		want:function(){
    			this.$router.push({name:'want'})
    		}
		}

	};
</script>

<style lang="stylus" type='stylus' rel="stylesheet/stylus" scoped>
</style>