<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <a class="navbar-brand" href="index.html">conduit</a>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <!-- Add "active" class when you're on that page" -->
          <a class="nav-link active" href>Home</a>
        </li>
        <template v-if="user">
          <li class="nav-item">
            <a class="nav-link" href>
              <i class="ion-compose"></i>&nbsp;New Post
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href>
              <i class="ion-gear-a"></i>&nbsp;Settings
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <img class="user-pic" :src="user.image" />
              {{ user.username}}
            </a>
          </li>
        </template>
        <template v-else>
          <li class="nav-item">
            <a class="nav-link" href>Sign up</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Sign in</router-link>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "AppHeader",
  computed: {
    // 将 vuex 中的 user 通过mapState映射到当前组件上
    ...mapState(["user"])
  }
};
</script>