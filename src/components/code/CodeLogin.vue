<template>
	<div class="code_container">
	<header-item message="邮箱验证" backUrl="/"></header-item>
	<el-form ref="form" :model="form" class="form_container">
		 <el-form-item style='text-align: center;' label="我们已向您的公司邮箱发送验证码,请在下方输入">
		  </el-form-item>
		  <el-form-item>
		    <el-input v-model="form.code"></el-input>
		  </el-form-item>
		  <el-form-item style='text-align: center;'>
		    <el-button type="primary" @click="sendCode">确认</el-button>
		  </el-form-item>
	</el-form>
	</div>
</template>
<script>
	import HeaderItem from '@/components/header_item/HeaderItem'
	import axios from 'axios'
	import {fetch} from '@/util/http'
	import store from '@/store/store'
	export default{
		name:'code_login',
		data(){
			return{
				form: {
		          code: ''
		        },
		        book:'',
		        toAddress:''
			}
		},
		components:{
			headerItem:HeaderItem
		},
		mounted:function(){
			//this.book = this.$route.query.book;
			this.toAddress = this.$route.query.to_address;
		},
		methods:{
			sendCode:function(){

				fetch('http://localhost:8081/menuwork/hs/lib/check/email',
					{
						code:this.form.code,
						mail:this.toAddress
					}
				).then(response => {
					// this.$router.push({ path:'/hslib/home'})
					// this.$router.push({name:'chapters'})
					//console.log('1111');
					//this.$router.push({name:'confirm',query:{'bookinfo':this.book}});
					//登录成功后，把用户信息保存到store中
				
					this.$store.state.user = response.msg_result
	      			localStorage.setItem("user", JSON.stringify(response.msg_result))
					this.$router.push({name:'confirm'})
				}).catch(err => {
	                // reject(err)
	            })
			}
		}
	}
</script>
<style lang="stylus" type='stylus' rel="stylesheet/stylus" scoped>

</style>