<script setup>
import VerticalNavSectionTitle from '@/@layouts/components/VerticalNavSectionTitle.vue'
import UserService from '@/services/UserService'
import VerticalNavGroup from '@layouts/components/VerticalNavGroup.vue'
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue'

const role = ref(null)
onMounted(() => {
  const user = UserService.getUser()
  role.value = user.role
})
</script>

<template>
  <!-- 👉 Dashboards -->
  <VerticalNavLink
    :item="{
      title: 'Dashboard',
      icon: 'ri-home-smile-line',
      to: '/admin/dashboard',
    }"
  />

  <!-- 👉 Apps & Pages -->
  <VerticalNavSectionTitle
    :item="{
      heading: 'Apps & Pages',
    }"
  />

  <VerticalNavLink
    :item="{
      title: 'Mentor/Tutor',
      icon: 'ri-user-6-line',
      to: '/admin/tutor',
    }"
  />

  <VerticalNavLink
    :item="{
      title: 'Programs',
      icon: 'ri-honour-line',
      to: '/admin/program',
    }"
    v-if="role == 'admin' || role == 'super_admin'"
  />

  <VerticalNavLink
    :item="{
      title: 'Timesheet',
      icon: 'ri-calendar-todo-line',
      to: '/admin/timesheet',
    }"
  />

  <VerticalNavGroup
    :item="{
      title: 'Cut-Off',
      icon: 'ri-scissors-cut-line',
    }"
    v-if="role == 'finance' || role == 'super_admin'"
  >
    <VerticalNavLink
      :item="{
        title: 'Pre Cut-Off',
        icon: 'ri-calendar-todo-line',
        to: '/admin/cut-off/pre',
      }"
    />

    <VerticalNavLink
      :item="{
        title: 'Completed',
        icon: 'ri-calendar-todo-line',
        to: '/admin/cut-off/completed',
      }"
    />
  </VerticalNavGroup>
</template>
