<template>
  <div id="app">
        <div class="content">
           <router-view ></router-view>
           <!-- <router-view ></router-view> -->
        </div>
        <div class="tab border-1px">
          <div class="tab-item">
              <router-link :to="{name: 'Home'}" tag='ul' @click.native="flushCom" >
                <li><i class="iconfont icon-home"></i></li>
                <li><span>书城</span></li>
              </router-link>
          </div>
          <div class="tab-item">
              <router-link :to="{name: 'Explorer'}" tag='ul' @click.native="flushCom">
                <li><i class="iconfont icon-category"></i></li>
                <li><span>分类</span></li>
              </router-link>
          </div>
          <div class="tab-item">
              <router-link :to="{name: 'Cart'}" tag='ul' @click.native="flushCom">
                <li><i class="iconfont icon-cart"></i></li>
                <li><span>书架</span></li>
              </router-link>
          </div>
          <div class="tab-item">
              <router-link :to="{name: 'Me'}" tag='ul' @click.native="flushCom">
                <li><i class="iconfont icon-me"></i></li>
                <li><span>我的</span></li>
              </router-link>
          </div>
        </div>
  </div>
</template>

<script type='text/javascript'>
import {fetch} from '@/util/http'
import home from '@/components/home/Home'
export default {
  name: 'app',
  data() {
    return {
      intro:{}
    }
  },
  components: {
    home
  },
  mounted() {
    // this.getBook();
  },
  methods:{
    flushCom:function(){
            console.log(1111);
　　　　},
    getBook: function() {
      var _this = this;
      fetch ('http://localhost:8081/menuwork//novel/home').then(response => {
         // console.log(response.data)
          this.intro = response[0]
          console.log('intro infoone:'+JSON.stringify(this.intro));
      })
    }
  },

}
</script>

<style lang="stylus" type='stylus' rel="stylesheet/stylus" scoped>
@import url('./common/stylus/icon.styl')
@import url('./common/stylus/common.styl')
*
  font-family 'Source Sans Pro', sans-serif;
  font-weight 300;
  margin 0
  padding 0
.content
  display: inline-block
  width: 100%
  margin-bottom:40px
  height: auto
.tab
  position fixed
  bottom 0px
  width 100%
  height 40px
  padding 0 5px 5px
  text-align center
  display:flex
  background-color #eee
  .tab-item
    flex-direction:column
    width 25%
    ul
      list-style none
      li
        flex-direction:row
        span
          font-size 12px
</style>
