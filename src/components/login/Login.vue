<template>
	<div class="login_container">
	<header-item message="绑定邮箱" backUrl="/"></header-item>
	<el-form ref="form" :model="form" class="form_container">
		 <el-form-item style='text-align: center;' label="图书借阅仅对公司内部员工开放，请绑定公司邮箱">
		  </el-form-item>
		  <el-form-item>
		    <el-input v-model="form.to_address"></el-input>
		  </el-form-item>
		  <el-form-item style='text-align: center;'>
		    <el-button type="primary" @click="sendEmail">发送验证邮件</el-button>
		  </el-form-item>
	</el-form>
	</div>
</template>
<script>
	import store from '@/store/store'
	import HeaderItem from '@/components/header_item/HeaderItem'
	import axios from 'axios'
	import {fetch} from '@/util/http'
	export default{
		name:'login_container',
		data(){
			return{
				form: {
		          to_address: ''
		        },
		        book:{}
			}
		},
		components:{
			headerItem:HeaderItem
		},
		mounted:function(){
			// this.book = this.$route.query.bookinfo;
			//this.book = this.$store.state.book;
		},
		methods:{
			sendEmail:function(){

				fetch('http://localhost:8081/menuwork/hs/lib/email',
					{
						to_address:this.form.to_address
					}
				).then(response => {
					 // this.$router.push({ path:'/hslib/home'})
					//this.$router.push({name:'chapters'})
					// this.$router.push({name:'codeLogin',query:{to_address:this.form.to_address,book:this.book}})
					//alert('111');
					this.$router.push({name:'codeLogin',query:{to_address:this.form.to_address}})
				}).catch(err => {
	                // reject(err)
	            })
			}
		}
	}
</script>
<style lang="stylus" type='stylus' rel="stylesheet/stylus" scoped>

</style>