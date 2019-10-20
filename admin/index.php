<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="font-awesome/css/all.css">
    <link rel="stylesheet" href="font-awesome/css/fontawesome.css">  
    <link rel="stylesheet" href="css/bootstrap.css">  
    <link rel="stylesheet" href="style/style.css">  
    <title>Kaye Admin</title>
</head>
<body>
    <nav class="navbar navbar-dark bg-dark">
        <div>
            <span class="admin-sidenavburger">
                <a class="text-white" href="#">
                    <i class="fas fa-bars"></i>
                </a>
            </span>
            <span class="navbar-brand">Admin</span>
        </div>
        <span class="navbar-brand admin-selected-project"></span>
        <span class="navbar-brand">Save/logout</span>
    </nav>
    
    <!-- <div class="alert alert-danger" role="alert">
        A simple danger alert—check it out!
    </div> -->

    <div class="d-none d-md-flex">
        <div class="bg-secondary admin-sidenav admin-sidenav-open">
            <div class="container">
                <div class="my-2">
                    <button class="dropdown-toggle btn btn-lg btn-block text-left text-white d-flex align-items-center" type="button" data-toggle="collapse" data-target="#admin-collapse-projects" aria-expanded="false" aria-controls="admin-collapse-projects">
                        Projects
                    </button>
                    <div class="admin-projects collapse" id="admin-collapse-projects">  
                        <button class="dropdown-toggle btn btn-md btn-block text-left pl-4 text-white d-flex align-items-center" type="button" data-toggle="collapse" data-target="#admin-collapse-projects-premiere" aria-expanded="false" aria-controls="admin-collapse-projects-premiere">
                            Premiere
                        </button>
                        <div class="admin-projects-premiere collapse" id="admin-collapse-projects-premiere">
                            <ul class="text-white">
                                <li id="Coast">Coast</li>
                                <li id="Share3">Share 3</li>
                                <li id="SResidences" >S Residences</li>
                                <li id="Light2" >Light 2</li>
                                <li id="Air" >Air</li>
                                <li id="Red" >Red</li>
                                <li id="Lush" >Lush</li>
                            </ul>
                        </div>  
                        <button class="dropdown-toggle btn btn-md btn-block text-left pl-4 text-white d-flex align-items-center" type="button" data-toggle="collapse" data-target="#admin-collapse-projects-preselling" aria-expanded="false" aria-controls="admin-collapse-projects-preselling">
                            Preselling
                        </button>
                        <div class="admin-projects-preselling collapse" id="admin-collapse-projects-preselling">
                            <ul class="text-white">
                                <li id="Trees">Trees</li>
                                <li id="Field">Field</li>
                                <li id="Park">Park</li>
                                <li id="Bloom">Bloom</li>
                                <li id="Fern Grass">Fern Grass</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="my-2">
                    <button class="dropdown-toggle btn btn-lg btn-block text-left text-white d-flex align-items-center" type="button" data-toggle="collapse" data-target="#admin-collapse-section" aria-expanded="false" aria-controls="admin-collapse-section">
                        Sections
                    </button>
                    <div class="admin-sections collapse" id="admin-collapse-section">
                        <ul class="text-white">
                            <li data-page="Header" id="Header">Header</li>
                            <li data-page="About" id="About">About</li>
                            <li data-page="Units" id="Units">Units</li>
                            <li data-page="Summary of Prices" id="SummaryofPrices">Summary of Prices</li>
                            <li data-page="Amenities" id="Amenities">Amenities</li>
                            <li data-page="Maps" id="Maps">Maps</li>
                            <li data-page="Contact and Inquire" id="ContactandInquire">Contact and Inquire</li>
                        </ul>
                    </div>
                </div>
            </div> 
        </div>
        <div class="admin-content position-absolute">
            <div class="admin-content-title container-fluid">
                <h2 class="title mt-4"></h2>  
            </div>
            <section class="page admin-content-Header-section">
                <div class="admin-content-card-container row container h-100 m-auto">
                    <div class="admin-content-card-body col-4 my-5 admin-upload-new-container header">
                        <div class="admin-content-card-body-inner m-auto">
                            <div class="h-100 d-flex align-items-center px-3 position-relative admin-upload-new">
                                <form id="form" class="h-60 mt-5 header-form" action="files/model/model.php" method="post" enctype="multipart/form-data">
                                    <input class="w-100" id="uploadImage" type="file" accept="image/*" name="image" />
                                        <div id="preview">
                                            <img id="preview-img" class="d-none position-absolute m-auto" src="#" alt="your image"/>
                                        </div>
                                            <input class="header-upload btn btn-success d-none" type="submit" value="Upload">
                                </form>
                                    <div id="err">
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </section>
            <section class="page admin-content-About-section">
                <div class="container">
                    <div class="admin-content-About-item-container">
                        <p style="border:1px solid gray;padding:5px;white-space:pre-wrap;"></p>
                    </div>
                    <!-- <button class="btn btn-secondary admin-About-Add">Add New</button> -->
                    <span class="admin-About-btns" style="display:none;">
                        <button class="btn btn-secondary admin-About-new-Insert">Save</button>
                        <button class="btn btn-secondary admin-About-new-cancel">Cancel</button>
                    </span>
                </div>
            </section>
            <section class="page admin-content-Units-section">
                <div class="container">
                    <div class="w-100 Admin-Unit-grid">
                        <button class="btn btn-secondary m-auto AdminUnit-ADNEW" style="height:40px;width:180px">Add New Unit Photo</button>
                    </div>
                </div>
            </section>
            <section class="page admin-content-Maps-section">
                <div class="container">
                    <div>
                        <iframe width="100%" height="450" frameborder="0" style="border:0" src allowfullscreen></iframe>
                        <div>
                            <input class="mb-2 w-100" type="textbox"/>
                        </div>
                        <span>
                            <button class="btn btn-secondary Admin-change-map">
                                Change Map
                            </button>
                        </span>
                    </div>
                </div>
            </section>
        </div>
    </div>
    <div class="d-flex d-md-none">
        <div class="bg-secondary admin-sidenav-md admin-sidenav-open">
            <div class="container">
                <div class="my-2 d-flex justify-content-end">
                    <button class="btn text-white text-right admin-sidenav-close" type="button">
                        <span>
                            <i class="fa fa-times"></i>
                        </span>
                    </button>
                </div>
                <div class="my-2">
                    <button class="dropdown-toggle btn btn-lg btn-block text-left text-white d-flex align-items-center" type="button" data-toggle="collapse" data-target="#admin-collapse-projects" aria-expanded="false" aria-controls="admin-collapse-projects">
                        Projects
                    </button>
                    <div class="admin-projects collapse" id="admin-collapse-projects">  
                        <button class="dropdown-toggle btn btn-md btn-block text-left pl-4 text-white d-flex align-items-center" type="button" data-toggle="collapse" data-target="#admin-collapse-projects-premiere" aria-expanded="false" aria-controls="admin-collapse-projects-premiere">
                            Premiere
                        </button>
                        <div class="admin-projects-premiere collapse" id="admin-collapse-projects-premiere">
                            <ul class="text-white">
                                <li id="COAST">Coast</li>
                                <li id="SHARE3">Share 3</li>
                                <li id="SRESIDENCES">S Residences</li>
                                <li id="LIGHT2">Light 2</li>
                                <li id="AIR">Air</li>
                                <li id="RED">Red</li>
                                <li id="LUSH">Lush</li>
                            </ul>
                        </div>  
                        <button class="dropdown-toggle btn btn-md btn-block text-left pl-4 text-white d-flex align-items-center" type="button" data-toggle="collapse" data-target="#admin-collapse-projects-preselling" aria-expanded="false" aria-controls="admin-collapse-projects-preselling">
                            Preselling
                        </button>
                        <div class="admin-projects-preselling collapse" id="admin-collapse-projects-preselling">
                            <ul class="text-white">
                                <li id="TREES">Trees</li>
                                <li id="FIELD">Field</li>
                                <li id="PARK">Park</li>
                                <li id="BLOOM">Bloom</li>
                                <li id="FERNGRASS">Fern Grass</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="my-2">
                    <button class="dropdown-toggle btn btn-lg btn-block text-left text-white d-flex align-items-center" type="button" data-toggle="collapse" data-target="#admin-collapse-section" aria-expanded="false" aria-controls="admin-collapse-section">
                        Sections
                    </button>
                    <div class="admin-sections collapse" id="admin-collapse-section">
                        <ul class="text-white">
                            <li>Header</li>
                            <li>About</li>
                            <li>Units</li>
                            <li>Summary of Prices</li>
                            <li>Amenities</li>
                            <li>Maps Location</li>
                            <li>Contact/Inquire</li>
                        </ul>
                    </div>
                </div>
            </div> 
        </div>
        <div class="admin-content-md">
            <div class="admin-content-title container-fluid">
                <h2></h2>
                <div class="admin-content-card">
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade bd-example-modal-xl Admin-unit-new" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">Upload New Image</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                <div class="row admin-unit-change">
                    <div class="my-2 col-12 col-lg-6 admin-unit-modal-holder">
                        <h5 class="text-center">Unit</h5>
                        <div class="admin-units-image-holder mb-2"></div>
                        <div class="w-50 m-auto">
                            <h5 class="text-center AdminUnitName">
                                <span class="AuC">Select Category</span>
                                <span class="AuT"></span>
                            </h5>
                        </div>
                    </div>
                    <div class="my-2 col-12 col-lg-6 admin-unit-modal-holder">
                        <h5 class="text-center">Floor Plan</h5>
                        <div class="admin-units-floorplan-image-holder mb-2"></div>
                        <div class="w-50 m-auto">
                            <h5 class="text-center">Click to Change Size(in sqr m)</h5>
                        </div>
                    </div>
                    <div class="Admin-unit-modal-grid-container">
                        <div class="Admin-unit-modal-grid-item text-center">
                            <div class="mx-2 mb-1">Category:</div>
                            <div class="mx-2 mb-1">Unit-type:</div>
                        </div>
                        <div class="Admin-unit-modal-grid-item">
                            <div class="mb-1">
                                <select class="admin-unit-category-dd w-100">
                                    <option></option>
                                    <option value="One Bedroom" data-index=0>1 BedRoom</option>
                                    <option value="Two Bedroom" data-index=1>2 BedRoom</option>
                                    <option value="Studio" data-index=2>Studio</option>
                                    <option value="Family Suite" data-index=3>Family Suite</option>
                                </select>
                            </div>
                            <div class="mb-1">
                                <select class="admin-unit-unittype-dd w-100">
                                    <option></option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary Admin-unit-Save" data-dismiss="modal" name="add">Save changes</button>
                    <button type="button" class="btn btn-secondary Admin-unit-Cancel" data-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-secondary Admin-unit-Delete" data-dismiss="modal">Delete</button>
                </div>
            </div>
        </div>
    </div>

    <script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.js"></script>
    <script src="function/function.js"></script>

</body>
</html>


<!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mi mi, tristique id tempor ut, sodales quis justo. 
In hac habitasse platea dictumst. Phasellus tincidunt, enim quis ultricies vulputate, purus diam imperdiet dui, 
non ultricies velit ligula congue massa. Nullam sed facilisis ligula. Nullam et eleifend tellus. Ut placerat nulla 
turpis, nec pretium diam sollicitudin ac. Sed dignissim mi id sem bibendum convallis. Nullam enim purus, venenatis 
nec accumsan id, fermentum nec leo. Integer sed purus ligula. Etiam nulla augue, facilisis a massa a, aliquet venenatis 
ante. Proin cursus vitae dui sed consequat. -->


<!-- <div class="admin-content-card-body col-4 my-5">
    <div class="admin-content-card-body-inner m-auto">
        <div class="h-100 d-flex align-items-center px-3 position-relative admin-image-banner-item">
            <img id="blah" src="#" alt="your image"/>
        </div>
    </div>
</div> -->