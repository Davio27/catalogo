document.addEventListener('DOMContentLoaded', function () {
    function filterPerfumes(filter) {
        const perfumes = document.querySelectorAll('.perfume-item');
        perfumes.forEach(perfume => {
            const genero = perfume.getAttribute('data-genero');
            const familia = perfume.getAttribute('data-familia');
            if (genero === filter || familia === filter || filter === 'todos') {
                perfume.style.display = 'block';
            } else {
                perfume.style.display = 'none';
            }
        });
    }

    function showAll() {
        const perfumes = document.querySelectorAll('.perfume-item');
        perfumes.forEach(perfume => {
            perfume.style.display = 'block';
        });
    }

    // Attach event listeners to filter buttons
    document.querySelectorAll('.filter-button').forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            if (filter === 'todos') {
                showAll();
            } else {
                filterPerfumes(filter);
            }
            // Close the dropdown menu after selecting a filter
            document.querySelector('.dropdown-content').style.display = 'none';
        });
    });

    // Open the dropdown menu on hover
    document.querySelector('.filter-dropdown').addEventListener('mouseover', () => {
        document.querySelector('.dropdown-content').style.display = 'block';
    });

    // Close the dropdown menu when the mouse leaves the dropdown
    document.querySelector('.filter-dropdown').addEventListener('mouseout', () => {
        document.querySelector('.dropdown-content').style.display = 'none';
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const openModalButtons = document.querySelectorAll('.open-modal');
    const modalContainers = document.querySelectorAll('.modal-container');

    const openModal = (modalId) => {
        document.getElementById(modalId).style.display = 'flex';
    };

    const closeModal = () => {
        modalContainers.forEach(container => {
            container.style.display = 'none';
        });
    };

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            openModal(modalId);
        });
    });

    document.querySelectorAll('.modal-close').forEach(closeButton => {
        closeButton.addEventListener('click', closeModal);
    });

    modalContainers.forEach(container => {
        container.addEventListener('click', (event) => {
            if (event.target === container) {
                closeModal();
            }
        });
    });
});
