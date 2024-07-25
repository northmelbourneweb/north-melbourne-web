const faqItems = Array.from(document.querySelectorAll('.faq-item'));
for (const item of faqItems) {
    const onClick = () => {
    faqItems.forEach(faq => faq.classList.remove('active'));
    item.classList.toggle('active')
}
item.addEventListener('click', onClick)
}
                                