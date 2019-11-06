var url = "files/model/model.php";

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
        insert: function(newData){
            console.log('insert data');
            let sectionHeader = newData.section.header;
            let sectionAbout = newData.section.about;
            let uploadId = newData.id.upload;
            let app = newData.app;
            let apptype = newData.apptype;
            let appname = newData.appname;
            let e = newData.actionInsert;

                switch(newData.apptype) {
                    case sectionHeader:
                        let input = newData.this.choose;
                        let description = input.files[0].name;
                        let name = description.split('.')[0];
                        let images = new FormData();
                            images.append('image', input.files[0]);
                            images.append('e', e);
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
                                                $(uploadId).removeClass('d-flex').addClass('d-none')
                                                $(newData.id.file).removeAttr('style').val('');
                                                $('.card-title').text('No file chosen');
                                                $(data).insertAfter('.admin-content-card-body:first');
                                                _main._properties.select(newData);
                                            }
                                        },
                                        
                                });
                    break;
                    case sectionAbout:
                        let val = newData.value.about;
                        let value = $(val).val();
                            $.post(url,{e,app,apptype,appname,value},function(data){
                            });
                    break;
                    
            }

        },
        select: function(newData) {
            console.log('select data');
            let e = newData.actionView;
                $.post(url,{e},function(data){ 
                console.log(data)
                    _main._method.display(newData,data);
                    _main._events.click(newData,data);
                });
        },
        update: function(newData){
            console.log('update data');
            let sectionAbout = newData.section.about;
            let app = newData.app;
            let apptype = newData.apptype;
            let appname = newData.appname;
            let e = newData.actionUpdate;
                switch(newData.apptype) {
                    case sectionAbout:
                        let val = newData.value.about;
                        let value = $(val).val();
                            $.post(url,{e,value,app,apptype,appname},function(data){
                                console.log(data);
                                _main._events.click(newData,data);
                            });
                    break;
                }
        },
        delete: function(newData,remove){
            console.log('delete data');
            let a = newData;
            let e = a.actionDelete;
            let app = a.app;
            let apptype = a.apptype;
            let appname = a.appname;
            let value = remove.db;
            let file = remove.file;
                $.post(url,{e,app,apptype,appname,value,file},function(){ 
                });
        },
    },
    _events: {
        click: function(newData,data) {
            console.log('click data');
            let cardClass = newData.class.card;
            let cardSrc = newData.class.src;
            let close = newData.do.close;
            let units = newData.units;
                switch(newData.apptype) {
                    case 'Header':
                        $('.'+close).on('click',function() {
                            let a = $(cardClass+' '+cardSrc).attr('src').split('/')[3]
                                if (newData.do.close) {
                                    var remove = [{
                                        file: a,
                                        db: a.split('.')[0],
                                    }]
                                        $('.'+remove[0].db).remove();
                                            _main._properties.delete(newData,remove[0]);
                                }
                        });
                    break;
                    case 'About':
                        let textArea = $(newData.class.text);
                        $('.admin-saveNew-about').on('click',function(){
                            console.log('you click me!');
                            if ($.trim(data)) {
                                _main._properties.update(newData);
                            } else {
                                _main._properties.insert(newData);
                            }
                            textArea.text(textArea.val());
                        });
                        $('.admin-about-edit-cancel').on('click',function(){
                            textArea.val(textArea.text());
                        });
                    break;
                    case 'Units':
                        console.log('click add Units');
                        console.log(units);

                        $.each(units, function(key, val) {
                            $('#inputGroupSelect01').append('<option value="' + val.id + '">' + val.name + '</option>');
                        });

                    break;
            }
          
        },
        change: function(newData) {
            let units = newData.units;
                switch(newData.apptype) {
                    case 'Header':
                        let $this = newData.this.choose;
                        let name = $this.files[0].name;
                        let uploadImage = newData.id.file;
                            if ($this.files && $this.files[0]) {
                                var reader = new FileReader();
                                let img = $(uploadImage);
                                    reader.onload = function(e) {
                                        img.siblings('.card-body').children('.card-title').text(name);
                                        img.css({
                                        'background' : 'url("'+e.target.result+'") center center no-repeat rgba(255, 255, 255, 0.5)',
                                        'background-size' : 'contain',
                                        });  
                                            if (img.attr('style') != 'undefined') {
                                                $('.btn').removeClass('d-none').addClass('d-flex');
                                            }
                                    }
                                    reader.readAsDataURL($this.files[0]);
                            }
                    break;        
                    case 'About':

                    break;
                    case 'Units':
                        console.log(units);
                        var selectedProduct = $('#inputGroupSelect01').val();
                        let auc = $('.AuC');

                            // console.log(newData.id.floor);
                            // console.log(newData.id.unit);
                            // console.log($('#uploadImage1,#uploadImage2').id);
                            // $('#uploadImage1,#uploadImage2').on("input", function() {
                            //     console.log(this.id);
                            //     // console.log("Change to " + this.value);
                            // });

                            

                            if (selectedProduct != '') {
                                console.log('Show !');
                                var getProduct = units.filter(function( obj ) {
                                    return obj.id == selectedProduct;
                                });
                                    $('#inputGroupSelect02').find('option').remove();
                                    console.log(units[selectedProduct].name);
                                  
                                    auc.text(units[selectedProduct].name+' ');
        
                                        $.each(getProduct[0].sizes, function(key, val) {
                                            $('#inputGroupSelect02').append('<option id="' + val.size + '">' + val.size + '</option>');
                                            
                                            });
                                            console.log($('#inputGroupSelect02').val())
                            } else {
                                console.log('Do Nothing!');
                                auc.text('Select Category');
                                $('#inputGroupSelect02').find('option').remove();
                            }
                        
                    break;
                }

        },
        keyup: function(newData) {
            console.log('keyup data');
            switch(newData.apptype) {
                case 'About':
                    $('.admin-about-edit-btns-container').removeClass('d-none').addClass('d-flex');
                break;
            }
        },
        input: function(newData,data) {
            console.log(newData);
            console.log(data);
                if (data == 'uploadImage1') {
                    console.log('IMAGE 1 ONGAS')
                    var $thisMe = newData.this.unit;
                    var upload = newData.id.unit;
                    
                } else if (data == 'uploadImage2') {
                    console.log('IMAGE 2 ONGAS');
                    var $thisMe = newData.this.floor;
                    var upload = newData.id.floor;

                }

                // if ($thisMe.files && $thisMe.files[0]) {
                    var reader = new FileReader();
                    var img = $(upload);
                        reader.onload = function(e) {
                            img.css({
                            'background' : 'url("'+e.target.result+'") center center no-repeat rgba(255, 255, 255, 0.5)',
                            'background-size' : 'contain',
                            });  
                        }
                        reader.readAsDataURL($thisMe.files[0]);
                // }
        },
        submit: function(newData) {
            switch(newData.apptype) {
                case 'Header':
                break;
                case 'text':
                break;
            }
        },
        load: function(id) {
            console.log(id +' load me');
        },
        hover: function(newData) {
            console.log('hover me');
        },
    },
    _method: {
        saving: function(newData) {
            console.log('save data');
        },
        display: function(newData,data) {
            console.log('display data');
            let cardClass = $(newData.class.card);
            let e = newData.actionView;
            let section = e.split('_')[1];
            let textArea = $(newData.value.about);
                switch(section) {
                    case 'header':
                        let a = $(data).length+1;
                        let b = cardClass.length;
                        let c = cardClass.attr('class').split(' ')[0];
                            if (a != b) {
                                $(data).insertAfter('.'+c+':first');
                            }
                    break;
                    case 'about':
                        if ($.trim(data)) {
                            textArea.val(data);
                        }
                        textArea.focus();
                    break;
                    case 'units':
                        console.log('walang selected');
                    break;
                }
        },

    }

}
console.log(_main);