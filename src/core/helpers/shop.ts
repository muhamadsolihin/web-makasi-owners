import noUiSlider from "nouislider/distribute/nouislider.js";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import { ref } from "vue";

const useShopFilter = () => {
  const displayFilterForm = ref(true);

  const showProductAddForm = (): void => {
    displayFilterForm.value = false;
  };

  const showProductFilterForm = (): void => {
    displayFilterForm.value = true;
  };

  const newProductFormSubmit = (): void => {
    Swal.fire({
      text: "New product successfully added",
      icon: "success",
      buttonsStyling: false,
      confirmButtonText: "Ok, got it!",
      customClass: {
        confirmButton: "btn fw-bold btn-light-primary"
      }
    }).then(() => {
      displayFilterForm.value = true;
    });
  };

  const initSlider = (): void => {
    // init slider
    const slider = document.querySelector("#kt_price_slider");

    if (typeof slider === "undefined") {
      return;
    }

    if (!slider) {
      return;
    }

    noUiSlider.create(slider, {
      start: [20, 60],
      connect: true,
      range: {
        min: 0,
        max: 100
      }
    });
  };

  return {
    displayFilterForm,
    showProductAddForm,
    showProductFilterForm,
    initSlider,
    newProductFormSubmit
  };
};

export default useShopFilter;
