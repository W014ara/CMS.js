import { CMS } from './cms.js';
import { CmsCustomizer } from './CmsCustomizer.js';



const customizer = new CmsCustomizer();
const cms = new CMS();

cms.initfield();
cms.addLeftSection();
cms.addRightSection();

cms.addCategory('http://127.0.0.1:5500/CMS.js/resources/imgs/system/menu-bar/up-level/meat-logo.svg', 'Продовольственные товары', 'products');
cms.addCategory('http://127.0.0.1:5500/CMS.js/resources/imgs/system/menu-bar/up-level/restourant-logo.svg', 'Рестораны', 'restourans');
cms.addCategory('http://127.0.0.1:5500/CMS.js/resources/imgs/system/menu-bar/up-level/unproductproduct-logo.svg', 'Не продовольственные товары', 'unproductproduct');
cms.addCategory('http://127.0.0.1:5500/CMS.js/resources/imgs/system/menu-bar/up-level/job-logo.svg', 'Услуги', 'other-job');
cms.addCategory('http://127.0.0.1:5500/CMS.js/resources/imgs/system/menu-bar/up-level/sale-logo.svg', 'Акции', 'sales');

cms.addSubCategory('products','http://127.0.0.1:5500/CMS.js/resources/imgs/system/menu-bar/fruits-logo.svg', 'Фрукты', 'fruits');
cms.addSubCategory('products','http://127.0.0.1:5500/CMS.js/resources/imgs/system/menu-bar/vegetables-logo.svg', 'Овощи', 'vegetables');
cms.addSubCategory('products','http://127.0.0.1:5500/CMS.js/resources/imgs/system/menu-bar/meat-logo.svg', 'Мясо', 'meat');
cms.addSubCategory('products','http://127.0.0.1:5500/CMS.js/resources/imgs/system/menu-bar/suho-logo.svg', 'Сухофрукты', 'suho');
cms.addSubCategory('products','http://127.0.0.1:5500/CMS.js/resources/imgs/system/menu-bar/fish-logo.svg', 'Рыба', 'fish');
cms.addSubCategory('products','http://127.0.0.1:5500/CMS.js/resources/imgs/system/menu-bar/milk-logo.svg', 'Молочные изделия', 'milk');
cms.addSubCategory('products','http://127.0.0.1:5500/CMS.js/resources/imgs/system/menu-bar/green-logo.svg', 'Зелень', 'green');
cms.addSubCategory('products','http://127.0.0.1:5500/CMS.js/resources/imgs/system/menu-bar/berry-logo.svg', 'Ягоды', 'berry');
cms.addSubCategory('products','http://127.0.0.1:5500/CMS.js/resources/imgs/system/menu-bar/solenie-logo.svg', 'Соленье', 'solenie');
