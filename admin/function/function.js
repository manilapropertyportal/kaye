$(document).ready(function(){
    $('.admin-sidenavburger').click(function(){
        if($('.admin-sidenav, .admin-sidenav-md').hasClass('admin-sidenav-open') && $('.admin-content').hasClass("position-absolute")){
            $('.admin-sidenav, .admin-sidenav-md').hide().removeClass('admin-sidenav-open');
            $('.admin-content').removeClass("position-absolute");
            $('.admin-content').css({'width':'100%'});
        } else {
            $('.admin-sidenav, .admin-sidenav-md').show().addClass('admin-sidenav-open');
            $('.admin-content').addClass("position-absolute");
            $('.admin-content').css({'width':'calc(100% - 300px)'});
        }
    })
    $('.admin-sidenav-close').click(function(){
        $('.admin-sidenav, .admin-sidenav-md').hide().removeClass('admin-sidenav-open');
    })
    
    $('.admin-projects li').click(function(){
        if ($('.admin-selected-section').text() == ''){
            $('.admin-selected-project').text($(this).text())
        } else {
            $('.admin-selected-project').text($(this).text())
            $('.admin-selected-section').text('')
        }
    })
    $('.admin-sections li').click(function(event){
        if ($('.admin-selected-project').text() != ''){ 
            event.preventDefault();
            const content_page_sections = this.dataset.page;
            const title = decodeURIComponent(content_page_sections);
            console.log(title);
            $('.admin-content-title h2').text(content_page_sections);
            $('.page').hide();
            $('.admin-content-'+title+'-section').show();
                switch (title) {
                    case 'Header':
                        console.log('nasa header ka na');
                        $('#'+title).click(function(){
                            var $this = $(this);
                                if ($this.data('clicked')) { } else {
                                    $this.data('clicked',true);
                                        viewHeader();
                                }
                        });
                    break;
                    case 'About':

                    break;
                }    
            
        } else {
            // $('.alert').alert()
        }
    })

    $('.admin-About-Add').click(function(){
        var newText = "<textarea class='admin-text-area admin-text-area-new' name='p' id='p' cols='30' rows='10' style='width:100%;'></textarea>"
        $(newText).insertBefore($(this));
        $('.admin-About-btns').show();
        $(this).hide();
    });

  
    // $('.admin-About-new-cancel').click(function(){
    //     cancellation($(this));
    // });

    // $('.admin-About-new-Insert').click(forAboutNew)
    $('.admin-content-About-item-container').on('click', forAboutEdit)

    $('.Admin-change-map').click(AdminMap)

    $('.AdminUnit-ADNEW').click(AdminUnitsAddNew)

    $('.admin-unit-modal-holder:nth-of-type(2) div h5').click(AdminUnitSQR)
    // [
    //     {
    //         'OneBedroom':
    //             [
    //                 {'UnitType':'withsomething'},
    //                 {'UnitType':'nosomething'}
    //             ]
    //     },
    //     {
    //         'TwoBedroom':
    //             [
    //                 {'UnitType':'withsomething'},
    //                 {'UnitType':'nosomething'}
    //             ]
    //     }
    // ]
    $('.Admin-unit-modal-grid-container select:first-of-type').on('change' ,function(){
        console.log($(this).val());
    });

//------------------------------------------------------------ IMAGE UPLOADING ------------------------------------------------------------------------------------------------//
//------------------------------------------------------------ IMAGE UPLOADING ------------------------------------------------------------------------------------------------//
//------------------------------------------------------------ IMAGE UPLOADING ------------------------------------------------------------------------------------------------//
//------------------------------------------------------------ IMAGE UPLOADING ------------------------------------------------------------------------------------------------//
//------------------------------------------------------------ IMAGE UPLOADING ------------------------------------------------------------------------------------------------//
//------------------------------------------------------------ IMAGE UPLOADING ------------------------------------------------------------------------------------------------//
//------------------------------------------------------------ IMAGE UPLOADING ------------------------------------------------------------------------------------------------//
//------------------------------------------------------------ IMAGE UPLOADING ------------------------------------------------------------------------------------------------//
//------------------------------------------------------------ IMAGE UPLOADING ------------------------------------------------------------------------------------------------//

    

    // $("#admin-header-upload").on('change',function(e) {
    //     var uploadedd = `<div class="admin-content-card-body col-4 my-5"><div class="admin-content-card-body-inner m-auto admin-image-banner-item"><div class="h-100 d-flex align-items-center px-3 position-relative"><img id="blah" src="#" alt="your image"/><div class="justify-content-end admin-uploaded-img"><button class="btn btn-secondary admin-edit-banner mx-2">Edit</button><button class="btn btn-secondary cancel">Cancel</button></div></div></div></div>`

    //     $(uploadedd).insertBefore('.admin-upload-new-container');      
    //     readURL(this);
        
    //     $('#blah').click(function(){
    //        $('.admin-uploaded-img').show().addClass('d-flex');
    //        $(this).css({opacity:'0.5'});
    //     });  
    //     $('.cancel').click(function(){
    //         $('.admin-uploaded-img').removeClass('d-flex').hide();
    //         $('#blah').css({opacity:'1'});
    //     });

    // });

    // $(".header-form").on('submit',(function(e) {
    //     console.log('submitted 1');
    //     e.preventDefault();
    //         const apptype = $('.admin-content-title .title').text();
    //         const appname = $('.admin-selected-project').text();
    //         const a = appname.replace(/\s/g,'');
    //         const app = $('#'+a).parents('.collapse').prop('class').split(' ')[0].split('-')[2];
    //         console.log(app);
    //         const description = $('#uploadImage').val().split('\\')[2];
    //         const name = description.split('.')[0];
    //         const images = new FormData(this);
    //             images.append('e', 'save_header');
    //             images.append('app', app);
    //             images.append('apptype', apptype);
    //             images.append('appname', appname);
    //             images.append('name', name);
    //             images.append('description', description);
    //                 $.ajax({
    //                     url: "files/model/model.php",
    //                     type: "POST",
    //                     data:  images,
    //                     contentType: false,
    //                     cache: false,
    //                     processData:false,
    //                         success: function(data) {
    //                             console.log(data);
    //                             if(data == 'error') {
    //                                 console.log('bobobobobobo');
    //                                 alert('Bobo Choose File muna!');
    //                             } else {
    //                                 $('#preview-img').removeClass('d-flex').addClass('d-none').removeAttr('src');
    //                                 $(data).insertAfter('.admin-content-card-body:first');
    //                                 $(".header-upload").toggleClass('d-flex d-none');
    //                                 $("#form").trigger('reset');
    //                             }
    //                         }, 
    //                 });
    // }));

});

