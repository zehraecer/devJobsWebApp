const heroContainer = document.querySelector(".hero-container")
const formContainerHero = document.querySelector(".form-container-hero")
const searchForm = document.querySelector(".searchForm")
const checkbox = document.querySelector("#checkbox")


async function getFetch(){
    const response = await fetch("assets/json/data.json")
    const data = await response.json();
    // console.log(data);
    return data
}


async function getData(){
    const response = await getFetch()

    for (const data of response) {
        heroContainer.innerHTML+=`
                         <div data-id ="${data.id}" class="hero">
                
                                <div class="hero-box">
                                    <p> ${data.postedAt}<span>.${data.contract}</span></p>
                                    <h3 class="showDetail">${data.position}</h3>
                                    <h4>${data.company}</h4>
                                    <h6>${data.location}</h6>
                                </div>
                                <img src="${data.logo}" alt="">

                        </div>
        `
    }
    showDetail()
    
}






async function showDetail(){
    const details = document.querySelectorAll(".showDetail")
    for (const detail of details) {
        detail.addEventListener("click",async function(){
            formContainerHero.innerHTML=""
            const id = this.parentElement.parentElement.dataset.id
            // console.log(id);
            const dataId = await getFetch()
            const data = dataId[id-1]
            console.log(data);

            formContainerHero.innerHTML+=`
            <!--"header-detail start -->
           <div class="header-detail">
               <img src="${data.logo}" alt="">
               <div class="name">
                   <h3>${data.company}</h3>
                   <h6>${data.company}.com</h6>
               </div>
               <a href="${data.website}">Company Site</a>
               
           </div>
            <!--"header-detail end -->
     
            <!--"container-detail start -->

           <div class="container-detail">

                           <div class="container-detail-first">

                                       <div class="container-detail-left">
                                           <p>${data.postedAt}  <span>. ${data.contract}</span></p>
                                           <h3>${data.position}</h3>
                                           <h6>${data.location}</h6>
                                       </div>

                                       <div class="container-detail-right">
                                           <a href="${data.apply}" class="btn btn-apply">Apply Now</a>
                                       </div>

                           </div>

                           <p>${data.description}</p>
                           
                           <h2>Requirements</h2>

                           <p>${data.requirements.content}</p>
                   

                           <ul class="requirements-list">
                              
                           </ul>

                           <h2 class="what">What You Will Do</h2>
                           <p>${data.role.content}</p>


                           <ol class="role-list">
                               
                           </ol>
           </div>
           <!--"container-detail end -->

`


    
        } )
        
        
    }
}





console.log(checkbox);


searchForm.addEventListener("submit",handleSearchForm)



async function handleSearchForm(e){
    e.preventDefault()
    console.log("jsdbfdjgb");
    const searchValuePosition = searchForm["search"].value
    const searchValueLocation = searchForm["locationSearch"].value
    const dataSearch = await getFetch()
    const filterData = dataSearch.filter(data => {
        const alldataposition = data.position.toLowerCase().includes(searchValuePosition);
        const alldatalocation =data.location.toLowerCase().includes(searchValueLocation)
        console.log(alldatalocation);
        return alldatalocation && alldataposition
    })
    return getSearch(filterData)

    
}



async function getSearch(filterData){
    heroContainer.innerHTML=""
    if(checkbox.checked && filterData[0].contract === "Full Time"){
        console.log(filterData[0].contract);     
        for (const data of filterData) {
            heroContainer.innerHTML+=`
            <div class="hero">
                    
                                    <div class="hero-box">
                                        <p> ${data.postedAt}<span>.${data.contract}</span></p>
                                        <h3>${data.position}</h3>
                                        <h4>${data.company}</h4>
                                        <h6>${data.location}</h6>
                                    </div>
                                    <img src="${data.logo}" alt="">
    
                            </div>
            `
        }

    }
    else{
        for (const data of filterData) {
            heroContainer.innerHTML+=`
            <div class="hero">
                    
                                    <div class="hero-box">
                                        <p> ${data.postedAt}<span>.${data.contract}</span></p>
                                        <h3>${data.position}</h3>
                                        <h4>${data.company}</h4>
                                        <h6>${data.location}</h6>
                                    </div>
                                    <img src="${data.logo}" alt="">
    
                            </div>
            `
        }
    }   
}
    

    // console.log(filterData);
    

// dark mode js kodlari



const darkMode = document.querySelector(".mode")
const body= document.querySelector("body");

darkMode.addEventListener("click", function(){
    body.classList.add("deneme")
    console.log("ıurghdıfg");
})





getData();