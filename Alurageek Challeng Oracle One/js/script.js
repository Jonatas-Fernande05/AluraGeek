// script.js

document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('productForm');
    const saveButton = document.getElementById('saveButton');

    saveButton.addEventListener('click', () => {
        const name = document.getElementById('productName').value;
        const value = document.getElementById('productValue').value;
        const image = document.getElementById('productImage').value;

        if (name && value && image) {
            const items = JSON.parse(localStorage.getItem('items')) || [];
            items.push({ name, value, image });
            localStorage.setItem('items', JSON.stringify(items));
            productForm.reset();
            window.location.href = 'items.html'; // Redireciona para a página de itens
        } else {
            alert('Preencha todos os campos!');
        }
    });

    // Previne o envio do formulário para evitar redirecionamento
    productForm.addEventListener('submit', (event) => {
        event.preventDefault();
    });
});
