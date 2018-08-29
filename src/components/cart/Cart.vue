/**
 * autor:cxpro
 * date:2017-01-08 15:15:20
 * project-name: ${project_base_name}
 */
<template>
	<div class="carts">
		carts info 
		<div id="box" ref='box'>
		</div>
	</div>
</template>

<script>
export default{
	name: 'carts',
	mounted() {
	   
	}
}
</script>

<style lang="stylus" type='stylus' rel="stylesheet/stylus" scoped>
*
	margin 0 0 0 0
	padding 0 0 0 0
#box
	width 100px
	height 100px
	background-color red
</style>
