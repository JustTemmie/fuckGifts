/**
 * @name fuckGifts
 * @version 1.0.0
 * @description fuck gifts!
 * @author JustTemmie
 *   
*/

function removeGift(mutationList, observer) {
    mutationList.forEach((mutation) => {
        switch(mutation.type) {
            case 'childList':
            /* One or more children have been added to and/or removed
                from the tree.
                (See mutation.addedNodes and mutation.removedNodes.) */
            break;
            case 'attributes':
            /* An attribute value changed on the element in
                mutation.target.
                The attribute name is in mutation.attributeName, and
                its previous value is in mutation.oldValue. */
                if (document.body.contains(document.getElementsByClassName("container-3Csys8")[0])){
                    document.getElementsByClassName("container-3Csys8")[0].remove(); // gift button
                    document.getElementsByClassName("expression-picker-chat-input-button buttonContainer-2lnNiN")[1].remove(); // gif button
                    document.getElementsByClassName("expression-picker-chat-input-button buttonContainer-2lnNiN")[0].remove(); // sticker button
                }
            break;
        }
    });
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

        const sideBar = document.getElementsByClassName("sidebar-1tnWFu");
        const observer1 = new MutationObserver(removeGift);
        observer1.observe(sideBar[0], observerOptions);
    }


    stop() {

    }
}