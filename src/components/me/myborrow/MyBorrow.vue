<template>
	<div class="mb_container">
		<header-item message="我的借阅" backUrl="/"></header-item>
		<!-- 我的-->
		<el-tabs style="border:none;padding:0;margin:0;" v-model="activeName"  stretch="stretch" @tab-click="handleClick">
		    <el-tab-pane label="全部" name="first">
			   
			    	<borrow-item v-for="item in borrowlist" :itemInfo='item'></borrow-item>
		    </el-tab-pane>
		    <el-tab-pane label="待取书" name="second">
		    	<borrow-item></borrow-item>
		    	<borrow-item></borrow-item>
		    	<borrow-item></borrow-item>
		    </el-tab-pane>
		    <el-tab-pane label="未还书" name="three">
		    	<borrow-item></borrow-item>
		    	<borrow-item></borrow-item>
		    	<borrow-item></borrow-item>
		    	<borrow-item></borrow-item>
		    </el-tab-pane>
		    <el-tab-pane label="待评价" name="four">
		    	<borrow-item></borrow-item>
		    	<borrow-item></borrow-item>
		    	<borrow-item></borrow-item>
		    	<borrow-item></borrow-item>
		    </el-tab-pane>
	  	</el-tabs>
	</div>
</template>
<script>
	
import HeaderItem from '@/components/header_item/HeaderItem'
import BorrowItem from '@/components/me/borrowitem/BorrowItem'
export default{
	name: 'myborrow',
	data(){
		return{
			activeName:'first',
			borrowlist:[
					{
						book_name:'java数据库编程',
						author:'王晓明',
						oc_date:'3月1日',
						order_status: 1
					},
					{
						book_name:'大市口驴得水',
						author:'王晓明',
						oc_date:'3月1日',
						order_status: 2
					},
					{
						book_name:'微微儿无',
						author:'王晓明',
						oc_date:'3月1日',
						order_status: -2
					},
					{
						book_name:'sdsds',
						author:'王晓明',
						oc_date:'3月1日',
						order_status: -1
					}
				]
		}
	},
	components:{
		headerItem:HeaderItem,
		borrowItem:BorrowItem
	},
	methods:{
		handleClick:function(){
		}
	}
};
</script>

<style lang="stylus" type='stylus' rel="stylesheet/stylus" scoped>
@import url('../../../common/stylus/icon.styl')
@import url('../../../common/stylus/common.styl')
.tab_header
	padding:20px 10px
	border:1px solid #eee;
.tab_bottom
	padding:5px 0
	border-bottom:1px solid #eee		
</style>