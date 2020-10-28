function projects() {
    
    document.addEventListener("DOMContentLoaded", () => {

        window.addEventListener("hashchange", function (e) {
            switch (e.newURL.split('#')[1]) {
                case 'who-am-i':
                    window.scrollTo(window.scrollX, window.scrollY - 200);
                    break;
                
                default:
                    window.scrollTo(window.scrollX, window.scrollY - 80);
                    break;
            }
        });

        // Smarter Trading preview
        const smarterImg = document.querySelector('#smarter-img');
        const smarterTrading = document.querySelector('#smarter-trading');
        smarterTrading.addEventListener('mouseenter', () => {
            smarterImg.src = '../../images/search.gif';
        })
        smarterTrading.addEventListener('mouseleave', () => {
            smarterImg.src = '../../images/smarter-trading.png';
        })

        const hikeImg = document.querySelector('#hike-img');
        const TakeAHike = document.querySelector('#take-a-hike');
        TakeAHike.addEventListener('mouseenter', () => {
            hikeImg.src = '../../images/quick_preview.gif';
        })
        TakeAHike.addEventListener('mouseleave', () => {
            hikeImg.src = '../../images/take-a-hike.png';
        })

        const noteImg = document.querySelector('#note-img');
        const WhateverNote = document.querySelector('#whatever-note');
        WhateverNote.addEventListener('mouseenter', () => {
            noteImg.src = '../../images/whatever_note.gif';
        })
        WhateverNote.addEventListener('mouseleave', () => {
            noteImg.src = '../../images/whatevernote.png';
        })
    })
}

projects();