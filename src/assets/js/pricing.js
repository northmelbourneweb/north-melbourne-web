const toggle = document.querySelector("#pricing-603 .toggle");
        const cardGroup = Array.from(document.querySelectorAll('.card-group'))

        toggle.addEventListener('click', (e) => { 
            for (const item of cardGroup) {
                item.classList.toggle("active");
            }
            toggle.classList.toggle("active");
        });
                                