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

const dummyData = {
  users: [
    {
      id: 1,
      name: 'root123',
      email: 'root@example.com',
      password: '$2a$10$K2x6pQHkzPEKzw86x8Tc0.bfW7QVdA2Ls4AXBFkFu7xHG3UgA4Mli',
      isAdmin: true,
      image: 'https://i.imgur.com/WMsHuNP.jpeg',
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-08-27T08:16:04.000Z',
      Followers: [
        {
          id: 1,
          name: 'root123',
          email: 'root@example.com',
          password:
            '$2a$10$K2x6pQHkzPEKzw86x8Tc0.bfW7QVdA2Ls4AXBFkFu7xHG3UgA4Mli',
          isAdmin: true,
          image: 'https://i.imgur.com/WMsHuNP.jpeg',
          createdAt: '2021-07-05T09:58:39.000Z',
          updatedAt: '2021-08-27T08:16:04.000Z',
          Followship: {
            followerId: 1,
            followingId: 1,
            createdAt: '2021-08-21T16:00:55.000Z',
            updatedAt: '2021-08-21T16:00:55.000Z',
          },
        },
        {
          id: 71,
          name: '424449435',
          email: '424449435@qq.com',
          password:
            '$2a$10$ubFRYFKcva9dKrYzg9W39OEZIjWwCHrOEILXk7a0oZpcDSTZvmLsG',
          isAdmin: false,
          image: null,
          createdAt: '2021-08-23T07:45:26.000Z',
          updatedAt: '2021-08-23T07:45:26.000Z',
          Followship: {
            followerId: 71,
            followingId: 1,
            createdAt: '2021-08-23T07:47:47.000Z',
            updatedAt: '2021-08-23T07:47:47.000Z',
          },
        },
        {
          id: 81,
          name: 'test',
          email: 'test@example.com',
          password:
            '$2a$10$w5bcczmxLzWr/lE9a6fgz.toso5IO1oetOBMHZJK/fM3mGAEtsrAK',
          isAdmin: false,
          image: null,
          createdAt: '2021-08-25T11:13:24.000Z',
          updatedAt: '2021-08-25T11:13:24.000Z',
          Followship: {
            followerId: 81,
            followingId: 1,
            createdAt: '2021-08-25T11:22:27.000Z',
            updatedAt: '2021-08-25T11:22:27.000Z',
          },
        },
        {
          id: 2,
          name: 'user1',
          email: 'user1@example.com',
          password:
            '$2a$10$knlgkc6iz7TSC1RADrSjmukYkaQgIc8JSVp1ltz614/F9SK.h/pqa',
          isAdmin: false,
          image: null,
          createdAt: '2021-07-05T09:58:39.000Z',
          updatedAt: '2021-08-21T14:30:09.000Z',
          Followship: {
            followerId: 2,
            followingId: 1,
            createdAt: '2021-08-26T01:25:23.000Z',
            updatedAt: '2021-08-26T01:25:23.000Z',
          },
        },
      ],
      FollowerCount: 4,
      isFollowed: true,
    },
    {
      id: 2,
      name: 'user1',
      email: 'user1@example.com',
      password: '$2a$10$knlgkc6iz7TSC1RADrSjmukYkaQgIc8JSVp1ltz614/F9SK.h/pqa',
      isAdmin: false,
      image: null,
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-08-21T14:30:09.000Z',
      Followers: [
        {
          id: 2,
          name: 'user1',
          email: 'user1@example.com',
          password:
            '$2a$10$knlgkc6iz7TSC1RADrSjmukYkaQgIc8JSVp1ltz614/F9SK.h/pqa',
          isAdmin: false,
          image: null,
          createdAt: '2021-07-05T09:58:39.000Z',
          updatedAt: '2021-08-21T14:30:09.000Z',
          Followship: {
            followerId: 2,
            followingId: 2,
            createdAt: '2021-07-29T13:12:36.000Z',
            updatedAt: '2021-07-29T13:12:36.000Z',
          },
        },
        {
          id: 81,
          name: 'test',
          email: 'test@example.com',
          password:
            '$2a$10$w5bcczmxLzWr/lE9a6fgz.toso5IO1oetOBMHZJK/fM3mGAEtsrAK',
          isAdmin: false,
          image: null,
          createdAt: '2021-08-25T11:13:24.000Z',
          updatedAt: '2021-08-25T11:13:24.000Z',
          Followship: {
            followerId: 81,
            followingId: 2,
            createdAt: '2021-08-25T11:22:29.000Z',
            updatedAt: '2021-08-25T11:22:29.000Z',
          },
        },
        {
          id: 1,
          name: 'root123',
          email: 'root@example.com',
          password:
            '$2a$10$K2x6pQHkzPEKzw86x8Tc0.bfW7QVdA2Ls4AXBFkFu7xHG3UgA4Mli',
          isAdmin: true,
          image: 'https://i.imgur.com/WMsHuNP.jpeg',
          createdAt: '2021-07-05T09:58:39.000Z',
          updatedAt: '2021-08-27T08:16:04.000Z',
          Followship: {
            followerId: 1,
            followingId: 2,
            createdAt: '2021-08-27T09:19:21.000Z',
            updatedAt: '2021-08-27T09:19:21.000Z',
          },
        },
      ],
      FollowerCount: 3,
      isFollowed: true,
    },
    {
      id: 11,
      name: 'root3',
      email: 'ryan@gmail.com',
      password: '$2a$10$RlVjZ25mKa8aULENpsmZK.OBFxGUjicjsv2FVnmOXkdtn.yW14oRu',
      isAdmin: false,
      image: null,
      createdAt: '2021-07-05T10:20:05.000Z',
      updatedAt: '2021-07-05T10:32:11.000Z',
      Followers: [
        {
          id: 2,
          name: 'user1',
          email: 'user1@example.com',
          password:
            '$2a$10$knlgkc6iz7TSC1RADrSjmukYkaQgIc8JSVp1ltz614/F9SK.h/pqa',
          isAdmin: false,
          image: null,
          createdAt: '2021-07-05T09:58:39.000Z',
          updatedAt: '2021-08-21T14:30:09.000Z',
          Followship: {
            followerId: 2,
            followingId: 11,
            createdAt: '2021-07-29T13:12:39.000Z',
            updatedAt: '2021-07-29T13:12:39.000Z',
          },
        },
        {
          id: 81,
          name: 'test',
          email: 'test@example.com',
          password:
            '$2a$10$w5bcczmxLzWr/lE9a6fgz.toso5IO1oetOBMHZJK/fM3mGAEtsrAK',
          isAdmin: false,
          image: null,
          createdAt: '2021-08-25T11:13:24.000Z',
          updatedAt: '2021-08-25T11:13:24.000Z',
          Followship: {
            followerId: 81,
            followingId: 11,
            createdAt: '2021-08-25T11:22:30.000Z',
            updatedAt: '2021-08-25T11:22:30.000Z',
          },
        },
      ],
      FollowerCount: 2,
      isFollowed: false,
    },
    {
      id: 3,
      name: 'user2',
      email: 'user2@example.com',
      password: '$2a$10$1UaQ5KZLbMCJztUGRWP/uOtIaKel7TQFHIbozRf4LPysvFLu3UOO6',
      isAdmin: false,
      image: null,
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-08-21T02:03:29.000Z',
      Followers: [
        {
          id: 1,
          name: 'root123',
          email: 'root@example.com',
          password:
            '$2a$10$K2x6pQHkzPEKzw86x8Tc0.bfW7QVdA2Ls4AXBFkFu7xHG3UgA4Mli',
          isAdmin: true,
          image: 'https://i.imgur.com/WMsHuNP.jpeg',
          createdAt: '2021-07-05T09:58:39.000Z',
          updatedAt: '2021-08-27T08:16:04.000Z',
          Followship: {
            followerId: 1,
            followingId: 3,
            createdAt: '2021-08-21T16:00:56.000Z',
            updatedAt: '2021-08-21T16:00:56.000Z',
          },
        },
        {
          id: 81,
          name: 'test',
          email: 'test@example.com',
          password:
            '$2a$10$w5bcczmxLzWr/lE9a6fgz.toso5IO1oetOBMHZJK/fM3mGAEtsrAK',
          isAdmin: false,
          image: null,
          createdAt: '2021-08-25T11:13:24.000Z',
          updatedAt: '2021-08-25T11:13:24.000Z',
          Followship: {
            followerId: 81,
            followingId: 3,
            createdAt: '2021-08-25T11:22:31.000Z',
            updatedAt: '2021-08-25T11:22:31.000Z',
          },
        },
      ],
      FollowerCount: 2,
      isFollowed: true,
    },
    {
      id: 41,
      name: 'a',
      email: 'a@a',
      password: '$2a$10$qPHPuJRtyeuvXclCo1x9nOGhXY140wMbaES5mdwTByqN81Wr/jy1K',
      isAdmin: false,
      image: null,
      createdAt: '2021-08-09T06:05:10.000Z',
      updatedAt: '2021-08-09T06:05:10.000Z',
      Followers: [
        {
          id: 1,
          name: 'root123',
          email: 'root@example.com',
          password:
            '$2a$10$K2x6pQHkzPEKzw86x8Tc0.bfW7QVdA2Ls4AXBFkFu7xHG3UgA4Mli',
          isAdmin: true,
          image: 'https://i.imgur.com/WMsHuNP.jpeg',
          createdAt: '2021-07-05T09:58:39.000Z',
          updatedAt: '2021-08-27T08:16:04.000Z',
          Followship: {
            followerId: 1,
            followingId: 41,
            createdAt: '2021-08-21T16:05:24.000Z',
            updatedAt: '2021-08-21T16:05:24.000Z',
          },
        },
      ],
      FollowerCount: 1,
      isFollowed: true,
    },
    {
      id: 21,
      name: 'hans',
      email: 'hans@yahoo.com',
      password: '$2a$10$x1t6Xd/2gpTd2VjJHGoBd.NsmIZhv57MvwjMBVsB67qFh0ueCa2ja',
      isAdmin: false,
      image: null,
      createdAt: '2021-07-16T03:24:28.000Z',
      updatedAt: '2021-07-16T03:24:28.000Z',
      Followers: [
        {
          id: 1,
          name: 'root123',
          email: 'root@example.com',
          password:
            '$2a$10$K2x6pQHkzPEKzw86x8Tc0.bfW7QVdA2Ls4AXBFkFu7xHG3UgA4Mli',
          isAdmin: true,
          image: 'https://i.imgur.com/WMsHuNP.jpeg',
          createdAt: '2021-07-05T09:58:39.000Z',
          updatedAt: '2021-08-27T08:16:04.000Z',
          Followship: {
            followerId: 1,
            followingId: 21,
            createdAt: '2021-08-21T16:05:26.000Z',
            updatedAt: '2021-08-21T16:05:26.000Z',
          },
        },
      ],
      FollowerCount: 1,
      isFollowed: true,
    },
    {
      id: 71,
      name: '424449435',
      email: '424449435@qq.com',
      password: '$2a$10$ubFRYFKcva9dKrYzg9W39OEZIjWwCHrOEILXk7a0oZpcDSTZvmLsG',
      isAdmin: false,
      image: null,
      createdAt: '2021-08-23T07:45:26.000Z',
      updatedAt: '2021-08-23T07:45:26.000Z',
      Followers: [
        {
          id: 71,
          name: '424449435',
          email: '424449435@qq.com',
          password:
            '$2a$10$ubFRYFKcva9dKrYzg9W39OEZIjWwCHrOEILXk7a0oZpcDSTZvmLsG',
          isAdmin: false,
          image: null,
          createdAt: '2021-08-23T07:45:26.000Z',
          updatedAt: '2021-08-23T07:45:26.000Z',
          Followship: {
            followerId: 71,
            followingId: 71,
            createdAt: '2021-08-23T07:47:42.000Z',
            updatedAt: '2021-08-23T07:47:42.000Z',
          },
        },
      ],
      FollowerCount: 1,
      isFollowed: false,
    },
    {
      id: 61,
      name: '888',
      email: '888@gmail.com',
      password: '$2a$10$jQbtulJ32N/nk4.1dU44TOzYLQWC7ES169fX49yiDLTNS4Jf0qusa',
      isAdmin: false,
      image: null,
      createdAt: '2021-08-22T06:08:19.000Z',
      updatedAt: '2021-08-22T06:08:19.000Z',
      Followers: [
        {
          id: 71,
          name: '424449435',
          email: '424449435@qq.com',
          password:
            '$2a$10$ubFRYFKcva9dKrYzg9W39OEZIjWwCHrOEILXk7a0oZpcDSTZvmLsG',
          isAdmin: false,
          image: null,
          createdAt: '2021-08-23T07:45:26.000Z',
          updatedAt: '2021-08-23T07:45:26.000Z',
          Followship: {
            followerId: 71,
            followingId: 61,
            createdAt: '2021-08-23T07:47:44.000Z',
            updatedAt: '2021-08-23T07:47:44.000Z',
          },
        },
      ],
      FollowerCount: 1,
      isFollowed: false,
    },
    {
      id: 31,
      name: 'dd',
      email: 'dd@dd',
      password: '$2a$10$iWJT2aS0M1DD5IqV2bo.quSOQibm8AHy/mztGRFTBlNz1ep0Vz4XO',
      isAdmin: false,
      image: null,
      createdAt: '2021-08-09T06:02:14.000Z',
      updatedAt: '2021-08-09T06:02:14.000Z',
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 51,
      name: 'hello',
      email: 'hello@example.com',
      password: '$2a$10$050DEPCXf./NI7dEOK7xHeXWiFYD0mZ4Ni99WfV18Uvuz2ujbKyVq',
      isAdmin: false,
      image: null,
      createdAt: '2021-08-22T05:57:25.000Z',
      updatedAt: '2021-08-22T05:57:25.000Z',
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 81,
      name: 'test',
      email: 'test@example.com',
      password: '$2a$10$w5bcczmxLzWr/lE9a6fgz.toso5IO1oetOBMHZJK/fM3mGAEtsrAK',
      isAdmin: false,
      image: null,
      createdAt: '2021-08-25T11:13:24.000Z',
      updatedAt: '2021-08-25T11:13:24.000Z',
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
  ],
}

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
    fetchTopUsers() {
      this.users = dummyData.users.map((user) => ({
        id: user.id,
        name: user.name,
        image: user.image,
        followerCount: user.FollowerCount,
        isFollowed: user.isFollowed,
      }))
    },
  },
}
</script>
