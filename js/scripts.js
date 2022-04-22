// Custom Scripts
// Custom scripts
//Sidebar

const menuItems = document.querySelectorAll('.menu-item');

//MESSAGES

const messagesNotification = document.querySelector('#message-notifications');
const messages = document.querySelector('.messages');
const message = document.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// THEME

const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
let root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1')
const Bg2 = document.querySelector('.bg-2')
const Bg3 = document.querySelector('.bg-3')

//remove active class from all items

const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach( item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id !== 'notifications') {
            document.querySelector('.notifications-popup').style.display = 'none';
        }else {
            document.querySelector('.notifications-popup').style.display = 'block';
            setTimeout(() => {
                document.querySelector('.notifications-popup').style.display = 'none';
            }, 3000)
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})

//MESSAGES

//Search chat

const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if ( name.indexOf(val) != -1 ) {
            user.style.display = 'flex';
        }else {
            user.style.display = 'none';
        }
    })
}

messageSearch.addEventListener('keyup', searchMessage)

//click show shadow for 2 second
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem #6B4DE6FF';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none'
    }, 2000)
})

//THEME

//open
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}
//close
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}

themeModal.addEventListener('click', closeThemeModal);
theme.addEventListener('click', openThemeModal);

//FONTS

//remove actives class fro spans or font size selectors

const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active')
    })
}

fontSizes.forEach(size => {

    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active')
        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
        } else if (size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('$stickyTopLeft', '5.4rem')
            root.style.setProperty('$stickyBottomLeft', '-7rem')
        } else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('$stickyTopLeft', '-2rem')
            root.style.setProperty('$stickyBottomLeft', '-17rem')
        } else if (size.classList.contains('font-size-4')) {
            fontSize = '19px'
            root.style.setProperty('$stickyTopLeft', '-5rem')
            root.style.setProperty('$stickyBottomLeft', '-25rem')
        } else if (size.classList.contains('font-size-5')) {
            fontSize = '22px'
            root.style.setProperty('$stickyTopLeft', '-12rem')
            root.style.setProperty('$stickyBottomLeft', '-35rem')
        }
        document.querySelector('html').style.fontSize = fontSize;
    })
})

//change primary colors

const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        changeActiveColorClass();
        if (color.classList.contains('color-1')) {
            primaryHue = 252;
        } else if (color.classList.contains('color-2')) {
            primaryHue = 52;
        } else if (color.classList.contains('color-3')) {
            primaryHue = 352;
        } else if (color.classList.contains('color-4')) {
            primaryHue = 152;
        } else if (color.classList.contains('color-5')) {
            primaryHue = 202;
        }

        color.classList.add('active')

        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})

/// BACKGROUND CHANGE

let lightColorLightness;
let darkColorLightness;
let whiteColorLightness;

const ChangeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness)
    root.style.setProperty('--white-color-lightness', whiteColorLightness)
    root.style.setProperty('--dark-color-lightness', darkColorLightness)
}

Bg1.addEventListener('click', () => {
    Bg2.classList.add('active');

    Bg1.classList.remove('active')
    Bg3.classList.remove('active')
    window.location.reload();
})

Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    Bg2.classList.add('active');

    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    ChangeBG();
})
Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    Bg2.classList.add('active');

    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    ChangeBG();
})