function saving(param,app,apptype,appname,description,name,value)  {
    switch (param) {
        case 'header':
            $(".header-form").on('submit',(function(e) {
                console.log('submitted 2');
                e.preventDefault();
                    const apptype = $('.admin-content-title .title').text();
                    const appname = $('.admin-selected-project').text();
                    const a = appname.replace(/\s/g,'');
                    const app = $('#'+a).parents('.collapse').prop('class').split(' ')[0].split('-')[2];
                    console.log(app);
                    const description = $('#uploadImage').val().split('\\')[2];
                    const name = description.split('.')[0];
                    const images = new FormData(this);
                        images.append('e', 'save_header');
                        images.append('app', app);
                        images.append('apptype', apptype);
                        images.append('appname', appname);
                        images.append('name', name);
                        images.append('description', description);
                            $.ajax({
                                url: "files/model/model.php",
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
                                            $('#preview-img').removeClass('d-flex').addClass('d-none').removeAttr('src');
                                            $(data).insertAfter('.admin-content-card-body:first');
                                            $(".header-upload").toggleClass('d-flex d-none');
                                            $("#form").trigger('reset');
                                        }
                                    }, 
                            });
            }));
        break;
        case 'about':
            console.log('ABOUT PRE');
        break;

    }
}
function editImage() {
    $('#preview-img').on('click',function(){
        console.log(this)
        // const a = this;
        // $(this).remove();
         $(this).addClass('d-none').attr('src','#');
        $('#uploadImage').trigger('click');
        console.log($('#uploadImage')[0]);
        readURL($('#uploadImage')[0]);
    });
    saving('header');
}

function uploadImage() {
    $("#uploadImage").on('click',function(e) {
        readURL(this);
        console.log(this);
        console.log('fuckk u');
      });
      editImage(); 
}

function readURL(input) {
    console.log(input);
    console.log(input.files);
    console.log(input.files[0]);
    if (input.files && input.files[0]) {
        var reader = new FileReader();
            reader.onload = function(e) {
    console.log(e.target.result);
                $('#preview-img').attr('src', e.target.result);
            console.log(e);
            console.log(input.files[0]);
        //     $('#preview-img').removeClass('d-none');
        // const a = $('.header-upload');
        //     if (a.hasClass('d-none') == true){
        //             a.removeClass('d-none').addClass('d-flex');
        //     }
            }
            reader.readAsDataURL(input.files[0]);
    }
   
}

function viewHeader(header) {
    $.post('files/model/model.php',{e:'view_header'},function(data){ 
        console.log('view');
    //    header(data);
    //         viewHeader(function(output){
    //         console.log(output);
    //         });
        const a = $(data).length+1;
        const b = $('.admin-content-card-body').length;
        const c = $('.admin-content-card-container');
            if (a != b) {
                c.html(c.html()+data);
            }
            uploadImage();

        });

        
}

