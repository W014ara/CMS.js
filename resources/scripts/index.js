import { CMS } from './cms.js';

//Example

const cms = new CMS();
cms.initfield();
cms.addLeftSection();
cms.addRightSection();
cms.addCategory('http://127.0.0.1:5500/CMS.js/resources/imgs/system/menu-bar/fruits-logo.svg','Фрукты','fruits');
cms.addCategory('http://127.0.0.1:5500/CMS.js/resources/imgs/system/menu-bar/vegetables-logo.svg','Овощи','vegetables');
cms.addCategory('http://127.0.0.1:5500/CMS.js/resources/imgs/system/menu-bar/meat-logo.svg','Мясо','meat');
cms.addCategory('http://127.0.0.1:5500/CMS.js/resources/imgs/system/menu-bar/fish-logo.svg','Рыба','fish');
cms.addCategory('http://127.0.0.1:5500/CMS.js/resources/imgs/system/menu-bar/suho-logo.svg','Сухофрукты','suho');
cms.addCategory('http://127.0.0.1:5500/CMS.js/resources/imgs/system/menu-bar/milk-logo.svg','Молочные изделия','milk');
cms.addCategory('http://127.0.0.1:5500/CMS.js/resources/imgs/system/menu-bar/green-logo.svg','Зелень','green');
cms.addCategory('http://127.0.0.1:5500/CMS.js/resources/imgs/system/menu-bar/berry-logo.svg','Ягоды','berry');
cms.addCategory('http://127.0.0.1:5500/CMS.js/resources/imgs/system/menu-bar/solenie-logo.svg','Соленье','solenie');
cms.addCategory('http://127.0.0.1:5500/CMS.js/resources/imgs/system/menu-bar/up-level/meat-logo.svg', 'Продовольственные товары', 'products');
cms.addCategory('http://127.0.0.1:5500/CMS.js/resources/imgs/system/menu-bar/up-level/restourant-logo.svg', 'Рестораны', 'restourans');
cms.addCategory('http://127.0.0.1:5500/CMS.js/resources/imgs/system/menu-bar/up-level/unproductproduct-logo.svg', 'Не продовольственные товары', 'unproductproduct');
cms.addCategory('http://127.0.0.1:5500/CMS.js/resources/imgs/system/menu-bar/up-level/job-logo.svg', 'Услуги', 'other-job');
cms.addCategory('http://127.0.0.1:5500/CMS.js/resources/imgs/system/menu-bar/up-level/sale-logo.svg', 'Акции', 'sales');

cms.fieldSetup_background('#FFF5FC');

/**
 * Examples methodes
 */
// cms.fieldSetup_background('red');
// cms.category_setTitle('meat',1);
// cms.category_setImg('solenie','http://127.0.0.1:5500/resources/imgs/system/menu-bar/fish-logo.svg');
// cms.removeCategory('solenie');
// cms.user_SetMark('http://127.0.0.1:5500/resources/imgs/system/user_default.svg');
// cms.user_SetRule("Пользователь");
// cms.user_SetName('Олег');
// cms.user_SetBackground('red');
// cms.user_SetImg('http://127.0.0.1:5500/resources/imgs/system/user_default.svg');