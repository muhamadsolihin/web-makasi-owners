<template>
  <div
    class="card card-custom mb-2 mb-xxl-8"
    v-for="o in FilterSubmission"
    :key="o"
  >
    <!--begin::Body-->

      <div class="card-body" style="border-radius:10px; background-color: 	#F0F0F0;">
        <!--begin::Section-->
        <div class="d-flex align-items-center">
          <div>
            <div
              class="demo-image__preview align-items-center jutify-content-center"
            >
              <!-- <el-image
                style="width: 100px; height: 100px; border-radius: 10px !important;"
                :src="url"
                :preview-src-list="srcList"
                :initial-index="4"
                fit="cover"
              /> -->
            </div>
            <a href="#" class="fs-4 text-gray-800 fw-bolder">{{ o.name }}</a>
            <div class="fs-1 text-gray-800 fw-bolder ">
              {{ o.email }}
            </div>
            <div class="fs-2 text-gray-800 fw-bolder ">
              {{ o.value }}
            </div>
          </div>
          <!--end::Title-->
        </div>
        <!--end::Section-->
      </div>
      <!--end::Body-->

    <!-- <span v-else-if="o.value == '0'" style="background-color: #E60023;">insactif</span> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { formatCurrencyVoucher } from "@/helper";

export default defineComponent({
  name: "WidgetOmset",
  props: {
    value: {
      type: [String, Number],
      required: false,
      default: 12121831734,
    },
  },
  components: {},
  setup() {
    const FilterSubmission = ref([
      {
        name: "Erialda",
        email: "eri@gmail.com",
        value: "08986378929",
      },
      {
        name: "Agus Budiono",
        email: "agus@gmail.com",
        value: "029828782",
      },
    ]);

    const url =
      "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg";
    const srcList = [
      "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
      "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
      "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
      "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
      "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
      "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
      "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
    ];

    return {
      FilterSubmission,
      url,
      srcList,
      formatCurrencyVoucher,
    };
  },
});
</script>

<style scoped lang="scss">
.fs-1 {
  font-weight: 400 !important;
  font-size: 0.5em !important;
  color: #000 !important;
}
.fs-4 {
  color: #000 !important;
}
.fs-2{
  font-size: 0.5em !important;
  font-weight: 400 !important;
  color: 	#F8F8FF;
}

</style>
