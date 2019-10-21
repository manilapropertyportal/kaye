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
            let uploadId = newData.id.upload;
                switch(newData.apptype) {
                    case sectionHeader:
                        let input = newData.this.choose;
                        let description = input.files[0].name;
                        let name = description.split('.')[0];
                        let images = new FormData();
                            images.append('image', input.files[0]);
                            images.append('e', newData.actionInsert);
                            images.append('app', newData.app);
                            images.append('apptype', newData.apptype);
                            images.append('appname', newData.appname);
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
            }

        },
        select: function(newData) {
            console.log('select data');
            let cardClass = $(newData.class.card);
            let e = newData.actionView;
                $.post(url,{e},function(data){ 
                        //    header(data);
                        //         viewHeader(function(output){
                        //         console.log(output);
                        //         });
                            let a = $(data).length+1;
                            let b = cardClass.length;
                            let c = cardClass.attr('class').split(' ')[0];
                                if (a != b) {
                                    $(data).insertAfter('.'+c+':first');
                                }
                                _main._events.click(newData);

                        });
        },
        update: function(newData){
            console.log('update data');
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
        click: function(newData) {
            console.log('click data');
            let cardClass = newData.class.card;
            let cardSrc = newData.class.src;
            let close = newData.do.close;
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
            }
          
        },
        change: function(newData) {
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
        display: function(newData) {
            console.log('display data');
            
        },

    }

}