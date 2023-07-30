<template>
  <div class="md:col-span-3 col-span-6">
    <form @submit.prevent="createPost" method="post">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div>
            <input
              class="form mb-5"
              type="text"
              placeholder="First name *"
              v-model="formData.first_name"
              name="first_name"
              style="font-family: Open Sans"
              :class="{
                'is-invalid': isValid && $v.formData.first_name.$error,
              }"
            />
          </div>
          <div>
            <input
              class="form mb-5"
              type="text"
              placeholder="Title"
              style="font-family: Open Sans"
              v-model="formData.title"
              name="title"
            />
          </div>
          <div>
            <input
              class="form mb-5"
              type="text"
              style="font-family: Open Sans"
              placeholder="Company/Position"
              v-model="formData.company_position"
            />
          </div>
          <div>
            <input
              class="form"
              type="text"
              placeholder="E-mail *"
              v-model="formData.email"
              style="font-family: Open Sans"
              name="email"
              :class="{
                'is-invalid': isValid && $v.formData.email.$error,
              }"
            />
          </div>
        </div>
        <div>
          <div>
            <input
              style="font-family: Open Sans"
              class="form mb-5"
              type="text"
              placeholder="Phone number *"
              v-model="formData.phone"
              name="phone"
              :class="{
                'is-invalid': isValid && $v.formData.phone.$error,
              }"
            />
          </div>
          <div>
            <input
              class="form mb-5"
              type="text"
              style="font-family: Open Sans"
              placeholder="Subject *"
              v-model="formData.subject"
              name="subject"
              :class="{
                'is-invalid': isValid && $v.formData.subject.$error,
              }"
            />
          </div>
          <div>
            <textarea
              class="form mb-5"
              placeholder="Your Message *"
              style="font-family: Open Sans"
              rows="5"
              v-model="formData.message"
              name="message"
              :class="{
                'is-invalid': isValid && $v.formData.message.$error,
              }"
            ></textarea>
          </div>
        </div>
      </div>

      <div>
        <button
          type="submit"
          style="font-family: Open Sans"
          class="submit my-5"
          :disabled="submitStatus === 'PENDING'"
        >
          Submit <i class="fa fa-chevron-right"></i>
        </button>
        <p
          class="form-sucsess"
          style="font-family: Open Sans"
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
          class="form-fail"
          style="font-family: Open Sans"
          v-if="submitStatus === 'ERROR'"
        >
          Please fill the form correctly.
        </p>
        <p
          class="form-sucsess"
          style="font-family: Open Sans"
          v-if="submitStatus === 'PENDING'"
        >
          Sending...
        </p>
      </div>
    </form>

    <div v-if="isValid && $v.formData.phone.$error" class="form-fail mt-5">
      <span style="font-family: Open Sans" v-if="!$v.formData.phone.required"
        >Phone number is required</span
      >
      <span style="font-family: Open Sans" v-if="!$v.formData.phone.numeric"
        >Phone number must be number</span
      >
    </div>

    <div v-if="isValid && $v.formData.email.$error" class="form-fail mt-5">
      <span style="font-family: Open Sans" v-if="!$v.formData.email.required"
        >Email is required</span
      >
      <span style="font-family: Open Sans" v-if="!$v.formData.email.email"
        >Email is not email</span
      >
    </div>

    <div v-if="isValid && $v.formData.subject.$error" class="form-fail mt-5">
      <span style="font-family: Open Sans" v-if="!$v.formData.subject.required"
        >Subject is required</span
      >
    </div>

    <div v-if="isValid && $v.formData.message.$error" class="form-fail mt-5">
      <span style="font-family: Open Sans" v-if="!$v.formData.message.required"
        >Message is required</span
      >
    </div>

    <div v-if="isValid && $v.formData.first_name.$error" class="form-fail mt-5">
      <span
        style="font-family: Open Sans"
        v-if="!$v.formData.first_name.required"
        >first_name is required</span
      >
    </div>
  </div>
</template>

<script>
import { required, numeric, email } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      formData: {
        first_name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      },
      msg: "",
      isValid: false,
      submitStatus: null,
      fiveTimesClicked: false,
    };
  },
  validations: {
    formData: {
      first_name: {
        required,
      },

      phone: {
        required,
        numeric,
      },
      email: {
        required,
        email,
      },
      subject: {
        required,
      },
      message: {
        required,
      },
    },
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
      for (let key in this.formData) {
        formDataRecapte.append(key, this.formData[key]);
      }

      const token = await this.$recaptcha.execute("contact");
      formDataRecapte.append("recapture", token);
      console.log(this.formData);

      this.isValid = true;
      this.$v.$touch();

      this.$axios
        .$post("/contact", formDataRecapte)
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
};
</script>