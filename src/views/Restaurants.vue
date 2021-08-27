<template>
  <div class="container py-5">
    <!-- 使用 NavTabs 元件 -->
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories" />
    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>
    <RestaurantsPagination
      :currentPage="currentPage"
      :totalPage="totalPage"
      :previousPage="previousPage"
      :nextPage="nextPage"
      :categoryId="categoryId"
    />
    <!-- 分頁標籤 RestaurantPagination -->
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs.vue'
import RestaurantCard from './../components/RestaurantCard.vue'
import RestaurantsNavPills from './../components/RestaurantsNavPills.vue'
import RestaurantsPagination from './../components/RestaurantsPagination.vue'

const dummyData = {
  restaurants: [
    {
      id: 4,
      name: 'Mckayla Hintz',
      tel: '1-240-532-2429',
      address: '167 Rogahn Mission',
      opening_hours: '08:00',
      description: 'Impedit nesciunt ad id delectus magnam aspernatur ',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=42.58020446504014',
      viewCounts: 35,
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-08-25T11:23:37.000Z',
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-07-05T09:58:39.000Z',
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 5,
      name: 'Salma Johnson',
      tel: '866.855.4905',
      address: '4722 Lionel Trafficway',
      opening_hours: '08:00',
      description: 'Mollitia sit recusandae reiciendis voluptatibus co',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=76.09006422711376',
      viewCounts: 18,
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-08-25T12:59:22.000Z',
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-08-09T07:00:13.000Z',
      },
      isFavorited: true,
      isLiked: false,
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
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-07-05T09:58:39.000Z',
      },
      isFavorited: false,
      isLiked: false,
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
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-07-05T09:58:39.000Z',
      },
      isFavorited: true,
      isLiked: false,
    },
    {
      id: 8,
      name: 'Kariane West',
      tel: '1-392-349-4577 x62194',
      address: '576 Kris Parkways',
      opening_hours: '08:00',
      description: 'quo',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=59.761591350585455',
      viewCounts: 3,
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-08-20T09:20:26.000Z',
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-07-05T09:58:39.000Z',
      },
      isFavorited: false,
      isLiked: false,
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
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-08-09T07:00:29.000Z',
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 10,
      name: 'Iva Dickinson Jr.',
      tel: '757.545.3970',
      address: '575 Clementine Neck',
      opening_hours: '08:00',
      description: 'Consequuntur nam corporis adipisci. Voluptate vero',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=63.73718248364722',
      viewCounts: 0,
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-07-05T09:58:39.000Z',
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-08-09T07:00:13.000Z',
      },
      isFavorited: false,
      isLiked: false,
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
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-07-05T09:58:39.000Z',
      },
      isFavorited: true,
      isLiked: false,
    },
    {
      id: 12,
      name: 'Mrs. Dallin Farrell',
      tel: '469-023-3429',
      address: '539 Ines Haven',
      opening_hours: '08:00',
      description: 'Est voluptates reiciendis in qui qui. Ipsa omnis i',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=3.244622818947862',
      viewCounts: 0,
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-07-05T09:58:39.000Z',
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-07-05T09:58:39.000Z',
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 13,
      name: 'Cedrick Morissette',
      tel: '1-806-437-1238',
      address: '7592 Watsica Avenue',
      opening_hours: '08:00',
      description: 'aperiam itaque aliquam',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=22.848232013778702',
      viewCounts: 1,
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-08-27T06:10:42.000Z',
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-07-05T09:58:39.000Z',
      },
      isFavorited: false,
      isLiked: false,
    },
  ],
  categories: [
    {
      id: 1,
      name: '中式料理',
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-08-09T07:00:13.000Z',
    },
    {
      id: 2,
      name: '日本料理',
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-08-09T07:00:29.000Z',
    },
    {
      id: 3,
      name: '義大利料理',
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-07-05T09:58:39.000Z',
    },
    {
      id: 4,
      name: '墨西哥料理',
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-07-05T09:58:39.000Z',
    },
    {
      id: 5,
      name: '素食料理',
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-07-05T09:58:39.000Z',
    },
    {
      id: 6,
      name: '美式料理',
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-07-05T09:58:39.000Z',
    },
    {
      id: 7,
      name: '複合式料理',
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-07-05T09:58:39.000Z',
    },
  ],
  categoryId: '',
  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2,
}

export default {
  name: 'Restaurants',
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination,
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1, // 預設哪個類別來篩選餐廳
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1,
    }
  },
  created() {
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants() {
      const {
        restaurants,
        categories,
        categoryId,
        page,
        totalPage,
        prev,
        next,
      } = dummyData
      this.restaurants = restaurants
      this.categories = categories
      this.categoryId = categoryId
      this.currentPage = page
      this.totalPage = totalPage
      this.previousPage = prev
      this.nextPage = next
    },
  },
}
</script>
