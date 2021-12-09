const closeModal = (windowsSelector = '[data-modal]') => {
    const windows = document.querySelectorAll(windowsSelector);
    windows.forEach(item => {
        item.style.display = 'none';
    });

    document.body.style.overflow = '';
    document.body.style.marginRight = '0px';
};

export default closeModal;