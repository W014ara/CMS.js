/*
    Easy Admin System (EAS) for simple sites or one-pages.
    All functionality is carried out completely in the main javascript file of your project. 
    No need to go into the html file. It is enough to connect our script to your file.
    The project is in beta testing.

    In addition to the javascript file and html, you will need our css file (cms.css)

    The system works both on desktop solutions and on mobile devices (or tablet PCs)

    Visit my GitHub:  https://github.com/W014ara
    Visit my VK page: https://vk.com/vladen_dark
    
    Completely free software 2020-2020.

    Developers: W014ara
*/


export class CMS {
    /**
    * Creating the main field of the admin panel
    * @return {void} returning main page's class
    * @property {_defaultColor} default main page's background color
    * @property {_defaultFont} default body font. Notce: Use rem in your
    *                           scss file to avoid problems with size.
    */

    _defaultColor = 'white';
    _defaultFont = '10px';
    
    initfield(){
        document.body.style.backgroundColor = this._defaultColor;
        if(document.querySelector('.root') !== null)
            console.log(`Notice: Main field already exists`);
        else{
            document.body.style.fontSize = this._defaultFont;
            const field = `<div class='root' id='root'></div>`
            document.body.insertAdjacentHTML("afterbegin", field);
        }
    }
    
    /**
    * Сustomize field styles
    * @param {color} :String - Sets the background color
    * @return {void} returning main page's class
    */

    fieldSetup_background(color){
        try{
            document.body.style.backgroundColor = color;
        }catch(e){
            console.log(e);
        }
    }

    /**
    * Сustomize field styles
    * @param {font} :String - Sets the page main font
    * @return {void} returning main page's class
    */

    fieldSetup_font(font){
        try{
            const field = document.getElementById('root');
            field.style.fontSize = font;
        }catch(e){
            console.log(e);
        }
    }


    /**
    * Add left section panel
    * @return {void} returning left section's class
    * @property {_leftSection_DefaultWidth} default left section's width
    * @property {_leftSection_defaultHeight} default left section's height
    * @property {_leftSection_defaultColor} default left section's background color
    */

    _leftSection_DefaultWidth = '35rem';
    _leftSection_defaultHeight = '100%';
    _leftSection_defaultColor = 'rgba(0, 0, 0, 0.7)';

    addLeftSection(){
        try{
            const field = document.getElementById('root');
            if(document.querySelector('.leftPage') !== null) 
                console.log(`Notice: Left section already exists`);
            else {
                const leftSection = `<section class='leftPage' id='leftPage'>
                                        <div class='user' id='user'>
                                            <div class='user-photo' id='user-photo'><div class='mark' id='mark'></div></div>
                                            <div class='user-data' id='user-data'>
                                                <ul>
                                                    <li>Имя: user32323232_3232</li>
                                                    <li>Должность: Администратор</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class='menu-title hover' id='menu-title'>
                                            <span class='burger'>МЕНЮ</span>
                                        </div>
                                        <div class='content' id='content'></div>
                                    </section>`;
                field.insertAdjacentHTML('afterbegin', leftSection);
                const newLeftSection = document.getElementById('leftPage');
                const burger = document.querySelector('.burger');
                const menu_title = document.querySelector('.menu-title');
                const content = document.querySelector('.content');

                newLeftSection.style.width = this._leftSection_DefaultWidth;
                newLeftSection.style.height = this._leftSection_defaultHeight;
                newLeftSection.style.backgroundColor = this._leftSection_defaultColor;
                toggleClass(menu_title, burger);
                toggleClass(menu_title, content);
                hoverClass(menu_title, menu_title);
                menu_title.addEventListener('click', function(e){
                    let contentHasActive = content.className.split(' ').includes('active');
                    if(contentHasActive){
                        let newHeight = content.childElementCount * 112 + 'px';
                        content.style.height = newHeight;
                    }else content.style.height = '100%';
                })
            }
        }catch(exception){
            console.log(exception);
        }
    }

    /**
    * Change style for user Panel. Current - background
    * @param {color}: String - Background Color
    * @returns {void}
    */

    user_SetBackground(color){
        try {
            const userProfile = document.getElementById('user');   
            userProfile.style.backgroundColor = color;
        } catch (error) {
            console.log(error);
        }
    }

