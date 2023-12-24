import React from 'react'

const Events = () => {
  return (
    <>
      <body class="font-nunito text-base text-black dark:text-white dark:bg-slate-900">
       
       {/* <div id="preloader">
            <div id="status">
                <div class="spinner">
                    <div class="double-bounce1"></div>
                    <div class="double-bounce2"></div>
                </div>
            </div>
        </div>  */}
       
       
            <nav id="topnav" className="defaultscroll is-sticky bg-white header">
                <div className="container flex justify-between ">

                    


                    

                    <div id="navigation">

                        <ul className="navigation-menu ">
                        <li><a href="/" className="sub-menu-item" >Home</a></li>
                        <li><a href="/" className="sub-menu-item" >Events</a></li>
                        <li><a href="/" className="sub-menu-item" >About us</a></li>
                                  

                            

                            
                        </ul>
                    </div>
                </div>
            </nav>




    
       
       
        <section class="relative md:py-56 py-44 bg-[url('../../assets/images/photography/photographer.jpg')] bg-cover jarallax" data-jarallax data-speed="0.5" id="aboutme">
            <div class="absolute inset-0 h-full w-full bg-gradient-to-t to-transparent via-white/80 dark:via-slate-900/80 from-white dark:from-slate-900"></div>

            <div class="absolute text-center p-6 bottom-0 left-0 right-0">
                <h3 class="md:text-3xl md:leading-normal text-2xl leading-normal font-bold">Events</h3>
            </div>
        </section>
       
        <section class="relative md:py-24 py-16">
            <div class="container">
                <div class="grid grid-cols-1 items-center gap-[30px]">
                    <div class="filters-group-wrap text-center">
                        <div class="filters-group">
                            <ul class="mb-0 list-none container-filter-border-bottom filter-options">
                                <li class="inline-block text-lg font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-slate-400 transition duration-500 active" data-group="all">All</li>
                                <li class="inline-block text-lg font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-slate-400 transition duration-500" data-group="Janmashtami">Janmashtami</li>
                                <li class="inline-block text-lg font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-slate-400 transition duration-500" data-group="GST">GST Seminar</li>
                               
                                <li class="inline-block text-lg font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-slate-400 transition duration-500" data-group="Teachers">Teachers Day</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div id="grid" class="md:flex justify-center mx-auto mt-4">
                    <div class="lg:w-1/4 md:w-1/3 p-1 picture-item" data-groups='["Janmashtami"]'>
                        <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                            <img src="assets/images/photography/p1.jpg" class="" alt="work-image"/>
                            <div class="absolute top-1/2 -translate-y-1/2 right-0 left-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                                <a href="assets/images/photography/p1.jpg" class="btn btn-icon rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox"><i class="uil uil-camera"></i></a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="lg:w-1/4 md:w-1/3 p-1 picture-item" data-groups='["GST"]'>
                        <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                            <img src="assets/images/photography/p2.jpg" class="" alt="work-image"/>
                            <div class="absolute top-1/2 -translate-y-1/2 right-0 left-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                                <a href="assets/images/photography/p2.jpg" class="btn btn-icon rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox"><i class="uil uil-camera"></i></a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="lg:w-1/4 md:w-1/3 p-1 picture-item" data-groups='["Janmashtami"]'>
                        <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                            <img src="assets/images/photography/p3.jpg" class="" alt="work-image"/>
                            <div class="absolute top-1/2 -translate-y-1/2 right-0 left-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                                <a href="assets/images/photography/p3.jpg" class="btn btn-icon rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox"><i class="uil uil-camera"></i></a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="lg:w-1/4 md:w-1/3 p-1 picture-item" data-groups='["GST"]'>
                        <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                            <img src="assets/images/photography/p4.jpg" class="" alt="work-image"/>
                            <div class="absolute top-1/2 -translate-y-1/2 right-0 left-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                                <a href="assets/images/photography/p4.jpg" class="btn btn-icon rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox"><i class="uil uil-camera"></i></a>
                            </div>
                        </div>
                    </div>
                    
                   
                    
                    <div class="lg:w-1/4 md:w-1/3 p-1 picture-item" data-groups='["Janmashtami"]'>
                        <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                            <img src="assets/images/photography/p6.jpg" class="" alt="work-image"/>
                            <div class="absolute top-1/2 -translate-y-1/2 right-0 left-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                                <a href="assets/images/photography/p6.jpg" class="btn btn-icon rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox"><i class="uil uil-camera"></i></a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="lg:w-1/4 md:w-1/3 p-1 picture-item" data-groups='["GST"]'>
                        <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                            <img src="assets/images/photography/p7.jpg" class="" alt="work-image"/>
                            <div class="absolute top-1/2 -translate-y-1/2 right-0 left-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                                <a href="assets/images/photography/p7.jpg" class="btn btn-icon rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox"><i class="uil uil-camera"></i></a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="lg:w-1/4 md:w-1/3 p-1 picture-item" data-groups='["GST"]'>
                        <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                            <img src="assets/images/photography/p8.jpg" class="" alt="work-image"/>
                            <div class="absolute top-1/2 -translate-y-1/2 right-0 left-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                                <a href="assets/images/photography/p8.jpg" class="btn btn-icon rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox"><i class="uil uil-camera"></i></a>
                            </div>
                        </div>
                    </div>

                  
                    
                
                    
                    <div class="lg:w-1/4 md:w-1/3 p-1 picture-item" data-groups='["Teachers"]'>
                        <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                            <img src="assets/images/photography/p11.jpg" class="" alt="work-image"/>
                            <div class="absolute top-1/2 -translate-y-1/2 right-0 left-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                                <a href="assets/images/photography/p11.jpg" class="btn btn-icon rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox"><i class="uil uil-camera"></i></a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="lg:w-1/4 md:w-1/3 p-1 picture-item" data-groups='["Teachers"]'>
                        <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                            <img src="assets/images/photography/p12.jpg" class="" alt="work-image"/>
                            <div class="absolute top-1/2 -translate-y-1/2 right-0 left-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                                <a href="assets/images/photography/p12.jpg" class="btn btn-icon rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox"><i class="uil uil-camera"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="lg:w-1/4 md:w-1/3 p-1 picture-item" data-groups='["Teachers"]'>
                        <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                            <img src="assets/images/photography/p21.jpg" class="" alt="work-image"/>
                            <div class="absolute top-1/2 -translate-y-1/2 right-0 left-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                                <a href="assets/images/photography/p21.jpg" class="btn btn-icon rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox"><i class="uil uil-camera"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="lg:w-1/4 md:w-1/3 p-1 picture-item" data-groups='["Teachers"]'>
                        <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                            <img src="assets/images/photography/p22.jpg" class="" alt="work-image"/>
                            <div class="absolute top-1/2 -translate-y-1/2 right-0 left-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                                <a href="assets/images/photography/p22.jpg" class="btn btn-icon rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox"><i class="uil uil-camera"></i></a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="lg:w-1/4 md:w-1/3 p-1 picture-item" data-groups='["Teachers"]'>
                        <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                            <img src="assets/images/photography/p23.jpg" class="" alt="work-image"/>
                            <div class="absolute top-1/2 -translate-y-1/2 right-0 left-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                                <a href="assets/images/photography/p23.jpg" class="btn btn-icon rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox"><i class="uil uil-camera"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="lg:w-1/4 md:w-1/3 p-1 picture-item" data-groups='["Teachers"]'>
                        <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                            <img src="assets/images/photography/p24.jpg" class="" alt="work-image"/>
                            <div class="absolute top-1/2 -translate-y-1/2 right-0 left-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                                <a href="assets/images/photography/p24.jpg" class="btn btn-icon rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox"><i class="uil uil-camera"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="lg:w-1/4 md:w-1/3 p-1 picture-item" data-groups='["Teachers"]'>
                        <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                            <img src="assets/images/photography/p25.jpg" class="" alt="work-image"/>
                            <div class="absolute top-1/2 -translate-y-1/2 right-0 left-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                                <a href="assets/images/photography/p25.jpg" class="btn btn-icon rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox"><i class="uil uil-camera"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="lg:w-1/4 md:w-1/3 p-1 picture-item" data-groups='["Teachers"]'>
                        <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                            <img src="assets/images/photography/p26.jpg" class="" alt="work-image"/>
                            <div class="absolute top-1/2 -translate-y-1/2 right-0 left-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                                <a href="assets/images/photography/p26.jpg" class="btn btn-icon rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox"><i class="uil uil-camera"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="lg:w-1/4 md:w-1/3 p-1 picture-item" data-groups='["GST"]'>
                        <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                            <img src="assets/images/photography/p13.jpg" class="" alt="work-image"/>
                            <div class="absolute top-1/2 -translate-y-1/2 right-0 left-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                                <a href="assets/images/photography/p13.jpg" class="btn btn-icon rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox"><i class="uil uil-camera"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="lg:w-1/4 md:w-1/3 p-1 picture-item" data-groups='["GST"]'>
                        <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                            <img src="assets/images/photography/p27.jpg" class="" alt="work-image"/>
                            <div class="absolute top-1/2 -translate-y-1/2 right-0 left-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                                <a href="assets/images/photography/p27.jpg" class="btn btn-icon rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox"><i class="uil uil-camera"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="lg:w-1/4 md:w-1/3 p-1 picture-item" data-groups='["GST"]'>
                        <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                            <img src="assets/images/photography/p28.jpg" class="" alt="work-image"/>
                            <div class="absolute top-1/2 -translate-y-1/2 right-0 left-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                                <a href="assets/images/photography/p28.jpg" class="btn btn-icon rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox"><i class="uil uil-camera"></i></a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="lg:w-1/4 md:w-1/3 p-1 picture-item" data-groups='["GST"]'>
                        <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                            <img src="assets/images/photography/p14.jpg" class="" alt="work-image"/>
                            <div class="absolute top-1/2 -translate-y-1/2 right-0 left-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                                <a href="assets/images/photography/p14.jpg" class="btn btn-icon rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox"><i class="uil uil-camera"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="lg:w-1/4 md:w-1/3 p-1 picture-item" data-groups='["GST"]'>
                        <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                            <img src="assets/images/photography/p19.jpg" class="" alt="work-image"/>
                            <div class="absolute top-1/2 -translate-y-1/2 right-0 left-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                                <a href="assets/images/photography/p19.jpg" class="btn btn-icon rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox"><i class="uil uil-camera"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="lg:w-1/4 md:w-1/3 p-1 picture-item" data-groups='["GST"]'>
                        <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                            <img src="assets/images/photography/p20.jpg" class="" alt="work-image"/>
                            <div class="absolute top-1/2 -translate-y-1/2 right-0 left-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                                <a href="assets/images/photography/p20.jpg" class="btn btn-icon rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox"><i class="uil uil-camera"></i></a>
                            </div>
                        </div>
                    </div>
                    
                  
                    <div class="lg:w-1/4 md:w-1/3 p-1 picture-item" data-groups='["GST"]'>
                        <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                            <img src="assets/images/photography/p17.jpg" class="" alt="work-image"/>
                            <div class="absolute top-1/2 -translate-y-1/2 right-0 left-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                                <a href="assets/images/photography/p17.jpg" class="btn btn-icon rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox"><i class="uil uil-camera"></i></a>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>

                
            </div>
        </section>
        
        
        

      
       
        
  
    </body>
    
    </>
  )
}

export default Events