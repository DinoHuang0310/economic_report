<template>
  <div class="content-box" ref="bscroll">
    <section>
      <TitleModule
        title="台股可望奔萬七"
        :subtitle="['《今周刊》2021年投資展望調查', '多頭延續！台股<mark>站穩萬五、直奔萬七！</mark> 87%金融專家認為有機會']"
      />
      <ChartModule position="top" :content="area1" />
      <ChartModule position="bottom" :content="area2" />
      <ArticleModule :articles="articles" url="https://pse.is/3auasl" />
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
      area1: [
        {
          chartTitle: ['全年相對高檔區間多在15000~15999點', 'Ｑ：2021年大盤指數高低檔區間預測'],
          chartOption: {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            legend: {
              data: ['指數']
            },
            grid: {
              top: '3%',
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: {
              type: 'value',
              max: 80
            },
            yAxis: {
              type: 'category',
              data: ['18000以上', '17000~17999', '16000~16999', '15000~15999', '未滿15000']
            },
            series: [
              {
                name: '預測比例(%)',
                type: 'bar',
                data: [7, 3, 7, 70, 13],
                color: '#1e3c72'
              }
            ]
          },
          chartDescription: [],
          chartName: '相對高檔區間'
        }
      ],
      area2: [
        {
          chartTitle: ['明年高點最有可能出現在Q1	', 'Ｑ：2021年台股高低點時程預測'],
          chartOption: {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            legend: {
              data: ['指數']
            },
            grid: {
              top: '3%',
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: {
              type: 'value',
              max: 40
            },
            yAxis: {
              type: 'category',
              data: ['第四季', '第三季', '第二季', '第一季']
            },
            series: [
              {
                name: '預測比例(%)',
                type: 'bar',
                data: [20, 13, 30, 37],
                color: '#1e3c72'
              }
            ]
          },
          chartDescription: [],
          chartName: '高點時程'
        }
      ],
      articles: [
        '根據《今周刊》針對35位本土、外資法人投資主管，與台股大戶、投資名家進行的「2021年投資展望」調查顯示，對於全球與台灣整體經濟景氣的看法，有高達9成以上受訪者認為「比2020年好」。',
        '在台股大盤指數方面，7成受訪專家研判，可望落在1萬5000點至1萬5999點區間；另有7%受訪者，看好指數落在1萬6000點至1萬6999點區間；看好大盤超過1萬7000點者，占比1成。'
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
