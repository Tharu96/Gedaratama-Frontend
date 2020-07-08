<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <side-bar
      :sidebar-item-color="sidebarBackground"
      :sidebar-background-image="sidebarBackgroundImage"
    >
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/shop_dashboard">
        <md-icon>dashboard</md-icon>
        <p>Shop Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/shop_profile">
        <md-icon>person</md-icon>
        <p>SHOP Profile</p>
      </sidebar-link>
      <sidebar-link to="/item">
        <md-icon>content_paste</md-icon>
        <p>Manage Items</p>
      </sidebar-link>
     <sidebar-link to="/orders">
        <md-icon>content_paste</md-icon>
        <p>Manage Orders</p>
      </sidebar-link>
       <sidebar-link to="/sales">
        <md-icon>content_paste</md-icon>
        <p>Manage Sales</p>
      </sidebar-link>
      <sidebar-link to="/shop_icons">
        <md-icon>bubble_chart</md-icon>
        <p>Reports</p>
      </sidebar-link>
      <sidebar-link to="/shop_notifications">
        <md-icon>notifications</md-icon>
        <p>Notifications</p>
      </sidebar-link>
      <!-- <sidebar-link to="/upgrade" class="active-pro">
        <md-icon>unarchive</md-icon>
        <p>Upgrade to PRO</p>
      </sidebar-link> -->
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <fixed-plugin
        :color.sync="sidebarBackground"
        :image.sync="sidebarBackgroundImage"
      >
      </fixed-plugin>

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>

<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu.vue";
import FixedPlugin from "./Extra/FixedPlugin.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu,
    FixedPlugin
  },
  data() {
    return {
      sidebarBackground: "blue",
      sidebarBackgroundImage: require("@/assets/img/organic-food.jpg")
    };
  }
};
</script>
