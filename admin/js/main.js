var url = "files/model/model.php";
var app = $('.admin-content-title .title').text();

const _main = {
    data: {
        activeform: '',
        lastactiveform: '',
        active_appno: '',
        _userstatus: '',
        currentDocNo:''
    },
    get data() {
        return this._data;
    },
    set data(value) {
        this._data = value;
    },
    _properties: {
        insert: function(param,elem){
            console.log('insert data');
            switch(param) {
                case 'image':
                    let input = elem[0];
                    let apptype = $('.admin-content-title .title').text();
                    let appname = $('.admin-selected-project').text();
                    let a = appname.replace(/\s/g,'');
                    let app = $('#'+a).parents('.collapse').prop('class').split(' ')[0].split('-')[2];
                    console.log(app);
                    let description = input.files[0].name;
                    let name = description.split('.')[0];
                    let images = new FormData();
                        images.append('image', input.files[0]);
                        images.append('e', 'save_header');
                        images.append('app', app);
                        images.append('apptype', apptype);
                        images.append('appname', appname);
                        images.append('name', name);
                        images.append('description', description);
                            $.ajax({
                                url: url,
                                type: "POST",
                                data:  images,
                                contentType: false,
                                cache: false,
                                processData:false,
                                    success: function(data) {
                                        console.log(data);
                                        if(data == 'error') {
                                            console.log('bobobobobobo');
                                            alert('Bobo Choose File muna!');
                                        } else {
                                            $('#inputGroupFileAddon04').removeClass('d-flex').addClass('d-none')
                                            elem.removeAttr('style');
                                            $('.card-title').text('No file chosen');
                                            $(data).insertAfter('.admin-content-card-body:first');
                                            // $(".header-upload").toggleClass('d-flex d-none');
                                            // $("#form").trigger('reset');
                                        }
                                    }, 
                            });
                break;
            }

        },
        update: function(param){
            console.log('update data');
        },
        delete: function(param){
            console.log('delete data');
        },


    },
    _events: {
        click: function(param,elem) {
            switch(param) {
                case 'Header':
                    // $("#uploadImage")
                    console.log(param);
                    console.log(elem);

                    let a = elem.files;
                    console.log(a);

                break;
            }
          
        },
        load: function(id) {
            console.log(id +' load me');
        },
        change: function(param,elem) {
            switch(param) {
                case 'image':
                    let $this = elem;
                    let name = elem.files[0].name;
                        if ($this.files && $this.files[0]) {
                            var reader = new FileReader();
                            let img = $('#'+elem.id);
                                reader.onload = function(e) {
                                    img.siblings('.card-body').children('.card-title').text(name);
                                    img.css({
                                    'background' : 'url("'+e.target.result+'") center center no-repeat rgba(255, 255, 255, 0.5)',
                                    'background-size' : 'contain'
                                    });  
                                        if (img.attr('style') != 'undefined') {
                                            $('.btn').removeClass('d-none').addClass('d-flex');
                                        }
                                }
                                reader.readAsDataURL($this.files[0]);
                        }
                break;
            }

        },
        submit: function(param,id,data) {
            switch(param) {
                case 'Header':
                    console.log(param);
                    console.log(id);
                    // $(".header-form")
                    // $(id).on('submit',function(e){
                    //     console.log(data);
                    //     e.preventDefault();

                    //     _main._properties.insert(param);
                    // })
                break;
                case 'text':
                break;
            }
        },
        hover: function(id) {
            console.log(id +' hover me');
        },
    },
    _method: {
        saving: function(param) {
            console.log('save data');
        },
        view: function(param) {
            console.log('view data');
        },

    }

}
 
 
 function bs_input_file() {
                $(".input-file").before(
                    function() {
                        if ( ! $(this).prev().hasClass('input-ghost') ) {
                            var element = $("<input type='file' class='input-ghost' style='visibility:hidden; height:0; position: absolute>");
                            element.attr("name",$(this).attr("name"));
                            element.change(function(){
                                element.next(element).find('input').val((element.val()).split('\\').pop());
                            });
                            $(this).find("button.btn-choose").click(function(){
                                element.click();
                            });
                            $(this).find("button.btn-reset").click(function(){
                                element.val(null);
                                $(this).parents(".input-file").find('input').val('');
                            });
                            $(this).find('input').css("cursor","pointer");
                            $(this).find('input').mousedown(function() {
                                $(this).parents('.input-file').prev().click();
                                return false;
                            });
                            return element;
                        }
                    }
                );
            }
                $(function() {
                    bs_input_file();
                });