//---------------------------------------------------END OF ADMIN HEADER/BANNER IMAGE UPLOADING-----------------------------------------------------------//
//---------------------------------------------------END OF ADMIN HEADER/BANNER IMAGE UPLOADING-----------------------------------------------------------//
//---------------------------------------------------END OF ADMIN HEADER/BANNER IMAGE UPLOADING-----------------------------------------------------------//
//---------------------------------------------------END OF ADMIN HEADER/BANNER IMAGE UPLOADING-----------------------------------------------------------//
//---------------------------------------------------END OF ADMIN HEADER/BANNER IMAGE UPLOADING-----------------------------------------------------------//
//---------------------------------------------------END OF ADMIN HEADER/BANNER IMAGE UPLOADING-----------------------------------------------------------//
//---------------------------------------------------END OF ADMIN HEADER/BANNER IMAGE UPLOADING-----------------------------------------------------------//
//---------------------------------------------------END OF ADMIN HEADER/BANNER IMAGE UPLOADING-----------------------------------------------------------//
//---------------------------------------------------END OF ADMIN HEADER/BANNER IMAGE UPLOADING-----------------------------------------------------------//
//---------------------------------------------------END OF ADMIN HEADER/BANNER IMAGE UPLOADING-----------------------------------------------------------//


//-----------------------------------------------------------------ADMIN ABOUT-----------------------------------------------------------------------// 
//-----------------------------------------------------------------ADMIN ABOUT-----------------------------------------------------------------------// 
//-----------------------------------------------------------------ADMIN ABOUT-----------------------------------------------------------------------// 
//-----------------------------------------------------------------ADMIN ABOUT-----------------------------------------------------------------------// 
//-----------------------------------------------------------------ADMIN ABOUT-----------------------------------------------------------------------// 
//-----------------------------------------------------------------ADMIN ABOUT-----------------------------------------------------------------------// 

// function cancellation(element){
//     $(element).parents().siblings("textarea").remove();
//     $(element).parents().eq(0).hide();
//     $('.admin-About-Add').show();
// }

function forAboutEdit(){
    var thiscontainer = $(this).find("p").html().replace(/\&amp;/g,'&');
    var editableText = $("<textarea class='admin-text-area admin-text-area-edit' name='p' id='p' cols='30' rows='10' style='width:100%;'/>")
    editableText.val(thiscontainer)
    $(this).find("p").replaceWith(editableText);
    editableText.focus();
    // var data_index = $(this).attr('data-index');
    // var data = AdminAbout;
    // var data = JSON.parse(adminAboutToBeParsed);
    // var data_keys = Object.keys(data)[data_index];
    var backtoPar = $("<p style='border:1px solid gray;padding:5px;white-space:pre-wrap;'></p>");
    // var a = Object.values(data)[data_index];

    if ($(this).next().hasClass('admin-about-edit-btns-container')){
        
    } else { 
        $("<div class='d-flex justify-content-end admin-about-edit-btns-container mb-3'><button class='btn btn-secondary admin-saveNew-about mx-2'>Save New Changes</button><button class='btn btn-secondary admin-about-edit-cancel'>Cancel</button></div>").insertAfter($(this));
        
        //-----------INSERTING-------------//

        $(".admin-saveNew-about").click(function(){
            $(this).parents().first("div").remove();
            backtoPar.text(editableText.val());
            editableText.replaceWith(backtoPar);
            console.log(editableText.val());
            // a.content = editableText.val()
            // localStorage.setItem("AdminAbout" ,JSON.stringify(AdminAbout));
            // console.log(Object.values(AdminAbout));
            saving('about');
        })

        //-----------INSERTING-------------//

        $('.admin-about-edit-cancel').click(function(){
            $(this).parents().first("div").remove();
            // console.log($(this).parents().first().prev("div").first().children("textarea"));
            // backtoPar.html(a.content);
            backtoPar.html(thiscontainer);
            editableText.replaceWith(backtoPar)
            // editableText
        });
      
    }

}
    
// var AdminAbout = new Array();
// if (localStorage.getItem('data') != null) 
// {
//     AdminAbout = AdminAbout.concat(JSON.parse(localStorage.data));
//     console.log(AdminAbout);
// };
// function forAboutNew(){

//     var AdminAboutData = {};
//     var AboutNewToBeReplaced = $(this).parents().siblings("textarea");
//     var AboutNewDiv = $("<div class='admin-content-About-item-container mb-2'><p style='border:1px solid gray;padding:5px;white-space:pre-wrap;'></p></div>");
//     var AboutNewval = $(this).parents().siblings("textarea").val();

//     if (AboutNewval != ''){

