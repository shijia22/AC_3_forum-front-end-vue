<template>
  <div class="container py-5">
    <form @after-submit="handleAfterSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          type="text"
          v-model="name"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="user.image"
          :src="user.image"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        />
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
        />
      </div>

      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
const dummyUser = {
  user: {
    id: 1,
    name: 'root',
    email: 'root@example.com',
    password: '$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe',
    isAdmin: true,
    image: 'https://i.imgur.com/58ImzMM.png',
  },
}

export default {
  name: 'UserEdit',
  data() {
    return {
      user: {
        id: 0,
        name: '',
        image: '',
      },
    }
  },
  created() {
    const { id } = this.$route.params
    this.fetchUser(id)
  },
  methods: {
    handleAfterSubmit(formData) {
      // 透過 API 將表單資料送到伺服器
      for (let [name, value] of formData.entries()) {
        console.log(name + ': ' + value)
      }
    },
    fetchUser() {
      const { user } = dummyUser
      const { id, name, image } = user
      this.user = {
        ...this.user,
        id,
        name,
        image,
      }
    },
  },
}
</script>
