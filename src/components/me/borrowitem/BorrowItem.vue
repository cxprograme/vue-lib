<template>
	<!-- <el-row>
		<el-row class='tab_header'>
			<el-col :span='4'>
				<div class="b_img" style='width: 40px;height: 40px;background-color: orange'></div>
			</el-col>
			<el-col :span='14'>
				<el-row>{{itemInfo.book_name}}</el-row>
				<el-row>作者:{{itemInfo.author}}</el-row>
			</el-col>
			<el-col :span='6' style='text-align: center;'> -->
				<!-- 1 立即借阅 -1 取消借阅 2 图书借出 -2 图书归还 3 续借 -->
				<!-- 有没有标识判断是主动取消，还是被动取消的 -->
		<!-- 		<el-row v-if="itemInfo.order_status==1">待取书</el-row>
				<el-row v-else-if="itemInfo.order_status==-2">待评价</el-row>
				<el-row v-else-if="itemInfo.order_status==2">未还书</el-row>
				<el-row v-else-if="itemInfo.order_status==-1">删除记录</el-row>
				<el-row>3月1日</el-row>
			</el-col>
		</el-row>
		<el-row class='tab_bottom' >
			<el-col :span='20'></el-col>
			<el-col :span='5' :push='18'>
				<el-button class ='btn' type='primary' size="mini" round v-if="itemInfo.order_status==1" @click='cancelBorrow'>取消</el-button>

				<el-button class ='btn' type='primary' size="mini" round v-if="itemInfo.order_status==-2" @click="comment">评价</el-button>

				<el-button class ='btn' type='primary' size="mini" round v-if="itemInfo.order_status==2" @click="renew">续借</el-button>
			</el-col>
		</el-row>
	</el-row> -->

	<el-row>
		<el-row class='tab_header'>
			<el-col  :span='4'>
				<div class="b_img" style='width: 40px;height: 40px;background-color: orange'></div>
			</el-col>
			<el-col class='elcol' :span='20'>
				<el-row class='elrow'>
					<el-col :span='16'>{{itemInfo.book_name}}</el-col>
					<el-col v-show='record' :span='6' :push='2' v-if="itemInfo.order_status==1">待取书</el-col>
					<el-col v-show='record' :span='6' :push='2' v-else-if="itemInfo.order_status==-2">待评价</el-col>
					<el-col v-show='record' :span='6' :push='2' v-else-if="itemInfo.order_status==2">未还书</el-col>
					<el-col v-show='record' :span='6' :push='2' v-else-if="itemInfo.order_status==-1">删除记录</el-col>
				</el-row>
				<el-row class='elrow'>
					<el-col :span='16'>作者:{{itemInfo.author}}</el-col>
					<el-col :span='6' :push='2'>3月1日</el-col>
				</el-row>
			</el-col>
		</el-row>
		<el-row class='tab_bottom' v-show="tabBottom">
			<el-col :span='20'></el-col>
			<el-col :span='5' :push='18'>
				<el-button class ='btn' type='primary' size="mini" round v-if="itemInfo.order_status==1" @click='cancelBorrow'>取消</el-button>

				<el-button class ='btn' type='primary' size="mini" round v-if="itemInfo.order_status==-2" @click="comment">评价</el-button>

				<el-button class ='btn' type='primary' size="mini" round v-if="itemInfo.order_status==2" @click="renew">续借</el-button>
			</el-col>
		</el-row>
	</el-row>
</template>
<script>
	import store from '@/store/store'
	import HeaderItem from '@/components/header_item/HeaderItem'
	import axios from 'axios'
	import {fetch,post} from '@/util/http'
	import {formatDate,addDate} from '@/util/date'
	export default{
		name: 'borrowitem',
		data(){
			return{
				
			}
		},
		props:{
			itemInfo:{
				type:Object
			},
			record:{
				type:Boolean,
				default:true
			},
			tabBottom:{
				type:Boolean,
				default:true
			}
		},
		methods:{
			/**
			 * @Author    Hybrid
			 * @DateTime  2018-09-01
			 * @copyright 取消书籍订阅
			 * @license   [license]
			 * @version   [version]
			 * @return    {[type]}    [description]
			 */
			cancelBorrow:function(){
				var user =JSON.parse(localStorage.getItem("user"));
				// order_type -1表示取消借阅 信息里面要获取book_id 而不是bookset_id
				var param ={
					'book_id':this.book.book_id,
					// 'person_id':user.person_id,
					person_id:'3',//暂时写死
					'order_type':'-1'
				}
				post('http://localhost:8081/menuwork/hs/lib/book/operate',param).then(response => {
					console.log(response);	
				}).catch(err => {
	                // reject(err)
	            })
			},
			/**
			 * @Author    Hybrid
			 * @DateTime  2018-09-01
			 * @copyright 续借书籍
			 * @license   [license]
			 * @version   [version]
			 * @return    {[type]}    [description]
			 */
			renew:function(){
				var user =JSON.parse(localStorage.getItem("user"));
				// order_type -1表示取消借阅 信息里面要获取book_id 而不是bookset_id
				var param ={
					'book_id':this.book.book_id,
					// 'person_id':user.person_id,
					person_id:'3',//暂时写死
					'order_type':'3'
				}
				post('http://localhost:8081/menuwork/hs/lib/book/operate',param).then(response => {
					console.log(response);	
				}).catch(err => {
	                // reject(err)
	            })
			},
			/**
			 * @Author    Hybrid
			 * @DateTime  2018-09-01
			 * @copyright 评价书籍
			 * @license   [license]
			 * @version   [version]
			 * @return    {[type]}    [description]
			 */
			comment:function(){
				this.$router.push({name:'evalution',query:{bookinfo:this.itemInfo}});
			}
		}
	};
</script>

<style lang="stylus" type='stylus' rel="stylesheet/stylus" scoped>
.tab_header
	margin-top:5px
	padding:20px 10px
	border:1px solid #eee;
	.elrow
		padding:0 0 0 5px
.tab_bottom
	padding:5px 0
	text-align:center
	border-bottom:1px solid #eee
	.btn
		width:100%
</style>