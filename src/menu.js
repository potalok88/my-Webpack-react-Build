export default function (array, className) {
    var menu = document.createElement('ul');
    menu.className = className;
    var listItems = '';
    array.firEach(function (item) {
        listItems += '<li>' + item + '</li>';
    });
    menu.innerHTML = listItems
    return menu
}
