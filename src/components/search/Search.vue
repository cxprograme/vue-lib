<template>
	<el-container>
		<el-header style="background-color: #000;text-align: center;height: 50px;line-height: 50px">
			<el-row :gutter='20'>
				<el-col :span="20">
					<el-input
					    placeholder="请输入内容"
					    prefix-icon="el-icon-search"
					    v-model="content" size="small">
					  </el-input>
				</el-col>
				<el-col :span="2">
					<el-button type="text" @click="cancel">取消</el-button>
				</el-col>
			</el-row>
		</el-header>
		<el-main style="padding: 3px">
			<booklist :blist="book" ></booklist>
		</el-main>
	</el-container>
</template>
<script>

	import booklist from '@/components/booklist/BookList'
	export default{
		name:'search',
		data(){
			return{
				content:'',
				book:[{"novel_img":"http://www.biquge.com.tw/files/article/image/8/8568/8568s.jpg","novel_describe":"东方神州，有人皇立道统，有圣贤宗门传道，有诸侯雄踞一方王国，诸强林立，神州动乱千万载，执此之时，一代天骄叶青帝及东凰大帝横空出世，斩人皇，驭圣贤，诸侯臣服，东方神州一统！然，叶青帝忽然暴毙，世间雕像尽皆被毁，于世间除名，沦为禁忌；从此神州唯东凰大帝独尊！十五年后，东海青州城，一名为叶伏天的少年，开启了他的传奇之路…","img_url":"/image/8/8568/8568s.jpg","novel_type_name":"搜索结果","push_flag":"1","novel_type":"N1","novel_name":"伏天氏","novel_author":"净无痕","novel_id":"c0212052-7ced-11e8-91de-acbc32b0c59d"},{"novel_img":"http://www.biquge.com.tw/files/article/image/8/8568/8568s.jpg","novel_describe":"东方神州，有人皇立道统，有圣贤宗门传道，有诸侯雄踞一方王国，诸强林立，神州动乱千万载，执此之时，一代天骄叶青帝及东凰大帝横空出世，斩人皇，驭圣贤，诸侯臣服，东方神州一统！然，叶青帝忽然暴毙，世间雕像尽皆被毁，于世间除名，沦为禁忌；从此神州唯东凰大帝独尊！十五年后，东海青州城，一名为叶伏天的少年，开启了他的传奇之路…","img_url":"/image/8/8568/8568s.jpg","novel_type_name":"玄幻小说排行榜","push_flag":"1","novel_type":"N1","novel_name":"伏天氏","novel_author":"净无痕","novel_id":"c0212052-7ced-11e8-91de-acbc32b0c59d"}]
			}
		},
		components:{
			booklist:booklist
		},
		methods:{
			cancel:function(){
				this.$router.push({name:'Home'})
			}
		}
	}
</script>
<style lang="stylus" type='stylus' rel="stylesheet/stylus" scoped>
	
</style>