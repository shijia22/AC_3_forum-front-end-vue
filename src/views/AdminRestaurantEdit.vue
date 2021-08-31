<template>
  <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm @after-submit="handleAfterSubmit" :initial-restaurant="restaurant"/>
  </div>
</template>

<script>
import AdminRestaurantForm from './../components/AdminRestaurantForm.vue'

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
      restaurant: { // 這是物件
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
    fetchRestaurant(restaurantId) {
      const { restaurant } = dummyData
      const {
        id,
        name,
        image,
        opening_hours: openingHours,
        tel,
        address,
        description,
        CategoryId: categoryId,
      } = restaurant
      this.restaurant = {
        ... this.restaurant,
        id,
        name,
        image,
        openingHours,
        tel,
        address,
        description,
        categoryId,
      }
    },
  },
}
</script>
