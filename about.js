const szavak = ["Az", "idő", "pénz,", "a pénz", "idő"];
const panelBackgrounds = [

    'https://image.cnbcfm.com/api/v1/image/107308670-1695930955313-gettyimages-1478432952-118.jpeg?v=1706756723',

     'https://ychef.files.bbci.co.uk/1280x720/p02k6vry.jpg',

    'https://www.livemint.com/lm-img/img/2023/11/27/1600x900/zlataky-cz-44ewivJ9t1k-unsplash_1646898717970_1701067646117_1701104750104.jpg',

     'https://pics.craiyon.com/2023-06-10/50b039e0208e45a8a197a4a5804838b4.webp',

     'https://cloudfront-us-east-1.images.arcpublishing.com/opb/HVVSBBPH3AYZDQEIWP7AXLCLVA.jpg'


];
export const about = ()=>{          
    
    let parent = document.querySelector(".flex-container")
            for(let i = 0; i<5; i++){
                let FiveDiv = document.createElement("div");
                FiveDiv.classList.add("panel");
                FiveDiv.textContent= szavak[i];
                parent.appendChild(FiveDiv);
            }
            document.querySelector("main").appendChild(parent)

            const panelNodeList = document.querySelectorAll(".panel")
            panelNodeList.forEach((item,index) => {
                item.style.backgroundImage = `url(${panelBackgrounds[index]})`
            });

            document.querySelector('.flex-container').addEventListener("click", toggleOpen)

            function toggleOpen(e){
                if(e.target.classList.contains('open')){
                    e.target.classList.remove('open');
                }else{
                    panelNodeList.forEach((obj)=> obj.classList.remove("open"));
                    e.target.classList.add('open');
                }
            }
}

  