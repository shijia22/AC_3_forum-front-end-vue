<template>
  <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm
      @after-submit="handleAfterSubmit"
      :initial-restaurant="restaurant"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from './../components/AdminRestaurantForm.vue'
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'
const dummyData = {
  restaurant: {
    id: 1,
    name: 'Laurence Reynolds',
    tel: '1-657-067-3756 x9782',
    address: '187 Kirlin Squares',
    opening_hours: '08:00',
    description: 'sit est mollitia',
    image:
      'https://loremflickr.com/320/240/restaurant,food/?random=91.29816290184887',
    CategoryId: 3,
  },
}

export default {
  name: 'AdminRestaurantEdit',
  components: {
    AdminRestaurantForm,
  },
  data() {
    return {
      restaurant: {
        // 這是物件
        id: -1,
        name: '',
        tel: '',
        address: '',
        openingHours: '',
        description: '',
        image: '',
        categoryId: '',
      },
    }
  },
  created() {
    const { id } = this.$route.params
    this.fetchRestaurant(id)
  },
  methods: {
    handleAfterSubmit(formData) {
      // 透過 API 將表單資料送到伺服器
      for (let [name, value] of formData.entries()) {
        console.log(name + ': ' + value)
      }
    },
    async fetchRestaurant(restaurantId) {
      try {
        const { data } = await adminAPI.restaurants.getDetail({ restaurantId })
        const {
          id,
          name,
          image,
          opening_hours: openingHours,
          tel,
          address,
          description,
          CategoryId: categoryId,
        } = data.restaurant
        this.restaurant = {
          ...this.restaurant,
          id,
          name,
          image,
          openingHours,
          tel,
          address,
          description,
          categoryId,
        }
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試',
        })
      }
    },
  },
}
</script>
