

<script lang="ts">
  import { useStore } from "vuex";
  import { defineComponent, onMounted } from "vue";
  import { getModule } from "vuex-module-decorators";
  import LoginModule from "@/store/modules/LoginModule";
  import { Actions } from "@/store/enums/store.enums";
  
  export default defineComponent({
    setup() {
      const Login = getModule(LoginModule);
  
      const store = useStore();
  
      onMounted(() => {
        store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");
        Login.postLogout();
  
        setTimeout(() => {
          store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading");
        }, 2000);
      });
    },
  });
  </script>
  