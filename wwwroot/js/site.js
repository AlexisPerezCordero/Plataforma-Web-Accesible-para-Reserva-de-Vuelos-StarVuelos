// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    // El menu hamburguesa ahora se maneja en _Layout.cshtml
    // Evitamos usar Bootstrap collapse aqui para no duplicar eventos.
    $('#menuOptions .nav-link').on('click', function () {
        if (typeof window.closeMenu === 'function') {
            window.closeMenu();
        }
    });
});
