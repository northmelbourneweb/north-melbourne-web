module.exports = {
    title: "Flexible Pricing Plans for Your Needs",
    description: "Our pricing plans are flexible and customizable to suit your needs. Choose the plan that best meets your needs and start building your online presence today.",
    options: [
        {
            id: "cs-option1-1387",
            label: "Pay Annually"
        },
        {
            id: "cs-option2-1387",
            label: "Pay Monthly"
        }
    ],
    plans: [
        {
            package: "Standard Pack",
            price: "A$99",
            duration: "/Month",
            isPopular: true,
            tag: "Popular",
            features: [
                "Custom Website Design",
                "Hosting Included",
                "SEO Optimization",
                "Regular Updates",
                "Unlimited Edit Requests"
            ],
            disabledFeatures: [
            ],
            buttonText: "Contact Us",
            buttonLink: "/contact"
        },
        {
            package: "Lump-Sum Pack",
            price: "A$2999",
            duration: "",
            isPopular: false,
            tag: "Hot Deal",
            features: [
                "Custom Website Design",
                "Complete Website Ownership",
                "Initial Design and Setup",
                "SEO Optimization",
                "Optional hosting for $25/mo",
            ],
            buttonText: "Contact Us",
            buttonLink: "/contact"
        }
    ],
    annualPlans: [
        {
            package: "Standard Pack",
            price: "$99",
            duration: "/Year",
            isPopular: true,
            tag: "Hot Deal",
            features: [
                "Mobile-Optimized",
                "Free Custom Domain",
                "Best Hosting",
                "Outstanding Support",
                "Happy Customers"
            ],
            disabledFeatures: [
                "Outstanding Support",
                "Happy Customers"
            ],
            buttonText: "Get Now",
            buttonLink: ""
        },
        {
            package: "Corporate Pack",
            price: "$299",
            duration: "/Year",
            isPopular: false,
            tag: "Hot Deal",
            features: [
                "Mobile-Optimized",
                "Free Custom Domain",
                "Best Hosting"
            ],
            buttonText: "Read More",
            buttonLink: ""
        }
    ]
};
