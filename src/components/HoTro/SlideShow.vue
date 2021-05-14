<template>

    <div>
        <h1>Our Highlights</h1>
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
      </div>
    </transition-group>
    <span id="span">{{currentText}}</span>
    <a class="prev" @click="prev" href="#">&#10094; Previous</a>
    <a class="next" @click="next" href="#">&#10095; Next</a>
  </div>
</template>
<script>
export default {
  name: "Slider",
  data() {
    return {
      images: [
        "https://vtv1.mediacdn.vn/thumb_w/650/2019/8/16/english-1565940906983395021180.jpg",
        "https://www.studytienganh.vn/upload/2017/08/150.jpg",
        "https://static.anhnguathena.vn/anhngu//img.media/2019/11/1573870563728.jpg",
        "https://ejoy-english.com/blog/wp-content/uploads/2018/09/%E1%BB%A9ng-d%E1%BB%A5ng-h%E1%BB%8Dc-ti%E1%BA%BFng-anh-1.jpg"
      ],
      text :[
        "Rèn luyện nhiều kĩ năng",
        "Học mà chơi, thú vị hấp dẫn",
        "Có phân theo cấp độ giúp việc học đơn giản hơn",
        "Học online kết nối mọi người, học tiện lợi"
      ],
      //timer: null,
      currentIndex: 0
    };
  },

  // mounted: function() {
  //   this.startSlide();
  // },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 4000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
    currentText : function(){
      return this.text[Math.abs(this.currentIndex) % this.text.length];
    }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

img {
  height:300px;
  width:100%;
  margin-bottom: 50px;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}
h1{
  color: blueviolet;
  font-family: fantasy;
}
#span{
  color: black;
  font-family: cursive;
  background-color: aliceblue;
  position: absolute;
  top: 70%;
  padding: 16px;
  font-weight: bold;
  font-size: 28px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  margin-left: auto;
  margin-right: auto;
  left: 35%;
}
</style>
