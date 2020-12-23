<template>
  <div>
    <div class="model-box">
      <div :class="`wrapper chart-area chart-area-${position}`">
        <div v-for="list in content" :key="list.index">
          <p v-if="list.chartTitle.length">
            <span v-for="title in list.chartTitle" :key="title.index">{{ title }}</span>
          </p>
          <div class="chartbox">
            <ECharts :options="list.chartOption" autoresize />
          </div>
          <div v-if="list.chartName" class="chart-name">
            <span>{{ list.chartName }}</span>
          </div>
          <div v-if="list.chartDescription.length" class="chart-description">
            <p v-for="description in list.chartDescription" :key="description.index">{{ description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/chart/bar'

export default {
  components: {
    ECharts
  },
  props: {
    position: {
      type: String,
      required: false
    },
    content: {
      type: Array,
      required: false
    }
  }
}
</script>

<style>
.chart-area {
  background: rgba(255, 255, 255, .75);
}
.chart-area-top {
  height: 80%;
  border-bottom: solid 1px #ccc;
}
.chart-area-bottom {
  height: 80%;
  top: 20%;
  border-top: solid 1px #ccc;
}
.chart-area-full {
  height: 100%;
  flex-wrap: wrap;
  align-content: center;
}
.chart-area > div {
  width: 100%;
  margin: 2vh 0;
  white-space: normal;
}
.chart-area p {
  text-align: center;
}
.chart-area p span {
  display: block;
}
.chartbox {
  position: relative;
  padding-bottom: 50%;
}
.chart-name {
  margin: 1em 0;
  text-align: center;
}
.chart-name span {
  display: inline-block;
  color: #1e3c72;
  border: solid 1px #1e3c72;
  padding: 0.4em 0.8em;
}
.chart-description {
  margin: 1em 0;
}
.chart-description p {
  text-align: left;
  white-space: normal;
}

@media screen and (max-width: 768px) and (orientation: landscape),
screen and (width: 812px) and (orientation: landscape) {
  .chart-area-top,
  .chart-area-bottom {
    top: 0;
    height: 100%;
    border-top: none;
    border-bottom: none;
  }
  .chart-area > div {
    width: 80%;
    margin: auto;
  }
  .chart-area p {
    width: 140%;
    margin-left: -20%;
  }
  .chart-area-full.wrapper {
    display: flex;
    flex-wrap: nowrap;
    padding: 0 4%;
  }
}

@media screen and (max-width: 480px) {
  .chart-area:not(.chart-area-full) .chartbox {
    padding-bottom: 60%;
  }
  .chart-area-top {
    height: 100%;
    border-bottom: none;
  }
  .chart-area-bottom {
    top: 0;
    height: 100%;
    border-top: none;
  }
  .chart-area.chart-area-full > div {
    margin: 1vh 0;
  }
  .chart-area.chart-area-full > div p {
    margin-bottom: 0.5em;
  }
}


</style>
