const cssjson = {
  categories: [
    {
      id: "1",
      title: "Background Colors",
      description: "Buttons / Link with different background colors",
      elements: [
        {
          id: "1",
          css: "bg-teal-500 text-white p-2 ",
        },
        {
          id: "2",
          css: "bg-green-500 text-white p-2 ",
        },
        {
          id: "3",
          css: "bg-blue-500 text-white p-2 ",
        },
        // add more elements
      ],
    },
    {
      id: "2",
      title: "Rounded Corners",
      description: "Buttons / Link with different levels of rounded corners",
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
          css: "bg-indigo-500 text-white py-2 px-4 rounded-xl hover:bg-indigo-600",
        },
        {
          id: "7",
          css: "bg-fuchsia-500 text-white py-2 px-4 rounded-full hover:bg-fuchsia-600",
        },
        // add more elements
      ],
    },
    {
      id: "3",
      title: "Outline",
      description: "Buttons / Links with different outline styles",
      elements: [
        {
          id: "8",
          css: "bg-slate-300 text-gray-700 p-2 outline border-gray-700 hover:bg-gray-700 hover:text-white",
        },
        {
          id: "9",
          css: "bg-slate-300 text-gray-700 p-2 outline-double border-gray-700 hover:bg-gray-700 hover:text-white",
        },
        {
          id: "10",
          css: "bg-slate-300 text-gray-700 p-2 outline outline-dashed border-gray-700 hover:bg-gray-700 hover:text-white",
        },
        // add more elements
      ],
    },
    {
      id: "4",
      title: "Transparent Background",
      description: "Buttons / Links with transparent backgrounds",
      elements: [
        {
          id: "11",
          css: "bg-transparent text-blue-500 p-2 border border-blue-500 hover:bg-blue-500 hover:text-white",
        },
        {
          id: "12",
          css: "bg-transparent text-green-500 p-2 border border-green-500 hover:bg-green-500 hover:text-white",
        },
        {
          id: "13",
          css: "bg-transparent text-red-500 p-2 border border-red-500 hover:bg-red-500 hover:text-white",
        },
        // add more elements
      ],
    },
    {
      id: "5",
      title: "Gradient Backgrounds",
      description: "Buttons / Links with different gradient backgrounds",
      elements: [
        {
          id: "14",
          css: "bg-gradient-to-br from-pink-500 to-purple-500 text-white p-2",
        },
        {
          id: "15",
          css: "bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500 text-white p-2",
        },
        {
          id: "16",
          css: "bg-gradient-to-r from-green-400 to-blue-500 text-white p-2",
        },
        // add more elements
      ],
    },
    {
      id: "6",
      title: "Gradient Backgrounds with hover effect",
      description: "Buttons / Links with different gradient backgrounds",
      elements: [
        {
          id: "1",
          css: "bg-gradient-to-br hover:bg-gradient-to-bl from-pink-500 to-purple-500 text-white p-2",
        },
        {
          id: "2",
          css: "bg-gradient-to-br hover:bg-gradient-to-tl from-yellow-400 via-red-500 to-pink-500 text-white p-2",
        },
        {
          id: "3",
          css: "bg-gradient-to-r hover:bg-gradient-to-l from-green-400 to-blue-500 text-white p-2",
        },
        // add more elements
      ],
    },

    // add more categories
  ],
};

export default cssjson;
