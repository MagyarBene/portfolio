const szavak = ["Az", "idő", "pénz,", "a pénz", "idő"];
const panelBackgrounds = [

    'https://image.cnbcfm.com/api/v1/image/107308670-1695930955313-gettyimages-1478432952-118.jpeg?v=1706756723',

     'https://ychef.files.bbci.co.uk/1280x720/p02k6vry.jpg',

    'https://lh3.googleusercontent.com/proxy/nW0ulQF55PO7lP9jJuARckORNKUhamyn2XF5amS1TllwqSKGPKQIw95qLEEFjpzEDYU4xoa7Z6m03sLD9uFrxWMtU8g8FJC0viZmDF2LmKuUPrdBp7N7arKXY-QRFQfaXLer',

     'https://cdn4.vectorstock.com/i/1000x1000/87/23/golden-coin-background-vector-7398723.jpg',

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

  