<template>
  <div class="row text-center">
    <div class="col-3" v-for="user in users" :key="user.id">
      <a href="#">
        <img :src="user.image" width="140px" height="140px" />
      </a>
      <h2>{{ user.name }}</h2>
      <span class="badge badge-secondary"
        >追蹤人數：{{ user.FollowerCount }}</span
      >
      <p class="mt-3">
        <button
          type="button"
          class="btn btn-danger"
          v-if="user.isFollowed"
          @click.stop.prevent="deleteFollow"
        >
          取消追蹤
        </button>
        <button
          type="button"
          class="btn btn-primary"
          v-else
          @click.stop.prevent="addFollow"
        >
          追蹤
        </button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  methods: {
    addFollow() {
      this.user = {
        ...this.user, // 保留user內原有資料
        isFollowed: true,
      }
    },
    deleteFollow() {
      this.user = {
        ...this.user, // 保留user內原有資料
        isFollowed: false,
      }
    },
  },
}
</script>
