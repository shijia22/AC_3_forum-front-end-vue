<template>
  <div class="container py-5">
    <!-- 使用 NavTabs 元件 -->
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr />
    <UsersTopCard :users="users" />
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs.vue'
import UsersTopCard from './../components/UsersTopCard.vue'
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'

export default {
  name: 'UsersTop',
  components: {
    NavTabs,
    UsersTopCard,
  },
  data() {
    return {
      users: [],
    }
  },
  created() {
    this.fetchTopUsers()
  },
  methods: {
    async fetchTopUsers() {
      try {
        const { data } = await usersAPI.getTopUsers()
        this.users = data.users.map((user) => ({
          id: user.id,
          name: user.name,
          image: user.image,
          followerCount: user.FollowerCount,
          isFollowed: user.isFollowed,
        }))
      } catch (error) {
        console.log('error', error)
        // STEP 6: 請求失敗的話則跳出錯誤提示
        Toast.fire({
          icon: 'error',
          title: '無法取得美食達人，請稍後再試',
        })
      }
    },
    async addFollowing (userId) {
  try {
    const { data } = await usersAPI.addFollowing({ userId })

    console.log('data', data)

    if (data.status !== 'success') {
      throw new Error(data.message)
    }

    this.users = this.users.map(user => {
      if (user.id !== userId) {
        return user
      } else {
        return {
          ...user,
          followerCount: user.followerCount + 1,
          isFollowed: true
        }
      }
    })
  } catch (error) {
    Toast.fire({
      icon: 'error',
      title: '無法加入追蹤，請稍後再試'
    })
  }
},
  },
}
</script>