//         AboutNewToBeReplaced.replaceWith(AboutNewDiv);
//         AboutNewDiv.find("p").html(AboutNewval)
//         AdminAboutData.content = AboutNewval;
//         AdminAbout.push(AdminAboutData);
//         localStorage.setItem("AdminAbout", JSON.stringify(AdminAbout));
//         var AdminAboutLastIndex = AdminAbout.length-1;
//         AboutNewDiv.attr('data-index', AdminAboutLastIndex);
        
//         $('.admin-About-Add').show();
//         $(this).parents().eq(0).hide();

//     } else {
//         console.log(cancellation($(this)));
//     }

// }

//------------------------------------------------------------END OF ADMIN ABOUT----------------------------------------------------------//
//------------------------------------------------------------END OF ADMIN ABOUT----------------------------------------------------------//
//------------------------------------------------------------END OF ADMIN ABOUT----------------------------------------------------------//
//------------------------------------------------------------END OF ADMIN ABOUT----------------------------------------------------------//
//------------------------------------------------------------END OF ADMIN ABOUT----------------------------------------------------------//
//------------------------------------------------------------END OF ADMIN ABOUT----------------------------------------------------------//
//------------------------------------------------------------END OF ADMIN ABOUT----------------------------------------------------------//
//------------------------------------------------------------END OF ADMIN ABOUT----------------------------------------------------------//

//------------------------------------------------------------ADMIN UNITS-----------------------------------------------------------------//
//------------------------------------------------------------ADMIN UNITS-----------------------------------------------------------------//
//------------------------------------------------------------ADMIN UNITS-----------------------------------------------------------------//
//------------------------------------------------------------ADMIN UNITS-----------------------------------------------------------------//

function AdminUnitsAddNew(){
    var AdminUnitsNewContainer = 
    `<div class='grid-item-container'>
        <div class='admin-units-image-holder my-2' data-toggle='modal' data-target='.bd-example-modal-xl'></div>
        <span class='d-flex justify-content-center mt-1'>
            <h5>Title Here</h5>
        </span>
    </div>`
    $(AdminUnitsNewContainer).insertBefore($(this));
    $(this).hide();
}

function AdminUnitSQR(){
    var AdminUnitDefVal = $(this).html();
    var AdminUnitToBeReplacedEL = $(this);
    var AdminUnitnewEL = $("<input type='textbox' class='AdminUnitTextBox w-100'/>")
    $(AdminUnitnewEL).val(AdminUnitDefVal)
    $(AdminUnitToBeReplacedEL).replaceWith($(AdminUnitnewEL));
    AdminUnitnewEL.focus();
    $(AdminUnitnewEL).on("keypress keyup blur",function (event) {
        //this.value = this.value.replace(/[^0-9\.]/g,'');
        $(this).val($(this).val().replace(/[^0-9\.]/g,''));
        if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
    });
    AdminUnitnewEL.blur(onBlur);
}

function onBlur(){
    var backtoReadable = $("<h5 class='text-center'></h5>")
    if($(this).val() != '..' && $(this).val() != ''){
        console.log("Meron");
        backtoReadable.html($(this).val())
        $(this).replaceWith(backtoReadable);
        backtoReadable.click(AdminUnitSQR);
    } else {
        backtoReadable.html("Click to Change Size(in sqr.m.)")
        $(this).replaceWith(backtoReadable);
        backtoReadable.click(AdminUnitSQR);
    }
    console.log($(this).val());
}
//------------------------------------------------------------END OF ADMIN UNITS----------------------------------------------------------//
//------------------------------------------------------------END OF ADMIN UNITS----------------------------------------------------------//
//------------------------------------------------------------END OF ADMIN UNITS----------------------------------------------------------//
//------------------------------------------------------------END OF ADMIN UNITS----------------------------------------------------------//
function AdminMap(){
    var MapAddress = $(this).parents("span").siblings("div").children("input").val();
    var frameSource = $(this).parents("span").siblings("iframe");
    console.log(MapAddress)
    console.log(frameSource.attr('src','https://maps.google.com/?q='+encodeURIComponent(MapAddress)+'&output=embed'));
}

// function getImg(image) {
//        header = image;
//        $.post('files/model/model.php',{e:'save_profile',header},function(data){  result=data },'json')
//         console.log('asdas');
//         //$('.admin-upload-new-container').parent().find('#blah')[0].currentSrc
// }

// function triggerClick(e) {
//     console.log('nasa trigger ka!')
//     document.querySelector('#profileImage').click();

//   }
//   function displayImage(e) {
//     if (e.files[0]) {
//       var reader = new FileReader();
//       reader.onload = function(e){
//           console.log($('#profileImage').val().split('\\')[2]);
//         header = $('#profileImage').val().split('\\')[2];
//         document.querySelector('#profileDisplay').setAttribute('src', e.target.result);
//         $.post('files/model/model.php',{e:'save_header',header},function(){},'json')
//         // getImg(e.target.result);
//       }
//       reader.readAsDataURL(e.files[0]);
//     }
//   }
