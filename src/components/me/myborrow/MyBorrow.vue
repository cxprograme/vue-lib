<template>
	<div class="mb_container">
		<header-item message="我的借阅" backUrl="/"></header-item>
		<!-- 我的-->
		<el-tabs style="border:none;padding:0;margin:0;" v-model="activeName"  stretch="stretch" @tab-click="handleClick">
		    <el-tab-pane label="全部" name="first">
			    <borrow-item v-for="item in borrowlist" :itemInfo='item'></borrow-item>
		    </el-tab-pane>
		    <el-tab-pane label="待取书" name="second">
		    	<borrow-item v-for="item in waitlist" :itemInfo='item'></borrow-item>
		    </el-tab-pane>
		    <el-tab-pane label="未还书" name="three">
		    	<borrow-item v-for="item in noRevertlist" :itemInfo='item'></borrow-item>
		    </el-tab-pane>
		    <el-tab-pane label="待评价" name="four">
		    	<borrow-item v-for="item in noComment" :itemInfo='item'></borrow-item>
		    </el-tab-pane>
	  	</el-tabs>
	</div>
</template>
<script>
	
import HeaderItem from '@/components/header_item/HeaderItem'
import BorrowItem from '@/components/me/borrowitem/BorrowItem'
import store from '@/store/store'
import axios from 'axios'
import {fetch,post} from '@/util/http'
import {formatDate,addDate} from '@/util/date'
export default{
	name: 'myborrow',
	data(){
		return{
			activeName:'first',
			// 待取书a  未还书b 待评价c 已经还书d 已过期e 已取消（自动取消）f  已取消（手动取消）g
			borrowlist:[],
			//待取书
			waitlist:[],
			//未归还
			noRevertlist:[],
			//未评论
			noComment:[]
		}
	},
	mounted:function(){
		//获取数据
		fetch('http://localhost:8081/menuwork/hs/lib/book/my',
			{
				//暂时写死
				person_id:3
			}
		).then(resp => {
			// 待取书a  未还书b 待评价c 已经还书d 已过期e 已取消（自动取消）f  已取消（手动取消）g 
			var _this = this;
			//全部订单
			this.borrowlist = resp;
			//待取书 
			this.borrowlist.forEach(function(item,index){
				if (item.line_statues=='a') {
					_this.waitlist.push(item);
				}
				if (item.line_statues=='b') {
					_this.noRevertlist.push(item);
				}
				if (item.line_statues=='c') {
					_this.noComment.push(item);
				}
			})
		})
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