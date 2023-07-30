<template>
  <div class="contanier">
    <div v-html="careerArticle.description" style="margin-top: 60px"></div>

    <table class="table table-striped" style="margin-top: 60px">
      <tbody>
        <span
          v-for="careerTable in careerArticle.content"
          :key="careerTable.key"
        >
          <template v-if="careerTable.attributes.header !== null">
            <tr style="border: 0.5px solid grey">
              <td
                style="
                  padding-top: 1rem;
                  padding-right: 1rem;
                  padding-bottom: 1rem;
                "
                width="1200"
              >
                <p class="ml-5" style="font-size: 16px">
                  <strong> {{ careerTable.attributes.header }}</strong>
                </p>
              </td>
            </tr>
          </template>

          <tr
            v-for="careerTableInput in careerTable.attributes.input"
            :key="careerTableInput.key"
          >
            <template v-if="careerTableInput !== null">
              <td
                style="
                  border: 0.5px solid grey;
                  border-top: 0;
                  border-bottom: 0;
                  padding-top: 1rem;
                  padding-right: 1rem;
                  padding-bottom: 1rem;
                "
                width="600"
              >
                <p class="ml-5" style="font-size: 16px">
                  <strong> {{ careerTableInput.attributes.title }}</strong>
                </p>
              </td>
              <td
                style="
                  border: 0.5px solid grey;
                  padding-top: 1rem;
                  padding-right: 1rem;
                  padding-bottom: 1rem;
                  border-top: 0;
                  border-bottom: 0;
                "
                width="600"
              >
                <p class="ml-5" style="font-size: 16px">
                  {{ careerTableInput.attributes.value }}
                </p>
              </td>
            </template>
          </tr>

          <tr
            v-for="careerTableEditor in careerTable.attributes.editor"
            :key="careerTableEditor.key"
          >
            <template v-if="careerTableEditor !== null">
              <td
                style="
                  background-color: #f9f9f9;
                  border: 0.5px solid grey;
                  padding-top: 0.5rem;
                  padding-right: 1rem;
                  padding-bottom: 0.5rem;
                "
                width="1200"
                v-html="careerTableEditor.attributes.editor"
              ></td>
            </template>
          </tr>
        </span>
      </tbody>
    </table>

    <form :model="form" @submit.prevent="createPost" method="post">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            class="form mt-5"
            v-model="formDataCv.fullname"
            placeholder="Full Name *"
            name="fullname"
            :class="{
              'is-invalid': isValid && $v.formDataCv.fullname.$error,
            }"
          />
        </div>

        <div>
          <input
            class="form mt-5"
            type="text"
            placeholder="E-mail *"
            v-model="formDataCv.email"
            name="email"
            :class="{
              'is-invalid': isValid && $v.formDataCv.email.$error,
            }"
          />
        </div>
        <div>
          <input
            class="form mt-5"
            type="file"
            ref="fileInput"
            placeholder="CV fayl *"
            name="file"
            @change="uploadFile()"
          />
        </div>
      </div>

      <div>
        <button
          class="submit my-5"
          type="submit"
          :disabled="submitStatus === 'PENDING'"
        >
          Submit <i class="fa fa-chevron-right"></i>
        </button>
        <p
          class="form-sucsess"
          v-if="submitStatus === 'OK' && !fiveTimesClicked"
        >
          Thanks for your submission!
        </p>
        <p class="form-sucsess" v-if="fiveTimesClicked">
          {{ msg }}
        </p>
        <p class="form-fail" v-if="submitStatus === 'ERROR'">
          Please fill the form correctly.
        </p>
        <p class="form-sucsess" v-if="submitStatus === 'PENDING'">Sending...</p>
      </div>

      <div v-if="isValid && $v.formDataCv.email.$error" class="form-fail mt-5">
        <span v-if="!$v.formDataCv.email.required">Email is required</span>
        <span v-if="!$v.formDataCv.email.email">Email is not email</span>
      </div>

      <div
        v-if="isValid && $v.formDataCv.fullname.$error"
        class="form-fail mt-5"
      >
        <span
          v-if="!$v.formDataCv.fullname.required"
          >First Name is required</span
        >
      </div>
    </form>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

import { mapGetters } from "vuex";

export default {
  data() {
    return {
      formDataCv: {
        fullname: "",
        email: "",
        file: {},
      },

      form: {
        robot: false,
      },
      msg: "",
      isValid: false,
      submitStatus: null,
      fiveTimesClicked: false,
    };
  },
  async mounted() {
    await this.$recaptcha.init();
  },

  beforeDestroy() {
    this.$recaptcha.destroy();
  },

  methods: {
    uploadFile() {
      this.formDataCv.file = this.$refs.fileInput.files[0];
    },
    async createPost() {
      let formData = new FormData();

      for (let key in this.formDataCv) {
        formData.append(key, this.formDataCv[key]);
      }

      formData.append("career_id",this.$route.params.slug);

      const token = await this.$recaptcha.execute("contact");
      console.log("ReCaptcha token:", token);
      await this.$recaptcha.reset();

      if (this.form.robot) {
      }
      this.isValid = true;
      this.$v.$touch();

      this.$axios
        .$post("/request/career", formData)
        .then((res) => {
          console.log(res);
          if (this.$v.$invalid) {
            this.submitStatus = "";
            setTimeout(() => {
              this.submitStatus = "";
            }, 1000);
            return;
          } else if (res[0] === "error") {
            this.fiveTimesClicked = true;
            this.msg = `${res[1]}`;
            setTimeout(() => {
              this.fiveTimesClicked = false;
            }, 3000);
          } else {
            this.submitStatus = "OK";
            setTimeout(() => {
              this.submitStatus = "";
            }, 1000);
          }
        })
        .catch((error) => console.log(error));
    },
  },
  validations: {
    formDataCv: {
      fullname: {
        required,
      },

      email: {
        required,
        email,
      },
    },
  },
  async asyncData({ params }) {
    const slug = params.slug; // When calling /abc the slug will be "abc"
    return { slug };
  },

  async fetch({ route, store }) {
    await store.dispatch("career/getArticleProduct", route.params.slug);
  },

  computed: {
    ...mapGetters({
      careerArticle: "career/careerArticle",
    }),
  },


};
</script>

<style >
ul {
  list-style-type: disc !important;
  padding: 0 30px !important;
}

ul li {
  padding: 0rem 0;
  font-size: 12px;
}
</style>