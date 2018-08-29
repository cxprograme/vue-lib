/**
 * autor:cxpro
 * date:2017-01-08 15:15:20
 * project-name: ${project_base_name}
 */
<template>
	<div class="explorer">
		<div class="searchContainer">
			<form>
				<input type="" name="">
			</form>
		</div>
		<tag-cloud :data="hotTag" @clickTag="clickTagItem"></tag-cloud>
	</div>
</template>
<script>
	import axios from 'axios'
	export default{
		name: 'explorer',
		data () {
    		return {
		      hotTag: []
		    }
  		},
  		mounted(){
  			axios.get('http://localhost:8081/menuwork/novel/types', {
		            params: {
		            }
		        })
	            .then(response => {
	                // resolve(response.data);
	                this.hotTag = response.data
	            })
	            .catch(err => {
	                // reject(err)
	            })
  		},
  		methods:{
  			clickTagItem:function(){
  				console.log('111');
  			}
  		}
	};
</script>
<style lang="stylus" type='stylus' rel="stylesheet/stylus" scoped>
	.explorer
		.searchContainer
			width:80%
			padding:20px 0 0 0
			margin:0 auto
			input
				width:100%
				height:25px
				border:1px solid #000
</style>