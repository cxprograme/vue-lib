<template>
	<el-container>
		<el-header style="background-color: #000;text-align: center;height: 50px;line-height: 50px;padding:0;margin:0;">
			<header-item message="添加想看图书" backUrl="/">
			</header-item>
		</el-header>
		<el-main>
			<el-form :label-position="labelPosition" label-width="80px" >
			  <el-form-item label="图书名称">
			    <el-input v-model="addItem.want_title"></el-input>
			  </el-form-item>
			  <el-form-item label="想看理由">
			    <el-input v-model="addItem.want_reason"></el-input>
			  </el-form-item>
			  <el-form-item style="text-align: center;">
			    <el-button type="primary" @click="submitForm()">立即添加</el-button>
			  </el-form-item>
			</el-form>
		</el-main>
	</el-container>
</template>
<script>

	import HeaderItem from '@/components/header_item/HeaderItem'
	export default{
		name:'add_want',
		data(){
			return {
				labelPosition:'top',
				addItem:{
					want_title:'',
					want_reason:''
				}
			}
		},
		components:{
			headerItem:HeaderItem
		},
		methods:{
			submitForm:function(){

			}
		}
	}
</script>
<style>
	
</style>