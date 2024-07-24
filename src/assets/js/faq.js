const faqItems = Array.from(document.querySelectorAll('.faq-item'));

for (const item of faqItems) {
    const onClick = () => {
        // Remove 'active' class from all items
        faqItems.forEach(faq => faq.classList.remove('active'));
        
        // Add 'active' class to the clicked item
        item.classList.add('active');
    };
    item.addEventListener('click', onClick);
}
