let navMain=document.querySelector(".main-header__wrapper"),navToggle=document.querySelector(".main-header__toggle");navMain.classList.remove("main-header__wrapper--nojs"),navMain.classList.add("main-header__wrapper--menu_closed"),navToggle.addEventListener("click",(function(){navMain.classList.contains("main-header__wrapper--menu_closed")?(navMain.classList.remove("main-header__wrapper--menu_closed"),navMain.classList.add("main-header__wrapper--menu_opened")):(navMain.classList.add("main-header__wrapper--menu_closed"),navMain.classList.remove("main-header__wrapper--menu_opened"))}));