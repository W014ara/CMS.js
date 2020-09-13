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
    * @method initfield Creating the main field of the admin panel
    * @return {void} returning main page's class
    * @property {_defaultColor} default main page's background color
    * @property {_defaultFont} default body font. Notce: Use rem in your
    *                           scss file to avoid problems with size.
    */

    _defaultColor = 'white';
    _defaultFont = '10px';

    initfield() {
        document.body.style.backgroundColor = this._defaultColor;
        if (document.querySelector('.root') !== null)
            console.log(`Notice: Main field already exists`);
        else {
            document.body.style.fontSize = this._defaultFont;
            const field = `<div class='root' id='root'></div>`
            document.body.insertAdjacentHTML("afterbegin", field);
        }
    }

    /**
    * @method addLeftSection Add left section panel
    * @return {void} returning left section's class
    * @property {_leftSection_DefaultWidth} default left section's width
    * @property {_leftSection_defaultHeight} default left section's height
    * @property {_leftSection_defaultColor} default left section's background color
    */

    _leftSection_DefaultWidth = '35rem';
    _leftSection_defaultHeight = '100%';
    _leftSection_defaultColor = 'rgba(0, 0, 0, 0.7)';

    addLeftSection() {
        try {
            const field = document.getElementById('root');
            if (document.querySelector('.leftPage') !== null)
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
                                                <div class='logout-btn'>
                                                    <p>Выйти из системы</p>
                                                </div>
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
                

                menu_title.addEventListener('click', function (e) {
                    let contentHasActive = content.className.split(' ').includes('active');

                    //Removing all active classes when introducing the 
                    //burger button to its original position
                    if(!burger.className.split(' ').includes('active')){
                        document.querySelector('.right-panel').childNodes[1].childNodes[3].innerHTML = `Дом/`;
                        for(let elem of DOMRegex(/content-child/)){
                            elem.classList.remove('active')
                        }
                        for(let elem of DOMRegex(/\w+-subcategory/)){
                            elem.classList.remove('active')
                        }
                    }   
                    //Setting the height to the screen resolution in accordance with the number 
                    //of internal columns when pressing the burger button
                    if (contentHasActive) {
                        if (content.childElementCount === null || content.childElementCount === undefined)
                            content.style.height = '100%';
                        else {
                            let newHeight = content.childElementCount * 112 + 'px';
                            content.style.height = newHeight;
                        }
                    } else content.style.height = '100%';
                })
            }
        } catch (exception) {
            console.log(exception);
        }
    }

    __rightSection_defaultColor = `#FFF5FC`;
    /**
     * @method addRightSection This method initializing right cms section for tables, log out btn and other
     * @returns{} Void
     */
    addRightSection() {
        try {
            const root = document.querySelector('.root');
            if (document.querySelector('.right-panel')) console.log('Error',
                'You already have right section');
            else {
                const rightField = `<section class='right-panel' id='right-panel'>
                                        <div class='header' id='right-panel-header'>
                                            <div class='path-icon' id='path-icon'></div>
                                            <h1>Дом/</h1>
                                        </div>
                                        <div class='container'>
                                            <div class='container-background'></div>
                                        </div>
                                    </section>`;
                root.insertAdjacentHTML('beforeend', rightField);
            }

        } catch (error) {
            console.log('Error', error);
        }
    }

    /**
    * @method addCategory This method adds new category into left panel
    * @param {img}: String - path to your category image
    * @param {title}: String - category's name
    * @param {identifier}: String - The unique identifier for your item. Warning: don't create the same identifier
    * @returns {void}
    */

    addCategory(img, title, identifier) {
        try {
            const content = document.querySelector('.content');
            const new_block = `<div class='content-child' id='${identifier}' data-id='${identifier}'>
                                   <img src='${img}' class='content-logo'>
                                   <h1>${title}</h1>
                                   <div class='content-arrow'></div>
                               </div>
                               <div class='${identifier}-subcategory'>
                               </div>`

            content.insertAdjacentHTML('beforeend', new_block);
            const contentChild = document.getElementById(identifier);
            const contentChild_subcategory = document.querySelector(`.${identifier}-subcategory`);
            toggleClass(contentChild, contentChild);
            toggleClass(contentChild, contentChild_subcategory);
            contentChild.addEventListener('click', function (e) {
                try {
                    for (let elem of this.className.split(' ')) {
                        if (elem === 'active') {
                            document.querySelector('.right-panel').childNodes[1].childNodes[3].innerHTML = `Дом/${title}`;
                        } else document.querySelector('.right-panel').childNodes[1].childNodes[3].innerHTML = `Дом/`;
                    }
                } catch (error) {
                    console.log('Error', error);
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    /**
    * @method removeCategory This method removes existing category from left panel
    * @param {identifier}: String - The unique identifier for your item.
    * @returns {void}
    */
    removeCategory(identifier) {
        try {
            document.getElementById(identifier).remove();
        } catch (error) {
            console.log(error);
        }
    }


    /**
    * @method addSubCategory This method adds a product subcategory
    * @param {parent_identifier}: String - parent element id (which parent category to insert into)
    * @param {img}: String - path to your category image
    * @param {title}: String - category's name
    * @param {identifier}: String - The unique identifier for your subcategory item. Warning: don't create the same identifier
    * @returns {void}
    */
    addSubCategory(parent_identifier, img, title, identifier){
        try {
            const parentEl = document.querySelector(`.${parent_identifier}-subcategory`);
            const newEl= `<div class='child' id='${identifier}'>
                                <img src='${img}' class='content-logo'>
                                <h1>${title}</h1>
                            </div>`
            parentEl.insertAdjacentHTML('beforeend', newEl);
            const createdEl = document.getElementById(identifier);
            toggleClass(createdEl, createdEl);
            
            createdEl.addEventListener('click', function(e){
                const rootEl = document.getElementById(parent_identifier);
                document.querySelector('.right-panel').childNodes[1].childNodes[3].innerHTML = `Дом/${rootEl.childNodes[3].textContent}/${title}`;
            })
        } catch (error) {
            console.log('Error', error);
        }
    }
}






//Toggle elem for click event
/**
 * @function toggleClass Jquery realisation toggle class (add active)
 * @param {clickEl} Document Obj: Current click element 
 * @param {changeEL}  Document Obj: Current changable element
 */
function toggleClass(clickEL, changeEL) {
    let flag = false;
    clickEL.addEventListener('click', function (e) {
        if (!flag) {
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
 * @function hoverClass Jquery realisation toggle hover class (add active)
 * @param {clickEl} Document Obj: Current click element 
 * @param {changeEL}  Document Obj: Current changable element
 */
function hoverClass(hoverEL, changeEL) {
    hoverEL.addEventListener('mouseover', function (e) {
        changeEL.classList.add("hover");
    })

    hoverEL.addEventListener('mouseout', function (e) {
        changeEL.classList.remove("hover");
    })
}

/**
 * @function DOMRegex
 * @param {regexm} :String/Regex - regular expressive for searching DOM elements
 */
function DOMRegex(regex) {
    let output = [];
    for (let elem of document.querySelectorAll('*')) {
        if (regex.test(elem.classList)) { 
            output.push(elem);
        }
    }
    return output;
}