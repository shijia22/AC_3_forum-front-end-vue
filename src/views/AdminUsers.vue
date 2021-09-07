<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Email
          </th>
          <th scope="col">
            Role
          </th>
          <th scope="col" width="140">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in users"
          :key="user.id"
        >
          <th scope="row">
            {{ user.id }}
          </th>
          <td>{{ user.email }}</td>
          <td>{{ user.isAdmin ? 'admin' : 'user' }}</td>
          <td>
            <button
              v-if="currentUser.id !== user.id"
              type="button"
              class="btn btn-link"
              @click="
                toggleUserRole({ userId: user.id, isAdmin: user.isAdmin })
              "
            >
              {{ user.isAdmin ? 'set as user' : 'set as admin' }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from './../components/AdminNav.vue'

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
    },
    {
      id: 91,
      name: 'cindy',
      email: 'cindy@ddd.ddd',
      password: '$2a$10$QXnfafi0Ehr8k3wMdxF.0ufBlHXO7TcZ4rni9wuDrcaybgYe4KkbK',
      isAdmin: false,
      image: null,
      createdAt: '2021-08-31T00:04:19.000Z',
      updatedAt: '2021-08-31T00:04:19.000Z',
    },
    {
      id: 101,
      name: 'testUser1',
      email: 'wilegaw224@enpaypal.com',
      password: '$2a$10$SBlupxrO36w.teKnSwvg.ucStRahvi1P2HvsdIfiu3dEkpR4FXS9.',
      isAdmin: false,
      image: null,
      createdAt: '2021-09-02T03:52:44.000Z',
      updatedAt: '2021-09-02T03:52:44.000Z',
    },
    {
      id: 111,
      name: 'testUser2',
      email: 'wilegaw225@enpaypal.com',
      password: '$2a$10$x6QdMGYLo0eFpQvYbXUbzOFSSB2.eVAxKr/Q65uCuYmzAqjwvod32',
      isAdmin: false,
      image: null,
      createdAt: '2021-09-02T03:55:06.000Z',
      updatedAt: '2021-09-02T03:55:06.000Z',
    },
    {
      id: 121,
      name: 'testUser3',
      email: 'wilegaw226@enpaypal.com',
      password: '$2a$10$oohXmPM4aTpTyth4HzBl6OWR1zm4/Z4eMN3A3cgLiD2Q8fSoJaHO.',
      isAdmin: false,
      image: null,
      createdAt: '2021-09-02T03:55:57.000Z',
      updatedAt: '2021-09-02T03:55:57.000Z',
    },
    {
      id: 131,
      name: 'testUser4',
      email: 'wilegaw228@enpaypal.com',
      password: '$2a$10$6OD6F1UMHG/inri9RoArEeJVd9OfinJhjt7RC1YjORJ1/Jpn1TDDC',
      isAdmin: false,
      image: null,
      createdAt: '2021-09-02T04:02:35.000Z',
      updatedAt: '2021-09-02T04:02:35.000Z',
    },
    {
      id: 141,
      name: 'testUser5',
      email: 'wilegaw229@enpaypal.com',
      password: '$2a$10$ZZLzq1xTZRaFfXpVq18AEeNsC1kuweLuOU3sDwXEWuHYbvqY4ygv6',
      isAdmin: false,
      image: null,
      createdAt: '2021-09-02T04:04:01.000Z',
      updatedAt: '2021-09-02T04:04:01.000Z',
    },
    {
      id: 151,
      name: 'testUser6',
      email: 'wilegaw230@enpaypal.com',
      password: '$2a$10$JgyHlsIMfsYLZo7eMdn4I.GhfzbiE7s.NUT.fRIaBxiu5.wIMl3rW',
      isAdmin: false,
      image: null,
      createdAt: '2021-09-02T04:04:34.000Z',
      updatedAt: '2021-09-02T04:04:34.000Z',
    },
    {
      id: 161,
      name: 'testUser6',
      email: 'wilegaw231@enpaypal.com',
      password: '$2a$10$bFcWIOztemWeii8v2BXkTOp0FQSbiZHoUAcnR15HS2Da3C048T0Y2',
      isAdmin: false,
      image: null,
      createdAt: '2021-09-02T04:42:56.000Z',
      updatedAt: '2021-09-02T04:42:56.000Z',
    },
    {
      id: 171,
      name: 'testUser7',
      email: 'wilegaw232@enpaypal.com',
      password: '$2a$10$2oGxzCQaT2wB1u74KsbZvu8bV/jGhsoMqu.Sm2dl5ZSCdVx03afqS',
      isAdmin: false,
      image: null,
      createdAt: '2021-09-02T04:44:20.000Z',
      updatedAt: '2021-09-02T04:44:20.000Z',
    },
    {
      id: 181,
      name: '123321',
      email: 'wilegaw2244@enpaypal.com',
      password: '$2a$10$H46k9rJCvLLwiSjRo2Qb1OAh5idbwDpPyoCl/827H8Ai/OlULxV/u',
      isAdmin: false,
      image: null,
      createdAt: '2021-09-02T05:04:16.000Z',
      updatedAt: '2021-09-02T05:04:16.000Z',
    },
    {
      id: 191,
      name: 'testUser9',
      email: 'wilegaw233@enpaypal.com',
      password: '$2a$10$WBJO0FNy.6W00V8CWSH.ZOpqzt1gqHygjjFg5zcHNJN0TpflgVoti',
      isAdmin: false,
      image: null,
      createdAt: '2021-09-02T05:10:24.000Z',
      updatedAt: '2021-09-02T05:10:24.000Z',
    },
    {
      id: 201,
      name: 'testUser9',
      email: 'user2@sdfdfasd.com',
      password: '$2a$10$M16.ypTMONnP21hJniIH1eY6wBU7AxlmS6qbVvUke61VmG2tBA35G',
      isAdmin: false,
      image: null,
      createdAt: '2021-09-03T05:12:52.000Z',
      updatedAt: '2021-09-03T05:12:52.000Z',
    },
  ],
}

const dummyUser = {
  currentUser: {
    id: 1,
    name: 'root1',
    email: 'root@example.com',
    isAdmin: true,
  },
  isAuthenticated: true,
}

export default {
  name: 'AdminUsers',
  components: {
    AdminNav
  },
  data () {
    return {
      users: [],
      currentUser: dummyUser.currentUser
    }
  },
  created () {
    this.fetchUser()
  },
  methods: {
    fetchUser () {
      this.users = dummyData.users
    },
    toggleUserRole ({ userId, isAdmin }) {
      this.users = this.users.map(user => {
        if (user.id === userId) {
          return {
            ...user,
            isAdmin: !isAdmin
          }
        }
        return user
      })
    }
  },
}
</script>
