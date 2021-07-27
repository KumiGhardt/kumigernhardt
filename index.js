window.addEventListener('DOMContentLoaded',
() => {
    const btn = document.querySelector('#btn');
    const tooltip = document.querySelector('#tooltip');

    btn.addEventListener('mouseenter', () =>{
        tooltip.classList.remove('hidden');
    })

    btn.addEventListener('mouseleave', () =>{
        tooltip.classList.add('hidden');
    })
})