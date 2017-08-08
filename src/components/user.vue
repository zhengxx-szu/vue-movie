<template>
  <div class="user">
    <div class="base_info">
      <div class="user_avatar">
        <img src="../assets/images/user_avatar.png">
        <i class="icon"><img src="../assets/images/icon_star.png"></i>
      </div>
      <div class="right">
        <div class="user_name">搁浅城殇丶</div>
        <div class="user_home"><img src="../assets/images/icon_gerenzhuye.png"><span>个人主页</span></div>
        <div class="user_grow"><img src="../assets/images/icon_chengzhangzhongxin.png"><span>成长中心</span></div>
      </div>
    </div>
    <div class="myorder">
      <div class="title">我的订单</div>
      <div class="showall"><span>全部</span><i class="iconfont icon-jinrujiantou"></i></div>
      <div class="order_list">
        <div class="order_wrapper">
          <img src="../assets/images/test.png">
          <span class="order_text">代付款</span>
        </div>
        <div class="order_wrapper">
          <img src="../assets/images/test.png">
          <span class="order_text">代付款</span>
        </div>
        <div class="order_wrapper">
          <img src="../assets/images/test.png">
          <span class="order_text">代付款</span>
        </div>
        <div class="order_wrapper">
          <img src="../assets/images/test.png">
          <span class="order_text">代付款</span>
        </div>
      </div>
    </div>
    <split></split>
    <div class="item_wrapper">
      <div class="item_detail">
        <i class="iconfont icon-wode"></i>
        <span>我的主页</span>
        <i class="iconfont icon-jinrujiantou enter"></i>
      </div>
      <div class="item_detail">
        <i class="iconfont icon-qushi"></i>
        <span>我的等级</span>
        <i class="iconfont icon-jinrujiantou enter"></i>
      </div>
      <div class="item_detail">
        <i class="iconfont icon-huiyuanqia"></i>
        <span>我的会员</span>
        <i class="iconfont icon-jinrujiantou enter"></i>
      </div>
    </div>
    <split></split>
    <div class="item_wrapper">
      <div class="item_detail">
        <i class="iconfont icon-favorite"></i>
        <span>我的收藏</span>
        <i class="iconfont icon-jinrujiantou enter"></i>
      </div>
      <div class="item_detail">
        <i class="iconfont icon-dianpu"></i>
        <span>我的地址</span>
        <i class="iconfont icon-jinrujiantou enter"></i>
      </div>
    </div>
    <split></split>
    <div class="item_wrapper">
      <div class="item_detail">
        <i class="iconfont icon-comments"></i>
        <span>我的评论</span>
        <i class="iconfont icon-jinrujiantou enter"></i>
      </div>
      <div class="item_detail">
        <i class="iconfont icon-xihuan1"></i>
        <span>我的想看</span>
        <i class="iconfont icon-jinrujiantou enter"></i>
      </div>
      <div class="item_detail">
        <i class="iconfont icon-shoujian"></i>
        <span>我的消息</span>
        <i class="iconfont icon-jinrujiantou enter"></i>
      </div>
      <div class="item_detail">
        <i class="iconfont icon-yijianfankui"></i>
        <span>意见反馈</span>
        <i class="iconfont icon-jinrujiantou enter"></i>
      </div>
    </div>
    <split></split>
    <div class="item_wrapper">
      <div class="item_detail">
        <i class="iconfont icon-shezhi"></i>
        <span>设置</span>
        <i class="iconfont icon-jinrujiantou enter"></i>
      </div>
      <div class="item_detail">
        <i class="iconfont icon-tuichu"></i>
        <span>退出</span>
        <i class="iconfont icon-jinrujiantou enter"></i>
      </div>
    </div>
  </div>
</template>

<script>
import split from '@/components/split'
export default {
  components: {
    split
  }
}
</script>

<style lang="less" scoped>
.user {
  width: 100%;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 50px;
  .base_info {
    display: flex;
    width: 100%;
    height: 120px;
    box-sizing: border-box;
    padding: 0 20px;
    background: url('../assets/images/user_bg.png');
    background-size: cover;
    .user_avatar {
      position: relative;
      width: 70px;
      height: 70px;
      padding-top: 25px;
      img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
      }
      .icon {
        position: absolute;
        right: 0px;
        bottom: 0px;
        img {
          width: 25px;
          height: 25px;
          z-index: 1;
        }
      }
    }
    .right {
      margin-left: 30px;
      .user_name {
        padding-top: 40px;
        height: 20px;
        font-size: 16px;
        color: rgb(255, 255, 255);
      }
      .user_home, .user_grow {
        display: inline-block;
        margin-top: 10px;
        vertical-align: middle;
        img {
          padding-right: 2px;
          width: 16px;
          height: 16px;
          vertical-align: top;
        }
        span {
          display: inline-block;
          height: 16px;
          font-size: 12px;
        }
      }
      .user_home {
        margin-right: 10px;
      }
    }
  }
  .myorder {
    position: relative;
    width: 100%;
    box-sizing: border-box;
    .title {
      height: 40px;
      line-height: 40px;
      margin-left: 20px;
      border-bottom: 1px solid rgba(150, 150, 150, 0.1);
    }
    .showall {
      position: absolute;
      top: 0;
      right: 10px;
      height: 40px;
      line-height: 40px;
      .iconfont, span {
        font-size: 12px;
      }
    }
    .order_list {
      display: flex;
      height: 70px;
      box-sizing: border-box;
      padding: 10px 0;
      .order_wrapper {
        flex: 1;
        font-size: 12px;
        text-align: center;
        border-right: 1px solid rgba(150, 150, 150, 0.1);
        img {
          width: 30px;
          margin-bottom: 5px;
        }
        span {
          display: block;
        }
      }
    }
  }
  .item_wrapper {
    width: 100%;
    .item_detail {
      position: relative;
      height: 40px;
      line-height: 40px;
      box-sizing: border-box;
      margin-left: 20px;
      // border-bottom: 1px solid rgba(150, 150, 150, 0.1);
      .iconfont, span {
        font-size: 14px;
        margin-right: 10px;
      }
      .enter {
        position: absolute;
        padding-right: 10px;
        right: 0;
      }
      &.item_detail:last-child {
        border: none;
      }
    }
  }
}
</style>
