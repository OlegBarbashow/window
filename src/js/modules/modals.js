const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, clickCloseOverlay = true, scroll = 0) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]');

        trigger.forEach(item => {
           item.addEventListener('click', (e) => {
               if (e.target) {
                   e.preventDefault();
               }

               windows.forEach(item => {
                  item.style.display = 'none';
               });

               modal.style.display = 'block';
               document.body.style.overflow = 'hidden';
               document.body.style.marginRight = `${scroll}px`;
           });
        });

        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display = 'none';
            });

            modal.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = '0px';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && clickCloseOverlay) {
                windows.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = '0px';
            }
        });
    }

    function showModalByTime(selector, time, scroll=0) {
        setTimeout(function () {
           document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
        }, time);
    }

    function calcScroll() {
        let div = document.createElement('div');
        div.style.height = '50px';
        div.style.width = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.append(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        return scrollWidth;
    }

    const scroll = calcScroll();

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close', true, scroll);
    bindModal('.phone_link', '.popup', '.popup .popup_close',  true, scroll);
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close',  true, scroll);
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false, scroll);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false, scroll);
    showModalByTime('[data-modal]', 3000, scroll);

};

export default modals;