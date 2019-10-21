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
                            var $this = $(this);
                                if ($this.data('clicked')) { console.log('oops') } else {
                                    $this.data('clicked',true);
                                        let chooseImage = document.getElementById('uploadImage');
                                        let submitImage = document.getElementById('inputGroupFileAddon04');
                                        let view = 'view_'+title.toLowerCase();
                                           
                                            $('#'+chooseImage.id).on('change',function(){
                                                console.log('new Upload');
                                                _main._events.change('image',this);
                                            });
                                            $('#'+submitImage.id).on('click',function(e){
                                                e.preventDefault();
                                                _main._properties.insert('image',$('#'+chooseImage.id));
                                            });
                                                _main._method.view(view,$('.admin-content-card-body'));
                                }
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
    
    var AdminUnitsCategory = []
    var Admin_unit_1b = {"OneBedRoom":[{"UnitType":"only"},{"UnitType":"with balcony"},{"UnitType":"end unit"},{"UnitType":"end unit with balcony"},{"UnitType":"with den"},{"UnitType":"with den and balcony"},{"UnitType":"corner den with balcony"}]};
    var Admin_unit_2b = {"TwoBedRoom":[{"UnitType":"only"},{"UnitType":"with balcony"},{"UnitType":"end unit"},{"UnitType":"end unit with balcony"},{"UnitType":"with mezzanine"},{"UnitType":"end unit with mezzanine"},{"UnitType":"with mezzanine and balcony"},{"UnitType":"end unit with mezzanine with balcony"},{"UnitType":"Family Suite A"},{"UnitType":"Family Suite B"}]};
    var Admin_unit_studio = {"Studio":[{"UnitType":"unit only"},{"UnitType":"unit with balcony"},{"UnitType":"deluxe with balcony"},{"UnitType":"combined two studio units"}]};
    var Admin_unit_famsuite = {"FamilySuite":[{"UnitType":"A with balcony"},{"UnitType":"B with balcony"}]};
    AdminUnitsCategory.push(Admin_unit_1b,Admin_unit_2b,Admin_unit_studio,Admin_unit_famsuite);
    console.log(AdminUnitsCategory)

    $('.admin-unit-category-dd').on('change' ,function(){
        var cat = $(this).find(":selected").attr('data-index');
        var UniTtypeOptions = $(this).parents().first().next("div").find("select");
        var aa = Object.values(Object.values(AdminUnitsCategory)[cat])[0];
        var aalength = Object.keys(Object.values(aa)).length;
        var bb = '';
        var i = 0;
        while (i < aalength) {
            bb += "<option>"+Object.values(aa)[i].UnitType+"</option>"
            i++;
        }
        $(UniTtypeOptions).html("<option></option>"+bb);
        $('.AuC').html($(this).val());
        $('.admin-unit-unittype-dd').on('change',function(){
            $('.AuT').html(' '+$(this).val());
            $('.admin-units-image-holder').next("div").find("h5").text();
        });
    });

    
    $(document).on("click", ".admin-units-image",AdminUnitEditing)
});



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
        <div class='admin-units-image my-2' data-toggle='modal' data-target='.bd-example-modal-xl'></div>
        <span class='d-flex justify-content-center mt-1'>
            <h5>Title Here</h5>
        </span>
    </div>`
    $(AdminUnitsNewContainer).insertBefore($(this));
    $(this).hide();
    // $('.admin-units-image').click(function)
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
        backtoReadable.html($(this).val())
        $(this).replaceWith(backtoReadable);
        backtoReadable.click(AdminUnitSQR);
    } else {
        backtoReadable.html("Click to Change Size(in sqr m)")
        $(this).replaceWith(backtoReadable);
        backtoReadable.click(AdminUnitSQR);
    }
}

var AdminUnitMainArray = new Array();
function AdminUnitSaving(){
    var e = {};
    var a = $('.Admin-unit-new').find("select.admin-unit-category-dd").val()
    var b = $('.Admin-unit-new').find("select.admin-unit-unittype-dd").val()
    var c = $('.Admin-unit-new').find("div.admin-units-floorplan-image-holder").next("div").find("h5").text()
    var d  = "IMAGE URL HERE"
    e.UnitCategory = a;
    e.UnitType = b;
    e.UnitSize = c;
    e.UnitImageURL = d;
    AdminUnitMainArray.push(e);
    var f = AdminUnitMainArray.length-1;
    console.log(AdminUnitMainArray);
    $('.AdminUnit-ADNEW').prev("div.grid-item-container").first().attr('data-index', f);
    $('.AdminUnit-ADNEW').show();
}

function AdminUnitEditing(){
    var data_index = $(this).parents("div.grid-item-container").attr('data-index');
    var valuess = AdminUnitMainArray
    if (data_index == undefined){
        console.log("undefined boi")
        $(".AuC").html('Select Category')
        $(".AuT").html('')
        $('.Admin-unit-new').find("select.admin-unit-category-dd").val('')
        $('.Admin-unit-new').find("select.admin-unit-unittype-dd").val('')
        $('.Admin-unit-new').find("div.admin-units-floorplan-image-holder").next("div").find("h5").text('Click to Change Size(in sqr m)')
        $(".Admin-unit-Save").one("click" ,AdminUnitSaving)
        var a = valuess[data_index]
        // console.log($(this).parents("div.grid-item-container").eq($(this).index()).find("h5").html());
        console.log(a);
    } else {
        console.log("meron")
        $(".AuC").html(valuess[data_index].UnitCategory)
        $(".AuT").html(valuess[data_index].UnitType)
        $('.admin-unit-category-dd').val(valuess[data_index].UnitCategory)
        $('.admin-unit-unittype-dd').val(valuess[data_index].UnitType)
        $('.admin-units-floorplan-image-holder').next("div").find("h5").text(valuess[data_index].UnitSize)
        console.log(valuess)
        $(".Admin-unit-Save").one("click", function(){
            valuess[data_index].UnitCategory = $('.admin-unit-category-dd').val();
            valuess[data_index].UnitType = $('.admin-unit-unittype-dd').val();
            valuess[data_index].UnitSize = $('.admin-units-floorplan-image-holder').next("div").find("h5").text();
        });
    }
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