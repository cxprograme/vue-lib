/**
 * autor:cxpro
 * date:2017-01-08 15:15:20
 * project-name: ${project_base_name}
 */
<template>
	<div class="me">
		<header-item message="我的" backUrl="/"></header-item>
				<el-row class='user_info'>
						<el-col :span='4' :push='3'>
							<div class="img" style="height: 50px;width: 50px;background-color: orange"></div>
						</el-col>
						<el-col :span='16' :push='3'>
							<el-row>
								韩梅梅
							</el-row>
							<el-row>
								12121212
							</el-row>
						</el-col>
				</el-row>
				<el-row class='tab_header'>
					<el-col :span='20' :push='1'>
						<span>
							<i class="iconfont icon-home"></i>
						</span>
						<span>我的借阅</span>
					</el-col>
					<el-col :span='2' :push='1'>
						<span @click='to_myborrow'>
							<i class="iconfont icon-back"></i>
						</span>
					</el-col>
				</el-row>
				<el-row class='item'>
					<el-col :span='8' class='item_info'>
						<el-row >
							<el-badge :value="12" >
							  <span>
							  	<i class="iconfont icon-love"></i>
							  </span>
							</el-badge>
						</el-row>
						<el-row>
							<span>已下单</span>
						</el-row>
					</el-col>
					<el-col :span='8' class='item_info'>
						<el-row >
							<el-badge :value="12" >
							  <span>
							  	<i class="iconfont icon-love"></i>
							  </span>
							</el-badge>
						</el-row>
						<el-row>
							<span>已下单</span>
						</el-row>
					</el-col>
					<el-col :span='8' class='item_info'>
						<el-row >
							<el-badge :value="12" >
							  <span>
							  	<i class="iconfont icon-love"></i>
							  </span>
							</el-badge>
						</el-row>
						<el-row>
							<span>已下单</span>
						</el-row>
					</el-col>
				</el-row>
	</div>
</template>

<script>
	
	import HeaderItem from '@/components/header_item/HeaderItem'
	export default{
		name: 'me',
		data(){
			return{

			}
		},
		components:{
			headerItem:HeaderItem
		},
		methods:{
			to_myborrow:function(){
				this.$router.push({name:'myBorrow'})
			}
		}
	};
</script>

<style lang="stylus" type='stylus' rel="stylesheet/stylus" scoped>
	@import url('../../common/stylus/icon.styl')
	@import url('../../common/stylus/common.styl')
	.user_info
		background-color:rgb(233,233,233)
		padding:20px 0
		margin-top:10px
	.tab_header
		margin-top:10px
		height:40px
		line-height:40px
		border-top:1px solid #eee
	.item
		border:1px solid #eee
		padding:10px
		.item_info
			text-align:center						
</style>