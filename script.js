function loadEvent() {
    let root = document.getElementById("root")

    let contentSrting = `
    <form>
        <h1>Create your avatar</h1><br>
        <input type="text" placeholder="type name here" id="name" name="name">
        <label for="level">Class</label>
        <select id="level" name="level">
            <option class="placeholder-option" value="" disabled selected>choose class</option>
            <option value="servant">servant</option>
            <option value="magician">magician</option>
            <option value="traveler">traveler</option>
            <option value="lord">lord</option>
        </select>   
        <label for="gender">Gender</label>
        <select id="gender" name="gender" >
            <option class="placeholder-option" value="" disabled selected>choose gender</option>
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="neutral">neutral</option>
        </select>
        <label for="race">Race</label>
        <select id="race" name="race">
            <option class="placeholder-option" value="" disabled selected>choose race</option>
            <option value="angyar">angyar</option>
            <option value="fiia">fiia</option>
            <option value="starlord">starlord</option>
        </select>
    </form>
    <div id="avatar">
        <h2 id="avatar-name"></h2>
        <div id="charpic"></div>
        <div class="cGender"></div>
        <div class="cRace"></div>
        <div class="cLevel"></div>
    </div>
    `
    root.insertAdjacentHTML("beforeend", contentSrting)

    const state = {
    };
    const form = root.querySelector("form");
    const input = root.querySelector("input");
    const avatarPic = document.getElementById("charpic")
    const avatarName = document.getElementById("avatar-name")
    const gender = document.getElementById("gender")
    const race = document.getElementById("race")
    const level = document.getElementById("level")


    // write the name of caracter
    input.addEventListener("input", function (event) {
        let name = `${event.target.value}`;
        avatarName.textContent = name; 
    })

    // show picture of selected gender
    gender.addEventListener("input", function (e) {
        console.log(e.target.value);
        let cG = document.querySelector(".cGender");
        if (e.target.value === "male") {
            cG.classList.add("male")
        } else if (e.target.value === "female") {
            cG.classList.add("female")
        } else if (e.target.value === "neutral") {
            cG.classList.add("neutral")
        }
    });

    // show pic of selected race

    race.addEventListener("input", function (e) {
         let cR = document.querySelector(".cRace");
         if (e.target.value === "angyar") {
             cR.classList.add("angyar")
         } else if (e.target.value === "fiia") {
             cR.classList.add("fia")
         } else if (e.target.value === "starlord") {
             cR.classList.add("starlord")
         }
     });

    // show pic of selected level

    level.addEventListener("input", function (e) {
         let cL = document.querySelector(".cLevel");
         if (e.target.value === "servant") {
             cL.classList.add("servant")
         } else if (e.target.value === "magician") {
             cL.classList.add("mage")
         } else if (e.target.value === "traveler") {
             cL.classList.add("traveler")
         } else if (e.target.value === "lord") {
             cL.classList.add("lord")
         }
     });

    // show character

  //UPDATE PICTURE OF CHAR
    const avatarPicture = (eventRec) => {
        let eventKey = eventRec.target.getAttribute('id');
        let eventValue = eventRec.target.value;
        
        // update the state
        state[`${eventKey}`] = eventValue;
        console.log(state);

        if (state.hasOwnProperty('gender') && state.hasOwnProperty('race')){
            avatarPic.innerHTML = `<img src="./img/${state.race}-${state.gender}.jpg">`;
        }
    }

    // disable submit
    form.addEventListener('submit', e => {
        e.preventDefault();
    })

    form.addEventListener('input', event => {
        avatarPicture(event);
    });

}

window.addEventListener("load", loadEvent)