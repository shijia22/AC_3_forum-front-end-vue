<template>
  <div class="container py-5">
    <NavTabs />

    <h1 class="mt-5">
      最新動態
    </h1>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants :restaurants="restaurants"/>
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import NewestRestaurants from './../components/NewestRestaurants'

const dummyData = {
  restaurants: [
    {
      id: 4,
      name: 'Mckayla Hintz',
      tel: '1-240-532-2429',
      address: '167 Rogahn Mission',
      opening_hours: '08:00',
      description: 'Impedit nesciunt ad id delectus magnam aspernatur fugit.',
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
    },
    {
      id: 5,
      name: 'Salma Johnson',
      tel: '866.855.4905',
      address: '4722 Lionel Trafficway',
      opening_hours: '08:00',
      description:
        'Mollitia sit recusandae reiciendis voluptatibus commodi voluptas et. Culpa dolor qui quo esse saepe. Tempore et dolores sit voluptatem harum autem consequatur unde.',
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
    },
    {
      id: 6,
      name: 'Pearl Frami Sr.',
      tel: '130-124-3685 x9054',
      address: '021 Runte Brook',
      opening_hours: '08:00',
      description:
        'Expedita illum perspiciatis natus ea quo laudantium eveniet earum. Ipsam sapiente nemo non est facilis ut qui inventore illum. Esse atque corporis sed recusandae. Id adipisci sed in vel quos aut quas possimus reiciendis. Voluptatibus libero earum officiis ipsa at. Placeat occaecati dolor possimus molestiae eaque vel rerum id fugit.',
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
    },
    {
      id: 7,
      name: 'Lane Rolfson',
      tel: '(540) 110-2896',
      address: '619 Alex Run',
      opening_hours: '08:00',
      description:
        'Repellat eaque fugiat rerum non quaerat. In vel ab minus nemo eos laboriosam repellat vitae. Blanditiis quia voluptate et impedit culpa delectus. Et perferendis quia deserunt fugiat ea et voluptatum dolorem. Modi in veniam qui sequi. Quas dicta est.',
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
    },
    {
      id: 9,
      name: 'Roman Kunde',
      tel: '(051) 925-0555 x1731',
      address: '131 Hoyt Mission',
      opening_hours: '08:00',
      description:
        'Et dolorum voluptas.\nSint eveniet ratione id praesentium totam.\nImpedit aliquam nobis quia pariatur consequatur quae eos quas cum.',
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
    },
    {
      id: 10,
      name: 'Iva Dickinson Jr.',
      tel: '757.545.3970',
      address: '575 Clementine Neck',
      opening_hours: '08:00',
      description:
        'Consequuntur nam corporis adipisci. Voluptate vero perferendis rem fuga et. Animi quam sapiente dolorem voluptate quo deserunt distinctio. Dignissimos dolorem sunt fugit sint temporibus iste necessitatibus est. Repudiandae cupiditate nihil vitae maiores rerum consectetur neque. Nulla voluptatem qui hic eligendi voluptas quis.',
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
    },
    {
      id: 12,
      name: 'Mrs. Dallin Farrell',
      tel: '469-023-3429',
      address: '539 Ines Haven',
      opening_hours: '08:00',
      description:
        'Est voluptates reiciendis in qui qui. Ipsa omnis id quam omnis ut soluta et aliquam. Atque voluptas quo eveniet. Blanditiis mollitia non soluta quidem. Sapiente explicabo quo ut aspernatur.',
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
    },
  ],
  comments: [
    {
      id: 441,
      text: 'good',
      UserId: 81,
      RestaurantId: 4,
      createdAt: '2021-08-25T11:23:36.000Z',
      updatedAt: '2021-08-25T11:23:36.000Z',
      User: {
        id: 81,
        name: 'test',
        email: 'test@example.com',
        password:
          '$2a$10$w5bcczmxLzWr/lE9a6fgz.toso5IO1oetOBMHZJK/fM3mGAEtsrAK',
        isAdmin: false,
        image: null,
        createdAt: '2021-08-25T11:13:24.000Z',
        updatedAt: '2021-08-25T11:13:24.000Z',
      },
      Restaurant: {
        id: 4,
        name: 'Mckayla Hintz',
        tel: '1-240-532-2429',
        address: '167 Rogahn Mission',
        opening_hours: '08:00',
        description: 'Impedit nesciunt ad id delectus magnam aspernatur fugit.',
        image:
          'https://loremflickr.com/320/240/restaurant,food/?random=42.58020446504014',
        viewCounts: 35,
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-08-25T11:23:37.000Z',
        CategoryId: 4,
      },
    },
    {
      id: 431,
      text: 'I like it',
      UserId: 71,
      RestaurantId: 18,
      createdAt: '2021-08-23T07:45:58.000Z',
      updatedAt: '2021-08-23T07:45:58.000Z',
      User: {
        id: 71,
        name: '424449435',
        email: '424449435@qq.com',
        password:
          '$2a$10$ubFRYFKcva9dKrYzg9W39OEZIjWwCHrOEILXk7a0oZpcDSTZvmLsG',
        isAdmin: false,
        image: null,
        createdAt: '2021-08-23T07:45:26.000Z',
        updatedAt: '2021-08-23T07:45:26.000Z',
      },
      Restaurant: {
        id: 18,
        name: 'Myrtis Kozey',
        tel: '1-801-414-3373',
        address: '320 Eldora Lodge',
        opening_hours: '08:00',
        description:
          'Nihil nam aperiam omnis iure debitis qui culpa doloremque. Aut qui quia sed aliquam pariatur dolores sint blanditiis. Sunt et et dolorem aliquid hic. Minima aut deleniti excepturi.\n \rIn ea sed aliquid hic est modi possimus. Ullam ullam quaerat molestiae id voluptatem optio impedit impedit minima. Iure corporis natus qui qui assumenda iste odio nesciunt.\n \rQuas nam dicta corrupti. Ea non enim doloremque. Excepturi ut sint neque ad et et.',
        image:
          'https://loremflickr.com/320/240/restaurant,food/?random=93.18866181363335',
        viewCounts: 1,
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-08-23T07:45:50.000Z',
        CategoryId: 2,
      },
    },
    {
      id: 281,
      text: 'I am fine',
      UserId: 1,
      RestaurantId: 4,
      createdAt: '2021-08-10T06:06:26.000Z',
      updatedAt: '2021-08-10T06:06:26.000Z',
      User: {
        id: 1,
        name: 'root123',
        email: 'root@example.com',
        password:
          '$2a$10$K2x6pQHkzPEKzw86x8Tc0.bfW7QVdA2Ls4AXBFkFu7xHG3UgA4Mli',
        isAdmin: true,
        image: 'https://i.imgur.com/KVFFj35.jpeg',
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-08-08T16:49:05.000Z',
      },
      Restaurant: {
        id: 4,
        name: 'Mckayla Hintz',
        tel: '1-240-532-2429',
        address: '167 Rogahn Mission',
        opening_hours: '08:00',
        description: 'Impedit nesciunt ad id delectus magnam aspernatur fugit.',
        image:
          'https://loremflickr.com/320/240/restaurant,food/?random=42.58020446504014',
        viewCounts: 35,
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-08-25T11:23:37.000Z',
        CategoryId: 4,
      },
    },
    {
      id: 271,
      text: 'how are you',
      UserId: 1,
      RestaurantId: 4,
      createdAt: '2021-08-10T06:06:00.000Z',
      updatedAt: '2021-08-10T06:06:00.000Z',
      User: {
        id: 1,
        name: 'root123',
        email: 'root@example.com',
        password:
          '$2a$10$K2x6pQHkzPEKzw86x8Tc0.bfW7QVdA2Ls4AXBFkFu7xHG3UgA4Mli',
        isAdmin: true,
        image: 'https://i.imgur.com/KVFFj35.jpeg',
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-08-08T16:49:05.000Z',
      },
      Restaurant: {
        id: 4,
        name: 'Mckayla Hintz',
        tel: '1-240-532-2429',
        address: '167 Rogahn Mission',
        opening_hours: '08:00',
        description: 'Impedit nesciunt ad id delectus magnam aspernatur fugit.',
        image:
          'https://loremflickr.com/320/240/restaurant,food/?random=42.58020446504014',
        viewCounts: 35,
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-08-25T11:23:37.000Z',
        CategoryId: 4,
      },
    },
    {
      id: 211,
      text: 'eeeeeeeeeeeeeeeeeee',
      UserId: 2,
      RestaurantId: 6,
      createdAt: '2021-08-03T16:12:48.000Z',
      updatedAt: '2021-08-03T16:12:48.000Z',
      User: {
        id: 2,
        name: 'user1',
        email: 'user1@example.com',
        password:
          '$2a$10$knlgkc6iz7TSC1RADrSjmukYkaQgIc8JSVp1ltz614/F9SK.h/pqa',
        isAdmin: false,
        image: null,
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-08-21T14:30:09.000Z',
      },
      Restaurant: {
        id: 6,
        name: 'Pearl Frami Sr.',
        tel: '130-124-3685 x9054',
        address: '021 Runte Brook',
        opening_hours: '08:00',
        description:
          'Expedita illum perspiciatis natus ea quo laudantium eveniet earum. Ipsam sapiente nemo non est facilis ut qui inventore illum. Esse atque corporis sed recusandae. Id adipisci sed in vel quos aut quas possimus reiciendis. Voluptatibus libero earum officiis ipsa at. Placeat occaecati dolor possimus molestiae eaque vel rerum id fugit.',
        image:
          'https://loremflickr.com/320/240/restaurant,food/?random=12.190112895855831',
        viewCounts: 15,
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-08-22T02:11:22.000Z',
        CategoryId: 3,
      },
    },
    {
      id: 201,
      text: 'qec2ec1e',
      UserId: 2,
      RestaurantId: 6,
      createdAt: '2021-08-03T16:12:37.000Z',
      updatedAt: '2021-08-03T16:12:37.000Z',
      User: {
        id: 2,
        name: 'user1',
        email: 'user1@example.com',
        password:
          '$2a$10$knlgkc6iz7TSC1RADrSjmukYkaQgIc8JSVp1ltz614/F9SK.h/pqa',
        isAdmin: false,
        image: null,
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-08-21T14:30:09.000Z',
      },
      Restaurant: {
        id: 6,
        name: 'Pearl Frami Sr.',
        tel: '130-124-3685 x9054',
        address: '021 Runte Brook',
        opening_hours: '08:00',
        description:
          'Expedita illum perspiciatis natus ea quo laudantium eveniet earum. Ipsam sapiente nemo non est facilis ut qui inventore illum. Esse atque corporis sed recusandae. Id adipisci sed in vel quos aut quas possimus reiciendis. Voluptatibus libero earum officiis ipsa at. Placeat occaecati dolor possimus molestiae eaque vel rerum id fugit.',
        image:
          'https://loremflickr.com/320/240/restaurant,food/?random=12.190112895855831',
        viewCounts: 15,
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-08-22T02:11:22.000Z',
        CategoryId: 3,
      },
    },
    {
      id: 4,
      text: 'Ullam quis debitis.',
      UserId: 1,
      RestaurantId: 4,
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-07-05T09:58:39.000Z',
      User: {
        id: 1,
        name: 'root123',
        email: 'root@example.com',
        password:
          '$2a$10$K2x6pQHkzPEKzw86x8Tc0.bfW7QVdA2Ls4AXBFkFu7xHG3UgA4Mli',
        isAdmin: true,
        image: 'https://i.imgur.com/KVFFj35.jpeg',
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-08-08T16:49:05.000Z',
      },
      Restaurant: {
        id: 4,
        name: 'Mckayla Hintz',
        tel: '1-240-532-2429',
        address: '167 Rogahn Mission',
        opening_hours: '08:00',
        description: 'Impedit nesciunt ad id delectus magnam aspernatur fugit.',
        image:
          'https://loremflickr.com/320/240/restaurant,food/?random=42.58020446504014',
        viewCounts: 35,
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-08-25T11:23:37.000Z',
        CategoryId: 4,
      },
    },
    {
      id: 6,
      text: 'Necessitatibus voluptatem dicta suscipit.',
      UserId: 1,
      RestaurantId: 6,
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-07-05T09:58:39.000Z',
      User: {
        id: 1,
        name: 'root123',
        email: 'root@example.com',
        password:
          '$2a$10$K2x6pQHkzPEKzw86x8Tc0.bfW7QVdA2Ls4AXBFkFu7xHG3UgA4Mli',
        isAdmin: true,
        image: 'https://i.imgur.com/KVFFj35.jpeg',
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-08-08T16:49:05.000Z',
      },
      Restaurant: {
        id: 6,
        name: 'Pearl Frami Sr.',
        tel: '130-124-3685 x9054',
        address: '021 Runte Brook',
        opening_hours: '08:00',
        description:
          'Expedita illum perspiciatis natus ea quo laudantium eveniet earum. Ipsam sapiente nemo non est facilis ut qui inventore illum. Esse atque corporis sed recusandae. Id adipisci sed in vel quos aut quas possimus reiciendis. Voluptatibus libero earum officiis ipsa at. Placeat occaecati dolor possimus molestiae eaque vel rerum id fugit.',
        image:
          'https://loremflickr.com/320/240/restaurant,food/?random=12.190112895855831',
        viewCounts: 15,
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-08-22T02:11:22.000Z',
        CategoryId: 3,
      },
    },
    {
      id: 7,
      text: 'Unde occaecati dolor quidem rerum nesciunt aperiam.',
      UserId: 1,
      RestaurantId: 7,
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-07-05T09:58:39.000Z',
      User: {
        id: 1,
        name: 'root123',
        email: 'root@example.com',
        password:
          '$2a$10$K2x6pQHkzPEKzw86x8Tc0.bfW7QVdA2Ls4AXBFkFu7xHG3UgA4Mli',
        isAdmin: true,
        image: 'https://i.imgur.com/KVFFj35.jpeg',
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-08-08T16:49:05.000Z',
      },
      Restaurant: {
        id: 7,
        name: 'Lane Rolfson',
        tel: '(540) 110-2896',
        address: '619 Alex Run',
        opening_hours: '08:00',
        description:
          'Repellat eaque fugiat rerum non quaerat. In vel ab minus nemo eos laboriosam repellat vitae. Blanditiis quia voluptate et impedit culpa delectus. Et perferendis quia deserunt fugiat ea et voluptatum dolorem. Modi in veniam qui sequi. Quas dicta est.',
        image:
          'https://loremflickr.com/320/240/restaurant,food/?random=26.38207413310656',
        viewCounts: 2,
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-08-20T07:32:34.000Z',
        CategoryId: 3,
      },
    },
    {
      id: 11,
      text: 'Quia omnis quos alias laudantium officia magni.',
      UserId: 1,
      RestaurantId: 11,
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-07-05T09:58:39.000Z',
      User: {
        id: 1,
        name: 'root123',
        email: 'root@example.com',
        password:
          '$2a$10$K2x6pQHkzPEKzw86x8Tc0.bfW7QVdA2Ls4AXBFkFu7xHG3UgA4Mli',
        isAdmin: true,
        image: 'https://i.imgur.com/KVFFj35.jpeg',
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-08-08T16:49:05.000Z',
      },
      Restaurant: {
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
      },
    },
  ],
}

export default {
  components: {
    NavTabs,
    NewestRestaurants,
  },
  data () {
    return {
      restaurants: [],
      comments: []
    }
  },
  created () {
this.fetchFeeds()
  },
  methods: {
    fetchFeeds() {
      // const { restaurants, comments } = dummyData
      this.restaurants = dummyData.restaurants
      this.comments = dummyData.comments
    },
  },
}
</script>
