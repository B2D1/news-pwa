<template>
  <v-layout row wrap>
    <v-flex xs12>
      <figure v-for="(item, index) in this.news" :key="index" class="snip1208">
        <img :src="'https://b2d1-imgs.oss-cn-beijing.aliyuncs.com/lavas/' + item.cover" alt="sample66" />
        <div class="date">
          <span class="month">{{new Date(item.createTime).getMonth() + 1 + '月'}}</span>
          <span class="day">{{new Date(item.createTime).toLocaleDateString().substring(7,10) + '号'}}</span>
        </div>
        <i class="ion-film-marker"></i>
        <figcaption>
          <h3>{{item.title}}</h3>
          <p>{{summary(item.content)}}</p>
          <button @click="goDetail(item._id)">阅读更多</button>
        </figcaption>
      </figure>
    </v-flex>
  </v-layout>
</template> 

<script>
import request from "../../helpers/request";
import { mapState } from "vuex";
let state = {
  appHeaderState: {
    show: true,
    title: "72 kr",
    showMenu: false,
    showBack: true,
    showLogo: false,
    actions: [
      {
        icon: "home",
        route: {
          name: "index"
        }
      }
    ]
  }
};

function setState(store) {
  store.dispatch("appShell/appHeader/setAppHeader", state.appHeaderState);
}

export default {
  name: "categoryId",
  data() {
    return {};
  },
  metaInfo() {
    return {
      title: `分类`,
      titleTemplate: "%s - 72 Kr",
      meta: [
        { name: "keywords", content: "72 kr 新闻" },
        {
          name: "description",
          content: "由东哥打造的新闻系统"
        }
      ]
    };
  },
  async asyncData({ store, route }) {
    setState(store);
    await store.dispatch("news/getCategoryNews", route.params.id);
  },
  computed: {
    ...mapState("news", ["news"])
  },
  created() {},
  activated() {
    setState(this.$store);
  },
  methods: {
    summary(text) {
      return text.substr(0, 100) + "……";
    },
    goDetail(id) {
      this.$router.push(`/detail/${id}`);
    }
  }
};
</script>

<style scoped>
figure.snip1208 {
  font-family: "Raleway", Arial, sans-serif;
  color: #fff;
  position: relative;
  overflow: hidden;
  margin-bottom: 10px;
  min-width: 220px;
  max-width: 310px;
  width: 100%;
  background-color: #ffffff;
  color: #000000;
  text-align: left;
  font-size: 16px;
}
figure.snip1208 * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
figure.snip1208 img {
  height: 200px;
  object-fit: cover;
  width: 100%;
  vertical-align: top;
  -webkit-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
}
figure.snip1208 figcaption {
  padding: 25px;
  position: relative;
}
figure.snip1208 .date,
figure.snip1208 i {
  background-color: #1abc9c;
  top: 25px;
  color: #fff;
  left: 25px;
  min-height: 60px;
  min-width: 60px;
  position: absolute;
  text-align: center;
}
figure.snip1208 .date {
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
  font-size: 22px;
  font-weight: 700;
  text-transform: uppercase;
}
figure.snip1208 .date span {
  display: block;
  line-height: 30px;
}
figure.snip1208 .date .month {
  font-size: 16px;
  background-color: rgba(0, 0, 0, 0.1);
}
figure.snip1208 i {
  line-height: 60px;
  font-size: 30px;
  -webkit-transform: rotateY(-90deg);
  transform: rotateY(-90deg);
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
}
figure.snip1208 h3,
figure.snip1208 p {
  margin: 0;
  padding: 0;
}
figure.snip1208 h3 {
  margin-bottom: 10px;
  display: inline-block;
  font-weight: 600;
  color: #333333;
  text-transform: uppercase;
}
figure.snip1208 p {
  font-size: 0.8em;
  margin-bottom: 20px;
  line-height: 1.6em;
  color: #555;
}
figure.snip1208 button {
  border: medium none;
  padding: 10px 20px;
  background-color: #1abc9c;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 0.8em;
}
figure.snip1208 a {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  z-index: 1;
}
</style>
