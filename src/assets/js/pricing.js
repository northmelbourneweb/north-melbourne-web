const leftOption = document.querySelector("#pricing #option1");
        const rightOption = document.querySelector("#pricing #option2");
        const toggle = document.querySelector("#pricing .toggle");
        const cardGroup = Array.from(document.querySelectorAll('#pricing .ul-wrapper'))
        // when you click the middle toggle
        toggle.addEventListener('click', (e) => { 
            for (const item of cardGroup) {
                item.classList.toggle("active");
            }
            toggle.classList.toggle("active");
        });       
        // when you click the left button option
        leftOption.addEventListener('click', (e) => { 
            for (const item of cardGroup) {
                item.classList.remove("active");
            }
            toggle.classList.remove("active");
        });    
        // when you click the right button option
        rightOption.addEventListener('click', (e) => { 
            for (const item of cardGroup) {
                item.classList.add("active");
            }
            toggle.classList.add("active");
        });
                                