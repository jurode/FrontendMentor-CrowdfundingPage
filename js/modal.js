// == ///////////////
// == set variables / locations
// == ///////////////

// let backProjectBtn = document.getElementById("backProjectBtn");
let modal = document.getElementById("modal");
let modalClose = document.getElementById("modalClose");
let modalContent = document.querySelectorAll("#modal > div");

let modalProjectBoxArr = document.getElementsByClassName("modalProjectBox");
let selectRewardBtns = document.getElementsByClassName("selectReward");
let divPledgeArr = document.getElementsByClassName("pledge");
let inputModalArr = document.querySelectorAll(".modalProjectBox input[type='text']");

// continue / success
let pledgeBtnArr = document.querySelectorAll(".pledge button");
let btnSuccess = document.querySelector("#success button");

// increase/decrease item stock & money
let totalSum = parseInt(document.querySelector(".projectNumbers div:nth-of-type(1) span").innerHTML);
let totalBackers = document.querySelector(".projectNumbers div:nth-of-type(3)");
let itemsLeftArr = document.querySelectorAll(".rewardStock .numberFat");
let pledgeAmount = document.getElementsByClassName("inputPledge");

// bar // ? not yet working
let barWidth = document.getElementById('bar').offsetWidth;
let barParentWidth = document.getElementById('bar').parentElement.offsetWidth;
let barRatio = barWidth * 100 / barParentWidth;

// radio btns
let radioArr = document.querySelectorAll(".modalProjectBox input[type='radio']");

// TODO: pledgeActive auf Radio Btn hängen - dann alle anderen zurücksetzen, die aktiv sind

// == ///////////////
// == FUNCTIONS
// == ///////////////

// # OPEN MODAL
let openModal = () => {
    modal.style.display = "block";
    modalContent[0].style.display = "grid";
    // console.log("open modal");
};

// # open "continue" button & styling for selected reward
let selectPledge = (i) => {
    divPledgeArr[i].style.display = "grid";     // pledge = display grid
    radioArr[i].checked = true;            // radio = checked
    modalProjectBoxArr[i].classList.add("pledgeActive");    // add .pledgeActive
    radioChange(); // ? call radio function
    // pushContinue(); // ? continue buttons
}

// # listener for change in radio buttons on open modal
let radioChange = () => {
    for (let i = 0; i < radioArr.length - 1; i++) {
        // -1 at radioArr.length because last one is out of stock
        // console.log((radioArr[i].checked) ? ([i] + " is checked") : ([i] + " is NOT checked"));

        // * listener for each radio
        radioArr[i].addEventListener("click", () => {
            // for all the radio btns
            for (let i = 0; i < radioArr.length; i++) {
                // check if a radio is already checked
                if (radioArr[i].checked) {
                    divPledgeArr[i].style.display = "grid";
                    modalProjectBoxArr[i].classList.add("pledgeActive");
                } else {
                    divPledgeArr[i].style.display = "none";
                    modalProjectBoxArr[i].classList.remove("pledgeActive");
                }
            }
        });

    }
}


// # continue button
let pushContinue = () => {

    for (let i = 0; i < pledgeBtnArr.length - 1 ; i++) {
        // -1 at .length because last one is out of stock
        
        pledgeBtnArr[i].addEventListener("click", () => {
            // console.log("continue click");
            
            modalContent[0].style.display = "none";     // pledge modal
            modalContent[1].style.display = "block";    // success modal
            
            // # close success modal
            let btnCheck = false; // to prevent multiple clicks problem

            btnSuccess.addEventListener("click", () => {
                if (!btnCheck) {
                    console.log("btnCheck = false");
                    
                    console.log("btn click" + [i]);
                    modalContent[1].style.display = "none";     // success modal
                    closeModal();                               // close and set back
                    
                    if (i !== 0){
                        console.log(i);

                        // * take the input:amount and put it to total sum
                        totalSum += parseInt(pledgeAmount[i].value);
                        document.querySelector(".projectNumbers div:nth-of-type(1) span").innerHTML = totalSum;
                        
                        // * decrease items left
                        console.log(`items before: ${itemsLeftArr[i-1].innerHTML}`);
                        itemsLeftArr[i-1].innerHTML--;
                        console.log(`items after: ${itemsLeftArr[i-1].innerHTML}`);
                    }
                    // * increase total backers nr.
                    console.log(`backers before: ${totalBackers.innerHTML}`);
                    totalBackers.innerHTML++;
                    console.log(`backers after: ${totalBackers.innerHTML}`);
                    
                    // barIncrease(totalSum); // ? not yet working
                    
                    // * set btnCheck to true, to prevent multiple Btn-Clicks problem
                    btnCheck = true;
                    console.log("btnCheck = true");
                    
                }
            });
            
        });
        
    }
}
pushContinue(); // ? continue buttons

// # CLOSE MODAL
let closeModal = () => {
    modal.style.display = "none";

    // set back settings from # pledge
    for (let i = 0; i < divPledgeArr.length; i++) {
        divPledgeArr[i].style.display = "none";
        radioArr[i].checked = false;
        modalProjectBoxArr[i].classList.remove("pledgeActive");
    }
}



// == ///////////////
// == LISTENER
// == ///////////////

// # for all ".selectRewards" Buttons (incl. "Back this project" in Section .projectTitle)
for (let i = 0; i < selectRewardBtns.length; i++) {

    selectRewardBtns[i].addEventListener("click", () => {
        openModal();        // open Modal
        selectPledge(i);    // call which select pledge is meant
    });
}

// # close modal
modalClose.addEventListener("click", closeModal);




// == //////////////////////////////////////////////////////////////////////////////////////////



// TODO: fortschrittsbalken in % von 100.000 - dynamisch
// // # increase bar
// let barIncrease = (totalSum) => {
//      // ? not yet working
//     console.log(totalSum);
//     let newRatio = totalSum / 1000;
//     console.log(newRatio);

//     barWidth = newRatio * barParentWidth / 100;
//     console.log(barWidth);

//     document.getElementById('bar').offsetWidth = barWidth;
// }
