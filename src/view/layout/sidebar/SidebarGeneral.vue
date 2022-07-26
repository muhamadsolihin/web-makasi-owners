<template>
  <!--begin::Sidebar Nav-->
  <ul
    class="sidebar-nav nav nav-tabs pt-15 pb-5 px-5"
    id="kt_sidebar_tabs"
    role="tablist"
  >
    <li class="nav-item">
      <a
        class="nav-link"
        data-bs-toggle="tab"
        href="#kt_sidebar_tab_pane_1"
        id="kt_sidebar_tab_1"
      >
        <img alt="" src="media/svg/logo/purple/aven.svg" class="default" />
        <img alt="" src="media/svg/logo/colored/aven.svg" class="active" />
      </a>
    </li>

    <li class="nav-item">
      <a
        class="nav-link"
        data-bs-toggle="tab"
        href="#kt_sidebar_tab_pane_2"
        id="kt_sidebar_tab_2"
      >
        <img alt="" src="media/svg/logo/purple/kanba.svg" class="default" />
        <img alt="" src="media/svg/logo/colored/kanba.svg" class="active" />
      </a>
    </li>

    <li class="nav-item">
      <a
        class="nav-link active"
        data-bs-toggle="tab"
        href="#kt_sidebar_tab_pane_3"
        id="kt_sidebar_tab_3"
      >
        <img alt="" src="media/svg/logo/purple/fox-hub-2.svg" class="default" />
        <img alt="" src="media/svg/logo/colored/fox-hub-2.svg" class="active" />
      </a>
    </li>

    <li class="nav-item">
      <a
        class="nav-link"
        data-bs-toggle="tab"
        href="#kt_sidebar_tab_pane_4"
        id="kt_sidebar_tab_4"
      >
        <img alt="" src="media/svg/logo/purple/tower.svg" class="default" />
        <img alt="" src="media/svg/logo/colored/tower.svg" class="active" />
      </a>
    </li>

    <li class="nav-item">
      <a
        class="nav-link"
        data-bs-toggle="tab"
        href="#kt_sidebar_tab_pane_5"
        id="kt_sidebar_tab_5"
      >
        <img alt="" src="media/svg/logo/purple/treva.svg" class="default" />
        <img alt="" src="media/svg/logo/colored/treva.svg" class="active" />
      </a>
    </li>
  </ul>
  <!--end::Sidebar Nav-->

  <!--begin::Sidebar Content-->
  <div id="kt_sidebar_content" class="py-10 px-5 px-lg-5">
    <div
      class="hover-scroll-y me-lg-n2 pe-lg-2"
      data-kt-scroll="true"
      data-kt-scroll-height="auto"
      data-kt-scroll-offset="0px"
      data-kt-scroll-dependencies="#kt_sidebar_tabs, #kt_sidebar_footer"
      data-kt-scroll-wrappers="#kt_sidebar_content"
    >
      <div class="tab-content">
        <div class="tab-pane" id="kt_sidebar_tab_pane_1" role="tabpanel">
          <!--begin::Card-->
          <div class="card bg-transparent">
            <!--begin::Header-->
            <div class="card-header align-items-center border-0">
              <h3 class="card-title fw-bolder text-white fs-3">Aven Sales</h3>
              <div class="card-toolbar">
                <button
                  type="button"
                  class="btn btn-md btn-icon btn-icon-white btn-info"
                  data-kt-menu-trigger="click"
                  data-kt-menu-overflow="true"
                  data-kt-menu-placement="bottom-end"
                  data-kt-menu-flip="top-end"
                >
                  <span class="svg-icon svg-icon-1">
                    <inline-svg
                      src="media/icons/duotone/Layout/Layout-4-blocks-2.svg"
                    />
                  </span>
                </button>
                <Dropdown3></Dropdown3>
              </div>
            </div>
            <!--end::Header-->

            <!--begin::Body-->
            <div class="card-body px-3 py-0">
              <!--begin::Chart-->
              <apexchart
                class="apexcharts-bar-hover-danger"
                :options="chartOptions"
                :series="series1"
                height="250"
                type="bar"
              />
              <!--end::Chart-->
            </div>
            <!--end: Card Body-->
          </div>
          <!--end::Card-->

          <!--begin::Card-->
          <div class="card bg-transparent">
            <!--begin::Header-->
            <div class="card-header align-items-center border-0">
              <h3 class="card-title fw-bolder text-white fs-3">
                Tasks Overview
              </h3>
              <div class="card-toolbar">
                <button
                  type="button"
                  class="btn btn-md btn-icon btn-icon-white btn-info"
                  data-kt-menu-trigger="click"
                  data-kt-menu-overflow="true"
                  data-kt-menu-placement="bottom-end"
                  data-kt-menu-flip="top-end"
                >
                  <span class="svg-icon svg-icon-1">
                    <inline-svg
                      src="media/icons/duotone/Layout/Layout-4-blocks-2.svg"
                    />
                  </span>
                </button>
                <Dropdown3></Dropdown3>
              </div>
            </div>
            <!--end::Header-->

            <!--begin::Body-->
            <div class="card-body pt-0">
              <!--begin::Item-->
              <div class="d-flex flex-wrap align-items-center mb-7">
                <!--begin::Symbol-->
                <div class="symbol symbol-40px symbol-2by3 me-4">
                  <img
                    src="media/stock/600x400/img-1.jpg"
                    alt=""
                    class="mw-100"
                  />
                </div>
                <!--end::Symbol-->

                <!--begin::Title-->
                <div class="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                  <a
                    href="#"
                    class="text-white fw-bolder text-hover-primary fs-6"
                  >
                    Sunspots
                  </a>
                  <span class="text-white opacity-25 fw-bold fs-7 my-1">
                    Mark, Rowling, Esther
                  </span>
                </div>
                <!--end::Title-->
              </div>
              <!--end::Item-->

              <!--begin: Item-->
              <div class="d-flex flex-wrap align-items-center mb-7">
                <!--begin::Symbol-->
                <div class="symbol symbol-40px symbol-2by3 me-4">
                  <img
                    src="media/stock/600x400/img-2.jpg"
                    alt=""
                    class="mw-100"
                  />
                </div>
                <!--end::Symbol-->

                <!--begin::Title-->
                <div class="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                  <a
                    href="#"
                    class="text-white fw-bolder text-hover-primary fs-6"
                  >
                    Ocean Drive
                  </a>
                  <span class="text-white opacity-25 fw-bold fs-7 my-1">
                    Study the highway types
                  </span>
                </div>
                <!--end::Title-->
              </div>
              <!--end: Item-->

              <!--begin::Item-->
              <div class="d-flex flex-wrap align-items-center mb-7">
                <!--begin::Symbol-->
                <div class="symbol symbol-40px symbol-2by3 me-4">
                  <img
                    src="media/stock/600x400/img-3.jpg"
                    alt=""
                    class="mw-100"
                  />
                </div>
                <!--end::Symbol-->

                <!--begin::Title-->
                <div class="d-flex flex-column flex-grow-1 pe-3">
                  <a
                    href="#"
                    class="text-white fw-bolder text-hover-primary fs-6"
                  >
                    Soar, Eco
                  </a>
                  <span class="text-white opacity-25 fw-bold fs-7 my-1">
                    HTML, CSS. jQuery
                  </span>
                </div>
                <!--end::Title-->
              </div>
              <!--end::Item-->

              <!--begin::Item-->
              <div class="d-flex flex-wrap align-items-center mb-7">
                <!--begin::Symbol-->
                <div class="symbol symbol-40px symbol-2by3 me-4">
                  <img
                    src="media/stock/600x400/img-5.jpg"
                    alt=""
                    class="mw-100"
                  />
                </div>
                <!--end::Symbol-->

                <!--begin::Title-->
                <div class="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                  <a
                    href="#"
                    class="text-white fw-bolder text-hover-primary fs-6"
                  >
                    Cup & Green
                  </a>
                  <span class="text-white opacity-25 fs-7 fw-bold my-1">
                    ASP.NET Developer
                  </span>
                </div>
                <!--end::Title-->
              </div>
              <!--end::Item-->

              <!--begin::Item-->
              <div class="d-flex flex-wrap align-items-center">
                <!--begin::Symbol-->
                <div class="symbol symbol-40px symbol-2by3 me-4">
                  <img
                    src="media/stock/600x400/img-6.jpg"
                    alt=""
                    class="mw-100"
                  />
                </div>
                <!--end::Symbol-->

                <!--begin::Title-->
                <div class="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                  <a
                    href="#"
                    class="text-white fw-bolder text-hover-primary fs-6"
                  >
                    Bose QC 35 II
                  </a>
                  <span class="text-white opacity-25 fs-7 fw-bold my-1">
                    Study the highway types
                  </span>
                </div>
                <!--end::Title-->
              </div>
              <!--end::Item-->
            </div>
            <!--end: Card Body-->
          </div>
          <!--end::Card-->
        </div>

        <div class="tab-pane" id="kt_sidebar_tab_pane_2" role="tabpanel">
          <!--begin::Card-->
          <div class="card bg-transparent">
            <!--begin::Header-->
            <div class="card-header align-items-center border-0">
              <h3 class="card-title fw-bolder text-white fs-3">Kanba Sales</h3>
              <div class="card-toolbar">
                <button
                  type="button"
                  class="btn btn-md btn-icon btn-icon-white btn-info"
                  data-kt-menu-trigger="click"
                  data-kt-menu-overflow="true"
                  data-kt-menu-placement="bottom-end"
                  data-kt-menu-flip="top-end"
                >
                  <span class="svg-icon svg-icon-1">
                    <inline-svg
                      src="media/icons/duotone/Layout/Layout-4-blocks-2.svg"
                    />
                  </span>
                </button>
                <Dropdown3></Dropdown3>
              </div>
            </div>
            <!--end::Header-->

            <!--begin::Body-->
            <div class="card-body px-3 py-0">
              <!--begin::Chart-->
              <apexchart
                class="apexcharts-bar-hover-danger"
                :options="chartOptions"
                :series="series2"
                height="250"
                type="bar"
              />
              <!--end::Chart-->
            </div>
            <!--end: Card Body-->
          </div>
          <!--end::Card-->

          <!--begin::Card-->
          <div class="card bg-transparent">
            <!--begin::Header-->
            <div class="card-header align-items-center border-0">
              <h3 class="card-title fw-bolder text-white fs-3">
                Kanba Products
              </h3>
              <div class="card-toolbar">
                <button
                  type="button"
                  class="btn btn-md btn-icon btn-icon-white btn-info"
                  data-kt-menu-trigger="click"
                  data-kt-menu-overflow="true"
                  data-kt-menu-placement="bottom-end"
                  data-kt-menu-flip="top-end"
                >
                  <span class="svg-icon svg-icon-1">
                    <inline-svg
                      src="media/icons/duotone/Layout/Layout-4-blocks-2.svg"
                    />
                  </span>
                </button>
                <Dropdown3></Dropdown3>
              </div>
            </div>
            <!--end::Header-->

            <!--begin::Body-->
            <div class="card-body pt-0">
              <!--begin::Item-->
              <div class="d-flex flex-wrap align-items-center mb-7">
                <!--begin::Symbol-->
                <div class="symbol symbol-40px symbol-2by3 me-4">
                  <img
                    src="media/stock/600x400/img-7.jpg"
                    alt=""
                    class="mw-100"
                  />
                </div>
                <!--end::Symbol-->

                <!--begin::Title-->
                <div class="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                  <a
                    href="#"
                    class="text-white fw-bolder text-hover-primary fs-6"
                  >
                    BP Industries
                  </a>
                  <span class="text-white opacity-25 fw-bold fs-7 my-1">
                    Successful Fellas
                  </span>
                </div>
                <!--end::Title-->
              </div>
              <!--end::Item-->

              <!--begin: Item-->
              <div class="d-flex flex-wrap align-items-center mb-7">
                <!--begin::Symbol-->
                <div class="symbol symbol-40px symbol-2by3 me-4">
                  <img
                    src="media/stock/600x400/img-8.jpg"
                    alt=""
                    class="mw-100"
                  />
                </div>
                <!--end::Symbol-->

                <!--begin::Title-->
                <div class="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                  <a
                    href="#"
                    class="text-white fw-bolder text-hover-primary fs-6"
                  >
                    Automatica
                  </a>
                  <span class="text-white opacity-25 fw-bold fs-7 my-1">
                    Successful Fellas
                  </span>
                </div>
                <!--end::Title-->
              </div>
              <!--end: Item-->

              <!--begin::Item-->
              <div class="d-flex flex-wrap align-items-center mb-7">
                <!--begin::Symbol-->
                <div class="symbol symbol-40px symbol-2by3 me-4">
                  <img
                    src="media/stock/600x400/img-9.jpg"
                    alt=""
                    class="mw-100"
                  />
                </div>
                <!--end::Symbol-->

                <!--begin::Title-->
                <div class="d-flex flex-column flex-grow-1 pe-3">
                  <a
                    href="#"
                    class="text-white fw-bolder text-hover-primary fs-6"
                  >
                    Python Inc.
                  </a>
                  <span class="text-white opacity-25 fw-bold fs-7 my-1">
                    Most Successful
                  </span>
                </div>
                <!--end::Title-->
              </div>
              <!--end::Item-->

              <!--begin::Item-->
              <div class="d-flex flex-wrap align-items-center mb-7">
                <!--begin::Symbol-->
                <div class="symbol symbol-40px symbol-2by3 me-4">
                  <img
                    src="media/stock/600x400/img-19.jpg"
                    alt=""
                    class="mw-100"
                  />
                </div>
                <!--end::Symbol-->

                <!--begin::Title-->
                <div class="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                  <a
                    href="#"
                    class="text-white fw-bolder text-hover-primary fs-6"
                  >
                    Cup & Green
                  </a>
                  <span class="text-white opacity-25 fs-7 fw-bold my-1">
                    ASP.NET Developer
                  </span>
                </div>
                <!--end::Title-->
              </div>
              <!--end::Item-->

              <!--begin::Item-->
              <div class="d-flex flex-wrap align-items-center">
                <!--begin::Symbol-->
                <div class="symbol symbol-40px symbol-2by3 me-4">
                  <img
                    src="media/stock/600x400/img-6.jpg"
                    alt=""
                    class="mw-100"
                  />
                </div>
                <!--end::Symbol-->

                <!--begin::Title-->
                <div class="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                  <a
                    href="#"
                    class="text-white fw-bolder text-hover-primary fs-6"
                  >
                    Active Customers
                  </a>
                  <span class="text-white opacity-25 fs-7 fw-bold my-1">
                    Best Customers
                  </span>
                </div>
                <!--end::Title-->
              </div>
              <!--end::Item-->
            </div>
            <!--end: Card Body-->
          </div>
          <!--end::Card-->
        </div>

        <div class="tab-pane active" id="kt_sidebar_tab_pane_3" role="tabpanel">
          <!--begin::Card-->
          <div class="card bg-transparent">
            <!--begin::Header-->
            <div class="card-header align-items-center border-0">
              <h3 class="card-title fw-bolder text-white fs-3">Fox Sales</h3>
              <div class="card-toolbar">
                <button
                  type="button"
                  class="btn btn-md btn-icon btn-icon-white btn-info"
                  data-kt-menu-trigger="click"
                  data-kt-menu-overflow="true"
                  data-kt-menu-placement="bottom-end"
                  data-kt-menu-flip="top-end"
                >
                  <span class="svg-icon svg-icon-1">
                    <inline-svg
                      src="media/icons/duotone/Layout/Layout-4-blocks-2.svg"
                    />
                  </span>
                </button>
                <Dropdown3></Dropdown3>
              </div>
            </div>
            <!--end::Header-->

            <!--begin::Body-->
            <div class="card-body px-3 py-0">
              <!--begin::Chart-->
              <apexchart
                class="apexcharts-bar-hover-danger"
                :options="chartOptions"
                :series="series4"
                height="250"
                type="bar"
              />
              <!--end::Chart-->
            </div>
            <!--end: Card Body-->
          </div>
          <!--end::Card-->

          <!--begin::Card-->
          <div class="card bg-transparent">
            <!--begin::Header-->
            <div class="card-header align-items-center border-0">
              <h3 class="card-title fw-bolder text-white fs-3">
                Fox Bestsellers
              </h3>
              <div class="card-toolbar">
                <button
                  type="button"
                  class="btn btn-md btn-icon btn-icon-white btn-info"
                  data-kt-menu-trigger="click"
                  data-kt-menu-overflow="true"
                  data-kt-menu-placement="bottom-end"
                  data-kt-menu-flip="top-end"
                >
                  <span class="svg-icon svg-icon-1">
                    <inline-svg
                      src="media/icons/duotone/Layout/Layout-4-blocks-2.svg"
                    />
                  </span>
                </button>
                <Dropdown3></Dropdown3>
              </div>
            </div>
            <!--end::Header-->

            <!--begin::Body-->
            <div class="card-body pt-0">
              <!--begin::Item-->
              <div class="d-flex flex-wrap align-items-center mb-7">
                <!--begin::Symbol-->
                <div class="symbol symbol-40px symbol-2by3 me-4">
                  <img
                    src="media/stock/600x400/img-17.jpg"
                    alt=""
                    class="mw-100"
                  />
                </div>
                <!--end::Symbol-->

                <!--begin::Title-->
                <div class="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                  <a
                    href="#"
                    class="text-white fw-bolder text-hover-primary fs-6"
                  >
                    Blue Donut
                  </a>
                  <span class="text-white opacity-25 fw-bold fs-7 my-1">
                    Study the highway types
                  </span>
                </div>
                <!--end::Title-->
              </div>
              <!--end::Item-->

              <!--begin: Item-->
              <div class="d-flex flex-wrap align-items-center mb-7">
                <!--begin::Symbol-->
                <div class="symbol symbol-40px symbol-2by3 me-4">
                  <img
                    src="media/stock/600x400/img-10.jpg"
                    alt=""
                    class="mw-100"
                  />
                </div>
                <!--end::Symbol-->

                <!--begin::Title-->
                <div class="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                  <a
                    href="#"
                    class="text-white fw-bolder text-hover-primary fs-6"
                  >
                    Lovely Hearts
                  </a>
                  <span class="text-white opacity-25 fw-bold fs-7 my-1">
                    Study the highway types
                  </span>
                </div>
                <!--end::Title-->
              </div>
              <!--end: Item-->

              <!--begin::Item-->
              <div class="d-flex flex-wrap align-items-center mb-7">
                <!--begin::Symbol-->
                <div class="symbol symbol-40px symbol-2by3 me-4">
                  <img
                    src="media/stock/600x400/img-1.jpg"
                    alt=""
                    class="mw-100"
                  />
                </div>
                <!--end::Symbol-->

                <!--begin::Title-->
                <div class="d-flex flex-column flex-grow-1 pe-3">
                  <a
                    href="#"
                    class="text-white fw-bolder text-hover-primary fs-6"
                  >
                    Hands & Yellow
                  </a>
                  <span class="text-white opacity-25 fw-bold fs-7 my-1">
                    Study the highway types
                  </span>
                </div>
                <!--end::Title-->
              </div>
              <!--end::Item-->

              <!--begin::Item-->
              <div class="d-flex flex-wrap align-items-center mb-7">
                <!--begin::Symbol-->
                <div class="symbol symbol-40px symbol-2by3 me-4">
                  <img
                    src="media/stock/600x400/img-9.jpg"
                    alt=""
                    class="mw-100"
                  />
                </div>
                <!--end::Symbol-->

                <!--begin::Title-->
                <div class="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                  <a
                    href="#"
                    class="text-white fw-bolder text-hover-primary fs-6"
                  >
                    Cup & Green
                  </a>
                  <span class="text-white opacity-25 fs-7 fw-bold my-1">
                    Study the highway types
                  </span>
                </div>
                <!--end::Title-->
              </div>
              <!--end::Item-->

              <!--begin::Item-->
              <div class="d-flex flex-wrap align-items-center">
                <!--begin::Symbol-->
                <div class="symbol symbol-40px symbol-2by3 me-4">
                  <img
                    src="media/stock/600x400/img-4.jpg"
                    alt=""
                    class="mw-100"
                  />
                </div>
                <!--end::Symbol-->

                <!--begin::Title-->
                <div class="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                  <a
                    href="#"
                    class="text-white fw-bolder text-hover-primary fs-6"
                  >
                    Bose QC 35 II
                  </a>
                  <span class="text-white opacity-25 fs-7 fw-bold my-1">
                    Study the highway types
                  </span>
                </div>
                <!--end::Title-->
              </div>
              <!--end::Item-->
            </div>
            <!--end: Card Body-->
          </div>
          <!--end::Card-->
        </div>

        <div class="tab-pane" id="kt_sidebar_tab_pane_4" role="tabpanel">
          <!--begin::Card-->
          <div class="card bg-transparent">
            <!--begin::Header-->
            <div class="card-header align-items-center border-0">
              <h3 class="card-title fw-bolder text-white fs-3">Tower Sales</h3>
              <div class="card-toolbar">
                <button
                  type="button"
                  class="btn btn-md btn-icon btn-icon-white btn-info"
                  data-kt-menu-trigger="click"
                  data-kt-menu-overflow="true"
                  data-kt-menu-placement="bottom-end"
                  data-kt-menu-flip="top-end"
                >
                  <span class="svg-icon svg-icon-1">
                    <inline-svg
                      src="media/icons/duotone/Layout/Layout-4-blocks-2.svg"
                    />
                  </span>
                </button>
                <Dropdown3></Dropdown3>
              </div>
            </div>
            <!--end::Header-->

            <!--begin::Body-->
            <div class="card-body px-3 py-0">
              <!--begin::Chart-->
              <apexchart
                class="apexcharts-bar-hover-danger"
                :options="chartOptions"
                :series="series4"
                height="250"
                type="bar"
              />
              <!--end::Chart-->
            </div>
            <!--end: Card Body-->
          </div>
          <!--end::Card-->

          <!--begin::Card-->
          <div class="card bg-transparent">
            <!--begin::Header-->
            <div class="card-header align-items-center border-0">
              <h3 class="card-title fw-bolder text-white fs-3">
                Tower Latest Products
              </h3>
              <div class="card-toolbar">
                <button
                  type="button"
                  class="btn btn-md btn-icon btn-icon-white btn-info"
                  data-kt-menu-trigger="click"
                  data-kt-menu-overflow="true"
                  data-kt-menu-placement="bottom-end"
                  data-kt-menu-flip="top-end"
                >
                  <span class="svg-icon svg-icon-1">
                    <inline-svg
                      src="media/icons/duotone/Layout/Layout-4-blocks-2.svg"
                    />
                  </span>
                </button>
                <Dropdown3></Dropdown3>
              </div>
            </div>
            <!--end::Header-->

            <!--begin::Body-->
            <div class="card-body pt-0">
              <!--begin: Item-->
              <div class="d-flex flex-wrap align-items-center mb-7">
                <!--begin::Symbol-->
                <div class="symbol symbol-40px symbol-2by3 me-4">
                  <img
                    src="media/stock/600x400/img-8.jpg"
                    alt=""
                    class="mw-100"
                  />
                </div>
                <!--end::Symbol-->

                <!--begin::Title-->
                <div class="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                  <a
                    href="#"
                    class="text-white fw-bolder text-hover-primary fs-6"
                  >
                    Automatica
                  </a>
                  <span class="text-white opacity-25 fw-bold fs-7 my-1">
                    Successful Fellas
                  </span>
                </div>
                <!--end::Title-->
              </div>
              <!--end: Item-->

              <!--begin::Item-->
              <div class="d-flex flex-wrap align-items-center mb-7">
                <!--begin::Symbol-->
                <div class="symbol symbol-40px symbol-2by3 me-4">
                  <img
                    src="media/stock/600x400/img-11.jpg"
                    alt=""
                    class="mw-100"
                  />
                </div>
                <!--end::Symbol-->

                <!--begin::Title-->
                <div class="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                  <a
                    href="#"
                    class="text-white fw-bolder text-hover-primary fs-6"
                  >
                    BP Industries
                  </a>
                  <span class="text-white opacity-25 fw-bold fs-7 my-1">
                    Successful Fellas
                  </span>
                </div>
                <!--end::Title-->
              </div>
              <!--end::Item-->

              <!--begin::Item-->
              <div class="d-flex flex-wrap align-items-center mb-7">
                <!--begin::Symbol-->
                <div class="symbol symbol-40px symbol-2by3 me-4">
                  <img
                    src="media/stock/600x400/img-19.jpg"
                    alt=""
                    class="mw-100"
                  />
                </div>
                <!--end::Symbol-->

                <!--begin::Title-->
                <div class="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                  <a
                    href="#"
                    class="text-white fw-bolder text-hover-primary fs-6"
                  >
                    Cup & Green
                  </a>
                  <span class="text-white opacity-25 fs-7 fw-bold my-1">
                    ASP.NET Developer
                  </span>
                </div>
                <!--end::Title-->
              </div>
              <!--end::Item-->

              <!--begin::Item-->
              <div class="d-flex flex-wrap align-items-center mb-7">
                <!--begin::Symbol-->
                <div class="symbol symbol-40px symbol-2by3 me-4">
                  <img
                    src="media/stock/600x400/img-9.jpg"
                    alt=""
                    class="mw-100"
                  />
                </div>
                <!--end::Symbol-->

                <!--begin::Title-->
                <div class="d-flex flex-column flex-grow-1 pe-3">
                  <a
                    href="#"
                    class="text-white fw-bolder text-hover-primary fs-6"
                  >
                    Python Inc.
                  </a>
                  <span class="text-white opacity-25 fw-bold fs-7 my-1">
                    Most Successful
                  </span>
                </div>
                <!--end::Title-->
              </div>
              <!--end::Item-->

              <!--begin::Item-->
              <div class="d-flex flex-wrap align-items-center">
                <!--begin::Symbol-->
                <div class="symbol symbol-40px symbol-2by3 me-4">
                  <img
                    src="media/stock/600x400/img-6.jpg"
                    alt=""
                    class="mw-100"
                  />
                </div>
                <!--end::Symbol-->

                <!--begin::Title-->
                <div class="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                  <a
                    href="#"
                    class="text-white fw-bolder text-hover-primary fs-6"
                  >
                    Active Customers
                  </a>
                  <span class="text-white opacity-25 fs-7 fw-bold my-1">
                    Best Customers
                  </span>
                </div>
                <!--end::Title-->
              </div>
              <!--end::Item-->
            </div>
            <!--end: Card Body-->
          </div>
          <!--end::Card-->
        </div>

        <div class="tab-pane" id="kt_sidebar_tab_pane_5" role="tabpanel">
          <!--begin::Card-->
          <div class="card bg-transparent">
            <!--begin::Header-->
            <div class="card-header align-items-center border-0">
              <h3 class="card-title fw-bolder text-white fs-3">Treva Sales</h3>
              <div class="card-toolbar">
                <button
                  type="button"
                  class="btn btn-md btn-icon btn-icon-white btn-info"
                  data-kt-menu-trigger="click"
                  data-kt-menu-overflow="true"
                  data-kt-menu-placement="bottom-end"
                  data-kt-menu-flip="top-end"
                >
                  <span class="svg-icon svg-icon-1">
                    <inline-svg
                      src="media/icons/duotone/Layout/Layout-4-blocks-2.svg"
                    />
                  </span>
                </button>
                <Dropdown3></Dropdown3>
              </div>
            </div>
            <!--end::Header-->

            <!--begin::Body-->
            <div class="card-body px-3 py-0">
              <!--begin::Chart-->
              <apexchart
                class="apexcharts-bar-hover-danger"
                :options="chartOptions"
                :series="series5"
                height="250"
                type="bar"
              />
              <!--end::Chart-->
            </div>
            <!--end: Card Body-->
          </div>
          <!--end::Card-->

          <!--begin::Card-->
          <div class="card bg-transparent">
            <!--begin::Header-->
            <div class="card-header align-items-center border-0">
              <h3 class="card-title fw-bolder text-white fs-3">
                Treva's Products
              </h3>
              <div class="card-toolbar">
                <button
                  type="button"
                  class="btn btn-md btn-icon btn-icon-white btn-info"
                  data-kt-menu-trigger="click"
                  data-kt-menu-overflow="true"
                  data-kt-menu-placement="bottom-end"
                  data-kt-menu-flip="top-end"
                >
                  <span class="svg-icon svg-icon-1">
                    <inline-svg
                      src="media/icons/duotone/Layout/Layout-4-blocks-2.svg"
                    />
                  </span>
                </button>
                <Dropdown3></Dropdown3>
              </div>
            </div>
            <!--end::Header-->

            <!--begin::Body-->
            <div class="card-body pt-0">
              <!--begin::Item-->
              <div class="d-flex flex-wrap align-items-center mb-7">
                <!--begin::Symbol-->
                <div class="symbol symbol-40px symbol-2by3 me-4">
                  <img
                    src="media/stock/600x400/img-12.jpg"
                    alt=""
                    class="mw-100"
                  />
                </div>
                <!--end::Symbol-->

                <!--begin::Title-->
                <div class="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                  <a
                    href="#"
                    class="text-white fw-bolder text-hover-primary fs-6"
                  >
                    Top Authors
                  </a>
                  <span class="text-white opacity-25 fw-bold fs-7 my-1">
                    Successful Fellas
                  </span>
                </div>
                <!--end::Title-->
              </div>
              <!--end::Item-->

              <!--begin: Item-->
              <div class="d-flex flex-wrap align-items-center mb-7">
                <!--begin::Symbol-->
                <div class="symbol symbol-40px symbol-2by3 me-4">
                  <img
                    src="media/stock/600x400/img-13.jpg"
                    alt=""
                    class="mw-100"
                  />
                </div>
                <!--end::Symbol-->

                <!--begin::Title-->
                <div class="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                  <a
                    href="#"
                    class="text-white fw-bolder text-hover-primary fs-6"
                  >
                    Popular Authors
                  </a>
                  <span class="text-white opacity-25 fw-bold fs-7 my-1">
                    Most Successful
                  </span>
                </div>
                <!--end::Title-->
              </div>
              <!--end: Item-->

              <!--begin::Item-->
              <div class="d-flex flex-wrap align-items-center mb-7">
                <!--begin::Symbol-->
                <div class="symbol symbol-40px symbol-2by3 me-4">
                  <img
                    src="media/stock/600x400/img-14.jpg"
                    alt=""
                    class="mw-100"
                  />
                </div>
                <!--end::Symbol-->

                <!--begin::Title-->
                <div class="d-flex flex-column flex-grow-1 pe-3">
                  <a
                    href="#"
                    class="text-white fw-bolder text-hover-primary fs-6"
                  >
                    New Users
                  </a>
                  <span class="text-white opacity-25 fw-bold fs-7 my-1">
                    HTML, CSS. jQuery
                  </span>
                </div>
                <!--end::Title-->
              </div>
              <!--end::Item-->

              <!--begin::Item-->
              <div class="d-flex flex-wrap align-items-center mb-7">
                <!--begin::Symbol-->
                <div class="symbol symbol-40px symbol-2by3 me-4">
                  <img
                    src="media/stock/600x400/img-15.jpg"
                    alt=""
                    class="mw-100"
                  />
                </div>
                <!--end::Symbol-->

                <!--begin::Title-->
                <div class="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                  <a
                    href="#"
                    class="text-white fw-bolder text-hover-primary fs-6"
                  >
                    Active Customers
                  </a>
                  <span class="text-white opacity-25 fs-7 fw-bold my-1">
                    Awesome Users
                  </span>
                </div>
                <!--end::Title-->
              </div>
              <!--end::Item-->

              <!--begin::Item-->
              <div class="d-flex flex-wrap align-items-center">
                <!--begin::Symbol-->
                <div class="symbol symbol-40px symbol-2by3 me-4">
                  <img
                    src="media/stock/600x400/img-16.jpg"
                    alt=""
                    class="mw-100"
                  />
                </div>
                <!--end::Symbol-->

                <!--begin::Title-->
                <div class="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                  <a
                    href="#"
                    class="text-white fw-bolder text-hover-primary fs-6"
                  >
                    Bose QC 35 II
                  </a>
                  <span class="text-white opacity-25 fs-7 fw-bold my-1">
                    Best Customers
                  </span>
                </div>
                <!--end::Title-->
              </div>
              <!--end::Item-->
            </div>
            <!--end: Card Body-->
          </div>
          <!--end::Card-->
        </div>
      </div>
    </div>
  </div>
  <!--end::Sidebar Content-->

  <!--begin::Sidebar footer-->
  <div id="kt_sidebar_footer" class="py-2 px-5 pb-md-6 text-center">
    <router-link
      to="/dashboards/extended"
      class="btn btn-color-white bg-white  bg-opacity-10 bg-hover-opacity-20 fw-bolder w-100"
      >View Extended Layout</router-link
    >
  </div>
  <!--end::Sidebar footer-->
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Dropdown3 from "@/view/content/dropdown/Dropdown3.vue";
import { ScrollComponent } from "@/assets/ts/components/_ScrollComponent";

