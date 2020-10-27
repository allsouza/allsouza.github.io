function projects() {
    
    document.addEventListener("DOMContentLoaded", () => {

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