<template>
  <div>
    <h1>Dashboard</h1>
    <v-row>

      <v-col cols="12" md="6">
        <v-card>
          <bar-chart v-if="countct_loaded"
                     :barchartdata="countct_apidata" 
                     :barchartoptions="chartoptions" />
        </v-card>
      </v-col>

        <v-col cols="12" md="6">
        <v-card>
          <bar-chart v-if="countsc_loaded"
            :barchartdata="countsc_apidata"
            :barchartoptions="chartoptions" />
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card>
          <doughnut-chart v-if="countdg_loaded"
            :doughnutchartdata="countdg_apidata"
            :doughnutchartoptions="chartoptions"
          />
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" >
        <v-card>
          <doughnut-chart v-if="countpi_loaded"
                     :doughnutchartdata="countpi_apidata" 
                     :doughnutchartoptions="chartoptions" />
        </v-card>
      </v-col>
    </v-row>
    
  </div>
</template>
<script>
//const url = "http://localhost:5000/api/information";
const ct = "http://localhost:5000/api/countye";
const sc = "http://localhost:5000/api/countsc";
const pi = "http://localhost:5000/api/countpi";
const fn_url = "http://localhost:5000/api/projects/project_funding_name";
export default {
  data() {
    return {
      countct_loaded: false,
      countct_apidata: {
        labels: [],
        datasets: [],
      },
      countsc_loaded: false,
      countsc_apidata: {
        labels: [],
        datasets: [],
      },
        countpi_loaded: false,
      countpi_apidata: {
        labels: [],
        datasets: [],
      },
        countfn_loaded: false,
      countfn_apidata: {
        labels: [],
        datasets: [],
      },
  

      

      chartoptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
          
        },
      },
       //mycolor: '#'+(Math.random()*0xFFFFFF<<0).toString(16)
     };
  },

  methods: {
    //number of project per years
    async getCountct() {
      this.countct_loaded = false;
      try {
        const res = await this.$axios.get(ct);
        // console.log(res.data.response);
        var results = res.data.response;
        var templabels = [],
          tempdata = [];
        results.forEach(function (x) {
          templabels.push(x.fiscal_year);
          tempdata.push(x.count);
        });
        //console.log(templabels);
        var tempAPIdata = {
          labels: templabels,
          datasets: [
            {
              label: "Number of project by year ",
              backgroundColor: ["Pink", "Tomato "],
              data: tempdata,
            },
          ],
        };
        this.countct_apidata = tempAPIdata;
        this.countct_loaded = true;
      } catch (e) {
        concole.error(e);
      }
    },
    //number of fun per years
    async getCountsc() {
      this.countsc_loaded = false;
      try {
        const res = await this.$axios.get(sc);
        // console.log(res.data.response);
        var results = res.data.response;
        var templabels = [],
          tempdata = [];
        results.forEach(function (x) {
          templabels.push(x.project_school);
          tempdata.push(x.count);
        });
        //console.log(templabels);
        var tempAPIdata = {
          labels: templabels,
          datasets: [
            {
              label: "Number of school ",
              backgroundColor: ["Purple ", "Tomato ","Blue","Pink","Green"],
              data: tempdata,
            },
          ],
        };
        this.countsc_apidata = tempAPIdata;
        this.countsc_loaded = true;
      } catch (e) {
        concole.error(e);
      }
    },
//num of project per school
    async getCountpi() {
      this.countpi_loaded = false;
      try {
        const res = await this.$axios.get(pi);
        // console.log(res.data.response);
        var results = res.data.response;
        var templabels = [],
          tempdata = [];
        results.forEach(function (x) {
          templabels.push(x.project_pi);
          tempdata.push(x.count);
        });
        //console.log(templabels);
        var tempAPIdata = {
          labels: templabels,
          datasets: [
            {
              label: "Number of project by PI ",
              backgroundColor: ["Lavender", "Blue ","Lightblue","Green","Yellow","Orange","Red","Pink","Darkpurple","Purple"],
              data: tempdata,
            },
          ],
        };
        this.countpi_apidata = tempAPIdata;
        this.countpi_loaded = true;
      } catch (e) {
        concole.error(e);
      }
    },
    //number of project per pi
    async getCountfn() {
      this.pi_loaded = false;
      try {
        const res = await this.$axios.get(fn_url);
        // console.log(res.data.response);
        var results = res.data.response;
        var templabels = [],
          tempdata = [];
        results.forEach(function (x) {
          templabels.push(x.project_pi);
          tempdata.push(x.countpi);
        });
        //console.log(templabels);
        var tempAPIdata = {
          labels: templabels,
          datasets: [
            {
              label: "Project funding name by School",
              backgroundColor: ["LightGreen", "LightBlue"],
              data: tempdata,
            },
          ],
        };
        this.countfn_apidata = tempAPIdata;
        this.countfn_loaded = true;
      } catch (e) {
        concole.error(e);
      }
    },
  },
  mounted() {
    this.getCountct();
    this.getCountsc();
    this.getCountpi();
    this.getCountfn();
  //document.body.style.background = this.mycolor;
  },
};
</script>