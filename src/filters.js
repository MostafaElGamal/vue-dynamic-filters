export default [
  {
    title: "Category",
    filter_type: "select",
    display_type: 1,
    options: [
      {
        id: 2,
        title: "Mobiles",
        level: 1,
        has_leafs: false,
        products_count: 3,
      },
      {
        id: 3,
        title: "Cars",
        level: 1,
        has_leafs: false,
        products_count: 1,
      },
    ],
  },
  {
    title: "Brand",
    filter_type: "checkbox",
    display_type: 1,
    options: [
      {
        id: 2,
        title: "Nokia",
        products_count: 1,
      },
      {
        id: 4,
        title: "Iphone",
        products_count: 2,
      },
    ],
  },
  {
    title: "Size",
    filter_type: "checkbox",
    display_type: 1,
    options: [
      {
        id: 6,
        title: "XL",
        slug: "kybr",
        products_count: 1,
      },
    ],
  },
  {
    title: "Price",
    filter_type: "price",
    display_type: 1,
    min: "0.000000",
    max: "9000.000000",
    options: [],
  },
  {
    title: "Search",
    filter_type: "text",
    display_type: 1,
    options: [],
  },
  {
    title: "Color",
    filter_type: "checkbox",
    display_type: 1,
    options: [
      {
        id: 7,
        title: "White",
        slug: null,
        products_count: 1,
      },
    ],
  },
];
