<template>
  <div class="container py-5">
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initial-restaurant="restaurant" />
    <hr />
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments
      :restaurant-comments="restaurantComments"
      @after-delete-comment="afterDeleteComment"
    />
    <!-- 新增評論 CreateComment -->
    <CreateComment :restaurant-id="restaurant.id" @after-create-comment="afterCreateComment"/>
  </div>
</template>

<script>
import RestaurantDetail from './../components/RestaurantDetail.vue'
import RestaurantComments from './../components/RestaurantComments.vue'
import CreateComment from './../components/CreateComment.vue'

const dummyData = {
  restaurant: {
    id: 1,
    name: 'Judy Runte',
    tel: '(918) 827-1962',
    address: '98138 Elisa Road',
    opening_hours: '08:00',
    description: 'dicta et cupiditate',
    image: 'https://loremflickr.com/320/240/food,dessert,restaurant/?random=1',
    createdAt: '2019-06-22T09:00:43.000Z',
    updatedAt: '2019-06-22T09:00:43.000Z',
    CategoryId: 3,
    Category: {
      id: 3,
      name: '義大利料理',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z',
    },
    FavoritedUsers: [],
    LikedUsers: [],
    Comments: [
      {
        id: 3,
        text: 'Quos asperiores in nostrum cupiditate excepturi aspernatur.',
        UserId: 2,
        RestaurantId: 1,
        createdAt: '2019-06-22T09:00:43.000Z',
        updatedAt: '2019-06-22T09:00:43.000Z',
        User: {
          id: 2,
          name: 'user1',
          email: 'user1@example.com',
          password:
            '$2a$10$0ISHJI48xu/VRNVmEeycFe8v5ChyT305f8KaJVIhumu7M/eKAikkm',
          image: 'https://i.imgur.com/XooCt5K.png',
          isAdmin: false,
          createdAt: '2019-06-22T09:00:43.000Z',
          updatedAt: '2019-06-23T01:16:31.000Z',
        },
      },
    ],
  },
  isFavorited: false,
  isLiked: false,
}

const dummyUser = {
  currentUser: {
    "id": 1,
    "name": "root123",
    "email": "root@example.com",
    "image": "https://i.imgur.com/WMsHuNP.jpeg",
    "isAdmin": true
  }
}

export default {
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        image: '',
        openingHours: '',
        tel: '',
        address: '',
        description: '',
        isFavorited: false,
        isLiked: false,
      },
      restaurantComments: [],
      currentUser: dummyUser.currentUser,
    }
  },
  created() {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log('fetchRestaurant id: ', restaurantId)
      const { restaurant, isFavorited, isLiked } = dummyData
      const {
        id,
        name,
        Category,
        image,
        opening_hours: openingHours,
        tel,
        address,
        description,
      } = restaurant

      this.restaurant = {
        id,
        name,
        categoryName: Category ? Category.name : '未分類',
        image,
        openingHours,
        tel,
        address,
        description,
        isFavorited,
        isLiked,
      }

      this.restaurantComments = dummyData.restaurant.Comments
    },
    afterDeleteComment(commentId) {
      // 以 filter 保留未被選擇的 comment.id
      this.restaurantComments = this.restaurantComments.filter(
        (comment) => comment.id !== commentId
      )
    },
    afterCreateComment(payload) {
      const { commentId, restaurantId, text } = payload
      this.restaurantComments.push({ // 要 push 進去 data 的 restaurantComments: []
        id: commentId,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name
        },
        text, // = > text: text
        createdAt: new Date() // 直接抓當下的時間
      })
    },
  },
}
</script>
