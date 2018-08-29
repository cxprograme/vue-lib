<template>
	<div class="want_item">
		<div class="want_main">
			<ul>
				<li class="want_title">{{wItem.want_title}}</li>
				<li class="want_reason">理由:<span>{{wItem.want_reason}}</span></li>
			</ul>
		</div>
		<div class="want_bottom">
			<ul>
				<li>推荐人:<span>{{wItem.want_person}}</span></li>
				<li>
					<div>
						<i class="iconfont icon-love"></i>
						<span>{{wItem.want_num}}</span>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		name:"wantItem",
		data(){
			return {

			}
		},
		props:{
			wItem:Object
		}
	}
</script>
<style lang="stylus" type='stylus' rel="stylesheet/stylus" scoped>
@import url('../../common/stylus/icon.styl')
@import url('../../common/stylus/common.styl')	
.want_item
	margin:5px 0
	background-color:rgb(249,249,249)
	.want_main
		border-top:1px solid #eee
		padding:10px 10px
		ul
			padding:0
			margin:0
			li
				list-style:none
				height:30px
				line-height:30px
			.want_title
				font-size:20px
				font-weight:bold
			.want_reason
				color:#000
	.want_bottom
		border:1px solid #eee
		padding:5px 10px
		ul
			display:flex
			flex-direction:coloumn
			justify-content:space-between
			padding:0
			margin:0
			li
				list-style:none
</style>