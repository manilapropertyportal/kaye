$(document).ready(function(){

    

    $('.admin-sidenavburger').click(function(){
        if($('.admin-sidenav, .admin-sidenav-md').hasClass('admin-sidenav-open')){
            $('.admin-sidenav, .admin-sidenav-md').hide().removeClass('admin-sidenav-open');
        } else {
            $('.admin-sidenav, .admin-sidenav-md').show().addClass('admin-sidenav-open');
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

    $('.admin-About-new-cancel').click(function(){
        console.log($(this).parents().siblings("textarea").remove())
        console.log($(this).parents().eq(0).hide())
        $('.admin-About-Add').show();
    });

    $('.admin-About-new-Insert').click(forAboutNew)
    // $('.admin-content-About-item-container').on('click', forAboutEdit)

//------------------------------------------------------------ IMAGE UPLOADING ------------------------------------------------------------------------------------------------//
//------------------------------------------------------------ IMAGE UPLOADING ------------------------------------------------------------------------------------------------//
//------------------------------------------------------------ IMAGE UPLOADING ------------------------------------------------------------------------------------------------//
//------------------------------------------------------------ IMAGE UPLOADING ------------------------------------------------------------------------------------------------//
//------------------------------------------------------------ IMAGE UPLOADING ------------------------------------------------------------------------------------------------//
//------------------------------------------------------------ IMAGE UPLOADING ------------------------------------------------------------------------------------------------//
//------------------------------------------------------------ IMAGE UPLOADING ------------------------------------------------------------------------------------------------//
//------------------------------------------------------------ IMAGE UPLOADING ------------------------------------------------------------------------------------------------//
//------------------------------------------------------------ IMAGE UPLOADING ------------------------------------------------------------------------------------------------//

    

    $("#admin-header-upload").change(function() {
        var uploadedd = `<div class="admin-content-card-body col-4 my-5"><div class="admin-content-card-body-inner m-auto admin-image-banner-item"><div class="h-100 d-flex align-items-center px-3 position-relative"><img id="blah" src="#" alt="your image"/><div class="justify-content-end admin-uploaded-img"><button class="btn btn-secondary admin-edit-banner mx-2">Edit</button><button class="btn btn-secondary cancel">Cancel</button></div></div></div></div>`

        $(uploadedd).insertBefore('.admin-upload-new-container');
        readURL(this);
        
        $('#blah').click(function(){
           $('.admin-uploaded-img').show().addClass('d-flex');
           $(this).css({opacity:'0.5'});
        });  
        $('.cancel').click(function(){
            $('.admin-uploaded-img').removeClass('d-flex').hide();
            $('#blah').css({opacity:'1'});
        });

    });
});

$(document).on("click", ".admin-content-About-item-container" , forAboutEdit)

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function(e) {
        $('#blah').attr('src', e.target.result);
        const img = $('#blah').attr('src');
            getImg(img);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

//---------------------------------------------------------------- END OF IMAGE UPLOADING-----------------------------------------------------------//
//---------------------------------------------------------------- END OF IMAGE UPLOADING-----------------------------------------------------------//
//---------------------------------------------------------------- END OF IMAGE UPLOADING-----------------------------------------------------------//
//---------------------------------------------------------------- END OF IMAGE UPLOADING-----------------------------------------------------------//
//---------------------------------------------------------------- END OF IMAGE UPLOADING-----------------------------------------------------------//
//---------------------------------------------------------------- END OF IMAGE UPLOADING-----------------------------------------------------------//
//---------------------------------------------------------------- END OF IMAGE UPLOADING-----------------------------------------------------------//
//---------------------------------------------------------------- END OF IMAGE UPLOADING-----------------------------------------------------------//
//---------------------------------------------------------------- END OF IMAGE UPLOADING-----------------------------------------------------------//
//---------------------------------------------------------------- END OF IMAGE UPLOADING-----------------------------------------------------------//



function forAboutEdit(){
    var thiscontainer = $(this).find("p").html();
    var editableText = $("<textarea class='admin-text-area admin-text-area-edit' name='p' id='p' cols='30' rows='10' style='width:100%;'/>")
    editableText.val(thiscontainer)
    $(this).find("p").replaceWith(editableText);
    editableText.focus();
    if ($(this).next().hasClass('admin-about-edit-btns-container')){
        console.log("meron")     
    } else {
        console.log("wala")
        $("<div class='d-flex justify-content-end admin-about-edit-btns-container'><button class='btn btn-secondary admin-saveNew-about mx-2'>Save New Changes</button><button class='btn btn-secondary admin-about-edit-cancel'>Cancel</button></div>").insertAfter($(this));
    }
}
    
var AdminAbout = new Array();

function forAboutNew(){

    var AdminAboutData = {};
    var AboutNewToBeReplaced = $(this).parents().siblings("textarea");
    var AboutNewDiv = $("<div class='admin-content-About-item-container'><p></p></div>");
    var AboutNewval = $(this).parents().siblings("textarea").val();
    AboutNewDiv.find("p").html(AboutNewval)
    AboutNewToBeReplaced.replaceWith(AboutNewDiv);
    AdminAboutData.content = AboutNewval;
    AdminAbout.push(AdminAboutData);
    console.log(AdminAbout)
    console.log(localStorage.setItem("AdminAbout",JSON.stringify(AdminAbout)));
    var AdminAboutStorage = JSON.parse(localStorage.getItem("AdminAbout"));
    console.log(AdminAboutStorage)

    $('.admin-About-Add').show();
    $(this).parents().eq(0).hide();

}

function getImg(image) {
       header = image;
        $.ajax({
            url: 'files/model/model.php',
            type: 'POST',
            data: {e:'header',header},
            dataType: "json",
            async: false,
            success: function(data){
                result=data;
                
            }
        });
        //$('.admin-upload-new-container').parent().find('#blah')[0].currentSrc
}   