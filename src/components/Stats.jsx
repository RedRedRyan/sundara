"use client"

export default function Stats() {
    const impactItems = [
        {
            percentage: 30,
            title: "Income Increase",
            description: "Mango farmers earn 5 times more through value addition.",
        },
        {
            percentage: 30,
            title: "Reduced PHL",
            description: "40,000 Tonnes of Mangoes recovered Annually",
        },
        {
            percentage: 30,
            title: "Farmers Empowerment",
            description: "Empowering 2,000+ mango farmers",
        },
    ]

    return (
        <div className="relative min-h-screen bg-green overflow-hidden">
            {/* Top left green quarter circle */}
            {/*<div className="absolute top-0 left-0 w-20 h-20 bg-yellow rounded-br-full"></div>*/}

            {/*/!* Middle left green circle *!/*/}
            {/*<div className="absolute top-1/3 left-0 w-32 h-32 bg-yellow rounded-full -translate-x-1/2"></div>*/}

            {/* Right side large yellow circle */}
            {/*<div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow rounded-tl-full"></div>*/}

            {/* Right side medium circle */}
            {/*<div className="absolute top-1/3 right-12 w-24 h-24 bg-yellow rounded-full"></div>*/}

            {/* Right side small circle */}
            <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-yellow rounded-full"></div>

            {/* Main content */}
            <div className="relative z-10 px-8 md:px-16 py-12 max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-oswald text-yellow mb-4  text-center h-20 rounded-lg">SUNDARA AFRICA'S IMPACT</h1>
                    <p className="text-white font-bold text-3xl mb-4">
                        In Kenya and Ethiopia, solar drying is gradually gaining traction.
                    </p>
                    <p className="text-gray-800 text-base leading-relaxed">
                        With Capacity to dry at least <span className="font-bold">100kgs of produce per week</span> we are looking at
                        the following impact.
                    </p>
                </div>

                {/* Impact indicators section */}
                <div className="space-y-8">
                    {impactItems.map((item, index) => (
                        <div key={index} className="flex items-center gap-8">
                            {/* Circular progress indicator */}
                            <div className="flex-shrink-0">
                                <CircularProgressIndicator percentage={item.percentage} />
                            </div>

                            {/* Dotted line connector */}
                            <div className="flex-shrink-0 w-12 h-0.5 border-t-2 border-green border-dotted"></div>

                            {/* Content dot */}
                            <div className="flex-shrink-0 w-3 h-3 bg-green rounded-full"></div>

                            {/* Text content */}
                            <div className="flex-grow">
                                <h3 className="text-2xl font-oswald text-white mb-1">{item.title}</h3>
                                <p className="text-gray-700 text-lg md:text-base">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom note */}
                <div className="mt-16 flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 border-2 border-black rounded-full flex items-center justify-center">

                    </div>
                </div>
            </div>
        </div>
    )
}

function CircularProgressIndicator({ percentage }) {
    const radius = 45
    const circumference = 2 * Math.PI * radius
    const strokeDashoffset = circumference - (percentage / 100) * circumference

    return (
        <div className="relative w-24 h-24 flex items-center justify-center">
            <svg className="absolute transform -rotate-90" width="96" height="96" viewBox="0 0 100 100">
                {/* Background circle */}
                <circle cx="50" cy="50" r={radius} fill="none" stroke="#f0f0f0" strokeWidth="6" />

                <defs>
                    <linearGradient id={`gradient-${percentage}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ef4444" />
                        <stop offset="100%" stopColor="#f59e0b" />
                    </linearGradient>
                </defs>

                <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    fill="none"
                    stroke={`url(#gradient-${percentage})`}
                    strokeWidth="6"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                />
            </svg>

            {/* Percentage text */}
            <span className="relative text-2xl font-bold text-black">{percentage}%</span>
        </div>
    )
}