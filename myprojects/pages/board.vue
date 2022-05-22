<template>
  <div>
    <h1>Projects Dashboard</h1>
    <v-row>
      <v-col cols="12" md="6">
            <v-card>
                <line-chart 
                v-if="loaded"
                  :linechartdata="apidata"
                  :linechartoptions="chartoption"
                /> 
            </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card>
          <bar-chart 
          v-if="sc_loaded"
            :barchartdata="sc_apidata" 
            :barchartoptions="chartoption" />
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
            <v-card>
                <doughnut-chart 
                v-if="fn_loaded"
                  :doughnutchartdata="fn_apidata"
                  :doughnutchartoptions="chartoption"
                />  
            </v-card>
        </v-col>
      <v-col cols="12" md="6">
        <v-card>
          <bar-chart
          v-if="pi_loaded"
            :barchartdata="pi_apidata" 
            :barchartoptions="chartoption" />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>


<script>
const ct_url = "http://localhost:5000/api/countye";
const sc_url = "http://localhost:5000/api/countpro";
const pi_url = "http://localhost:5000/api/countpi";
const fn_url = "http://localhost:5000/api/countfun";

export default {

  data: () => ({
    loaded:false,
    apidata: {
      labals: [],
      dataset: [],
    },
    sc_loaded:false,
    sc_apidata: {
      labals: [],
      dataset: [],
    },
    fn_loaded:false,
    fn_apidata: {
      labals: [],
      dataset: [],
    },
    pi_loaded:false,
    pi_apidata: {
      labals: [],
      dataset: [],
    },
    chartoption: {
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
  }),
  methods: {
    async getNum() {
        this.loaded = false;
      try {
        const res = await this.$axios.get(ct_url);
        console.log(res.data.response);
        var results = res.data.response;
        var templabels = [],
          tempdata = [];
        results.forEach(function (x) {
          templabels.push(x.project_school);
          tempdata.push(x.countpro);
        });
        //console.log(templabels);
        var tempAPIdata = {
          labels: templabels,
          datasets: [
            {
              label: "Number of Project By Years",
              backgroundColor: "Lavender",
              bordercolor: "MediumPurple",
              data: tempdata,
            },
          ],
        };
        this.apidata = tempAPIdata;
        console.log(tempAPIdata);
        this.loaded = true;
      } catch (e) {
        console.error(e);
      }
    },
    async getfunding_name() {
        this.sumbudget_loaded = false;
      try {
        const res = await this.$axios.get(fn_url);
        console.log(res.data.response);
        var results = res.data.response;
        var templabels = [],
          tempdata = [];
        results.forEach(function (x) {
          templabels.push(x.project_funding_name);
          tempdata.push(x.count_project);
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
        this.fn_apidata = tempAPIdata;
        console.log(tempAPIdata);
        this.fn_loaded = true;
      } catch (e) {
        console.error(e);
      }
    },
    async getschool() {
        this.sc_loaded = false;
      try {
        const res = await this.$axios.get(sc_url);
        console.log(res.data.response);
        var results = res.data.response;
        var templabels = [],
          tempdata = [];
        results.forEach(function (x) {
          templabels.push(x.project_school);
          tempdata.push(x.countpro);
        });
        //console.log(templabels);
        var tempAPIdata = {
          labels: templabels,
          datasets: [
            {
              label: "Numer of Project",
              backgroundColor: ["Purple", "Tomato"],
              data: tempdata,
            },
          ],
        };
        this.sc_apidata = tempAPIdata;
        console.log(tempAPIdata);
        this.sc_loaded = true;
      } catch (e) {
        console.error(e);
      }
    },
    async getproject_pi() {
        this.pi_loaded= false;
      try {
        const res = await this.$axios.get(pi_url);
        console.log(res.data.response);
        var results = res.data.response;
        var templabels = [],
          tempdata = [];
        results.forEach(function (x) {
          templabels.push(x.project_pi);
          tempdata.push(x.count_project_pi);
        });
        //console.log(templabels);
        var tempAPIdata = {
          labels: templabels,
          datasets: [
            {
              label: "Numer of school",
              backgroundColor: ["Purple", "Tomato"],
              data: tempdata,
            },
            
          ],
        };
        this.pi_apidata = tempAPIdata;
        console.log(tempAPIdata);
        this.pi_loaded = true;
      } catch (e) {
        console.error(e);
      }
    },
  },
  mounted() {
    this.getNum();
    this.getfunding_name();
    this.getschool();
    this.getproject_pi();
  }, 
};
</script>