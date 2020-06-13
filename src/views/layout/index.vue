<template>
  <div>
    <app-header />
    <!--中间部分不能写死，是动态的，可能是首页，或者其他内容 -->
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";

export default {
  name: "AppLayout",
  components: {
    AppHeader,
    AppFooter
  }
};
</script>