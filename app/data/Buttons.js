const cssjson = {
  categories: [
    {
      id: "1",
      title: "Background Colors",
      description: "Buttons with different background colors",
      elements: [
        {
          id: "1",
          css: "bg-teal-500 text-white p-2 rounded",
        },
        {
          id: "2",
          css: "bg-green-500 text-white p-2 rounded",
        },
        {
          id: "3",
          css: "bg-blue-500 text-white p-2 rounded",
        },
        // add more elements
      ],
    },
    {
      id: "2",
      title: "Rounded Corners",
      description: "Buttons with different levels of rounded corners",
      elements: [
        {
          id: "4",
          css: "bg-yellow-500 text-white p-2 rounded-lg hover:bg-yellow-600",
        },
        {
          id: "5",
          css: "bg-pink-500 text-white p-3 rounded-md hover:bg-pink-600",
        },
        {
          id: "6",
          css: "bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600",
        },
        // add more elements
      ],
    },
    // add more categories
  ],
};

export default cssjson;
