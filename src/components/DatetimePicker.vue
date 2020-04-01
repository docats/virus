<template>
  <v-menu
    ref="menuDate"
    v-model="menuDate"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="datetime"
        :label="labelDatetime"
        persistent-hint
        prepend-icon="mdi-calendar"
        readonly
        v-on="on"
      />
    </template>
    <v-card>
      <v-card-text>
        <v-row class="text-center">
          <v-col cols="10">
            <v-text-field class="mx-2" v-model="datetime" :label="labelDatetime" />
          </v-col>

          <v-col cols="2">
            <v-btn color="error" small @click="menuDate = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>

      <v-container class="text-center">
        <v-row 
        class="flex mr-0"
        justify="center"
        >
          <v-col cols="6">
            <v-date-picker
              v-model="datePicked"
              :locale="localePicked"
              no-title
              width="250"
              height="250"
              color="green lighten-1"
              header-color="teal darken-2"
              @change="datetimeTransporter"
              :max="dayMaxPicked"
              :min="dayMinPicked"
              class="m-0"
            />
          </v-col>
          <v-col cols="6">
            <v-time-picker
              scrollable
              width="250"
              height="200"
              v-model="timePicked"
              :allowed-minutes="timeAllowedMinutes"
              format="24hr"
              class="m-0"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      // date-picker
      date: "",
      datePicked: new Date().toISOString().substr(0, 10),
      menuDate: false,
      optionDate: [],
      tab: null,
      itemDateSelected: 1,
      // time-piker
      time: "",
      timePicked: "00:00",
      datetime: null,
      // overtake and transport unix timestamp
      datetimeRestructed: null,

      widthMax: 250
    };
  },

  props: ["labelDatetime", "datetimeDefault"],

  computed: {
    dayMaxPicked: function() {
      let dateThe = new Date();
      return String(dateThe.toISOString().substr(0, 10));
    },

    dayMinPicked: function() {
      let dateThe = new Date();
      dateThe.setMonth(dateThe.getMonth() - 3);
      return String(dateThe.toISOString().substr(0, 10));
    },

    localePicked: function() {
      let valueReturn = "zh-tw";
      return valueReturn;
    }
  },

  watch: {
    datetimeDefault(updated) {
      this.datetimeInitiator();
      this.datePicked = updated.toISOString().substr(0, 10);
    },

    datetime(updated) {
      this.date = updated.split(" ")[0];
      this.time = updated.split(" ")[1];
      this.datetime = this.date + " " + this.time;
      this.datetimeRestructor();
      this.datetimeTransporter();
    },

    date(updated) {
      if (updated != this.datePicked) {
        this.datePicked = updated;
      }
    },

    datePicked(updated) {
      if (updated != this.date) {
        this.datetime = String(updated) + " " + this.time;
      }
    },

    timePicked(updated) {
      updated += ":00"; //補 原本秒會使用到的字串
      this.datetime = this.date + " " + updated;
    }
  },

  methods: {
    datetimeTransporter: function() {
      this.$emit("datetimeTransport", this.datetimeRestructed);
    },

    datetimeInitiator: function() {
      this.date =
        this.datetimeDefault.getFullYear() +
        "-" +
        (this.datetimeDefault.getMonth() + 1 > 9 ? "" : "0") +
        (this.datetimeDefault.getMonth() + 1) +
        "-" +
        (this.datetimeDefault.getDate() > 9 ? "" : "0") +
        this.datetimeDefault.getDate();
      this.time =
        (this.datetimeDefault.getHours() > 9 ? "" : "0") +
        this.datetimeDefault.getHours() +
        ":" +
        (this.datetimeDefault.getMinutes() > 9 ? "" : "0") +
        this.datetimeDefault.getMinutes() +
        ":" +
        (this.datetimeDefault.getSeconds() > 9 ? "" : "0") +
        this.datetimeDefault.getSeconds();
      this.datetime = this.date + " " + this.time;
      this.datetimeRestructor();
    },

    datetimeRestructor: function() {
      let yyyy = this.date.split("-")[0];
      let mm = this.date.split("-")[1];
      let dd = this.date.split("-")[2];

      let hh = this.time.split(":")[0];
      let MM = this.time.split(":")[1];
      let ss = this.time.split(":")[2];

      let datetimeNew = new Date(yyyy, mm - 1, dd, hh, MM, ss);
      this.datetimeRestructed = datetimeNew.getTime() / 1000;
    },

    timeAllowedMinutes: v => v % 30 === 0
  },

  mounted() {
    this.datetimeInitiator();
    // this.datetimeTransporter()
  }
};
</script>

<style>
</style>