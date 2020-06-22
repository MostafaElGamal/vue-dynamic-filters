export default {
  filters: [
    // {
    //   title: "التصنيف",
    //   filter_type: "text",
    //   display_type: 1,
    //   options: [
    //     {
    //       id: 2,
    //       title: "موبايلات",
    //       level: 1,
    //       has_leafs: false,
    //       products_count: "3",
    //     },
    //     {
    //       id: 3,
    //       title: "اجهزه كهربائيه",
    //       level: 1,
    //       has_leafs: false,
    //       products_count: "1",
    //     },
    //   ],
    // },

    // {
    //   title: "السعر",
    //   filter_type: "price",
    //   display_type: 1,
    //   min: "0.000000",
    //   max: "9000.000000",
    //   options: [],
    // },
    {
      title: "لون",
      products_count: null,
      filter_type: "checkbox",
      display_type: 1,
      options: [
        {
          id: 2,
          title: "ابيض",
          slug: null,
          products_count: "1",
        },
        {
          id: 5,
          title: "أحمر",
          slug: "ahmr",
          products_count: 0,
        },
        {
          id: 9,
          title: "أزرق",
          slug: "azrk",
          products_count: 0,
        },
      ],
    },
    {
      title: "المقاس",
      products_count: null,
      filter_type: "checkbox",
      display_type: 1,
      options: [
        {
          id: 15,
          title: "صغير",
          slug: "sghyr",
          products_count: 0,
        },
        {
          id: 6,
          title: "كيبر",
          slug: "kybr",
          products_count: "1",
        },
        {
          id: 14,
          title: "وسط",
          slug: "ost",
          products_count: 0,
        },
      ],
    },
  ],
};
