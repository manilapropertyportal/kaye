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
            navbg:"",
            navcolor:""
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
           navbg:"",
           navcolor:""
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
        $(".navbar-brand").html(route.name)
    })
})