import type { ProductType } from '~/pages/apps/ecommerce/products/components/types'

import products01 from '~/assets/images/products/01.png'
import products02 from '~/assets/images/products/02.png'
import products03 from '~/assets/images/products/03.png'
import products04 from '~/assets/images/products/04.png'
import products05 from '~/assets/images/products/05.png'
import products06 from '~/assets/images/products/06.png'

export const productsData: ProductType[] = [
  {
    id: 1,
    name: 'Apple Watch',
    category: 'Sports',
    pics: 32,
    price: 39,
    status: 'published',
    createdAt: '14 Jan 2024, 10:30am',
    image: products04,
    description: 'Size-05 (Model 2021)'
  },
  {
    id: 2,
    name: 'Morden Chair',
    category: 'Interior',
    pics: 10,
    price: 99,
    status: 'published',
    createdAt: '18 Jan 2024, 12:10am',
    image: products01,
    description: 'Size-Mediam (Model 2021)'
  },
  {
    id: 3,
    name: 'Reebok Shoes',
    category: 'Footwear',
    pics: 24,
    price: 49,
    status: 'inactive',
    createdAt: '24 Jan 2024, 09:10pm',
    image: products05,
    description: 'size-08 (Model 2021)'
  },
  {
    id: 4,
    name: 'Cosco Vollyboll',
    category: 'Sports',
    pics: 8,
    price: 49,
    status: 'published',
    createdAt: '08 Feb 2024, 03:30pm',
    image: products06,
    description: 'size-04 (Model 2021)'
  },
  {
    id: 5,
    name: 'Royal Purse',
    category: 'Life Style',
    pics: 52,
    price: 89,
    status: 'published',
    createdAt: '20 Feb 2024, 11:30am',
    image: products04,
    description: 'Pure Lether 100%'
  },
  {
    id: 6,
    name: 'New Morden Chair',
    category: 'Interior',
    pics: 6,
    price: 20,
    status: 'draft',
    createdAt: '14 Jan 2024, 10:30am',
    image: products03,
    description: 'size-05 (Model 2021)'
  },
  {
    id: 7,
    name: 'Important Chair',
    category: 'Interior',
    pics: 32,
    price: 39,
    status: 'published',
    createdAt: '02 Mar 2024, 10:30am',
    image: products02,
    description: 'size-05 (Model 2021)'
  },
  {
    id: 8,
    name: 'Nivya Footboll',
    category: 'Sports',
    pics: 32,
    price: 39,
    status: 'inactive',
    createdAt: '11 Mar 2024, 05:30am',
    image: products02,
    description: 'Size-05 (Model 2021)'
  },
  {
    id: 9,
    name: 'Green Morden Chair',
    category: 'Interior',
    pics: 10,
    price: 99,
    status: 'published',
    createdAt: '28 Mar 2024, 08:45am',
    image: products01,
    description: 'Size-Mediam (Model 2021)'
  },
  {
    id: 10,
    name: 'Bata Shoes',
    category: 'Footwear',
    pics: 24,
    price: 49,
    status: 'draft',
    createdAt: '05 Apr 2024, 12:30am',
    image: products01,
    description: 'size-08 (Model 2021)'
  },
  {
    id: 11,
    name: 'Cosco Vollyboll',
    category: 'Sports',
    pics: 8,
    price: 49,
    status: 'published',
    createdAt: '10 Apr 2024, 10:30am',
    image: products06,
    description: 'size-04 (Model 2021)'
  },
  {
    id: 12,
    name: 'Royal Purse',
    category: 'Life Style',
    pics: 52,
    price: 89,
    status: 'published',
    createdAt: '20 Apr 2024, 10:30am',
    image: products04,
    description: 'Pure Lether 100%'
  },
  {
    id: 13,
    name: 'New Morden Chair',
    category: 'Interior',
    pics: 6,
    price: 20,
    status: 'published',
    createdAt: '08 May 2024, 01:30am',
    image: products03,
    description: 'size-05 (Model 2021)'
  }
]
