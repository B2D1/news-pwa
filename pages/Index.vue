<template>
  <v-layout row wrap>
    <v-flex xs12>
      <div class="row">
        <div class="example-2 card">
          <div class="wrapper">
            <div class="header">
              <div class="date">
                <span class="year">2019</span>
                <span class="month">9</span>
                <span class="day">18</span>
              </div>
            </div>
            <div class="data">
              <div class="content">
                <span class="author">封面新闻</span>
                <h1 class="title">
                  <a href="#">一个曾经绝密28年的名字</a>
                </h1>
                <p class="text">国家勋章和国家荣誉称号获得者</p>
                <a href="#" class="button">阅读</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template> 

<script>
import request from "../helpers/request";
import { mapActions } from "vuex";
function setState(store) {
  store.dispatch("appShell/appHeader/setAppHeader", {
    show: true,
    title: "72 Kr",
    showMenu: true,
    showBack: false,
    showLogo: false,
    actions: [
      {
        icon: "search",
        route: "/search"
      }
    ]
  });
}

export default {
  name: "index",
  metaInfo: {
    title: "主页",
    titleTemplate: "%s - 72 Kr",
    meta: [
      { name: "keywords", content: "72 kr 新闻" },
      {
        name: "description",
        content: "由东哥打造的新闻系统"
      }
    ]
  },
  async asyncData({ store, route }) {
    const res = await request.get("/categories");
    setState(store);
  },
  activated() {
    setState(this.$store);
  }
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:300, 400, 700);
* {
  box-sizing: border-box;
}

body {
  background-image: linear-gradient(to right, #034378, #2d4e68);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  font-family: "Open Sans", sans-serif;
}

a {
  text-decoration: none;
}

h1 {
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
}

.row {
  max-width: 900px;
  margin: 20px auto;
}

.card {
  float: left;
  padding: 0 1.7rem;
  width: 100%;
  box-shadow: none !important;
}
.card .menu-content {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.card .menu-content::before,
.card .menu-content::after {
  content: "";
  display: table;
}
.card .menu-content::after {
  clear: both;
}
.card .menu-content li {
  display: inline-block;
}
.card .menu-content a {
  color: #fff;
}
.card .menu-content span {
  position: absolute;
  left: 50%;
  top: 0;
  font-size: 10px;
  font-weight: 700;
  font-family: "Open Sans";
  -webkit-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
}
.card .wrapper {
  background-color: #fff;
  min-height: 540px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.2);
}
.card .wrapper .data {
  -webkit-transform: translateY(0);
  transform: translateY(0);
}
.card .data {
  position: absolute;
  bottom: 0;
  width: 100%;
  -webkit-transform: translateY(calc(70px + 1em));
  transform: translateY(calc(70px + 1em));
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
}
.card .data .content {
  padding: 1em;
  position: relative;
  z-index: 1;
}
.card .author {
  font-size: 12px;
}
.card .title {
  margin-top: 10px;
}
.card .text {
  height: 70px;
  margin: 0;
}
.card input[type="checkbox"] {
  display: none;
}
.card input[type="checkbox"] + .menu-content {
  -webkit-transform: translateY(-60px);
  transform: translateY(-60px);
}

.example-2 .wrapper {
  background: url(http://paper.people.com.cn/rmrb/res/2019-09/19/04/rmrb2019091904p19_b.jpg)
    center/cover no-repeat;
  filter: brightness(0.8);
}

.example-2 .header {
  color: #fff;
  padding: 1em;
}
.example-2 .header::before,
.example-2 .header::after {
  content: "";
  display: table;
}
.example-2 .header::after {
  clear: both;
}
.example-2 .header .date {
  float: left;
  font-size: 12px;
}
.example-2 .menu-content {
  float: right;
}
.example-2 .menu-content li {
  margin: 0 5px;
  position: relative;
}
.example-2 .menu-content span {
  transition: all 0.3s;
  opacity: 0;
}
.example-2 .data {
  color: #fff;
  transform: translateY(calc(70px + 0em));
}
.example-2 .title a {
  color: #fff;
}
.example-2 .button {
  display: block;
  width: 100px;
  margin: 2em auto 1em;
  text-align: center;
  font-size: 12px;
  color: #fff;
  line-height: 1;
  position: relative;
  font-weight: 700;
}
.example-2 .button::after {
  content: "\2192";
  opacity: 0;
  position: absolute;
  right: 0;
  top: 50%;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  transition: all 0.3s;
}
.example-2 .button:hover::after {
  -webkit-transform: translate(5px, -50%);
  transform: translate(5px, -50%);
  opacity: 1;
}
</style>
