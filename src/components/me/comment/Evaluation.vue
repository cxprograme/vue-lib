<template>
	<div class="evaluation">
		<header-item message="评价" backUrl="/"></header-item>
		<borrow-item :tabBottom='false' :record='false' :itemInfo="itemInfo"></borrow-item>
		<el-row style="text-align: center;padding: 20px 0">
			<el-rate
			  v-model="form.marks"
			  show-score
			  allow-half
			  :max='10'
			  text-color="#ff9900"
			  score-template="{value}">
			</el-rate>
		</el-row>
		<el-row>
			<el-input type="textarea" v-model="form.comments"></el-input>
		</el-row>
		<el-row style="text-align: center;margin-top:10px">
			<el-button type='primary' @click="submitComment">提交评价</el-button>
		</el-row>
	</div>
</template>
<script >
	import HeaderItem from '@/components/header_item/HeaderItem'
	import BorrowItem from '@/components/me/borrowitem/BorrowItem'
	import {fetch,post} from '@/util/http'
	export default{
		name: 'evaluation',
		data(){
			return{
				itemInfo:{},
				value5:4,
				form:{
					comments:'',
					marks:0
				}
			}
		},
		mounted:function(){
			this.itemInfo = this.$route.query.bookinfo;
		},
		components:{
			headerItem:HeaderItem,
			borrowItem:BorrowItem
		},
		methods:{
			submitComment:function(){
				console.log(this.form);
				var user =JSON.parse(localStorage.getItem("user"));
				// order_type -1表示取消借阅 信息里面要获取book_id 而不是bookset_id
				var param ={
					// 'book_id':this.book.book_id,
					'book_id':'1',
					// 'person_id':user.person_id,
					'person_id':'3',//暂时写死
					'comments':this.form.comments,
					'marks':this.form.marks
				}
				post('http://localhost:8081/menuwork/hs/lib/book/comment',param).then(response => {
					console.log(response);	
				}).catch(err => {
	                // reject(err)
	            })

			}
		}
	};
</script>
<style >
	
</style>