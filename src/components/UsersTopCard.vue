<template>
  <div class="row text-center">
    <div class="col-3" v-for="user in users" :key="user.id">
      <a href="#">
        <img :src="user.image | emptyImage" width="140px" height="140px" />
      </a>
      <h2>{{ user.name }}</h2>
      <span class="badge badge-secondary"
        >追蹤人數：{{ user.followerCount }}</span
      >
      <p class="mt-3">
        <button
          v-if="user.isFollowed"
          type="button"
          class="btn btn-danger"
          @click.stop.prevent="deleteFollowing(user.id)"
        >
          取消追蹤
        </button>
        <button
          v-else
          type="button"
          class="btn btn-primary"
          @click.stop.prevent="addFollowing(user.id)"
        >
          追蹤
        </button>
      </p>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from './../utils/mixins'
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'

export default {
  mixins: [emptyImageFilter],
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  methods: {
    async addFollowing(userId) {
      try {
        const { data } = await usersAPI.addFollowing({ userId })

        console.log('data', data)

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.users = this.users.map((user) => {
          if (user.id !== userId) {
            return user
          } else {
            return {
              ...user,
              followerCount: user.followerCount + 1,
              isFollowed: true,
            }
          }
        })
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法加入追蹤，請稍後再試',
        })
      }
    },
    async deleteFollowing(userId) {
      try {
        const { data } = await usersAPI.deleteFollowing({ userId })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.users = this.users.map((user) => {
          if (user.id !== userId) {
            return user
          } else {
            return {
              ...user,
              followerCount: user.followerCount - 1,
              isFollowed: false,
            }
          }
        })
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取消追蹤，請稍後再試',
        })
      }
    },
  },
}
</script>
