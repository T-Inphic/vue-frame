<template>
  <div class="hello">
    <div v-for="(item, index) in data" :key="index">
      <p>{{item.title}}<img :src="item.thumbnail_pic_s"/></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      data: '',
    }
  },
  mounted(){
    this.$get(this.$url.home,{abc:123}).then((res)=>{
        this.data = res.data.articles
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
