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
            console.log(decodeURIComponent(content_page_sections));
            $('.admin-content-title h2').text(content_page_sections);
            $('.page').hide();
            $('.admin-content-'+ decodeURIComponent(content_page_sections)+'-section').show();
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

    $("#uploadImage").on('change',function(e) {
        readURL(this);
        console.log(this);
        $('#preview-img').removeClass('d-none');
      });


    $("#form").on('submit',(function(e) {
        console.log('submitted!');
        console.log(e);
        e.preventDefault();
            var images = new FormData(this);
            images.append('e', 'save_header');
                    $.ajax({
                        url: "files/model/model.php",
                        type: "POST",
                        data:  images,
                        contentType: false,
                        cache: false,
                        processData:false,
                            success: function(data) {
                                console.log(data);
                                if(data=='invalid') {
                                    $("#err").html("Invalid File !").fadeIn();
                                } else {
                                    // $("#preview-img").html(data).fadeIn();
                                    var a = $(data).attr('class').split(' ')[0],
                                        c = $(data).attr('src');
                                    console.log(a);
                                    console.log(c);
                                    $(data).removeClass('d-none');
                                    console.log($(data).removeClass('d-none'));
                                    $('#preview-img').addClass('d-none');
                                    // $("#form")[0].reset(); 

                                    var b = `<div class="admin-content-card-body col-4 my-5 admin-upload-new-container">
                                    <div class="admin-content-card-body-inner m-auto">
                                        <div class="h-100 d-flex align-items-center px-3 position-relative admin-upload-new">
                                           
                                                <form id="form" class="h-60 mt-5" action="files/model/model.php" method="post" enctype="multipart/form-data">
                                                
                                            
                                                    <img id="preview" class="`+a+` position-absolute m-auto" src="`+c+`" alt="your image"/>
                                                
                                                    
                                                </form>
                                        </div>
                                    </div>
                                </div>`
                                console.log(b);
                                $(b).insertBefore('.admin-upload-new-container');
                                }
                            },  
                    });
                    // $.post('files/model/model.php',{e:'view_header',header},function(data){  result=data },'json')
       }));

});

// $(document).on("click", ".admin-content-About-item-container" , forAboutEdit)

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function(e) {
        $('#preview-img').attr('src', e.target.result);
            // getImg(e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
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
    var editableText = $("<textarea class='admin-text-area admin-text-area-edit' name='p' id='p' cols='30' rows='10' style='width:100%;'/>");
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
