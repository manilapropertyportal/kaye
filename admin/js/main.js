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
                                        if(data == 'error') {
                                            console.log('bobobobobobo');
                                            alert('Bobo Choose File muna!');
                                        } else {
                                            $('#inputGroupFileAddon04').removeClass('d-flex').addClass('d-none')
                                            elem.removeAttr('style');
                                            $('.card-title').text('No file chosen');
                                            $(data).insertAfter('.admin-content-card-body:first');
                                            _main._method.view('view_header',$('.admin-content-card-body'));
                                        }
                                    },
                                    
                            });
                           
                          
                break;
            }

        },
        update: function(param){
            console.log('update data');
        },
        delete: function(param,id,data){
            console.log('delete data');
            console.log(param);
            console.log(id);
            console.log(data.header);
            // $.post(url,{e:param,app,apptype,appname,value},function(data){ 
            //     console.log(data);

            // });

            
            
        },


    },
    _events: {
        click: function(param,elem) {
            switch(param) {
                case 'header':
                    if (elem == 'close') {
                        $('.close').parents('.admin-content-card-body').on('click',function() {
                            let toRemove = $(this).attr('class').split(' ')[0];
                            console.log('tickle me');
                            console.log(toRemove);
                            var b = []
                            var c = {'header':'ako ay header','appname':'appname'}
                            b.push(c);
                            console.log(b);
                            console.log(b.header);
                            $('.'+toRemove).remove();
                            _main._properties.delete('delete_header',toRemove,b[0]);
                        });
                    }
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
                case 'header':
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
        view: function(param,id) {
            console.log('view data');
            console.log(url);
            console.log(param);
            console.log(id);
            let header = param.split('_')[1];
            $.post(url,{e:param},function(data){ 
                        console.log(data);
                    //    header(data);
                    //         viewHeader(function(output){
                    //         console.log(output);
                    //         });
                        let a = $(data).length+1;
                        let b = id.length;
                        let c = id.attr('class').split(' ')[0];
                            if (a != b) {
                                $(data).insertAfter('.'+c+':first');
                            }

                            _main._events.click(header,'close');

                        });
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
