import { PolarArea} from 'vue-chartjs'

export default {
  extends: PolarArea,
  props: {
    polarchartdata: {
      type: Object,
      default: null
    },
    polarchartoptions: {
      type: Object,
      default: null
    }
  },
  mounted () {
    this.renderChart(this.polarchartdata, this.polarchartoptions)
  }
}