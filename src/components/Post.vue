<template>
  <div class="post">
    <!----- header ------>
    <header class="header">
      <div class="header-author">
        <Avatar :size="40" />
        <div class="header-author-info">
          <div><CustomText tag="b">Yigitsdt</CustomText></div>
          <div><CustomText size="xsmall">Istanbul, Turkey</CustomText></div>
        </div>
      </div>
      <div class="header-more">
        <button type="button">
          <IconMore />
        </button>
      </div>
    </header>

    <!----- media ------>
    <div class="post-media">
      <img
        src="https://instagram.fsaw1-7.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/158832086_522323975429359_1239492876890243835_n.jpg?tp=1&_nc_ht=instagram.fsaw1-7.fna.fbcdn.net&_nc_cat=107&_nc_ohc=-YhW_HpAQAkAX8emFja&oh=f867e524933d1cb9b9941053730a42c1&oe=6073BBEB"
        alt=""
      />
    </div>

    <!----- actions ------>
    <div class="action-buttons">
      <button type="button">
        <IconLike />
      </button>
      <button type="button">
        <IconComment />
      </button>
      <button type="button">
        <IconDirect />
      </button>
      <button type="button">
        <IconSave />
      </button>
    </div>
    <!----- view count -------->
    <div class="view-count">
      <CustomText tag="b"><span>589</span>beğenme</CustomText>
    </div>
    <!----- comment list ------>

    <!----- datetime ------>

    <!----- comment form ------>
  </div>
</template>

<script>
import IconMore from "@/icons/more.svg";
import IconLike from "@/icons/heart.svg";
import IconComment from "@/icons/comment.svg";
import IconDirect from "@/icons/directPost.svg";
import IconSave from "@/icons/save.svg";
import Avatar from "@/components/Avatar";
import CustomText from "@/components/CustomText";
export default {
  components: {
    Avatar,
    IconMore,
    CustomText,
    IconLike,
    IconComment,
    IconDirect,
    IconSave,
  },
};
</script>
<style scoped>
.post {
  border-radius: 3px;
  border: 1px solid rgb(var(--b6a));
  background:white;
}
.header {
  display: flex;
  align-items: center;
  height: 60px;
  padding-left: 16px;
  padding-right: 16px;
}
.header .header-author {
  display: flex;
  align-items: center;
}
.header .header-more {
  margin-left: auto;
}
.header .header-author .header-author-info {
  margin-left: 8px;
}
.action-buttons {
  display: flex;
  align-items: center;
  height: 45px;
  padding-left: 16px;
  padding-right: 16px;
}
.action-buttons button{
  margin-right: 16px;
}
.action-buttons button:last-child{
  margin-left:auto;
  margin-right: 0;
}
.view-count {
  display: flex;
  align-items: center;
  height: 10px;
  padding-left: 16px;
  padding-right: 16px;
}
</style>