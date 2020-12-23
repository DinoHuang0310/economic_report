<template>
  <div class="content-box" ref="bscroll">
    <section>
      <TitleModule
        title="房市熱度續升溫"
        :subtitle="['<span>房市延續2020下半年熱度</span>呈<mark>「量增價穩」</mark>格局']"
      />
      <ChartModule position="top" :content="area" />
      <ArticleModule :articles="articles" url="https://pse.is/388vp7" />
    </section>
  </div>
</template>

<script>
import TitleModule from './model/TitleModule'
import ChartModule from './model/ChartModule'
import ArticleModule from './model/ArticleModule'

import BScroll from '@better-scroll/core'

export default {
  components: {
    TitleModule,
    ChartModule,
    ArticleModule
  },
  props: {
    windowWidth: {
      type: Number,
      required: false
    }
  },
  data() {
    return {
      area: [
        {
          chartTitle: ['近10年全國建物買賣移轉棟數條柱走勢圖'],
          chartOption: {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            grid: {
              top: '5%',
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: {
              type: 'category',
              data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']
            },
            yAxis: {
              type: 'value'
            },
            series: [
              {
                data: [
                  { value: 361704 },
                  { value: 328874 },
                  { value: 371892 },
                  { value: 320598 },
                  { value: 292550 },
                  { value: 245396 },
                  { value: 266086 },
                  { value: 277967 },
                  { value: 300275 },
                  { value: 321459, itemStyle: {color: '#c23531'} }
                ],
                name: '買賣移轉棟數',
                type: 'bar',
                color: '#1e3c72'
              }
            ]
          },
          chartDescription: ['(資料來源：台北市不動產仲介經紀業公會彙整內政部統計處、六都地政局。2020年為推估值)'],
          chartName: ''
        }
      ],
      articles: [
        '受惠低利環境、寬鬆貨幣政策等因素，自2020下半年以來，台灣房市交易熱度便逐步升溫，價格也緩步上漲；綜合受訪專家看法，預估2021年房市，應會延續2020年熱度，有望持續成長；價格方面，會在平盤或小幅上漲之間，呈現「量增價穩」格局。'
      ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.bs = new BScroll(this.$refs.bscroll, {
        click: true,
        scrollX: true,
        mouseWheel: {
          speed: 10,
          invert: false,
          easeTime: 1000,
          // dampingFactor: 0
        }
      })
      this.bs.on('scrollEnd', (e) => {
        const transformX = e.x * -1;
        const showprompt = transformX > this.windowWidth ? false : true;
        this.$emit('promptCrtl', showprompt);
      })
    })
  }
}
</script>

<style>
</style>
