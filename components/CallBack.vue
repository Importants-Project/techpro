<template>
  <div class="callBack mb-10">
    <div class="contanier">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 callBack-box">
        <div class="callBack-box_text">
          <h3 class="text-left text-white text-3xl">REQUEST A CALL BACK.</h3>
          <p class="text-white text-sm" style="font-family: 'Open Sans'">
            Would you like to speak to one of our specialists over the phone?
            Just submit your details and we’ll be in touch shortly. You can also
            email us if you would prefer.
          </p>
        </div>
        <div class="md:col-span-2 callBack-box_form">
          <form :model="form" @submit.prevent="createPost" method="post">
            <span class="text-white text-sm lable"
              >I would like to discuss:</span
            >

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  style="font-family: 'Open Sans'"
                  type="text"
                  class="form mt-5"
                  v-model="formDataCall.first_name"
                  placeholder="First name"
                  name="first_name"
                  :class="{
                    'is-invalid': isValid && $v.formDataCall.first_name.$error,
                  }"
                />
              </div>
              <div>
                <input
                  style="font-family: 'Open Sans'"
                  type="text"
                  v-model="formDataCall.phone"
                  class="form mt-5"
                  placeholder="Phone number"
                  name="phone"
                  :class="{
                    'is-invalid': isValid && $v.formDataCall.phone.$error,
                  }"
                />
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
                  style="font-family: 'Open Sans'"
                  class="form-sucsess"
                  v-if="submitStatus === 'OK' && !fiveTimesClicked"
                >
                  Thanks for your submission!
                </p>
                <p
                  style="font-family: 'Open Sans'"
                  class="form-sucsess"
                  v-if="fiveTimesClicked"
                >
                  {{ msg }}
                </p>
                <p
                  style="font-family: 'Open Sans'"
                  class="form-fail"
                  v-if="submitStatus === 'ERROR'"
                >
                  Please fill the form correctly.
                </p>
                <p
                  style="font-family: 'Open Sans'"
                  class="form-sucsess"
                  v-if="submitStatus === 'PENDING'"
                >
                  Sending...
                </p>
              </div>
            </div>
          </form>

          <div
            v-if="isValid && $v.formDataCall.phone.$error"
            class="form-fail mt-5"
          >
            <span
              style="font-family: 'Open Sans'"
              v-if="!$v.formDataCall.phone.required"
              >Phone number is required</span
            >
            <span
              style="font-family: 'Open Sans'"
              v-if="!$v.formDataCall.phone.numeric"
              >Phone number must be number</span
            >
          </div>

          <div
            v-if="isValid && $v.formDataCall.first_name.$error"
            class="form-fail mt-5"
          >
            <span
              style="font-family: 'Open Sans'"
              v-if="!$v.formDataCall.first_name.required"
              >First Name is required</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { required, numeric } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      formDataCall: {
        first_name: "",
        phone: "",
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
    async createPost() {
      let formDataRecapte = new FormData();
      for (let key in this.formDataCall) {
        formDataRecapte.append(key, this.formDataCall[key]);
      }
      const token = await this.$recaptcha.execute("contact");
      formDataRecapte.append("recapture", token);

      console.log("ReCaptcha token:", token);

      this.isValid = true;
      this.$v.$touch();

      this.$axios
        .$post("/request/call", formDataRecapte)
        .then((res) => {
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
    formDataCall: {
      first_name: {
        required,
      },
      phone: {
        required,
        numeric,
      },
    },
  },
};
</script>


<style >
.form-sucsess {
  padding: 0.5rem;
  background: #c9f7b2;
  color: #0a0a0a;
  border: 2px solid #c9f7b2;
}
.form-fail {
  padding: 0.5rem;
  color: #fff;
  background: red;
  border: 2px solid red;
}
.vs__dropdown-toggle {
  border: none;
  border-radius: 0;
  background: #cacaca;
  height: 49px;
}
.vs__search {
  font-size: 13px;
  color: #222222;
}
.vs__search,
.vs__search:focus {
  background: #cacaca;
  color: #222222;
}
</style>