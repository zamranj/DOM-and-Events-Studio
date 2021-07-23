// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    // put DOM code here to ensure elements have been loaded
    console.log('window loaded');    const takeOff = document.getElementById("takeoff");
    const landingBtn = document.getElementById("landing");
    const abortBtn = document.getElementById("missionAbort");    
    const rocketImg = document.getElementById("rocket");    
    const upBtn = document.getElementById("navUp");
    const downBtn = document.getElementById("navDown");
    const leftBtn = document.getElementById("navLeft");
    const rightBtn = document.getElementById("navRight");    
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");    

    takeOff.addEventListener("click", function (event) {
        console.log("takeoff clicked");
        const msg = "Confirm that the shuttle is ready for takeoff";
        const readyForTakeoff = window.confirm(msg);
        if (readyForTakeoff){
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            const currentHeight = Number(shuttleHeight.innerHTML);
            shuttleHeight.innerHTML = currentHeight + 10000;
        }
    });    
    landingBtn.addEventListener("click", function (event) {
        console.log("landingBtn clicked");
        const msg = "The shuttle is landing. Landing gear engaged.";
        window.alert(msg);        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight.innerHTML = 0;
    });    
    abortBtn.addEventListener("click", function (event) {
        console.log("abortBtn clicked");
        const msg = "Confirm that you want to abort the mission.";
        const abortMission = window.confirm(msg);
        if (abortMission){
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0;
        }
    });    
    let marginLeft = 0;
    let marginTop = 0;    upBtn.addEventListener("click", function (event) {
        const currentHeight = Number(shuttleHeight.innerHTML);
        shuttleHeight.innerHTML = currentHeight + 10000;
        marginTop += 10;
        rocketImg.style.marginTop = `${marginTop}px`;
    });    
    downBtn.addEventListener("click", function (event) {
        const currentHeight = Number(shuttleHeight.innerHTML);
        if (currentHeight > 0){
            shuttleHeight.innerHTML = currentHeight - 10000;
        }
        marginTop -= 10;
        rocketImg.style.marginTop = `${marginTop}px`;
    });    
    leftBtn.addEventListener("click", function (event) {
        marginLeft -= 10;
        rocketImg.style.marginLeft = `${marginLeft}px`;
    });    
    rightBtn.addEventListener("click", function (event) {
        marginLeft += 10;
        rocketImg.style.marginLeft = `${marginLeft}px`;
    });
});