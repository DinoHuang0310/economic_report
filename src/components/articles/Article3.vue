<template>
  <div class="content-box" ref="bscroll">
    <section>
      <TitleModule
        title="科技類股扮主流"
        :subtitle="['<span>科技股扮主流</span><mark>半導體、5G、車用電子</mark>最受青睞']"
      />
      <ChartModule position="top" :content="area1" />
      <TitleModule
        :subtitle="['<span>非電子有戲唱</span><mark>綠能、生醫產業</mark>認同度超高']"
      />
      <ChartModule position="bottom" :content="area2" />
      <TitleModule
        :subtitle="['<span>金價<mark>上看2000美元</mark></span>強台幣趨勢不變']"
      />
      <ChartModule position="full" :content="area3" />
      <ArticleModule :articles="articles" />
      <div v-for="listgroup in createListcard(denominator)" :key="listgroup.index">
        <div class="model-box article-card-area">
          <ArticleCard
            v-for="listcard in listgroup"
            :key="listcard.index"
            :article="listcard"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TitleModule from './model/TitleModule'
import ChartModule from './model/ChartModule'
import ArticleModule from './model/ArticleModule'
import ArticleCard from './model/ArticleCard'

import BScroll from '@better-scroll/core'

export default {
  components: {
    TitleModule,
    ChartModule,
    ArticleModule,
    ArticleCard
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
          chartTitle: ['Ｑ：最有發揮空間的產業類股（可複選）'],
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
              data: ['蘋果手機供應鏈', '電子零組件', '物聯網、雲端與AI產業', '車用電子產業', '有關5G基地台與通訊設備', '半導體\n(矽晶圓、封測、IC設計)']
            },
            series: [
              {
                name: '(%)',
                type: 'bar',
                data: [23, 29, 60, 66, 77, 91],
                color: '#1e3c72'
              }
            ]
          },
          chartDescription: ['5G、電動車市場爆發，加上去中化、去美化轉單效應，讓半導體的缺貨態勢，在未來1、2年，不容易輕易扭轉。在接受《今周刊》調訪的35名專家中，有91%看好半導體，將是2021年「最有發揮空間的產業類股」，占比居冠；5G基地台與通訊設備（77%）、車用電子產業（66%），則分居2、3名。'],
          chartName: ''
        }
      ],
      area2: [
        {
          chartTitle: ['Ｑ：看好的非電子產業(可複選)'],
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
              max: 70
            },
            yAxis: {
              type: 'category',
              data: ['鋼鐵業', '重電產業\n(機電、線纜)', '塑化業', '營建與營造產業', '醫材健康照護\n、生技製藥產業', '綠能科技產業']
            },
            series: [
              {
                name: '(%)',
                type: 'bar',
                data: [14, 14, 17, 17, 31, 60],
                color: '#1e3c72'
              }
            ]
          },
          chartDescription: ['拜登當選美國總統，使其有意積極扶植的綠能產業，被視為長線重要趨勢。《今周刊》調查顯示，有6成專家將綠能科技產業，列為2021「看好的非電子產業」；此外，在後疫情時代，醫療、生技相關產業的重要性，也隨之增加，有31%的受訪者，把醫材健康照護、生技製藥產業，選為2021「看好的非電子產業」。'],
          chartName: ''
        }
      ],
      area3: [
        {
          chartTitle: ['金價將在1801~2000美元震盪', 'Ｑ：2021年金價預測 金價 (美元/盎司)'],
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
              max: 50
            },
            yAxis: {
              type: 'category',
              data: ['超過2000', '1801~2000', '1501~1800', '1201~1500']
            },
            series: [
              {
                name: '預測比例(%)',
                type: 'bar',
                data: [7, 47, 39, 7],
                color: '#1e3c72'
              }
            ]
          },
          chartDescription: [],
          chartName: ''
        },
        {
          chartTitle: ['新台幣最受青睞', 'Ｑ：最看好貨幣 (可複選2項)'],
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
              data: ['歐元', '紐幣／澳幣', '日圓', '美元', '人民幣', '新台幣']
            },
            series: [
              {
                name: '(%)',
                type: 'bar',
                data: [9, 19, 25, 25, 47, 84],
                color: '#1e3c72'
              }
            ]
          },
          chartDescription: [],
          chartName: ''
        },
      ],
      articles: [
        '雖然市場氣氛樂觀，但2021全球經濟頂多只能算是「大病初癒」，投資人還是要有風險意識，保有一定程度現金部位，黃金也是可以考慮的配置。',
        '由《今周刊》調查可得知，84%專家把新台幣視為「最看好貨幣」；47%受訪者預估，金價將在1801至2000美元震盪；另有39%受訪專家估計，金價會在1501至1800美元震盪。'
      ],
      articleList: [
        {
          title: '「超過30萬人死亡　仍有人拒戴口罩！」 疫苗救得了2021年美國經濟？ 先看這三大變數再說',
          url: 'https://pse.is/38b2jf',
          description: '美國是當前世界經濟火車頭，不少人對拜登上台後的2021年美國經濟也寄予厚望，但武漢肺炎（COVID-19）橫掃美利堅，本土變成重災區，入冬後幾乎每天新增死亡人數都超過1000人、甚至2000人，截至12月中累計逾30萬人死亡，單日新增確診人數每天都以10~20萬人起跳。'
        },
        {
          title: '美元弱勢格局不變　哪些貨幣有賺頭？一表看懂3個外匯投資機會',
          url: 'https://pse.is/38jmj2',
          description: '在美元疲弱、台股屢創新高的情況下，近期新台幣升勢凌厲，於12月3日盤中，升破有「彭淮南防線」之稱的28.5元價位，來到28.401，創23年新高；相對來看，2020年以來，美元指數下跌約6%，且2021年將延續弱勢格局，此時，投資人最在意的，莫過於美元是否還值得持有？又有哪些貨幣，可積極布局？'
        },
        {
          title: '台股2021年可望再創高？不懼過熱指標，專家齊看好高點落在「這一季」',
          url: 'https://pse.is/3agh4k',
          description: '台股在2020年繳出約2成漲勢，不但刷新歷史新高點位，更屢屢創造紀錄，儘管專家示警：「從技術面來看，台股指數與十年線乖離過大」，但在資金充裕與基本面逐步回溫這兩大利多加持下，台股在2021年可望再創新高。'
        },
        {
          title: '金價可能陷震盪？2021年黃金商品該買、該賣？專家曝最佳配置比例',
          url: 'https://pse.is/3amcug',
          description: '2020年在新冠肺炎疫情攪局下，市場恐慌情緒升溫，刺激黃金價格在2020年8月刷新歷史新高價位，每盎司價格衝破2000美元；然而在疫苗可望問世的消息出現後，金價開始回跌，也讓銀行圈掀起一波黃金目標價下修潮。展望2021年，儘管黃金價格很難再複製2020年的漲勢，但市場上風險猶存，專家建議至少可留5%的黃金部位。'
        },
        {
          title: '看好2021經濟反彈　投資美股想價差、股息兩頭賺？一表掌握焦點個股、ETF',
          url: 'https://pse.is/3atyg5',
          description: '2020年，因新冠肺炎疫情嚴重受創的全球經濟，可望在疫苗問世後，於2021年，迎來V型復甦，而這股樂觀情緒，已反映在美股屢創新高的表現上；市場預期，2021年，美股可望進一步走高，標普500指數，有機會較當前水準，再漲7.8%至21%。'
        },
        {
          title: '2021債市展望》經濟學家示警！殭屍企業靠央行撒錢續命，不想踩雷建議這樣挑',
          url: 'https://pse.is/39yy8x',
          description: '今年因新冠肺炎疫情爆發，各國政府與央行紛紛靠「印鈔」這款特效藥，試圖拯救金融市場與經濟表現，吃完特效藥產生的後遺症，可能在2021年出現。在債市的部分，富邦金、大拇哥投顧都提醒投資人，必須特別小心因大撒錢而續命的殭屍企業，以免投資踩雷。'
        }
      ],
      denominator: 2 // 每個容器render N個ArticleCard
    }
  },
  computed: {
    createListcard() {
      return function(denominator) {
        let newobj = [];
        const myList = Math.ceil(this.articleList.length / denominator);
        for(let i = 1; i <= myList; i++) {
          let arr = [];
          for(let list = denominator * (i - 1); list < denominator * i; list++) {
            if(this.articleList[list]) arr.push(this.articleList[list]);
          }
          newobj.push(arr);
        }
        return newobj;
      }
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
