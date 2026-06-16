document.addEventListener('DOMContentLoaded', () => {

    const btnResume = document.getElementById('btnResume');
    const resumeModal = document.getElementById('resumeModal');
    const closeResume = document.getElementById('closeResume');

    btnResume.addEventListener('click', () => {
        resumeModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeResume.addEventListener('click', () => {
        resumeModal.classList.remove('active');
        document.body.style.overflow = '';
    });

    resumeModal.addEventListener('click', (e) => {
        if (e.target === resumeModal) {
            resumeModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            resumeModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

});