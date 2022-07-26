import Quill from "quill/dist/quill.js";
import Tagify from "@yaireo/tagify/dist/tagify.min";
import { EventHandlerUtil } from "@/assets/ts/_utils/EventHandlerUtil";

const useKTLib = () => {
  // Private Methods
  const initEditor = (form: HTMLElement, editorId: string) => {
    if (!form) {
      return;
    }

    // init editor
    const options = {
      modules: {
        toolbar: {}
      },
      placeholder: "Type message...",
      theme: "snow"
    };

    // Init editor
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const quill = new Quill("#" + editorId, options);

    // Customize editor
    const toolbar = form.querySelector(".ql-toolbar");
    const editor = form.querySelector(".ql-editor");

    if (toolbar) {
      toolbar.classList.add(
        "px-5",
        "border-top-0",
        "border-start-0",
        "border-end-0"
      );
    }

    if (editor) {
      editor.classList.add("px-8");
    }
  };

  const initForm = (form: HTMLElement) => {
    if (!form) {
      return;
    }

    // Init autocompletes
    const to: HTMLElement | null = form.querySelector("[name=compose_to]");

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const tagifyTo = new Tagify(to, {
      delimiters: ", ", // add new tags when a comma or a space character is entered
      maxTags: 10,
      blacklist: ["fuck", "shit", "pussy"],
      keepInvalidTags: true, // do not remove invalid tags (but keep them marked as invalid)
      whitelist: [
        {
          value: "Chris Muller",
          email: "chris.muller@wix.com",
          initials: "",
          initialsState: "",
          pic: "media/avatars/150-2.jpg",
          class: "tagify__tag--primary"
        },
        {
          value: "Nick Bold",
          email: "nick.seo@gmail.com",
          initials: "SS",
          initialsState: "warning",
          pic: ""
        },
        {
          value: "Alon Silko",
          email: "alon@keenthemes.com",
          initials: "",
          initialsState: "",
          pic: "media/avatars/150-4.jpg"
        },
        {
          value: "Sam Seanic",
          email: "sam.senic@loop.com",
          initials: "",
          initialsState: "",
          pic: "media/avatars/150-5.jpg"
        },
        {
          value: "Sara Loran",
          email: "sara.loran@tilda.com",
          initials: "",
          initialsState: "",
          pic: "media/avatars/150-1.jpg"
        },
        {
          value: "Eric Davok",
          email: "davok@mix.com",
          initials: "",
          initialsState: "",
          pic: "media/avatars/150-7.jpg"
        },
        {
          value: "Sam Seanic",
          email: "sam.senic@loop.com",
          initials: "",
          initialsState: "",
          pic: "media/avatars/150-5.jpg"
        },
        {
          value: "Lina Nilson",
          email: "lina.nilson@loop.com",
          initials: "LN",
          initialsState: "danger",
          pic: "media/avatars/150-10.jpg"
        }
      ],
      templates: {
        dropdownItem: tagData => {
          try {
            let html = "";

            html += '<div class="tagify__dropdown__item">';
            html += '   <div class="d-flex align-items-center">';
            html +=
              '       <span class="symbol sumbol-' +
              (tagData.initialsState ? tagData.initialsState : "") +
              ' me-2">';
            html +=
              '           <span class="symbol-label" style="background-image: url(\'' +
              (tagData.pic ? tagData.pic : "") +
              "')\">" +
              (tagData.initials ? tagData.initials : "") +
              "</span>";
            html += "       </span>";
            html += '       <div class="d-flex flex-column">';
            html +=
              '           <a href="#" class="text-gray-800 text-hover-primary fw-bold">' +
              (tagData.value ? tagData.value : "") +
              "</a>";
            html +=
              '           <span class="text-muted fw-bold">' +
              (tagData.email ? tagData.email : "") +
              "</span>";
            html += "       </div>";
            html += "   </div>";
            html += "</div>";

            return html;
          } catch (err) {
            console.log(err);
          }
        }
      },
      transformTag: tagData => {
        tagData.class = "tagify__tag tagify__tag--primary";
      },
      dropdown: {
        classname: "color-blue",
        enabled: 1,
        maxItems: 5
      }
    });

    const cc = form.querySelector("[name=compose_cc]");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const tagifyCc = new Tagify(cc, {
      delimiters: ", ", // add new tags when a comma or a space character is entered
      maxTags: 10,
      blacklist: ["fuck", "shit", "pussy"],
      keepInvalidTags: true, // do not remove invalid tags (but keep them marked as invalid)
      whitelist: [
        {
          value: "Chris Muller",
          email: "chris.muller@wix.com",
          initials: "",
          initialsState: "",
          pic: "media/avatars/150-2.jpg",
          class: "tagify__tag--primary"
        },
        {
          value: "Nick Bold",
          email: "nick.seo@gmail.com",
          initials: "SS",
          initialsState: "warning",
          pic: ""
        },
        {
          value: "Alon Silko",
          email: "alon@keenthemes.com",
          initials: "",
          initialsState: "",
          pic: "media/avatars/150-4.jpg"
        },
        {
          value: "Sam Seanic",
          email: "sam.senic@loop.com",
          initials: "",
          initialsState: "",
          pic: "media/avatars/150-5.jpg"
        },
        {
          value: "Sara Loran",
          email: "sara.loran@tilda.com",
          initials: "",
          initialsState: "",
          pic: "media/avatars/150-1.jpg"
        },
        {
          value: "Eric Davok",
          email: "davok@mix.com",
          initials: "",
          initialsState: "",
          pic: "media/avatars/150-7.jpg"
        },
        {
          value: "Sam Seanic",
          email: "sam.senic@loop.com",
          initials: "",
          initialsState: "",
          pic: "media/avatars/150-5.jpg"
        },
        {
          value: "Lina Nilson",
          email: "lina.nilson@loop.com",
          initials: "LN",
          initialsState: "danger",
          pic: "media/avatars/150-10.jpg"
        }
      ],
      templates: {
        dropdownItem: tagData => {
          try {
            let html = "";

            html += '<div class="tagify__dropdown__item">';
            html += '   <div class="d-flex align-items-center">';
            html +=
              '       <span class="symbol sumbol-' +
              (tagData.initialsState ? tagData.initialsState : "") +
              ' me-2">';
            html +=
              '           <span class="symbol-label" style="background-image: url(\'' +
              (tagData.pic ? tagData.pic : "") +
              "')\">" +
              (tagData.initials ? tagData.initials : "") +
              "</span>";
            html += "       </span>";
            html += '       <div class="d-flex flex-column">';
            html +=
              '           <a href="#" class="text-gray-800 text-hover-primary fw-bold">' +
              (tagData.value ? tagData.value : "") +
              "</a>";
            html +=
              '           <span class="text-muted fw-bold">' +
              (tagData.email ? tagData.email : "") +
              "</span>";
            html += "       </div>";
            html += "   </div>";
            html += "</div>";

            return html;
          } catch (err) {
            console.log(err);
          }
        }
      },
      transformTag: tagData => {
        tagData.class = "tagify__tag tagify__tag--primary";
      },
      dropdown: {
        classname: "color-blue",
        enabled: 1,
        maxItems: 5
      }
    });

    const bcc = form.querySelector("[name=compose_bcc]");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const tagifyBcc = new Tagify(bcc, {
      delimiters: ", ", // add new tags when a comma or a space character is entered
      maxTags: 10,
      blacklist: ["fuck", "shit", "pussy"],
      keepInvalidTags: true, // do not remove invalid tags (but keep them marked as invalid)
      whitelist: [
        {
          value: "Chris Muller",
          email: "chris.muller@wix.com",
          initials: "",
          initialsState: "",
          pic: "media/avatars/150-2.jpg",
          class: "tagify__tag--primary"
        },
        {
          value: "Nick Bold",
          email: "nick.seo@gmail.com",
          initials: "SS",
          initialsState: "warning",
          pic: ""
        },
        {
          value: "Alon Silko",
          email: "alon@keenthemes.com",
          initials: "",
          initialsState: "",
          pic: "media/avatars/150-4.jpg"
        },
        {
          value: "Sam Seanic",
          email: "sam.senic@loop.com",
          initials: "",
          initialsState: "",
          pic: "media/avatars/150-5.jpg"
        },
        {
          value: "Sara Loran",
          email: "sara.loran@tilda.com",
          initials: "",
          initialsState: "",
          pic: "media/avatars/150-1.jpg"
        },
        {
          value: "Eric Davok",
          email: "davok@mix.com",
          initials: "",
          initialsState: "",
          pic: "media/avatars/150-7.jpg"
        },
        {
          value: "Sam Seanic",
          email: "sam.senic@loop.com",
          initials: "",
          initialsState: "",
          pic: "media/avatars/150-5.jpg"
        },
        {
          value: "Lina Nilson",
          email: "lina.nilson@loop.com",
          initials: "LN",
          initialsState: "danger",
          pic: "media/avatars/150-10.jpg"
        }
      ],
      templates: {
        dropdownItem: tagData => {
          try {
            let html = "";

            html += '<div class="tagify__dropdown__item">';
            html += '   <div class="d-flex align-items-center">';
            html +=
              '       <span class="symbol sumbol-' +
              (tagData.initialsState ? tagData.initialsState : "") +
              ' me-2">';
            html +=
              '           <span class="symbol-label" style="background-image: url(\'' +
              (tagData.pic ? tagData.pic : "") +
              "')\">" +
              (tagData.initials ? tagData.initials : "") +
              "</span>";
            html += "       </span>";
            html += '       <div class="d-flex flex-column">';
            html +=
              '           <a href="#" class="text-gray-800 text-hover-primary fw-bold">' +
              (tagData.value ? tagData.value : "") +
              "</a>";
            html +=
              '           <span class="text-muted fw-bold">' +
              (tagData.email ? tagData.email : "") +
              "</span>";
            html += "       </div>";
            html += "   </div>";
            html += "</div>";

            return html;
          } catch (err) {
            console.log(err);
          }
        }
      },
      transformTag: tagData => {
        tagData.class = "tagify__tag tagify__tag--primary";
      },
      dropdown: {
        classname: "color-blue",
        enabled: 1,
        maxItems: 5
      }
    });

    // CC input show
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    EventHandlerUtil.on(form, "click", e => {
      const input: HTMLElement | null = form.querySelector(".inbox-to-cc");

      if (!input) {
        return;
      }

      input.classList.remove("d-none");
      input.classList.add("d-flex");

      const compose: HTMLElement | null = form.querySelector(
        "[name=compose_cc]"
      );

      if (!compose) {
        return;
      }

      compose.focus();
    });

    // CC input hide
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    EventHandlerUtil.on(form, "click", e => {
      const input: HTMLElement | null = form.querySelector(".inbox-to-cc");

      if (!input) {
        return;
      }

      input.classList.remove("d-none");
      input.classList.add("d-flex");
    });

    // BCC input show
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    EventHandlerUtil.on(form, "click", e => {
      const input: HTMLElement | null = form.querySelector(".inbox-to-bcc");

      if (!input) {
        return;
      }

      input.classList.remove("d-none");
      input.classList.add("d-flex");

      const compose: HTMLElement | null = form.querySelector(
        "[name=compose_bcc]"
      );

      if (!compose) {
        return;
      }

      compose.focus();
    });

    // BCC input hide
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    EventHandlerUtil.on(form, "click", e => {
      const input: HTMLElement | null = form.querySelector(".inbox-to-bcc");

      if (!input) {
        return;
      }

      input.classList.remove("d-none");
      input.classList.add("d-flex");
    });
  };

  // Public methods
  return {
    initEditor,
    initForm
  };
};

export default useKTLib;
