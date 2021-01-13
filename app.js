const heading = document.getElementById('first-heading');

function isVisable(element) {
    let elementBox = element.getBoundingClientRect();
    let distanceFromTheTop = -50;

    if (elementBox.top - window.innerHeight < distanceFromTheTop) {
        return true;
    } else {
        return false;
    }
}




function scanDocument() {
    let sectionList = document.querySelectorAll('.get-in-touch')
    sectionList.forEach(section => {
        if (isVisable(section)) {
            section.classList.remove('hidden');
        }
        if (isVisable(section) != true) {
            section.classList.add('hidden');
        }

    })
}

function throttle(fn, wait) {
    var time = Date.now();
    return function () {
        if ((time + wait - Date.now()) < 0) {
            fn();
            time = Date.now();
        }
    }
}

document.addEventListener('scroll', throttle(scanDocument, 250));