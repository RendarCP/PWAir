<template>
    <div>
       <h1>Main</h1>
       <div>{{ mapInfo }}</div>
    </div>
</template>

<script>
import weatherData from '../wearther.json';
export default {
  data() {
    return {
      mapInfo: {},
      weatherInfo: {}
    };
  },
  methods: {
    getGeolocation() {
      return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(
          function(position) {
            // 성공 - 경도, 위도를 제대로 가져왔을 때
            resolve(position);
          },
          function(error) {
            // 실패 - 제대로 못가져왔을 때
            reject(error);
          }
        );
      });
    },
    getWeatherInfo() {
      setTimeout(() => {
        this.weatherInfo = weatherData;
      }, 1000);
    }
  },
  created() {
    console.log("호출하기 전", this);
    this.getGeolocation().then(({ coords }) => {
      // console.log('호출하고 나서', result);
      this.mapInfo = coords;
      console.log(coords);
    });

    this.getWeatherInfo();
  }
};
</script>

<style>

</style>
