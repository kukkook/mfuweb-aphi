<template>
  <v-data-table
    :headers="headers"
    :items="prolist"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar color="red darken-1">
        <v-toolbar-title>Manage Project </v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>

        <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <div class="text-center">
              <v-btn rounded color="primary" dark  v-bind="attrs" v-on="on"> New Project </v-btn>
            </div>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.project_id"
                      label="Project ID"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.fiscal_year"
                      label="Years"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.project_name_th"
                      label="Project Name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.project_pi"
                      label="By"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.project_school"
                      label="School Major"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.project_funding_name"
                      label="Funding Name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.project_funding_source"
                      label="Funding Source"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.project_budget"
                      label="Budget"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.project_period_from"
                      label="Period From"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.project_period_to"
                      label="Period To"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
              <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >Are you sure you want to delete this item?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template>
    
  </v-data-table>
  
</template>

<script>
const url = "http://localhost:5000/api/Projects";
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      { text: "Project ID", value: "project_id" },
      { text: "Year", value: "fiscal_year" },
      { text: "Project Name", value: "project_name_th" },
      { text: "Project Name Eng", value: "project_name_en" },
      { text: "By", value: "project_pi" },
      { text: "School Major", value: "project_school" },
      { text: "Funding Name", value: "project_funding_name" },
      { text: "Funding Source", value: "project_funding_source" },
      { text: "Budget", value: "project_budget" },
      { text: "Period from", value: "project_period_from" },
      { text: "Period  to", value: "project_period_to" },
      { text: "Remark", value: "remark" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    prolist: [],
    editedIndex: -1,
    editedItem: {
      Project: "",
      Year: 0,
      By: 0,
      School : 0,
      project_funding_name: "",
      project_funding_source: "",
      project_budget: 0,
      project_period_from: 0,
      project_period_to: 0,
    },
    defaultItem: {
      Project: "",
      Year: 0,
      By: 0,
      School : 0,
      project_funding_name: "",
      project_funding_source: "",
      project_budget: 0,
      project_period_from: 0,
      project_period_to: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    async initialize() {
      const res = await this.$axios.get(url);
      this.prolist = res.data.response;
    },

    editItem(item) {
      this.editedIndex = this.prolist.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.prolist.indexOf(item);
      this.editedItem = Object.assign({}, item);
      //console.log(this.editItem);
      this.dialogDelete = true;
    },

    async deleteItemConfirm() {
      const delurl = url + "/" + this.editedItem.project_id;
      try {
        const res = await this.$axios.delete(delurl);
        this.prolist.splice(this.editedIndex, 1);
      } catch (e) {
        console.log(e);
      }
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    async save() {
      if (this.editedIndex > -1) {
        const puturl = url + "/" + this.editedItem.project_id;
        Object.assign(this.prolist[this.editedIndex], this.editedItem);
        try {
          const res = await this.$axios.put(puturl, this.editedItem);
        } catch (e) {
          console.log(e);
        }
      } else {
        this.prolist.push(this.editedItem);
        try {
          const res = await this.$axios.post(url, this.editedItem);
          this.initialize();
        } catch (e) {
          console.log(e);
        }
      }
      this.close();
    },
  },
};
</script>