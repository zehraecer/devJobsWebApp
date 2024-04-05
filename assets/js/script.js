const heroContainer = document.querySelector(".hero-container")
const formContainerHero = document.querySelector(".form-container-hero")
const searchForm = document.querySelector(".searchForm")
const checkbox = document.querySelector("#checkbox")
const detailFooter = document.querySelector(".detail-footer")
const mypage = document.querySelector(".myPage")


mypage.addEventListener("click", function () {
    console.log("ırhgdgh");
    return getData()
})



async function getFetch() {
    const response = await fetch("assets/json/data.json")
    const data = await response.json();
    // console.log(data);
    return data
}


async function getData() {
    const response = await getFetch()

    for (const data of response) {
        heroContainer.innerHTML += `
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






async function showDetail() {
    const details = document.querySelectorAll(".showDetail")
    for (const detail of details) {
        detail.addEventListener("click", async function () {
            formContainerHero.innerHTML = ""
            const id = this.parentElement.parentElement.dataset.id
            // console.log(id);
            const dataId = await getFetch()
            const data = dataId[id - 1]
            console.log(data);

            formContainerHero.innerHTML += `
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

           <div class="detail-footer">
        
                    <div class="detail-footer-left">
                        <h3>${data.position}</h3>
                        <p>So Digital Inc.</p>
                    </div>
            
                    <a href="https://example.com/scoot/apply" class="btn btn-apply">Apply Now</a>
                  
                </div>         

`



            const requirementsList = document.querySelector(".requirements-list")
            const roleList = document.querySelector(".role-list")
            for (const item of data.requirements.items) {
                console.log(item);
                requirementsList.innerHTML += `
                        <li>${item}</li>
                    `

            }

            for (const item of data.role.items) {
                console.log(item);
                roleList.innerHTML += `
                    <li>${item}</li>
                `

            }

        })


    }
}





searchForm.addEventListener("submit", handleSearchForm)



async function handleSearchForm(e) {
    e.preventDefault()
    console.log("jsdbfdjgb");
    const searchValuePosition = searchForm["search"].value
    const searchValueLocation = searchForm["locationSearch"].value
    const dataSearch = await getFetch()
    const filterData = dataSearch.filter(data => {
        const alldataposition = data.position.toLowerCase().includes(searchValuePosition);
        const alldatalocation = data.location.toLowerCase().includes(searchValueLocation)
        console.log(alldatalocation);
        return alldatalocation && alldataposition
    })
    return await getSearch(filterData)


}


// checkbox.checked = true;


//for of kullan


async function getSearch(filterData) {
    heroContainer.innerHTML = ""
    console.log(filterData);

    if (checkbox.checked) {

        for (const data of filterData) {
            if (data.contract === "Full Time") {

                heroContainer.innerHTML += `
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
    else {

        for (const data of filterData) {

            heroContainer.innerHTML += `
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



const darkMode = document.querySelector("#myRange")
const body = document.querySelector("body");

darkMode.addEventListener("click", function () {

    if (darkMode.value == "1") {
        body.classList.add("darkmode")

    }
    else {
        body.classList.remove("darkmode")
    }

})





getData();