export default defineComponent({
  name: "Sidebar",
  components: {
    Dropdown3,
  },
  setup() {
    onMounted(() => {
      ScrollComponent.createInstances('[data-kt-scroll="true"]');
    });

    const series1 = ref([
      {
        name: "Profit",
        data: [40, 30, 25, 40, 50, 30],
      },
    ]);

    const series2 = ref([
      {
        name: "Profit",
        data: [30, 30, 25, 45, 30, 40],
      },
    ]);

    const series3 = ref([
      {
        name: "Profit",
        data: [25, 30, 40, 30, 35, 30],
      },
    ]);

    const series4 = ref([
      {
        name: "Profit",
        data: [25, 30, 35, 40, 50, 30],
      },
    ]);

    const series5 = ref([
      {
        name: "Profit",
        data: [40, 20, 50, 50, 55, 45],
      },
    ]);

    const chartOptions = ref({
      chart: {
        fontFamily: "inherit",
        type: "bar",
        height: 250,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: ["30%"],
          endingShape: "rounded",
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        crosshairs: {
          show: false,
        },
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          style: {
            colors: "#823FD9",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        crosshairs: {
          show: false,
        },
        labels: {
          style: {
            colors: "#823FD9",
            fontSize: "12px",
          },
        },
      },
      states: {
        normal: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        hover: {
          filter: {
            type: "none",
          },
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: "none",
            value: 0,
          },
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        style: {
          fontSize: "12px",
        },
        y: {
          formatter: function(val) {
            return "$" + val + "k";
          },
        },
      },
      colors: ["#661DC5"],
      grid: {
        borderColor: "#661DC5",
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
    });

    return {
      chartOptions,
      series1,
      series2,
      series3,
      series4,
      series5,
    };
  },
});
</script>
