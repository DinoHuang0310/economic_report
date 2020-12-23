<template>
  <div class="content-box" ref="bscroll">
    <section>
      <TitleModule
        title="2021經濟三趨勢"
        :subtitle="['<span>專家看2021經濟</span><mark>三大趨勢</mark>有共識']"
      />
      <ChartModule position="top" :content="area1" />
      <ChartModule position="bottom" :content="area2" />
      <ArticleModule :articles="articles" url="https://pse.is/3a2yy3" />
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
          chartTitle: ['94.3％認為明年全球經濟會比今年好', 'Ｑ：2021年全球經濟展望'],
          chartOption: {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            legend: {
              // data: ['指數']
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
              max: 100
            },
            yAxis: {
              type: 'category',
              data: ['持平', '比今年好']
            },
            series: [
              {
                name: '預測比例(%)',
                type: 'bar',
                data: [5.7, 94.3],
                color: '#1e3c72'
              }
            ]
          },
          chartDescription: [],
          chartName: '全球經濟預測'
        }
      ],
      area2: [
        {
          chartTitle: ['91.4%認為明年台灣經濟會比今年好	', 'Ｑ：2021年全球經濟展望'],
          chartOption: {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            // legend: {
            //   data: ['指數']
            // },
            grid: {
              top: '3%',
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: {
              type: 'value',
              max: 100
            },
            yAxis: {
              type: 'category',
              data: ['持平', '比今年好']
            },
            series: [
              {
                name: '預測比例(%)',
                type: 'bar',
                data: [8.6, 91.4],
                color: '#1e3c72'
              }
            ]
          },
          chartDescription: [],
          chartName: '台灣經濟預測'
        }
      ],
      articles: [
        '綜合瑞士信貸私人銀行亞太區副主席陶冬、台灣經濟研究院研究六所所長吳孟道，以及富邦金控首席經濟學家羅瑋等人看法，2021年，有3大趨勢，值得投資人留意。',
        '首先，美元注定是弱勢格局，相對來看，新台幣則維持強勢；其次，全球央行的寬鬆政策基調，不會有太大改變；最後，在主要經濟體中，中國的復甦步伐，將最為穩健。'
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
