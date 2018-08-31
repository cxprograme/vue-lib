<template>
	<el-row style="border:1px solid #eee;padding:10px">
    	<el-row>
	    	<el-col :span='2' >
	    		<el-row>
	    			<div style="width:50px;height:50px;background-color:red">图片</div>
	    		</el-row>
	    	</el-col>
	    	<el-col :span='20' :offset='2' >
	    		<el-row>
	    			<el-col :span='6' style="text-align:left;">咱小潘</el-col>
    				<el-col :span='6' :offset="12" style="text-align:right;">9.3分</el-col>
	    		</el-row>
	    		<el-col style="text-align:left;padding:10px 0 0 0">1月30 12:30</el-col>
	    		
	    	</el-col>
	    </el-row>
	    <el-row style="padding:10px 0 0 0">
	    	<el-col :span="19" :offset='4' style="text-align:left">这本数太赞了,值得一看</el-col>
    	</el-row>
    </el-row>
</template>
<script>
	export default{
		name:'comment',
		data(){
			return{

			}
		}
	}
</script>
<style lang="stylus" type='stylus' rel="stylesheet/stylus" scoped>
	
</style>