<template>
  <div class="container py-5">
    <!-- 使用 NavTabs 元件 -->
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>
    <div
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <router-link
            :to="{ name: 'restaurant', params: { id: restaurant.id } }"
          >
            <img class="card-img" :src="restaurant.image | emptyImage" />
          </router-link>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{ restaurant.name }}
            </h5>
            <span class="badge badge-secondary"
              >收藏數：{{ restaurant.FavoriteCount }}</span
            >
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <router-link
              class="btn btn-primary mr-2"
              :to="{ name: 'restaurant', params: { id: restaurant.id } }"
            >
              Show
            </router-link>

            <button
              v-if="restaurant.isFavorited"
              type="button"
              class="btn btn-danger mr-2"
              @click.stop.prevent="deleteFavorite(restaurant.id)"
            >
              移除最愛
            </button>
            <button
              v-else
              type="button"
              class="btn btn-primary"
              @click.stop.prevent="addFavorite(restaurant.id)"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs.vue'
import { emptyImageFilter } from './../utils/mixins'

const dummyData = {
  restaurants: [
    {
      id: 5,
      name: 'Salma Johnson',
      tel: '866.855.4905',
      address: '4722 Lionel Trafficway',
      opening_hours: '08:00',
      description: 'Mollitia sit recusandae reiciendis voluptatibus co',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=76.09006422711376',
      viewCounts: 20,
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-08-29T06:44:14.000Z',
      CategoryId: 1,
      FavoritedUsers: [
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
          Favorite: {
            UserId: 2,
            RestaurantId: 5,
            createdAt: '2021-08-03T16:13:14.000Z',
            updatedAt: '2021-08-03T16:13:14.000Z',
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
          Favorite: {
            UserId: 1,
            RestaurantId: 5,
            createdAt: '2021-08-22T02:31:40.000Z',
            updatedAt: '2021-08-22T02:31:40.000Z',
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
          Favorite: {
            UserId: 81,
            RestaurantId: 5,
            createdAt: '2021-08-25T11:20:15.000Z',
            updatedAt: '2021-08-25T11:20:15.000Z',
          },
        },
      ],
      isFavorited: true,
      FavoriteCount: 3,
    },
    {
      id: 7,
      name: 'Lane Rolfson',
      tel: '(540) 110-2896',
      address: '619 Alex Run',
      opening_hours: '08:00',
      description: 'Repellat eaque fugiat rerum non quaerat. In vel ab',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=26.38207413310656',
      viewCounts: 2,
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-08-20T07:32:34.000Z',
      CategoryId: 3,
      FavoritedUsers: [
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
          Favorite: {
            UserId: 1,
            RestaurantId: 7,
            createdAt: '2021-08-21T16:03:13.000Z',
            updatedAt: '2021-08-21T16:03:13.000Z',
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
          Favorite: {
            UserId: 81,
            RestaurantId: 7,
            createdAt: '2021-08-25T11:23:10.000Z',
            updatedAt: '2021-08-25T11:23:10.000Z',
          },
        },
      ],
      isFavorited: true,
      FavoriteCount: 2,
    },
    {
      id: 6,
      name: 'Pearl Frami Sr.',
      tel: '130-124-3685 x9054',
      address: '021 Runte Brook',
      opening_hours: '08:00',
      description: 'Expedita illum perspiciatis natus ea quo laudantiu',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=12.190112895855831',
      viewCounts: 15,
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-08-22T02:11:22.000Z',
      CategoryId: 3,
      FavoritedUsers: [
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
          Favorite: {
            UserId: 2,
            RestaurantId: 6,
            createdAt: '2021-08-03T16:13:12.000Z',
            updatedAt: '2021-08-03T16:13:12.000Z',
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
          Favorite: {
            UserId: 81,
            RestaurantId: 6,
            createdAt: '2021-08-25T11:20:17.000Z',
            updatedAt: '2021-08-25T11:20:17.000Z',
          },
        },
      ],
      isFavorited: false,
      FavoriteCount: 2,
    },
    {
      id: 50,
      name: 'Deshaun Zboncak',
      tel: '491-316-6241 x8970',
      address: '44998 Daniel Dam',
      opening_hours: '08:00',
      description: 'Adipisci in omnis consectetur ullam dolores id ut ',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=80.08532188319566',
      viewCounts: 3,
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-07-06T16:02:38.000Z',
      CategoryId: 4,
      FavoritedUsers: [
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
          Favorite: {
            UserId: 1,
            RestaurantId: 50,
            createdAt: '2021-08-21T08:51:52.000Z',
            updatedAt: '2021-08-21T08:51:52.000Z',
          },
        },
      ],
      isFavorited: true,
      FavoriteCount: 1,
    },
    {
      id: 49,
      name: 'Hildegard Roberts',
      tel: '129-461-5879 x06306',
      address: '606 Jimmy Overpass',
      opening_hours: '08:00',
      description: 'voluptate ut blanditiis',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=93.10105269151492',
      viewCounts: 0,
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-07-05T09:58:39.000Z',
      CategoryId: 3,
      FavoritedUsers: [
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
          Favorite: {
            UserId: 1,
            RestaurantId: 49,
            createdAt: '2021-08-21T16:00:51.000Z',
            updatedAt: '2021-08-21T16:00:51.000Z',
          },
        },
      ],
      isFavorited: true,
      FavoriteCount: 1,
    },
    {
      id: 32,
      name: 'Adrain Weimann',
      tel: '768-248-6868',
      address: '751 Cruickshank Mall',
      opening_hours: '08:00',
      description: 'Voluptas alias saepe illo sit et. Dolores eligendi',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=84.19181375649187',
      viewCounts: 0,
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-07-05T09:58:39.000Z',
      CategoryId: 1,
      FavoritedUsers: [
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
          Favorite: {
            UserId: 81,
            RestaurantId: 32,
            createdAt: '2021-08-25T11:21:34.000Z',
            updatedAt: '2021-08-25T11:21:34.000Z',
          },
        },
      ],
      isFavorited: false,
      FavoriteCount: 1,
    },
    {
      id: 14,
      name: 'Maria Abbott',
      tel: '270.331.9677 x000',
      address: '5410 Amie Circles',
      opening_hours: '08:00',
      description: 'Qui eum corporis. Est maiores sunt cum cumque cum ',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=29.35511786821312',
      viewCounts: 3,
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-08-23T07:47:05.000Z',
      CategoryId: 5,
      FavoritedUsers: [
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
          Favorite: {
            UserId: 71,
            RestaurantId: 14,
            createdAt: '2021-08-23T07:45:46.000Z',
            updatedAt: '2021-08-23T07:45:46.000Z',
          },
        },
      ],
      isFavorited: false,
      FavoriteCount: 1,
    },
    {
      id: 11,
      name: 'Odessa Runte',
      tel: '477-189-3440 x540',
      address: '7642 Austen Camp',
      opening_hours: '08:00',
      description: 'Adipisci accusantium aut officiis et.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=24.99779116098115',
      viewCounts: 0,
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-07-05T09:58:39.000Z',
      CategoryId: 3,
      FavoritedUsers: [
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
          Favorite: {
            UserId: 1,
            RestaurantId: 11,
            createdAt: '2021-08-21T16:03:15.000Z',
            updatedAt: '2021-08-21T16:03:15.000Z',
          },
        },
      ],
      isFavorited: true,
      FavoriteCount: 1,
    },
    {
      id: 9,
      name: 'Roman Kunde',
      tel: '(051) 925-0555 x1731',
      address: '131 Hoyt Mission',
      opening_hours: '08:00',
      description: 'Et dolorum voluptas.\nSint eveniet ratione id praes',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=55.144782599599694',
      viewCounts: 47,
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-08-20T15:08:22.000Z',
      CategoryId: 2,
      FavoritedUsers: [
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
          Favorite: {
            UserId: 81,
            RestaurantId: 9,
            createdAt: '2021-08-25T11:20:21.000Z',
            updatedAt: '2021-08-25T11:20:21.000Z',
          },
        },
      ],
      isFavorited: false,
      FavoriteCount: 1,
    },
    {
      id: 4,
      name: 'Mckayla Hintz',
      tel: '1-240-532-2429',
      address: '167 Rogahn Mission',
      opening_hours: '08:00',
      description: 'Impedit nesciunt ad id delectus magnam aspernatur ',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=42.58020446504014',
      viewCounts: 41,
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-08-29T08:30:03.000Z',
      CategoryId: 4,
      FavoritedUsers: [
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
          Favorite: {
            UserId: 81,
            RestaurantId: 4,
            createdAt: '2021-08-25T11:20:14.000Z',
            updatedAt: '2021-08-25T11:20:14.000Z',
          },
        },
      ],
      isFavorited: false,
      FavoriteCount: 1,
    },
  ],
}

export default {
  mixins: [emptyImageFilter],
  components: {
    NavTabs,
  },
  data() {
    return {
      restaurants: [],
    }
  },
  created() {
    this.fetchTopRestaurants()
  },
  methods: {
    fetchTopRestaurants() {
      this.restaurants = dummyData.restaurants
    },
    addFavorite(restaurantId) {
      this.restaurants = this.restaurants
        .map((restaurant) => {
          if (restaurant.id !== restaurantId) {
            return restaurant
          }
          return {
            ...restaurant,
            FavoriteCount: restaurant.FavoriteCount + 1,
            isFavorited: true,
          }
        })
        .sort((a, b) => b.FavoriteCount - a.FavoriteCount)
    },
    deleteFavorite(restaurantId) {
      this.restaurants = this.restaurants
        .map((restaurant) => {
          if (restaurant.id !== restaurantId) {
            return restaurant
          }
          return {
            ...restaurant,
            FavoriteCount: restaurant.FavoriteCount - 1,
            isFavorited: false,
          }
        })
        .sort((a, b) => b.FavoriteCount - a.FavoriteCount)
    },
  },
}
</script>
