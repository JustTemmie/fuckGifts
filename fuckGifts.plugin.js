/**
 * @name fuckGifts
 * @version 1.1.0
 * @description fuck gifts!
 * @author JustTemmie
 *   
*/

const giftObserver = new MutationObserver(removeGift);
const guildObserver = new MutationObserver(changedGuild);

function removeGift() {
    var buttons = document.getElementsByClassName("buttons-uaqb-5")[0]
    if (buttons == undefined) {return}
    buttons = buttons.getElementsByTagName("div");
    for( let i=0; i< buttons.length; i++ ) {
        buttons[i].remove()
    }
}

function changedGuild() {
    const observerOptions = {
        childList: true,
        attributes: true,
      
        // Omit (or set to false) to observe only changes to the parent node
        subtree: true
    }

    const sideBar = document.getElementsByClassName("content-2a4AW9")[0];
    giftObserver.observe(sideBar, observerOptions);
    removeGift()
}

module.exports = class giftHider{
     
    load() { }

    start() {
        const observerOptions = {
            childList: true,
            attributes: true,
          
            // Omit (or set to false) to observe only changes to the parent node
            subtree: true
        }
    
        const serverList = document.querySelector('[aria-label="Servers"]');
        guildObserver.observe(serverList, observerOptions);

        changedGuild()
        removeGift()
    }

    stop() {

    }
}