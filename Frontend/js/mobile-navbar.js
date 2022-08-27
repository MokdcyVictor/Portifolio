class MobileNavbar{
    constructor(mobilemenu,navbar,navLink){
        this.mobileMenu = document.querySelector(mobilemenu);
        this.navbar = document.querySelector(navbar);
        this.navLinks = document.querySelectorAll(navLink);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this);
    }   

    animateLinks(){
        this.navLinks.forEach((link, index) => {
            link.Style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${ index / 7 + 0.3}s`);
        });
    }

    handleClick(){
        this.navbar.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }
    init(){
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }

}

const mobileNavbar = new MobileNavbar('.mobile-menu','.navbar','navbar li');
mobileNavbar.init();
