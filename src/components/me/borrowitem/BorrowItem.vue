<template>
	<el-row>
		<el-row class='tab_header'>
			<el-col  :span='4'>
				<div class="b_img">
					<img style='width: 50px;height: 50px;' :src="'/static'+itemInfo.picture">
				</div>
			</el-col>
			<el-col class='elcol' :span='20'>
				<!-- 待取书a  未还书b 待评价c 已经还书d 已过期e 已取消（自动取消）f  已取消（手动取消）g -->
				<el-row class='elrow'>
					<el-col :span='16'>{{itemInfo.book_name}}</el-col>
					<el-col v-show='record' :span='6' :push='2' v-if="itemInfo.line_statues=='a'">待取书</el-col>
					<el-col v-show='record' :span='6' :push='2' v-if="itemInfo.line_statues=='b'">未还书</el-col>
					<el-col v-show='record' :span='6' :push='2' v-else-if="itemInfo.line_statues=='c'">待评价</el-col>
					<el-col v-show='record' :span='6' :push='2' v-else-if="itemInfo.line_statues=='d'">已还书</el-col>
					<el-col v-show='record' :span='6' :push='2' v-else-if="itemInfo.line_statues=='e'">已过期</el-col>
					<el-col v-show='record' :span='6' :push='2' v-else-if="itemInfo.line_statues=='f'">已取消</el-col>
					<el-col v-show='record' :span='6' :push='2' v-else-if="itemInfo.line_statues=='g'">已取消</el-col>
				</el-row>
				<el-row class='elrow'>
					<el-col :span='16'>作者:{{itemInfo.author}}</el-col>
					<el-col :span='6' :push='2'>3月1日</el-col>
				</el-row>
			</el-col>
		</el-row>
		<el-row class='tab_bottom' v-show="tabBottom" >
			<el-col :span='18' style='width: 75%;height: 30px'>
				<span v-if="itemInfo.line_statues=='e'">过期天数: {{itemInfo.delay_days}}</span>
				<span v-if="itemInfo.line_statues=='e'">扣除经验: {{itemInfo.delay_days}}</span>
				<span v-if="itemInfo.line_statues=='f'" style="font-size: 14px">超过一周未取书，系统自动取消借阅</span>
			</el-col>
			<el-col :span='5'>
				<el-button class ='btn' type='primary' size="mini" round v-if="itemInfo.line_statues=='a'" @click='cancelBorrow'>取消</el-button>
				<el-button class ='btn' type='primary' size="mini" round v-if="itemInfo.line_statues=='c'" @click="comment">评价</el-button>
				<!-- 未还书，需要判断是否已经续借了 -->
				<el-button class ='btn' type='primary' size="mini" round v-if="itemInfo.line_statues=='b'" @click="renew">续借</el-button>
				<el-button class ='btn' type='primary' size="mini" round v-if="itemInfo.line_statues=='d'||itemInfo.line_statues=='f'||itemInfo.line_statues=='g'" @click="deleteRecord">删除记录
				</el-button>
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
	padding:10px 10px
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