    /**
    * Change style for user Panel. Current - User picture
    * @param {path}: String - path to your IMG
    * @returns {void}
    */

    user_SetImg(path){
        try{
            const userProfile = document.getElementById('user-photo');
            userProfile.style.backgroundImage = `url(${path})`;
        }catch(exception){
            console.log(exception);
        }
    }

    /**
    * Change style for user Panel. Current - User name
    * @param {name}: String - user name
    * @returns {void}
    */

    user_SetName(name){
        try {
            const userName = document.querySelector('.user-data').childNodes[1].childNodes[1];
            userName.innerHTML = `Имя: ${name}`;
        } catch (error) {
            console.log(error);
        }
    }

    /**
    * Change style for user Panel. Current - User rule
    * @param {rule}: String - user rule
    * @returns {void}
    */

    user_SetRule(rule){
        try {
            const userRule = document.querySelector('.user-data').childNodes[1].childNodes[3];
            userRule.innerHTML = `Должность: ${rule}`;
        } catch (error) {
            console.log(error);
        }
    }

    /**
    * Change style for user Panel. Current - User right corner mark
    * @param {path}: String - path to your new mark
    * @returns {void}
    */

    user_SetMark(path){
        try {
            const mark = document.getElementById('mark');
            mark.style.backgroundImage = `url(${path})`;
        } catch (error) {
            console.log(error);
        }
    }

    /**
    * This method adds new category into left panel
    * @param {img}: String - path to your category image
    * @param {title}: String - category's name
    * @param {identifier}: String - The unique identifier for your item. Warning: don't create the same identifier
    * @returns {void}
    */

    addCategory(img, title, identifier){
        try {
            const content = document.querySelector('.content');
            const new_block = `<div class='content-child' id='${identifier}' data-id='${identifier}'>
                                   <img src='${img}' class='content-logo'>
                                   <h1>${title}</h1>
                                   <div src='http://127.0.0.1:5500/resources/imgs/system/menu-bar/arrow-left.svg' class='content-arrow'></div>
                               </div>`
                               
            content.insertAdjacentHTML('beforeend', new_block);
            const contentChild = document.getElementById(identifier);
            toggleClass(contentChild, contentChild);
        } catch (error) {
            console.log(error);
        }
    }

    /**
    * This method removes existing category from left panel
    * @param {identifier}: String - The unique identifier for your item.
    * @returns {void}
    */

    removeCategory(identifier){
        try {
            document.getElementById(identifier).remove();
        } catch (error) {
            console.log(error);
        }
    }

    /**
    * This method sets new img for current category
    * @param {identifier}: String - The unique identifier for your item.
    * @param {img}: String - Img path
    * @returns {void}
    */

    category_setImg(identifier, img){
        try {
            document.getElementById(identifier).childNodes[1].setAttribute('src', img);   
        } catch (error) {
            console.log(error);
        }
    }


    /**
    * This method sets new title for current category
    * @param {identifier}: String - The unique identifier for your item.
    * @param {title}: String - title text
    * @returns {void}
    */

    category_setTitle(identifier, title){
        try {
            document.getElementById(identifier).childNodes[3].innerHTML = title;
        } catch (error) {
            console.log(error);
        }
    }
}

//Toggle elem for click event
/**
 * 
 * @param {clickEl} Document Obj: Current click element 
 * @param {changeEL}  Document Obj: Current changable element
 */
function toggleClass(clickEL, changeEL){
    let flag = false;
    clickEL.addEventListener('click', function(e){
        if(!flag){
            changeEL.classList.add("active");
            flag = true;
        }
        else {
            changeEL.classList.remove("active");
            flag = false;
        } 
    })
}

//Toggle elem for hover event
/**
 * 
 * @param {clickEl} Document Obj: Current click element 
 * @param {changeEL}  Document Obj: Current changable element
 */
function hoverClass(hoverEL, changeEL){
    hoverEL.addEventListener('mouseover', function(e){
        changeEL.classList.add("hover");
     })

    hoverEL.addEventListener('mouseout', function(e){
        changeEL.classList.remove("hover");
    })
}