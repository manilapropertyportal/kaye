$(document).ready(function(){
    $(window).on('load', function(){
        console.log("DOM has Loaded")

        var Router = function(name, routes) {
            return {
                name : name,
                routes : routes
            }
        };

        var xRouter = new Router('xRouter',[
            {
               path: '#air',
               name: 'Air',
               logo:"",
               style:
               `
                  {
                     ".navigation.scrolled,.btn-primary,footer div" : {
                        "background-color": "skyblue !important;",
                        "border-color": "skyblue !important;"
                     },
                     ".navigation.scrolled,.navigation.scrolled a" : {
                        "transition":"0.5s ease;"
                     },
                     "nav,nav div ul li a.nav-link,.navigation.scrolled a,footer div,.btn-primary" : {
                           "color": "black !important;"
                     },
                     ".disclaimer-container,.disclaimer-container button" : {
                           "filter": "contrast(0.5);"
                     }
                  }
               `
            },
            {
               path: '#coast',
               name: 'Coast',
               logo:"",
               navbg:"",
               navcolor:""
            },
            {
               path: '#light2',
               name: 'Light2',
               logo:"",
               navbg:"",
               navcolor:""
            },
            {
               path: '#lush',
               name: 'Lush',
               logo:"",
               navbg:"",
               navcolor:""
            },
            {
               path: '#red',
               name: 'Red',
               logo:"",
               style:
               `
                  {
                     ".navigation.scrolled,.btn-primary,footer div" : {
                        "background-color": "red !important;",
                        "border-color": "red !important;"
                     },
                     ".navigation.scrolled,.navigation.scrolled a" : {
                        "transition":"0.5s ease;"
                     },
                     "nav,nav div ul li a.nav-link,.navigation.scrolled a,footer div,.btn-primary" : {
                           "color": "white !important;"
                     },
                     ".disclaimer-container,.disclaimer-container button" : {
                           "filter": "contrast(0.5);"
                     }
                  }
               `
            },
            {
               path: '#shore3',
               name: 'Shore3',
               logo:"",
               navbg:"",
               navcolor:""
            },
            {
               path: '#sresidences',
               name: 'Sresidences',
               logo:"",
               navbg:"",
               navcolor:""
            }         
        ])
        var currentpath = location.hash;
        console.log(xRouter);
        var route = xRouter.routes.filter(function(r){
            return r.path === currentpath;
        })[0];
        console.log(route.name);
        $(".navbar-brand").html(route.name);
        $("title").html(route.name+" Residences");
       var styles = JSON.parse(route.style);

         document.querySelector("style").appendChild(document.createTextNode(getCSS()));

         function getCSS() {
            var css = [];
            for (let selector in styles) {
            let style = selector + " {";
            
            for (let prop in styles[selector]) {
               style += prop + ":" + styles[selector][prop];
            }
            
            style += "}";
            
            css.push(style);
            }
            
            return css.join("\n");
         }
   })

   $(window).scroll(function(){
      if ($(this).scrollTop() > Math.ceil($("header").height() - 70)) {
          $("nav").removeClass('navbar-light').addClass("scrolled")
      } else {
          $("nav").removeClass("scrolled").addClass("navbar-light")
      }
  });
   $('a[href*="#"]').on('click', function(e) {
      e.preventDefault()

      $('html, body').animate(
      {
         scrollTop: $($(this).attr('href')).offset().top,
      },
      500,
      'linear'
      )
   });

})