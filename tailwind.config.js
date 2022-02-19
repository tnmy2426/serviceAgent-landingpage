module.exports = {
   darkMode: "class",
   content: ["./public/index.html"],
   theme: {
      extend: {
         backgroundImage: {
            header_bg: "url('./img/bgHeader.png')",
         },
         colors: {
            main_clr: "#f8f8f8",
            secondary_clr: "#f95157",
            title_clr: "#1b2f4d",
         },
      },

      container: {
         center: true,
         padding: "3rem",
      },
   },
   plugins: [],
};
