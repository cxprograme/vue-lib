<template>
	<div class="confirm_container" >
		<header-item message="借书确认" backUrl='/hslib/home/chapter' :book="book"></header-item>
		<el-card class="borrow_info">
			<el-row>
				<label>书名:</label>
				<span>{{book.book_name}}</span>
			</el-row>
			<el-row>
				<label>编号:</label>
				<span>HS-233</span>
			</el-row>
			<el-row>
				<label>起始时间:</label>
				<span>{{beginDate}}</span>
			</el-row>
			<el-row>
				<label>结束时间:</label>
				<span>{{endDate}}</span>
			</el-row>
			<el-row>
				<label>支付押金:</label>
				<span>20金颜值（还书并打分后自动退回）</span>
			</el-row>
		</el-card>
		<el-row style='text-align: center;margin-top: 50px'>
			<el-button type="primary" @click="confirmBorrow">确认借书</el-button>
		</el-row>
	</div>
</template>
<script>
	import store from '@/store/store'
	import HeaderItem from '@/components/header_item/HeaderItem'
	import axios from 'axios'
	import {fetch,post} from '@/util/http'
	import {formatDate,addDate} from '@/util/date'
	export default{
		name:'confirm',
		data(){
			return{
				book:{},
				beginDate:'',
				endDate:''
			}
		},
		components:{
			headerItem:HeaderItem
		},
		mounted:function(){
			//this.book = this.$route.query.bookinfo;
			this.book = this.$store.state.book;
			this.beginDate = formatDate(new Date(),'yyyy-MM-dd');
			this.endDate = formatDate(addDate(new Date(),30),'yyyy-MM-dd');
		},
		methods:{
			
			confirmBorrow:function(){
				var user =JSON.parse(localStorage.getItem("user"));
				// order_type 1表示借阅
				var param ={
					'book_id':this.book.booksets_id,
					'person_id':user.person_id,
					'order_type':'1'
				}
				post('http://localhost:8081/menuwork/hs/lib/book/operate',param).then(response => {
					console.log(response);	
				}).catch(err => {
	                // reject(err)
	            })
			}
		}
	}
</script>
<style lang="stylus" type='stylus' rel="stylesheet/stylus" scoped>
.borrow_info
	margin-top:20px	
	.el-row
		display:flex
		justify-content:space-between
		font-size:14px
		label
			flex:2
		span
			flex:5
</style>