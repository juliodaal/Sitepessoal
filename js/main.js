class PresonalSite {
    constructor(){
        this.initializeVar(); // initializing Variables
        this.screenWidthEvent() //initializing Envent Width
        this.withOutScroll() // initializing Envent without Scroll
        this.eventsButtons() // initializing Buttons
    }
    initializeVar(){
        this.nav = document.getElementById('nav') // catching nav
        this.logotype = document.getElementById('logotype') // catching logotype
        this.headerTi = document.getElementById('sectionHeader') // catching section Header
        this.containerSectionTwoFixed = document.getElementById('containerSectionTwoFixed') // catching Section Two Fixed
        this.containerSectionThree = document.getElementById('containerSectionThree') // catching Section Three
        this.allButtonsNav = document.querySelectorAll('.buttons-nav') // catching Buttons Nav
        this.button = document.getElementById('button') // catching Buttons section two
        this.header = document.getElementById('header') // catching Header
        this.sectionOne = document.getElementById('sectionOne') // catching section One
        this.sectionTwo = document.getElementById('sectionTwo'); // catching section Two
        this.containerFixedSectionOne = document.getElementById('containerFixedSectionOne');
        this.containerFixedSectionTwo = document.getElementById('containerFixedSectionTwo');
        this.hTwoOne = document.getElementById('hTwoOne');
        this.hTwoTwo = document.getElementById('hTwoTwo');
        this.hFiveOne = document.getElementById('hFiveOne');
        this.hFiveTwo = document.getElementById('hFiveTwo');
        this.strongOne = document.getElementById('strongOne');
        this.strongTwo = document.getElementById('strongTwo');
        this.hSixOne = document.getElementById('hSixOne');
        this.hSixTwo = document.getElementById('hSixTwo');
        this.textOne = document.getElementById('textOne');
        this.textTwo = document.getElementById('textTwo');
        this.experience = document.getElementById('experience');
        this.school = document.getElementById('school');
        this.university = document.getElementById('university');
        this.institute = document.getElementById('institute');
        // console.log(this.containerSectionTwoFixed.offsetHeight);
    }
    screenWidthEvent(){
            const scrollEffects = this.scrollEffects.bind(this);
            $(window).scroll(function(){
                const dataScroll = $(window).scrollTop(); // catching scroll with jquery
                // console.log(dataScroll);
                scrollEffects(dataScroll);
            })
    }
    withOutScroll(){
        this.hoverNav();
        // console.log($(this.nav).is(':hover'));
    }
    scrollEffects(dataScroll){
        // console.log(dataScroll);
        // window.innerHeight tamano de pantalla
        this.navEffect(dataScroll);
        this.headerEffects(dataScroll);
        this.sectionFixedEffectS(dataScroll);
    }
    navEffect(dataScroll){
        if (dataScroll <= 0) {
            this.nav.style.background = '#ffffff';
            this.logotype.style.color = '#093F7C';
            [].forEach.call(this.allButtonsNav, function(disappear) {
                disappear.style.color = '#093F7C';
            });
        } else {
            this.nav.style.background = 'transparent'; 
            this.logotype.style.color = 'transparent';
            [].forEach.call(this.allButtonsNav, function(disappear) {
                disappear.style.color = 'transparent';
            });
        }
    }
    hoverNav(){
        const nav = this.nav;
        const logotype = this.logotype;
        const allButtonsNav = this.allButtonsNav;
        this.nav.addEventListener('mouseenter', function (){
            on();
        });
        function on(){
            nav.style.background ='#ffffff';
            logotype.style.color = '#093F7C';
            [].forEach.call(allButtonsNav, function(disappear) {
                disappear.style.color = '#093F7C';
            });
        }
    }
    headerEffects(dataScroll){
        //Parallax
        this.headerTi.style.backgroundPositionY = `${- dataScroll / 2}px`;
    }
    sectionFixedEffectS(dataScroll){
        const alturaOne = this.header.clientHeight + this.sectionOne.clientHeight + 100;
        const alturaTwo = this.sectionTwo.clientHeight + this.sectionOne.clientHeight + 100;
        const TotalHeight = alturaTwo / 5;
        // console.log(TotalHeight);
        // console.log(dataScroll);
        if (dataScroll > 0 && dataScroll < alturaOne) {
            this.containerSectionTwoFixed.style.position = 'absolute';
            this.containerSectionTwoFixed.style.top = '0';
            // this.button.style.display = "none";
            // this.button.style.right = "100%";
        } else if (dataScroll > alturaOne && dataScroll < alturaTwo) {
            this.containerSectionTwoFixed.style.position = 'fixed';
            // this.button.style.display = "flex";
            // this.button.style.right = '0';
            if (dataScroll > TotalHeight && dataScroll < (TotalHeight * 2)) {
                // this.button.classList.remove('left');
                this.containerFixedSectionOne.style.background = '#093F7C';
                this.containerFixedSectionOne.style.color = '#ffffff';
                this.hTwoOne.innerHTML = 'Experience';
                this.hTwoOne.style.display = 'block';
                this.hFiveOne.innerHTML = 'Customer Advisor';
                this.hFiveOne.style.display = 'block';
                this.strongOne.innerHTML = '2018-2019';
                this.strongOne.style.display = 'block';
                // this.hSixOne.innerHTML = 'High School';
                this.hSixOne.style.display = 'none';
                // this.textOne.innerHTML = 'For this period, I was finished High School with really good calcifications, awards, and medals.';
                this.textOne.style.display = 'none';
                // two
                this.containerFixedSectionTwo.style.background = '#ffffff';
                this.containerFixedSectionTwo.style.color = '#093F7C';
                // this.hTwoTwo.innerHTML = 'Formation';
                this.hTwoTwo.style.display = 'none';
                // this.hFiveTwo.innerHTML = 'High School';
                this.hFiveTwo.style.display = 'none';
                // this.strongTwo.innerHTML = '2015';
                this.strongTwo.style.display = 'none';
                this.hSixTwo.innerHTML = 'Customer Abvisor';
                this.hSixTwo.style.display = 'block'
                this.textTwo.innerHTML = "I've worked for this company for 6 months, as a customer advisor. In this Job, I learned how to communicate with the customer, how to interact with him and special technics of communication.";
                this.textTwo.style.display = 'block';
            
            } else if (dataScroll > (TotalHeight * 2) && dataScroll < (TotalHeight * 3)){
                // this.button.classList.add('left');
                this.containerFixedSectionOne.style.background = '#ffffff';
                this.containerFixedSectionOne.style.color = '#093F7C';
                // this.hTwoOne.innerHTML = 'Experience';
                this.hTwoOne.style.display = 'none';
                // this.hFiveOne.innerHTML = 'Customer Advisor';
                this.hFiveOne.style.display = 'none';
                // this.strongOne.innerHTML = '2018-2019';
                // this.strongOne.style.display = 'none';
                this.hSixOne.innerHTML = 'High School';
                this.hSixOne.style.display = 'block';
                this.textOne.innerHTML = 'For this period, I was finished High School with really good calcifications, awards, and medals.';
                this.textOne.style.display = 'block';
                // two
                this.containerFixedSectionTwo.style.background = '#093F7C';
                this.containerFixedSectionTwo.style.color = '#ffffff';
                this.hTwoTwo.innerHTML = 'Formation';
                this.hTwoTwo.style.display = 'block';
                this.hFiveTwo.innerHTML = 'High School';
                this.hFiveTwo.style.display = 'block';
                this.strongTwo.innerHTML = '2015';
                this.strongTwo.style.display = 'block';
                // this.hSixTwo.innerHTML = 'Customer Abvisor';
                this.hSixTwo.style.display = 'none';
                // this.textTwo.innerHTML = "I've worked for this company for 6 months, as a customer advisor. In this Job, I learned how to communicate with the customer, how to interact with him and special technics of communication.";
                this.textTwo.style.display = 'none';
            } else if (dataScroll > (TotalHeight * 3) && dataScroll < (TotalHeight * 4)){
                // this.button.classList.remove('left');
                this.containerFixedSectionOne.style.background = '#093F7C';
                this.containerFixedSectionOne.style.color = '#ffffff';
                this.hTwoOne.innerHTML = 'Formation';
                this.hTwoOne.style.display = 'block';
                this.hFiveOne.innerHTML = 'University';
                this.hFiveOne.style.display = 'block';
                this.strongOne.innerHTML = '2016-2018';
                this.strongOne.style.display = 'block';
                // this.hSixOne.innerHTML = 'High School';
                this.hSixOne.style.display = 'none';
                // this.textOne.innerHTML = 'For this period, I was finished High School with really good calcifications, awards, and medals.';
                this.textOne.style.display = 'none';
                // two
                this.containerFixedSectionTwo.style.background = '#ffffff';
                this.containerFixedSectionTwo.style.color = '#093F7C';
                // this.hTwoTwo.innerHTML = 'Formation';
                this.hTwoTwo.style.display = 'none';
                // this.hFiveTwo.innerHTML = 'High School';
                this.hFiveTwo.style.display = 'none';
                // this.strongTwo.innerHTML = '2015';
                this.strongTwo.style.display = 'none';
                this.hSixTwo.innerHTML = 'University';
                this.hSixTwo.style.display = 'block'
                this.textTwo.innerHTML = "For this period, I was studying System Engineering. Here I learned how to program in diverse languages like Visual Basic, and a few Web languages like HTML, CSS, and javaScript.";
                this.textTwo.style.display = 'block';
            } else if (dataScroll > (TotalHeight * 4) && dataScroll < (TotalHeight * 5)){
                // this.button.classList.add('left');
                this.containerFixedSectionOne.style.background = '#ffffff';
                this.containerFixedSectionOne.style.color = '#093F7C';
                // this.hTwoOne.innerHTML = 'Experience';
                this.hTwoOne.style.display = 'none';
                // this.hFiveOne.innerHTML = 'Customer Advisor';
                this.hFiveOne.style.display = 'none';
                // this.strongOne.innerHTML = '2018-2019';
                this.strongOne.style.display = 'none';
                this.hSixOne.innerHTML = 'Setúbal Polytechnic Institute';
                this.hSixOne.style.display = 'block';
                this.textOne.innerHTML = "Right now, I'm studying Web programming, devices, and mobile applications in the IPS. I'm happy to augment my knowledge in this process.";
                this.textOne.style.display = 'block';
                // two
                this.containerFixedSectionTwo.style.background = '#093F7C';
                this.containerFixedSectionTwo.style.color = '#ffffff';
                this.hTwoTwo.innerHTML = 'Formation';
                this.hTwoTwo.style.display = 'block';
                this.hFiveTwo.innerHTML = 'Setúbal Polytechnic Institute';
                this.hFiveTwo.style.display = 'block';
                this.strongTwo.innerHTML = '2019-2020';
                this.strongTwo.style.display = 'block';
                // this.hSixTwo.innerHTML = 'Customer Abvisor';
                this.hSixTwo.style.display = 'none';
                // this.textTwo.innerHTML = "I've worked for this company for 6 months, as a customer advisor. In this Job, I learned how to communicate with the customer, how to interact with him and special technics of communication.";
                this.textTwo.style.display = 'none';
            } 
        } else if (dataScroll > alturaTwo){
            // console.log('hola');
            // this.button.style.display = "none";
            // this.button.style.right = "100%";
            this.containerSectionTwoFixed.style.position = 'absolute';
            this.containerSectionTwoFixed.style.top = 'calc(100% - 100vh)';
            
        }
    }
    eventsButtons(){
        // this.experience.addEventListener('onclick', function () {
        //     console.log('hola');
        // });
        // this.school
        // this.university
        // this.institute
    }
}
// var hola = document.getElementById('experience');
// function hola() {
//     alert('hola');
// };
window.init = new PresonalSite;
