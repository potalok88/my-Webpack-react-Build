import './blog.scss'
import 'normalize.css'

import createMenu from '../../components/menu'
var menu = createMenu(['Главная', 'Обо мне', 'Портфолио'], 'menu');
document.body.appendChild(menu)


console.log(' blog.js ')