<template>
	<el-container>
		<el-header style="background-color: #000;text-align: center;height: 50px;line-height: 50px;padding:0;margin:0;">
		<header-item message="想看" backUrl="/">
			<div>
				<span @click="search">
					<i class="iconfont icon-love"></i>
				</span>
				<span @click="addWant">
					<i class="iconfont icon-home"></i>
				</span>
			</div>
		</header-item>
	</el-header>
		<el-main style="padding:0;border:0;">
			<el-tabs style="border:none;padding:0;margin:0;" v-model="activeName" type="border-card" stretch="stretch" @tab-click="handleClick">
			    <el-tab-pane label="想看图书" name="first">
			    	<div class="want_list" v-for="item in wantList">
			    		<want-item :wItem='item'></want-item>
			    	</div>
			    </el-tab-pane>
			    <el-tab-pane label="我的推荐" name="second">
			    	<div class="want_list" v-for="item in wantList">
			    		<want-item :wItem='item'></want-item>
			    	</div>
			    </el-tab-pane>
		  </el-tabs>
		</el-main>
	</el-container>
</template>
<script>
	import HeaderItem from '@/components/header_item/HeaderItem'
	import WantItem from '@/components/want_item/WantItem'
	export default{
		name:'want',
		data(){
			return{
				activeName: 'first',
				stretch:true,
				wantList:[
					{
						want_title:'极品家丁',
						want_reason:'谁是谁的谁是的是的多所',
						want_person:'小胖子',
						want_num:32
					},
					{
						want_title:'极品家丁',
						want_reason:'谁是谁的谁是的是的多所',
						want_person:'小胖子',
						want_num:32
					},{
						want_title:'极品家丁',
						want_reason:'谁是谁的谁是的是的多所',
						want_person:'小胖子',
						want_num:32
					}
				]
			}
		},
		components:{
			headerItem:HeaderItem,
			wantItem:WantItem
		},
		methods:{
			search:function(){
				this.$router.push({ name: 'search'})
			},
			addWant:function(){
				this.$router.push({name:'addWant'})
			},
			handleClick(tab, event) {
		        // console.log(tab, event);
		    }
		}
	}
</script>
<style></style>