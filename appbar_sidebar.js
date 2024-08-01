
function getSidebar() {
    const sidebar = document.createElement('nav');
    sidebar.className = 'sidebar';

    const link1 = document.createElement('a');
    link1.setAttribute('href', '/index.html');
    link1.textContent = 'Articles';
    sidebar.appendChild(link1);

    const link2 = document.createElement('a');
    link2.setAttribute('href', '/aboutme.html');
    link2.textContent = 'About me';
    sidebar.appendChild(link2);

    const link3 = document.createElement('a');
    link3.setAttribute('href', '/cv.html');
    link3.textContent = 'Curriculum Vitae';
    sidebar.appendChild(link3);

    return sidebar;
}

function getAppbar() {
    let header = document.createElement('header');
    header.className = 'appbar';

    let anchor = document.createElement('a');
    anchor.href = '/index.html';

    let div = document.createElement('div');
    div.className = 'appbar-title';

    let p = document.createElement('p');
    p.id = 'appbar-title-p'
    p.textContent = "tMario2111's blog";

    let img = document.createElement('img');
    img.id = 'gear_wheel';
    img.src = '/resources/gear-wheel.svg';
    img.className = 'appbar-title-image';
    img.alt = 'a simple gear wheel animation';
    img.width = '25';
    img.height = '25';

    div.appendChild(p);
    div.appendChild(img);

    anchor.appendChild(div);

    header.appendChild(anchor);

    return header;
}