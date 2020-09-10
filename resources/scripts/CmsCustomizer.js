
export class CmsCustomizer {
    /**
    * @method fieldSetup_background Сustomize field styles
    * @param {color} :String - Sets the background color
    * @return {void} returning main page's class
    */

    fieldSetup_background(color) {
        try {
            document.body.style.backgroundColor = color;
        } catch (e) {
            console.log(e);
        }
    }

    /**
    * @method fieldSetup_font Сustomize field styles
    * @param {font} :String - Sets the page main font
    * @return {void} returning main page's class
    */

    fieldSetup_font(font) {
        try {
            const field = document.getElementById('root');
            field.style.fontSize = font;
        } catch (e) {
            console.log(e);
        }
    }


    /**
    * @method user_SetBackground Change style for user Panel. Current - background
    * @param {color}: String - Background Color
    * @returns {void}
    */

    user_SetBackground(color) {
        try {
            const userProfile = document.getElementById('user');
            userProfile.style.backgroundColor = color;
        } catch (error) {
            console.log(error);
        }
    }

    /**
    * @method user_SetImg Change style for user Panel. Current - User picture
    * @param {path}: String - path to your IMG
    * @returns {void}
    */

    user_SetImg(path) {
        try {
            const userProfile = document.getElementById('user-photo');
            userProfile.style.backgroundImage = `url(${path})`;
        } catch (exception) {
            console.log(exception);
        }
    }

    /**
    * @method user_SetName Change style for user Panel. Current - User name
    * @param {name}: String - user name
    * @returns {void}
    */

    user_SetName(name) {
        try {
            const userName = document.querySelector('.user-data').childNodes[1].childNodes[1];
            userName.innerHTML = `Имя: ${name}`;
        } catch (error) {
            console.log(error);
        }
    }

    /**
    * @method user_SetRule Change style for user Panel. Current - User rule
    * @param {rule}: String - user rule
    * @returns {void}
    */

    user_SetRule(rule) {
        try {
            const userRule = document.querySelector('.user-data').childNodes[1].childNodes[3];
            userRule.innerHTML = `Должность: ${rule}`;
        } catch (error) {
            console.log(error);
        }
    }

    /**
    * @method user_SetMark Change style for user Panel. Current - User right corner mark
    * @param {path}: String - path to your new mark
    * @returns {void}
    */

    user_SetMark(path) {
        try {
            const mark = document.getElementById('mark');
            mark.style.backgroundImage = `url(${path})`;
        } catch (error) {
            console.log(error);
        }
    }

    /**
    * @method category_setImg This method sets new img for current category
    * @param {identifier}: String - The unique identifier for your item.
    * @param {img}: String - Img path
    * @returns {void}
    */

    category_setImg(identifier, img) {
        try {
            document.getElementById(identifier).childNodes[1].setAttribute('src', img);
        } catch (error) {
            console.log(error);
        }
    }


    /**
    * @method category_setTitle This method sets new title for current category
    * @param {identifier}: String - The unique identifier for your item.
    * @param {title}: String - title text
    * @returns {void}
    */

    category_setTitle(identifier, title) {
        try {
            document.getElementById(identifier).childNodes[3].innerHTML = title;
        } catch (error) {
            console.log(error);
        }
    }
}