<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card Body-->
    <div class="card-body p-10 p-lg-15">
      <Overview></Overview>

      <BaseButtons></BaseButtons>

      <LightStyle></LightStyle>

      <BackgroundStyle></BackgroundStyle>

      <ColorStyle></ColorStyle>

      <ActiveStyle></ActiveStyle>

      <ActiveLightStyle></ActiveLightStyle>

      <ActiveColorStyle></ActiveColorStyle>

      <Icons></Icons>

      <SocialButtons></SocialButtons>
    </div>
    <!--end::Card Body-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumbs/breadcrumb";
import Overview from "@/view/pages/resources/documentation/base/buttons/Overview.vue";
import BaseButtons from "@/view/pages/resources/documentation/base/buttons/BaseButtons.vue";
import LightStyle from "@/view/pages/resources/documentation/base/buttons/LightStyle.vue";
import BackgroundStyle from "@/view/pages/resources/documentation/base/buttons/BackgroundStyle.vue";
import ColorStyle from "@/view/pages/resources/documentation/base/buttons/ColorStyle.vue";
import ActiveStyle from "@/view/pages/resources/documentation/base/buttons/ActiveStyle.vue";
import ActiveLightStyle from "@/view/pages/resources/documentation/base/buttons/ActiveLightStyle.vue";
import ActiveColorStyle from "@/view/pages/resources/documentation/base/buttons/ActiveColorStyle.vue";
import Icons from "@/view/pages/resources/documentation/base/buttons/Icons.vue";
import SocialButtons from "@/view/pages/resources/documentation/base/buttons/SocialButtons.vue";

export default defineComponent({
  name: "buttons",
  components: {
    Overview,
    BaseButtons,
    LightStyle,
    BackgroundStyle,
    ColorStyle,
    ActiveStyle,
    ActiveLightStyle,
    ActiveColorStyle,
    Icons,
    SocialButtons
  },
  setup() {
    onMounted(() => {
      setCurrentPageTitle("Buttons");
    });
  }
});
</script>
