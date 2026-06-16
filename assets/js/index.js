document.addEventListener('DOMContentLoaded', () => {

    const btnResume = document.getElementById('btnResume');
    const resumeModal = document.getElementById('resumeModal');
    const closeResume = document.getElementById('closeResume');

    const isMobile =
        /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!btnResume || !resumeModal || !closeResume) return;

    function openModal() {
        resumeModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        resumeModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    btnResume.addEventListener('click', (e)=>{
      if (isMobile) {
            window.open(
                './assets/pdf/CV Hilman Adi Kartika.pdf',
                '_blank'
            );
            return;
      }
      openModal()
    });

    closeResume.addEventListener('click', closeModal);

    resumeModal.addEventListener('click', (e) => {
        if (e.target === resumeModal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && resumeModal.classList.contains('active')) {
            closeModal();
        }
    });

});