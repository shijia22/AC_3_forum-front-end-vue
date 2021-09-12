<template>
  <div class="container py-5">
    <AdminNav />

    <form class="my-4">
      <div class="form-row">
        <div class="col-auto">
          <input
            v-model="newCategoryName"
            type="text"
            class="form-control"
            placeholder="新增餐廳類別..."
          />
        </div>
        <div class="col-auto">
          <button
            type="button"
            class="btn btn-primary"
            :disabled="isProcessing"
            @click.stop.prevent="createCategory"
          >
            新增
          </button>
        </div>
      </div>
    </form>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col" width="60">
            #
          </th>
          <th scope="col">
            Category Name
          </th>
          <th scope="col" width="210">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <th scope="row">
            {{ category.id }}
          </th>
          <td class="position-relative">
            <div class="category-name" v-show="!category.isEditing">
              {{ category.name }}
            </div>
            <!-- 輸入框 -->
            <input
              v-show="category.isEditing"
              v-model="category.name"
              type="text"
              class="form-control"
            />
            <span
              v-show="category.isEditing"
              class="cancel"
              @click.stop.prevent="handleCancel(category.id)"
            >
              ✕
            </span>
          </td>
          <td class="d-flex justify-content-between">
            <button
              type="button"
              class="btn btn-link mr-2"
              v-show="!category.isEditing"
              @click.stop.prevent="toggleIsEditing(category.id)"
            >
              Edit
            </button>
            <button
              v-show="category.isEditing"
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="
                updateCategory({ categoryId: category.id, name: category.name })
              "
            >
              Save
            </button>
            <button
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="deleteCategory(category.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from '@/components/AdminNav'
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'

export default {
  name: 'AdminCategories',
  components: {
    AdminNav,
  },
  data() {
    return {
      categories: [],
      newCategoryName: '',
      isProcessing: false,
    }
  },
  // 5. 調用 `fetchCategories` 方法
  created() {
    this.fetchCategories()
  },
  // 3. 定義 Vue 中使用的 data 資料
  methods: {
    // 4. 定義 `fetchCategories` 方法，把 `dummyData` 帶入 Vue 物件
    async fetchCategories() {
      try {
        const { data } = await adminAPI.categories.get()
        this.categories = data.categories.map((category) => ({
          ...category,
          isEditing: false, // 使用者預設沒有在編輯
          nameCached: '', // 用來儲存使用者編輯前的名稱
        }))
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳分類，請稍後再試',
        })
      }
    },
    async createCategory() {
      try {
        const { data } = await adminAPI.categories.create({
          name: this.newCategoryName,
        })
        if (data.status === 'error') {
          throw new Error(data.message)
        }
        this.categories.push({
          id: data.categoryId,
          name: this.newCategoryName,
          isEditing: false,
        })
        this.isProcessing = false
        this.newCategoryName = ''
      } catch (error) {
        console.error(error.message)
        this.isProcessing = false
        // STEP 5: 錯誤處理
        Toast.fire({
          icon: 'error',
          title: '無法建立餐廳分類，請稍後再試',
        })
      }
    },
    async deleteCategory(categoryId) {
      try {
        const { data } = await adminAPI.categories.delete({
          categoryId,
        })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.categories = this.categories.filter(
          (category) => category.id !== categoryId
        )
        Toast.fire({
          icon: 'success',
          title: '刪除餐廳分類成功',
        })
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法刪除餐廳分類，請稍後再試',
        })
      }
    },
    updateCategory({ categoryId, name }) {
      // TODO: 透過 API 向伺服器更新類別名稱
      this.toggleIsEditing(categoryId)
    },
    toggleIsEditing(categoryId) {
      this.categories = this.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            isEditing: !category.isEditing,
            nameCached: category.name,
          }
        }
        return category
      })
    },
    handleCancel(categoryId) {
      this.categories = this.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            // 把原本的餐廳類別名稱還回去
            name: category.nameCached,
          }
        }
        return category
      })
      this.toggleIsEditing(categoryId)
    },
  },
}
</script>
<style scoped>
.category-name {
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  outline: 0;
  cursor: auto;
}

.btn-link {
  width: 62px;
}

.cancel {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  font-size: 12px;
}
</style>
