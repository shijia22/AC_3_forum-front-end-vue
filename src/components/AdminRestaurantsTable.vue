<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">
          #
        </th>
        <th scope="col">
          Category
        </th>
        <th scope="col">
          Name
        </th>
        <th scope="col" width="300">
          操作
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : '未分類' }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{ name: 'admin-restaurant', params: { id: restaurant.id } }"
            class="btn btn-link"
            >Show</router-link
          >

          <router-link :to="{ name: 'admin-restaurant-edit', params: { id: restaurant.id } }" class="btn btn-link">Edit</router-link>

          <button
            type="button"
            class="btn btn-link"
            @click.stop.prevent="deleteRestaurant(restaurant.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
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
      viewCounts: 44,
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-08-29T11:53:48.000Z',
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
      viewCounts: 20,
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-08-29T06:44:14.000Z',
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
      viewCounts: 1,
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-08-27T15:06:34.000Z',
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
    },
    {
      id: 14,
      name: 'Maria Abbott',
      tel: '270.331.9677 x000',
      address: '5410 Amie Circles',
      opening_hours: '08:00',
      description:
        'Qui eum corporis. Est maiores sunt cum cumque cum qui numquam culpa eos. Maiores delectus nisi id ipsum in ut sed quos voluptate.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=29.35511786821312',
      viewCounts: 3,
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-08-23T07:47:05.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-07-05T09:58:39.000Z',
      },
    },
    {
      id: 15,
      name: 'Miss Alda Gibson',
      tel: '973-829-4302 x72994',
      address: '82826 Hilton Estates',
      opening_hours: '08:00',
      description:
        'Porro deserunt delectus ut officiis reiciendis animi magni assumenda placeat. Occaecati ut in quos et et. Repellendus at molestias omnis quae rerum. Blanditiis deserunt corporis aliquam molestiae delectus eos enim quasi aut.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=85.30074855159819',
      viewCounts: 0,
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-07-05T09:58:39.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-07-05T09:58:39.000Z',
      },
    },
    {
      id: 16,
      name: 'Ian Kerluke',
      tel: '(616) 152-4200 x41072',
      address: '0289 Kuvalis Path',
      opening_hours: '08:00',
      description: 'amet pariatur totam',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=3.5140637011159104',
      viewCounts: 0,
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-07-05T09:58:39.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-07-05T09:58:39.000Z',
      },
    },
    {
      id: 17,
      name: 'Johnathan Lowe',
      tel: '978.861.5244 x080',
      address: '914 Cole Expressway',
      opening_hours: '08:00',
      description: 'illum',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=76.7964021859454',
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
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-08-09T07:00:29.000Z',
      },
    },
    {
      id: 19,
      name: 'Donny Gaylord I',
      tel: '1-447-511-1577 x65080',
      address: '77541 Jaycee Crossing',
      opening_hours: '08:00',
      description: 'vitae voluptatibus minus',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=57.22060522984551',
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
      id: 20,
      name: 'Else Upton',
      tel: '(988) 533-7136 x87414',
      address: '039 Oswald Estate',
      opening_hours: '08:00',
      description: 'vero',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=67.29361970658665',
      viewCounts: 0,
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-07-05T09:58:39.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-07-05T09:58:39.000Z',
      },
    },
    {
      id: 21,
      name: 'Ike Wyman',
      tel: '(969) 303-5480 x8859',
      address: '44250 Toney Points',
      opening_hours: '08:00',
      description: 'et',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=0.0228325281143249',
      viewCounts: 0,
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-07-05T09:58:39.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-07-05T09:58:39.000Z',
      },
    },
    {
      id: 22,
      name: 'Ashlynn Willms',
      tel: '(225) 252-4334',
      address: '8350 Milton Passage',
      opening_hours: '08:00',
      description:
        'Voluptatem cumque vel eum voluptatem repellendus tempora ut commodi praesentium.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=12.582063281545386',
      viewCounts: 1,
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-07-08T16:51:24.000Z',
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-08-09T07:00:13.000Z',
      },
    },
    {
      id: 23,
      name: 'Leta Spencer',
      tel: '985-943-3948 x18087',
      address: '71241 McKenzie Greens',
      opening_hours: '08:00',
      description: 'quis est id',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=32.91900658383287',
      viewCounts: 0,
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-07-05T09:58:39.000Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-08-09T07:00:29.000Z',
      },
    },
    {
      id: 24,
      name: 'Gaston Kling',
      tel: '(708) 855-8661 x75533',
      address: '909 Fay Dam',
      opening_hours: '08:00',
      description: 'ea voluptas aut',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=96.87323114124236',
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
      id: 25,
      name: 'Afton Murphy',
      tel: '438.437.3292 x916',
      address: '4301 Maggio Circle',
      opening_hours: '08:00',
      description:
        'Illo aliquid illo qui id. Assumenda pariatur vel laboriosam tenetur blanditiis officiis. Eos animi debitis in consequatur et est optio corrupti.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=13.195154350746119',
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
      id: 26,
      name: 'Jeanie Stokes',
      tel: '480-712-3224 x864',
      address: '11553 Eichmann Mount',
      opening_hours: '08:00',
      description:
        'Id numquam quas iure. Ipsam nisi reiciendis. Praesentium in nostrum et. Blanditiis ut sed aliquam cumque perferendis quam autem. Et dolor quis praesentium dolor in velit.\n \rQuae quaerat nam laudantium quisquam et. Amet illum ut odit cumque. Totam sit autem aut non.\n \rIn ut rerum mollitia aspernatur dolorem sint minima non. Cumque est suscipit. Doloribus iste in facilis aspernatur est repudiandae molestiae sapiente autem. Odio eos et corrupti quam earum tempora officiis.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=5.352894935984964',
      viewCounts: 0,
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-07-05T09:58:39.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-07-05T09:58:39.000Z',
      },
    },
    {
      id: 27,
      name: "Aletha O'Conner",
      tel: '(922) 167-1501',
      address: '92695 Emerald Cape',
      opening_hours: '08:00',
      description:
        'Necessitatibus laborum vero ab pariatur natus est corporis mollitia. Corrupti necessitatibus aut quia officia velit sed officia provident. Non voluptas laboriosam illo laudantium recusandae officiis ducimus. Eius voluptatem ex voluptate minus repellat iste.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=15.27386788198173',
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
      id: 28,
      name: 'Reva Schumm',
      tel: '547-635-2744',
      address: '33104 Lubowitz Ramp',
      opening_hours: '08:00',
      description:
        'Nobis quis magnam explicabo aut totam inventore ea sunt. Quia architecto eos facilis et. Nostrum doloribus ratione in et tempore sed placeat dolores.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=27.02680740417993',
      viewCounts: 0,
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-07-05T09:58:39.000Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-08-09T07:00:29.000Z',
      },
    },
    {
      id: 29,
      name: 'Candace Glover',
      tel: '1-370-421-3051 x05665',
      address: '09822 Okuneva Squares',
      opening_hours: '08:00',
      description:
        'Cum nam et cupiditate facere. Occaecati neque illo. Et ea dicta eveniet inventore pariatur assumenda. Iure assumenda consequuntur doloremque aspernatur voluptatem. Cupiditate odio error aut dolor dignissimos quisquam.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=75.16829827776488',
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
      id: 30,
      name: 'Mr. Tre Dach',
      tel: '1-637-472-5413',
      address: '18547 Mohr Point',
      opening_hours: '08:00',
      description: 'Officia qui ipsa quibusdam vel.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=71.67092943471769',
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
      id: 31,
      name: 'Davon Brekke',
      tel: '304.977.5039',
      address: '87204 Anabel Run',
      opening_hours: '08:00',
      description: 'deserunt',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=78.05701639231799',
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
      id: 32,
      name: 'Adrain Weimann',
      tel: '768-248-6868',
      address: '751 Cruickshank Mall',
      opening_hours: '08:00',
      description:
        'Voluptas alias saepe illo sit et. Dolores eligendi ducimus aut saepe. Incidunt et consectetur fuga totam harum ut. Doloremque beatae iste ut tempora. Placeat soluta est architecto inventore sunt. Qui quia occaecati.\n \rEligendi voluptatem omnis optio. Illo excepturi qui officiis. Corporis autem officiis ut quod fugit aut veniam saepe. Assumenda quia est est. Suscipit facere sit.\n \rUt facere ut est fugit autem molestiae ut corrupti. Reprehenderit omnis perferendis. Deleniti voluptas et minima voluptatem tenetur. Molestias qui ut voluptate aut qui ex enim. Dolore facilis qui.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=84.19181375649187',
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
      id: 33,
      name: 'Bettie Lang PhD',
      tel: '(847) 234-2485 x0882',
      address: '197 Raoul Plain',
      opening_hours: '08:00',
      description: 'ut',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=77.53590155055802',
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
      id: 34,
      name: 'Rex Wiza',
      tel: '807-036-9750 x49664',
      address: '4093 Eugene Ford',
      opening_hours: '08:00',
      description:
        'Et dolore non id dolorem molestiae minima eos dolorem. Architecto qui est aut dolorem molestias facere voluptatibus. Aspernatur qui distinctio. Totam qui blanditiis necessitatibus omnis laudantium enim aut.\n \rQuibusdam laborum culpa hic. Laborum ex doloribus non nemo ullam in omnis repellendus. Ut maiores odit quibusdam. Non ea eligendi vel quaerat temporibus qui. At perferendis sequi voluptatem odit modi voluptatum. Iure quod sit quam facere hic a unde.\n \rHarum nesciunt officia. Nemo eveniet eveniet et sunt vel. Omnis quisquam quod. Et quae totam quasi reiciendis est ut. Porro laboriosam est vero laudantium voluptate qui ut pariatur sit.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=44.79932925723848',
      viewCounts: 0,
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-07-05T09:58:39.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-07-05T09:58:39.000Z',
      },
    },
    {
      id: 35,
      name: 'Adolfo Hand IV',
      tel: '1-661-464-8603 x69832',
      address: '00853 Johnathan Extensions',
      opening_hours: '08:00',
      description: 'quas',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=58.366635316116614',
      viewCounts: 0,
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-07-05T09:58:39.000Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-08-09T07:00:29.000Z',
      },
    },
    {
      id: 36,
      name: 'Wilber Kris DDS',
      tel: '(305) 011-8979',
      address: '2663 Wehner Mountain',
      opening_hours: '08:00',
      description:
        'Omnis nulla vel. Exercitationem velit voluptatem nulla dolor molestiae dolorem minus autem omnis. Sint voluptas soluta quisquam. Optio tenetur voluptates accusamus maxime nihil. Eos iste et iste nemo.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=74.73254288482138',
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
      id: 37,
      name: 'Ada Pacocha',
      tel: '1-194-835-4641 x9038',
      address: '72766 Tanya Cliffs',
      opening_hours: '08:00',
      description:
        'Accusamus quibusdam quis hic qui cumque iste.\nQui quisquam et fuga et et assumenda iusto.\nSuscipit alias atque quia.\nEaque dolorum libero debitis et incidunt eius neque sunt debitis.\nInventore ea nisi iure aperiam molestiae quo deleniti.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=26.80465255967157',
      viewCounts: 0,
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-07-05T09:58:39.000Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-08-09T07:00:29.000Z',
      },
    },
    {
      id: 38,
      name: 'Stephany Mohr',
      tel: '041-511-8086 x357',
      address: '77656 Williamson Valleys',
      opening_hours: '08:00',
      description:
        'Repudiandae nam omnis enim qui qui eius at.\nConsequatur laudantium odit quia quod eos expedita facere culpa quod.\nQuia deleniti expedita recusandae.\nQuis maiores ut consequatur.\nSit quia error fugit.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=72.78196467194442',
      viewCounts: 0,
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-07-05T09:58:39.000Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-08-09T07:00:29.000Z',
      },
    },
    {
      id: 39,
      name: 'Jazmyne Pfannerstill',
      tel: '558.290.4029',
      address: '89986 Deanna Streets',
      opening_hours: '08:00',
      description: 'est',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=75.37145930055958',
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
      id: 40,
      name: 'Zachary Abshire',
      tel: '1-407-042-0982 x96575',
      address: '767 Hoppe Track',
      opening_hours: '08:00',
      description: 'voluptate',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=69.09347166173703',
      viewCounts: 0,
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-07-05T09:58:39.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-07-05T09:58:39.000Z',
      },
    },
    {
      id: 41,
      name: 'Dr. Martin Brakus',
      tel: '115.702.0905',
      address: '82579 Marisol Cove',
      opening_hours: '08:00',
      description:
        'Sint est sapiente nobis quos.\nDolorem magnam hic velit ut inventore repudiandae sequi.\nVoluptate fuga optio fuga beatae eaque quibusdam rem et et.\nMaxime impedit et ut nulla libero facere ea veritatis recusandae.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=18.43070357643328',
      viewCounts: 0,
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-07-05T09:58:39.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-07-05T09:58:39.000Z',
      },
    },
    {
      id: 42,
      name: 'Antonina Kertzmann',
      tel: '(003) 546-3071 x1643',
      address: '09962 Ubaldo Greens',
      opening_hours: '08:00',
      description:
        'Eveniet aut recusandae quibusdam molestias ipsum voluptas quis aliquid. Voluptatem iste voluptatem voluptatem. Minus modi eos laudantium. Hic est ratione.\n \rEveniet blanditiis sit quam fuga ut facere veritatis. Voluptates enim et dolores non necessitatibus esse libero et. Sit quibusdam natus. Dicta tempore minus amet. Omnis voluptates labore consequatur.\n \rAperiam numquam possimus hic et vero molestiae. Quo et adipisci aperiam possimus et dolores ipsum facere iste. Consectetur et quia totam est itaque nisi dolorum maiores doloribus.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=6.102346859200214',
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
      id: 43,
      name: 'Miss Willa Zulauf',
      tel: '772.774.6134 x32222',
      address: '72620 Brown Fork',
      opening_hours: '08:00',
      description: 'ut',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=14.917691199265892',
      viewCounts: 0,
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-07-05T09:58:39.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-07-05T09:58:39.000Z',
      },
    },
    {
      id: 44,
      name: 'Ms. Lurline Corkery',
      tel: '326-487-5062',
      address: '635 Rippin Ramp',
      opening_hours: '08:00',
      description: 'earum in culpa',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=68.81906281304802',
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
      id: 45,
      name: 'Rosetta Morar',
      tel: '397.472.2410 x36015',
      address: '826 Medhurst Camp',
      opening_hours: '08:00',
      description:
        'Sequi odit incidunt deserunt exercitationem. Assumenda quas quaerat ut ut inventore eveniet consequatur. Minus cum mollitia id est sit neque quos ut explicabo. Ea reiciendis ea dolorem ea facere id et illum mollitia. Molestiae ut nisi expedita ullam totam consectetur magni. Asperiores ab laborum mollitia autem magnam necessitatibus.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=46.21458008494539',
      viewCounts: 1,
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-07-16T03:19:59.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-07-05T09:58:39.000Z',
      },
    },
    {
      id: 46,
      name: 'Jerel Jacobs PhD',
      tel: '1-246-024-5658',
      address: '12151 Madelyn Spur',
      opening_hours: '08:00',
      description: 'cum',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=98.33440081366507',
      viewCounts: 2,
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-08-20T07:32:28.000Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-08-09T07:00:29.000Z',
      },
    },
    {
      id: 47,
      name: 'Patience Kassulke',
      tel: '858.255.9873 x81588',
      address: '0816 Cronin Extension',
      opening_hours: '08:00',
      description: 'Quo quo et suscipit.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=74.96472730648365',
      viewCounts: 0,
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-07-05T09:58:39.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-07-05T09:58:39.000Z',
      },
    },
    {
      id: 48,
      name: 'Edgar Toy',
      tel: '1-784-399-1059 x571',
      address: '7994 Winston Circle',
      opening_hours: '08:00',
      description:
        'Vitae maxime molestias vero vero dolores vero sed fugiat nam.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=20.170836111399094',
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
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-07-05T09:58:39.000Z',
      },
    },
    {
      id: 50,
      name: 'Deshaun Zboncak',
      tel: '491-316-6241 x8970',
      address: '44998 Daniel Dam',
      opening_hours: '08:00',
      description: 'Adipisci in omnis consectetur ullam dolores id ut sunt.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=80.08532188319566',
      viewCounts: 3,
      createdAt: '2021-07-05T09:58:39.000Z',
      updatedAt: '2021-07-06T16:02:38.000Z',
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2021-07-05T09:58:39.000Z',
        updatedAt: '2021-07-05T09:58:39.000Z',
      },
    },
  ],
}

export default {
  data() {
    return {
      restaurants: [],
    }
  },
  created() {
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants
    },
    deleteRestaurant(restaurantId) {
      this.restaurants = this.restaurants.filter(
        (restaurant) => restaurant.id !== restaurantId
      )
    },
  },
}
</script>
