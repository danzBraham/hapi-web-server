const routes = [
   {
      method: "GET",
      path: "/",
      handler: (request, h) => {
         return "Homepage";
      },
   },

   {
      method: "*",
      path: "/",
      handler: (request, h) => {
         const {method} = request;
         return `Halaman tidak dapat diakses dengan ${method} request`;
      },
   },

   {
      method: "GET",
      path: "/about",
      handler: (request, h) => {
         return "About Page";
      },
   },

   {
      method: "*",
      path: "/about",
      handler: (request, h) => {
         const {method} = request;
         return `Halaman tidak dapat diakses dengan ${method} request`;
      },
   },

   {
      method: "*",
      path: "/hello/{name?}",
      handler: (request, h) => {
         const {name = "Stranger"} = request.params;
         const {lang} = request.query;

         if (lang === "id") {
            return `Halo ${name}!`;
         }
         if (lang === "jp") {
            return `Ohayou ${name}!`;
         }
         if (lang === "fr") {
            return `Bonjour ${name}!`
         }
         
         return `Hello ${name}!`;
      },
   },

   {
      method: "POST",
      path: "/login",
      handler: (request, h) => {
         const {username, password} = request.payload;
         if (password === 123456) {
            return `Welcome ${username}`;
         }
         return "Your password is wrong!";
      },
   },

   {
      method: "POST",
      path: "/test",
      handler: (request, h) => {
         return h.response("Created")
            .code(201)
            .header("X-Powered-By", "NodeJS");
      },
   },

   {
      method: "*",
      path: "/{any*}",
      handler: (request, h) => {
         return h.response("Halaman tidak ditemukan").code(404);
      },
   },
];

export default routes;