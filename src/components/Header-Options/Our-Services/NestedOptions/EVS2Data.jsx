'use client'

import C2Common from "@/components/Outer/Career/C2/C2Common";

const BASE = process.env.NEXT_PUBLIC_IMG_url;
const BASE1 = process.env.NEXT_PUBLIC_IMG_url1;
const BASE2 = process.env.NEXT_PUBLIC_IMG_url2;
const BASE3 = process.env.NEXT_PUBLIC_IMG_url3;
// const BASE4 = process.env.NEXT_PUBLIC_IMG_url4;

export const EVS2Data = [

    // 0
    {
        id: "Branding-Elements",
        coverlink: `${BASE1}/Branding-Elements-Banner.png`,
        evst1: "Visual Identity",
        evst2: "Branding Elements",
        evsp1: "This service includes developing a cohesive visual identity for your brand, including color schemes, typography, and overall style guidelines. Branding covers Print Design, such as business cards, brochures, posters, banners, and packaging as well as Digital Design used for web and marketing purposes.",
        img11: `${BASE1}/brand-branding-advertising-2.png`,
        img12: `${BASE1}/ideas-progress-vision.png`,
        img13: `${BASE1}/think-education-inspire.jpg`,
        img14: `${BASE1}/Branding-Elements.png`,
        index: [2, 16, 17, 18],

        left: [
            { type: "cont", props: { title: "Branding", para: "Effective marking is a continuous interaction that requires consistency, genuineness, and a profound comprehension of your main interest group. It's about creating a lasting impression that resonates with people and builds trust over time. Some key elements that are considered are: Brand Identity - Logo, Color Palette and Typography. Brand Messaging - Develop a unique brand voice that resonates with your target audience and crafting a compelling brand story that communicates your origins and journey. We offer the following Branding elements:" } },
            {
                type: "BulletCheck",
                props: {
                    title: "",
                    features: [
                        "Logo",
                        "Stationery",
                        "Package Design",
                        "Awareness",
                        "Typography",
                        "Brochures and Flyers",
                        "Advertising Posters",
                        "Social Media Posts",
                    ],
                },
            },
            { type: "cont", props: { title: "Visual Consistency", para: "Our designers at Webtech Evolution work hard to ensure consistency in visual elements across all platforms. Like using a consistent color palette, logo placement, and design elements in both online and offline materials" } },
        ],

        right: [
            { type: "cont", props: { title: "Market Research", para: "Our designs for your brand are backed by extensive market research, competitor analysis, industry practices and standard design guidelines. Our team of designers know their job and responsibility and ensure to be original and unique in their creations." } },
            {
                type: "Block",
                props: {
                    data: [
                        {
                            q: "What do we cover in Branding?",
                            content: () => (
                                <>
                                    <p>Print Media –</p>
                                    <ul className="list-disc px-10 mt-2">
                                        <li>Eye-catching business cards with creative layouts.</li>
                                        <li>Letterheads.</li>
                                        <li>Artistic and visually appealing brochures and flyers.</li>
                                        <li>Innovative packaging designs for products.</li>
                                        <li>Creative poster designs for events or promotions.</li>
                                    </ul>
                                </>
                            ),
                        },
                        {
                            q: "Commitment to Client Satisfaction",
                            content: () => (
                                <>
                                    <p>Our designers are committed to ensuring client satisfaction. We help you right from the beginning of establishing your brand upto positioning, brand experience, brand evolution and strong online presence. </p>
                                </>
                            ),
                        },
                        {
                            q: "Cost-effective Design Solutions",
                            content: () => (
                                <>
                                    <p>At Webtech Evolution, we offer competitive pricing structures for your brand that do not dent a hole in your pockets. As we understand that you too may just be starting out and may not be able to spend much on building a brand initially. </p>
                                </>
                            ),
                        },
                    ],
                },
            },
        ],
        plantitle1: "Branding Elements",
        pricingPlans: [
            {
                plantitle: "Starter Branding",
                planprice: "$99",
                planduration: "per Month",
                planfeatures: [
                    "Logo Design",
                    "Color Palette",
                    "Typography Guide",
                    "Business Card Design",
                    "Logo Design",
                    "Color Palette",
                    "Typography Guide",
                    "Business Card Design",
                ],
                planlink: "/contact-us",
            },
            {
                plantitle: "Premium Branding",
                planprice: "$299",
                planduration: "per Month",
                planfeatures: [
                    "Everything in Starter",
                    "Stationery Set",
                    "Social Media Kit",
                    "Brand Guidelines PDF",
                    "Logo Design",
                    "Color Palette",
                    "Typography Guide",
                    "Business Card Design",
                    "Logo Design",
                    "Color Palette",
                    "Typography Guide",
                    "Business Card Design",
                    "Logo Design",
                    "Color Palette",
                    "Typography Guide",
                    "Business Card Design",
                ],
                planlink: "/contact-us",
            },
            {
                plantitle: "Premium Branding",
                planprice: "$299",
                planduration: "per Month",
                planfeatures: [
                    "Everything in Starter",
                    "Stationery Set",
                    "Social Media Kit",
                    "Brand Guidelines PDF",
                    "Logo Design",
                    "Color Palette",
                    "Typography Guide",
                    "Business Card Design",
                    "Logo Design",
                    "Color Palette",
                    "Typography Guide",
                    "Business Card Design",
                    "Logo Design",
                    "Color Palette",
                    "Typography Guide",
                    "Business Card Design",
                    "Logo Design",
                    "Color Palette",
                    "Typography Guide",
                    "Business Card Design",
                    "Logo Design",
                    "Color Palette",
                    "Typography Guide",
                    "Business Card Design",
                ],
                planlink: "/contact-us",
            },
        ],
    },

    // 1
    {
        id: "Graphics",
        coverlink: `${BASE1}/graphic-design-banner.png`,
        evst1: "Creative",
        evst2: "Graphics",
        evsp1: "Graphic design services incorporate a great many innovative errands focused on outwardly conveying thoughts, messages, or data. We do Digital Design that is creating graphics for online use, including website design elements, social media graphics, email templates, and digital advertisements. Our designers can also do custom illustrations or graphics to enhance your brand or convey specific messages.",
        img11: `${BASE1}/graphic-designer-software-modern.png`,
        img12: `${BASE1}/young-woman-sitting-front-laptop.jpg`,
        img13: `${BASE3}/about-img_4.jpg`,
        img14: `${BASE1}/Graphics.png`,
        index: [0, 16, 17, 18],

        left: [
            { type: "cont", props: { title: "Creative and Innovative Designs", para: "Creative designs often involve a balance of aesthetics, functionality, and innovation. They can fill different needs, from improving brand personality to giving an outwardly engaging encounter to clients or crowds. At Webtech Evolution, our designers delve into an ocean of creative ideas to emerge with unique, innovative and creative masterpieces that stand out from the ordinary!" } },
            { type: "cont", props: { title: "Design and Quality Check", para: "Every design we create undergoes thorough checking for quality of design elements, checked for maintaining standard design practices, uniformity across the website and responsiveness." } },
            { type: "cont", props: { title: "Graphics Design", para: "Our Graphic Design service promises the following deliverables: Unique and visually striking logos. Eye-catching business cards with creative layouts. Innovative packaging designs for products. Creative poster designs for events or promotions. Tools we use: Adobe Photoshop, Adobe Illustrator, Corel Draw, Canva etc." } },
        ],

        right: [
            {
                type: "Block",
                props: {
                    data: [
                        {
                            q: "Why choose us for your design project?",
                            content: () => (
                                <>
                                    <p>We select youthful, venturesome and innovative specialists and architects to work for our clients. Our designers get ample opportunities to design and hence learn from experience. Their skills are honed at Webtech Evolution and they are prepared for a bright future in design.</p>
                                </>
                            ),
                        },
                        {
                            q: "Imaginative Design",
                            content: () => (
                                <>
                                    <p>Imaginative design often involves a departure from the ordinary, encouraging our designers to think outside the box and explore new possibilities. It’s about embracing creativity, exploring novel concepts, and expressing ideas in ways that captivate and inspire.</p>
                                </>
                            ),
                        },
                        {
                            q: "Tailored Solutions",
                            content: () => (
                                <>
                                    <p>Our designers display immense commitment to providing customized design solutions tailored to the specific needs and goals of each client. They display extraordinary adaptability in adjusting to various ventures, styles, and task scopes.</p>
                                </>
                            ),
                        },
                    ],
                },
            },
        ],
    },

    // 2
    {
        id: "BigCommerce",
        coverlink: `${BASE1}/BigCommerce-banner.png`,
        evst1: "E-commerce Platform",
        evst2: "BigCommerce Technicalities",
        evsp1: (
            <>
                <p className="pb-[3vh]">BigCommerce is a web based business stage that gives a complete arrangement of instruments and highlights for organizations to make and oversee online stores. It is a Software as a Service (SaaS) solution, meaning that it is hosted and maintained by BigCommerce, allowing merchants to focus on running their businesses without worrying about the technical aspects of hosting and infrastructure.</p>
                <p>BigCommerce is suitable for businesses of varying sizes and industries, providing a robust and user-friendly platform for selling products online. The platform is particularly known for its flexibility, scalability, and the range of features it offers to merchants. However, the choice of an e-commerce platform depends on the specific needs and goals of a business, and it’s recommended to evaluate various options before making a decision.</p>
            </>
        ),
        img11: `${BASE1}/30.png`,
        img12: `${BASE1}/32.png`,
        img13: `${BASE1}/31.png`,
        img14: `${BASE1}/Big-commerce.png`,
        index: [0, 1, 21],

        left: [
            { type: "cont", props: { title: "User-Friendly Interface", para: "BigCommerce gives a natural and easy to use interface, making it simple for shippers to set up and deal with their web-based stores without broad specialized information." } },
            { type: "cont", props: { title: "Comprehensive Feature Set", para: "BigCommerce provides a comprehensive set of e-commerce features, including product management, secure checkout, inventory tracking, and integrated payment gateways, reducing the need for third-party tools." } },
            { type: "cont", props: { title: "Multi-Channel Selling", para: "Merchants can expand their reach by selling on multiple channels, including popular marketplaces and social media platforms, directly from the BigCommerce dashboard." } },
        ],

        right: [
            { type: "cont", props: { title: "Built-in Marketing Tools", para: "Merchants can leverage built-in marketing tools, including promotions, discounts, and gift cards, to attract and retain customers. The platform also integrates with popular email marketing services." } },
            {
                type: "Block",
                props: {
                    data: [
                        {
                            q: "Who is BigCommerce for?",
                            content: () => (
                                <>
                                    <p>BigCommerce is apt for well-established and rapidly growing businesses. It integrates enterprise-level functionality into its platform, providing businesses with advanced features and tools typically found in larger, enterprise-grade solutions.</p>
                                </>
                            ),
                        },
                        {
                            q: "Market-Leading Performance",
                            content: () => (
                                <>
                                    <p>The platform emphasizes market-leading performance, ensuring fast and reliable operations for online stores. This performance optimization contributes to a positive user experience and can impact factors such as conversion rates.</p>
                                </>
                            ),
                        },
                        {
                            q: "Cloud-Based SaaS Solution",
                            content: () => (
                                <>
                                    <p className="pb-[2vh]">As a Software as a Service (SaaS) solution, BigCommerce offers the benefits of cloud-based hosting, automatic updates, and reliable infrastructure. This model reduces the burden of managing on-premise software, allowing businesses to focus on their core operations.</p>
                                    <p>Our developers can guide you to setup your ecommerce business right from hosting to going live. </p>
                                </>
                            ),
                        },
                    ],
                },
            },
        ],
    },

    // 3
    {
        id: "IONIC",
        coverlink: `${BASE1}/IONIC-Banner.png`,
        evst1: "App Development",
        evst2: "Ionic App Development Technicalities",
        evsp1: (
            <>
                <p className="pb-[3vh]">Ionic is an open-source system for building cross-stage portable applications utilizing web innovations like HTML, CSS, and JavaScript/TypeScript. It allows developers to create mobile apps for iOS, Android, and the web from a single codebase. Ionic is based on top of Precise, a well known web application system, and utilizations Apache Cordova or Capacitor to send the application to local stages.</p>
                <p>Key features and components of Ionic include:</p>
            </>
        ),
        img11: `${BASE1}/29.png`,
        img12: `${BASE1}/28.png`,
        img13: `${BASE1}/27.png`,
        img14: `${BASE1}/IONIC.png`,
        index: [4, 5, 6, 8],

        left: [
            { type: "cont", props: { title: "Cross-Platform Development", para: "Ionic permits our designers to construct portable applications that can run on numerous stages, including iOS, Android, and the web. This is achieved by using web technologies for the app’s user interface." } },
            { type: "cont", props: { title: "Ionic Framework", para: "The Ionic framework provides a set of pre-built UI components, themes, and styling that helps our developers create visually appealing and responsive mobile applications." } },
            { type: "cont", props: { title: "Angular Integration", para: "Ionic is closely integrated with Angular, a popular JavaScript framework for building web applications. Developers can leverage Angular’s features and tools to enhance the structure and functionality of their Ionic apps." } },
        ],

        right: [
            {
                type: "EvsImg",
                props: {
                    src: `${BASE3}/about-img_5.jpg`,
                    alt: "Business handshake",
                    showPattern: true,
                    showRedBg: true,
                },
            }
        ],
    },

    // 4
    {
        id: "Android-Development",
        coverlink: `${BASE1}/Android-Development-1.png`,
        evst1: "App Development",
        evst2: "Android App Development",
        evsp1: (
            <>
                <p className="pb-[3vh]">Android app development involves creating software applications for devices running the Android operating system. Android is an open-source mobile operating system developed by Google and is widely used on smartphones, tablets, smart TVs, and other devices.</p>
                <p className="pb-[3vh]">Throughout the development process, we understand that it’s essential to consider aspects such as user experience, performance, security, and compatibility with various Android devices. Additionally, staying updated with the latest Android development trends, best practices, and design guidelines is crucial for building successful Android applications.</p>
                <p>The features of an Android app can vary widely based on the app’s purpose, target audience, and functionality. However, here are some common features that many Android apps might include</p>
            </>
        ),
        img11: `${BASE1}/17.png`,
        img12: `${BASE1}/19.png`,
        img13: `${BASE1}/20.png`,
        img14: `${BASE1}/Android-development.png`,
        index: [3, 5, 6, 8],

        left: [
            { type: "cont", props: { title: "Native Android App Development", para: "Our team at Webtech Evolution can create applications specifically tailored for a particular platform, such as iOS or Android, using the platform’s native programming languages and tools. Because native applications are built specifically for the operating system, they provide higher user engagement than hybrid apps. Our developers are well versed with programming in either JAVA or Kotlin and possess a strong understanding of their core concepts." } },
            {
                type: "cont", props: {
                    title: "High Performance", para: (
                        <>
                            <p className="pb-[3vh]">Native apps generally offer better performance and responsiveness because they are optimized for the specific platform’s hardware and software.</p>
                            <p>While native app development provides some advantages, it does require separate development efforts for each platform. As a result, it may involve higher initial costs and longer development timelines compared to cross-platform frameworks. The choice between native and cross-platform development depends on factors such as project requirements, budget, and the need for platform-specific features and performance.</p>
                        </>
                    )
                }
            },
            { type: "cont", props: { title: "Better User Experience", para: "Native apps often deliver a smoother and more intuitive user experience, as they are built using platform-specific UI elements." } },
        ],

        right: [
            {
                type: "EvsImg",
                props: {
                    src: `${BASE1}/HIGH-PERFORMANCE.png`,
                    alt: "Business handshake",
                    showPattern: true,
                    showRedBg: true,
                },
            }
        ],
    },

    // 5
    {
        id: "React-Native",
        coverlink: `${BASE1}/ReactNative.png`,
        evst1: "Open Source",
        evst2: "React Native Development Technicalities",
        evsp1: "React Native is an open-source system created by Facebook for building versatile applications utilizing JavaScript and Respond. Released in 2015, React Native allows developers to use the same codebase to create native-like mobile apps for both iOS and Android platforms. It is based on the popular React library, which is primarily used for building user interfaces on the web. While React Native has numerous advantages, the choice between React Native and other frameworks like Flutter depends on project requirements, team expertise, and specific use cases. Both React Native and Flutter have been widely adopted for cross-platform mobile development.",
        img11: `${BASE1}/22.png`,
        img12: `${BASE1}/21.png`,
        img13: `${BASE1}/23.png`,
        img14: `${BASE1}/React-Native.png`,
        index: [3, 4, 6, 8],

        left: [
            { type: "cont", props: { title: "Cross-Platform Development", para: "React Native permits engineers to compose code once and send it on the two iOS and Android stages. This helps in reducing development time and resources compared to maintaining separate codebases for each platform." } },
            { type: "cont", props: { title: "Reusable Components", para: "React Native utilizes a component-based architecture, where UI elements are created as modular and reusable components. This makes it easier to manage and maintain code, promoting a more efficient development process." } },
            { type: "cont", props: { title: "Native Performance", para: "React Native bridges the gap between JavaScript and native APIs, allowing developers to access native features and capabilities. This helps in achieving near-native performance, making React Native suitable for building high-performance mobile applications." } },
        ],

        right: [
            { type: "cont", props: { title: "Open Source", para: "React Native being open source allows developers to contribute to its improvement, report issues, and collaborate with the community. This open nature fosters innovation and ensures that the framework stays relevant and up-to-date." } },
            {
                type: "Block",
                props: {
                    data: [
                        {
                            q: "Component-Based Architecture",
                            content: () => (
                                <>
                                    <p>React Native follows a component-based architecture, where UI elements are created as modular and reusable components. This approach advances code reusability and practicality.</p>
                                </>
                            ),
                        },
                        {
                            q: "Platform-Specific Customization",
                            content: () => (
                                <>
                                    <p>While React Native allows for code sharing between platforms, it also provides the flexibility to write platform-specific code when necessary. This ensures that our developers can optimize the app for platform-specific requirements as per client’s needs.</p>
                                </>
                            ),
                        },
                        {
                            q: "Open Source",
                            content: () => (
                                <>
                                    <p>React Native is an open-source framework, allowing developers to contribute to its improvement and collaborate with the community. This openness fosters innovation and ensures the framework stays relevant. React Native is created and kept up with by Facebook, guaranteeing standard updates, enhancements, and backing. The strong backing from a major tech company adds to the framework’s credibility.</p>
                                </>
                            ),
                        },
                    ],
                },
            },

        ],
    },

    // 6
    {
        id: "Flutter",
        coverlink: `${BASE1}/Flutter-Banner.png`,
        evst1: "Open Source",
        evst2: "Flutter Development Technicalities",
        evsp1: (
            <>
                <p className="pb-[3vh]">Flutter is an open-source UI programming improvement tool compartment made by Google. It is utilized for building locally incorporated applications for versatile, web, and work area from a solitary codebase. Flutter enables developers to create high-quality, visually attractive applications with a smooth and consistent user experience across different platforms.</p>
                <p>Flutter accompanies a few benefits, going with it a well known decision for portable application improvement. Here are a few vital benefits of Flutter :</p>
            </>
        ),
        img11: `${BASE1}/26.png`,
        img12: `${BASE1}/24.png`,
        img13: `${BASE1}/25.png`,
        img14: `${BASE1}/Flutter-1.png`,
        index: [3, 4, 5, 8],

        left: [
            { type: "cont", props: { title: "Single Codebase", para: "Flutter permits engineers to compose code once and convey it on the two iOS and Android stages. This decreases improvement time and exertion contrasted with keeping up with discrete codebases for every stage." } },
            { type: "cont", props: { title: "Consistent UI Across Platforms", para: "Flutter permits engineers to compose code once and convey it on the two iOS and Android stages. This decreases improvement time and exertion contrasted with keeping up with discrete codebases for every stage." } },
            { type: "cont", props: { title: "Cost-Efficient Cross-Platform Development", para: "With Flutter, developers can build cross-platform apps using a single codebase, reducing development costs and resources. This can be especially advantageous for startups and businesses looking to reach a broad audience." } },
        ],

        right: [
            { type: "cont", props: { title: "High Performance", para: "Flutter apps are compiled to native ARM code, leading to high performance and smooth animations. The structure is streamlined for conveying a quick and responsive client experience." } },
            {
                type: "Block",
                props: {
                    data: [
                        {
                            q: "Platform-specific Customization",
                            content: () => (
                                <>
                                    <p>Flutter allows developers to customize the UI for each platform, ensuring that the app looks and feels native on both iOS and Android devices. This degree of customization assists in making a consistent client with encountering. Our Flutter developers are well equipped to handle any level of customizations required while building the app.</p>

                                </>
                            ),
                        },
                        {
                            q: "Expressive UI Design",
                            content: () => (
                                <>
                                    <p>Flutter provides a flexible and expressive UI framework that allows our  developers to create intricate and beautiful designs. The system upholds custom movements and changes, giving our designers the opportunity to rejuvenate their innovative thoughts..</p>
                                </>
                            ),
                        },
                        {
                            q: "Community Support",
                            content: () => (
                                <>
                                    <p>Flutter has a growing and active community of developers, which means there is a wealth of resources, libraries, and packages available to assist in the development process. We are essential for different such networks to help our engineers if there should be an occurrence of any trouble.</p>
                                </>
                            ),
                        },
                    ],
                },
            },
        ],
    },

    // 7
    {
        id: "Python-Development",
        coverlink: `${BASE1}/Our-servicesbanner-6.png`,
        evst1: "Versatile Programming Language",
        evst2: "Python Development Technicalities",
        evsp1: (
            <>
                <p className="pb-[3vh]">Python stands out as a versatile programming language widely employed in various domains like web development, data analysis, visualization, task automation, and prototyping. Its user-friendly syntax makes it particularly appealing to beginners. This ease of learning has led to its adoption by diverse professionals, including accountants and scientists, who leverage Python for tasks such as financial organization and account management.</p>
                <p>Python, a high-level interpreted language, emphasizes readability and utilizes indentation for structuring code effectively, reducing the complexity of programming steps. Its versatility extends across multiple operating systems, including Linux, Windows, Macintosh, Solaris, and more, allowing for development and execution in diverse environments.</p>
            </>
        ),
        img11: `${BASE1}/11.png`,
        img12: `${BASE1}/13.png`,
        img13: `${BASE1}/12.png`,
        img14: `${BASE1}/Flutter-1.png`,
        index: [9, 20, 22],

        left: [
            { type: "cont", props: { title: "Increased Productivity", para: "Python is highly efficient, enabling users to grasp its syntax and behavior without investing excessive time, resulting in increased productivity and accomplishing more work in less time." } },
            { type: "cont", props: { title: "Flexibility", para: "Due to its exceptional flexibility, this language empowers users to explore novel avenues. With Python, users can create innovative applications that push the boundaries of programming possibilities." } },
            { type: "cont", props: { title: "Lead your niche with the best Python Solutions from Webtech Evolution", para: "Elevate your industry standing with Webtech Evolution's premier Python solutions. Dominate your niche with our top-tier Python expertise. Stay ahead with cutting-edge solutions tailored by Webtech Evolution." } },
        ],

        right: [
            { type: "cont", props: { title: "Highly Efficient", para: "Python boasts a tidy object-oriented structure that offers superior process management. Additionally, it excels in text processing and integration capabilities, complemented by its dedicated unit testing framework, collectively enhancing its efficiency." } },
            {
                type: "Block",
                props: {
                    data: [
                        {
                            q: "Dedicated Developers",
                            content: () => (
                                <>
                                    <p>With over five dedicated developers possessing approximately four years of Python development experience, we’re poised to construct a resilient website backend with intelligent infrastructure using cutting-edge technologies. Reach out to us if you seek feature-rich, scalable, and highly secure Python development services tailored for various devices. Our expertise spans diverse enterprises of all sizes.</p>
                                </>
                            ),
                        },
                        {
                            q: "Enterprise Oriented Solutions",
                            content: () => (
                                <>
                                    <p>No matter the complexity of your supply chain, product development, or customer retention needs, enterprise-level innovation is essential. Solutions tailored for enterprises ensure uniformity among teams, fostering improved communication for peak performance and efficiency. At Webtech Evolution, we specialize in crafting enterprise-oriented solutions adaptable to any industry, addressing your specific requirements.</p>
                                </>
                            ),
                        },
                        {
                            q: "Python Machine Learning Solutions",
                            content: () => (
                                <>
                                    <p>Our Python developers bring extensive expertise in crafting machine learning solutions that decipher vital data elements. Machine learning comprehends process behaviors and adjusts to offer valuable insights. By integrating these algorithms into your business processes, you can harness analytical data, enabling informed decision-making for your enterprise.</p>
                                </>
                            ),
                        },
                    ],
                },
            },
        ],
    },

    // 8
    {
        id: "IOS-Development",
        coverlink: `${BASE1}/Our-services-banner-11-1.png`,
        evst1: "iPhone application development",
        evst2: "IOS Application Development Services",
        evsp1: (
            <>
                <p className="pb-[3vh]">Our team of seasoned iOS developers, with over 8 years of expertise, specializes in leveraging iOS technologies, integrating systems, and crafting functionalities tailored for iOS-enabled devices. Employing a performance-centric approach, we validate concepts and strive to materialize the finest rendition of your product. Whether you have a vision in mind or need guidance, our adept professionals excel at translating ideas into tangible outcomes.</p>
                <p>iOS apps boast higher ROI compared to Android counterparts and generally require less development time for similar specifications. Our experts provide strategic advice on maximizing revenue generation potential from your iOS app. We pride ourselves on offering a compelling blend of cost-effectiveness and exceptional quality, ensuring competitive pricing within our domain.</p>
            </>
        ),
        img11: `${BASE1}/20.png`,
        img12: `${BASE1}/18.png`,
        img13: `${BASE1}/19.png`,
        img14: `${BASE1}/IOS-Development.png`,
        index: [3, 4, 5, 6],

        left: [
            { type: "cont", props: { title: "IOS UI/UX Design", para: "Our specialized Design Studio empowers you to harness optimal UI/UX design methodologies, translating your concepts into tangible app experiences. Our adept team of developers and designers collaborates to craft responsive iOS platforms that offer captivating user journeys." } },
            { type: "cont", props: { title: "Custom IOS App Development", para: "With expertise in the latest iOS advancements, our versatile full-stack iOS developers assist in creating tailored iOS applications that cater to your specific business requirements. From conceptualization through deployment, we tailor the entire development process to suit your needs." } },
            { type: "cont", props: { title: "IOS App Upgrade and Migration", para: "Our team of iPhone app developers aids in the secure migration of existing business applications onto iOS platforms. We meticulously oversee upgrades, updates, and API modifications, ensuring a seamless upscale for your apps to guarantee optimal performance." } },
        ],

        right: [
            { type: "cont", props: { title: "Optimizing User Experiences", para: "Enhance user satisfaction through our JAVA software development services. Elevate your user experience with our tailored JAVA solutions. Optimize performance and usability with our specialized JAVA development expertise." } },
            {
                type: "Block",
                props: {
                    data: [
                        {
                            q: "JAVA App and API Development",
                            content: () => (
                                <>
                                    <p>We empower small and medium enterprises, entrepreneurs, and growth-focused innovators to attain enhanced profitability and sustainability through our JAVA services. With a flawless 100% project delivery track record, we guarantee nothing short of excellence. Our expertise lies in crafting lightweight, highly adaptable, and resilient Java APIs seamlessly integrated with various third-party tools and frameworks.</p>
                                </>
                            ),
                        },
                        {
                            q: "JAVA Enterprise Solutions",
                            content: () => (
                                <>
                                    <p>Our comprehensive offshore enterprise Java development services are equipped to manage vast data volumes and accommodate a high influx of concurrent visitors. Entrust your Java development needs to us for the creation of secure, scalable, and robust applications. We excel in seamlessly integrating applications that encompass all the essentials for streamlined business operations.</p>
                                </>
                            ),
                        },
                        {
                            q: "JAVA Software Maintenance",
                            content: () => (
                                <>
                                    <p>Experience our comprehensive end-to-end Java software maintenance services, ensuring uninterrupted workflows devoid of bugs or impediments. We specialize in scaling applications and incorporating new features whenever needed. Our custom, secure, and cost-effective Java maintenance services are tailored to meet your requirements.</p>
                                </>
                            ),
                        },
                    ],
                },
            },
        ],
    },

    // 9
    {
        id: "JAVA",
        coverlink: `${BASE1}/Our-servicesbanner-5.png`,
        evst1: "Web Based Application",
        evst2: "JAVA Programming",
        evsp1: (
            <>
                <p className="pb-[3vh]">We gladly announce ourselves as online application improvement specialists in the domain of JAVA. As a reputable Java Software development firm, we’ve crafted tailored Java-based applications spanning various industries, from retail and wellness to ecommerce, addressing real-world challenges with intricate solutions.</p>
                <p className="pb-[3vh]">JAVA stands as a pivotal technology for crafting high-performance enterprise applications, dominating areas like AI development, DevOps, chatbot construction, and analytics. Understanding our clients’ needs throughout the application development journey, we deliver bespoke Java solutions ensuring optimal productivity and ROI.</p>
                <p>With lightweight built-in templates, Laravel provides a secure foundation. It also offers an array of easily integrable plugins, ready-made for customization based on client specifications.</p>
            </>
        ),
        img11: `${BASE1}/12.png`,
        img12: `${BASE1}/11.png`,
        img13: `${BASE1}/13.png`,
        img14: `${BASE1}/JAVA-2-1.png`,
        index: [7, 20, 22],

        left: [
            { type: "cont", props: { title: "Enterprise JAVA Development", para: "Our team of Java experts specializes in delivering Java development services tailored for enterprises, aimed at enhancing company growth. We cater to business needs encompassing large-scale, multi-tiered, scalable, and secure network applications, ensuring they meet their requisites effectively." } },
            { type: "cont", props: { title: "JAVA / J2EE Application Development", para: "Our Java developers prioritize top-notch application quality while adhering to optimal development cycle times. They utilize the best-in-class J2EE Application Development framework, tailored to meet project demands efficiently." } },
            { type: "cont", props: { title: "JAVA Maintenance", para: "Our services extend to post-launch maintenance and support for all Java-based applications, aimed at boosting performance and flexibility. This includes software modifications, bug resolution, and ensuring the software aligns with industry standards to maintain its quality." } },
        ],

        right: [
            { type: "cont", props: { title: "Seamless User Experiences", para: "Enhance your user experience through our JAVA software development services. We specialize in crafting solutions that elevate user interactions, ensuring a seamless and intuitive experience. Utilize our expertise to optimize your software for a user-centric approach." } },
            {
                type: "Block",
                props: {
                    data: [
                        {
                            q: "JAVA App and API Development",
                            content: () => (
                                <>
                                    <p>With our JAVA services, we enable SMEs, entrepreneurs, and growth-focused individuals to attain higher profitability and sustainable growth. Guaranteeing a 100% project delivery rate, we commit to delivering top-tier solutions. Our expertise lies in crafting lightweight, highly scalable, and resilient Java APIs seamlessly integrated with various third-party tools and frameworks.</p>
                                </>
                            ),
                        },
                        {
                            q: "JAVA Enterprise Solutions",
                            content: () => (
                                <>
                                    <p>We present comprehensive offshore enterprise Java development services capable of managing extensive data and accommodating a large volume of concurrent visitors. Entrust your Java development needs to us for the creation of secure, scalable, and robust applications. Our seamless integration of applications encompasses all essential business functionalities for streamlined operations.</p>
                                </>
                            ),
                        },
                        {
                            q: "JAVA Software Maintenance",
                            content: () => (
                                <>
                                    <p>Our complete Java software maintenance services ensure uninterrupted workflow, eliminating bugs and obstacles. Additionally, we facilitate application scaling and timely feature additions as needed. Avail our secure and personalized Java maintenance solutions at competitive rates for seamless operations.</p>
                                </>
                            ),
                        },
                    ],
                },
            },
        ],
    },

    // 10
    {
        id: "Email-Marketing",
        coverlink: `${BASE1}/Email-Marketing-banner.png`,
        evst1: "Email Power",
        evst2: "Email as a marketing tool",
        evsp1: (
            <>
                <p className="pb-[3vh]">Email Marketing involves sending various promotional or informational content via email to a subscriber list, aiming to generate leads, boost website traffic, or encourage product signups and purchases. Effective email campaigns can narrate stories, share news, provide product/service details, and drive sales through coupons and offers.</p>
                <p>Widely adopted in business, Email Marketing prompts user actions, aiding in broader audience reach, increased sales, cart recovery, and fostering enduring customer relationships. Automation plays a key role, facilitated by advanced email marketing tools, focusing on consent, segmentation, and personalized messaging. Email Service Providers (ESPs) assist in managing email lists and executing automated campaigns.</p>
            </>
        ),
        img11: `${BASE1}/message-online-chat.png`,
        img12: `${BASE1}/email-network-aa.jpg`,
        img13: `${BASE1}/workdesk-with-envelopes.jpg`,
        img14: `${BASE1}/Email-Marketing.png`,
        index: [11, 12, 13, 14, 15],

        left: [
            {
                type: "Bullet",
                props: {
                    title: "Email marketing text that drives results",
                    bulletPoints: [
                        { text: "Know your audience" },
                        { text: "Craft an impressive Subject line" },
                        { text: "Review text functions as a brief presentation so take care of business" },
                        { text: "Make it easy to read" },
                        { text: "Leverage storytelling in your text" },
                        { text: "Build optimized mobile friendly email content" },
                    ],
                },
            },
            { type: "cont", props: { title: "Focus on one objective", para: "Craft individual emails and campaigns with a singular objective in mind. Utilize emails to establish a connection with customers by imparting expertise, offering valuable tips, and sharing insights they can benefit from." } },
            { type: "cont", props: { title: "Define and track the right KPIs", para: "Evaluate campaign performance by identifying the appropriate Key Performance Indicators (KPIs)." } },
        ],

        right: [
            { type: "cont", props: { title: "Use the right list building strategies", para: "The effectiveness of your email marketing campaign relies on the caliber of your email list. Employ tailored list-building strategies crafted to entice your intended audience." } },
            {
                type: "Block",
                props: {
                    data: [
                        {
                            q: "Email Marketing Content",
                            content: () => (
                                <>
                                    <p>Provide an incentive to collect email addresses, whether through contests, giveaways, newsletters, or product updates. Offering downloadable assets like checklists, e-books, or white papers is effective. Thus, a compelling call-to-action and adept copywriting are essential elements.</p>
                                </>
                            ),
                        },
                        {
                            q: "Email Analytics",
                            content: () => (
                                <>
                                    <p>Three key email analytics include open rate, click-through rate, and unsubscribers. These metrics offer valuable insights into areas that may require improvement. High open rates often signify strong reader relationships, while a low click-through rate suggests a lack of message targeting. Keeping the unsubscribers rate at a minimum is crucial for successful email marketing.</p>
                                </>
                            ),
                        },
                        {
                            q: "Emails Testing",
                            content: () => (
                                <>
                                    <p>Prioritize testing your emails before dispatching them, with the widely used A/B test being a popular choice. Enhance subject lines, preheader text, email content, CTAs, and landing pages by leveraging A/B tests. Position CTAs prominently to facilitate swift conversions for visitors. Incorporate pertinent images and ensure visually engaging and responsive email designs.</p>
                                </>
                            ),
                        },
                    ],
                },
            },
        ],
    },

    // 11
    {
        id: "Amazon-Marketing",
        coverlink: `${BASE1}/Amazon-Marketing-banner.png`,
        evst1: "Promotional Tools",
        evst2: "Amazon Marketing Services (AMS)",
        evsp1: (
            <>
                <p className="pb-[3vh]">Amazon supports its sellers with various promotional tools like Sponsored Products and Sponsored Brands.</p>
                <p className="pb-[3vh]">Analyzing Amazon’s marketing strategy involves applying the 4Ps framework (Product, Price, Place, Promotion). To grow your online business on Amazon, consider strategies such as optimizing product listings, utilizing video marketing, leveraging PPC advertising, monitoring competition, and employing off-site and on-site SEO techniques.</p>
                <p className="pb-[3vh]">Amazon’s marketing strategy encompasses multiple targeted online channels like the Associates program, sponsored search, social and online advertising, television advertising, among others.</p>
                <p>At its core, Amazon’s business strategy revolves around the fundamental goal of delivering superior experiences that meet every customer’s needs and desires.</p>
            </>
        ),
        img11: `${BASE1}/marketing-ideas.png`,
        img12: `${BASE1}/wooden-symbol-shopping-cart.jpg`,
        img13: `${BASE1}/marketing-strategy.png`,
        img14: `${BASE1}/Amazon-marketing.png`,
        index: [10, 13, 12, 14, 15],

        left: [
            {
                type: "Bullet",
                props: {
                    title: "What is Amazon's Marketing Strategy?",
                    bulletPoints: [
                        { text: "PPC advertising" },
                        { text: "Search Engine Optimization" },
                        { text: "Email Marketing" },
                        { text: "Video Marketing" },
                        { text: "Web Design" },
                        { text: "User-generated content" },
                        { text: "User Data" },
                        { text: "Conversion Rate Optimization" },

                    ],
                },
            },
            { type: "cont", props: { title: "Optimized Amazon SEO", para: "Enhancing your products for Amazon SEO enhances their visibility when customers search for related items. Amazon’s search engine prioritizes well-described product listings, showcasing them prominently among recommended searches." } },
            { type: "cont", props: { title: "Amazon Advertising", para: "Amazon advertising exposes your product to users who might not have discovered it independently. Amazon offers three types of advertisements: Product Display Ads, Sponsored Brand Ads, and Display Ads." } },

        ],

        right: [
            { type: "cont", props: { title: "Affiliate Marketing", para: "The Amazon affiliate program enables website owners to promote Amazon products on their sites, earning a commission when visitors click these links and make purchases." } },
            { type: "cont", props: { title: "Amazon Marketing Services by trusted Amazon experts!", para: "Experience Amazon Marketing Services led by seasoned experts! We drive success with tailored strategies, optimizing your Amazon presence for enhanced visibility and sales growth." } },
            {
                type: "Block",
                props: {
                    data: [
                        {
                            q: "Amazon Account Management",
                            content: () => (
                                <>
                                    <p>
                                        Our proficient Amazon team tailors a strategy to optimize your budget effectively. From establishing your Amazon account to maximizing ROI, we ensure a comprehensive approach. Led by experienced Account Managers well-versed in category insights, our Amazon Marketing services deliver data-driven guidance to drive business growth.
                                    </p>
                                </>
                            ),
                        },
                        {
                            q: "Amazon Listing Optimization",
                            content: () => (
                                <>
                                    <p>
                                        Numerous Amazon product listings lack proper optimization, prompting our Amazon experts to ensure optimal ROI right from the beginning. We aim to elevate organic ranking and sales by commencing with an audit of your current product listings, ensuring accurate categorization. Our process involves thorough research to identify the most relevant words and phrases for your products.
                                    </p>
                                </>
                            ),
                        },
                        {
                            q: "Best Pricing Strategy & Testing",
                            content: () => (
                                <>
                                    <p>
                                        Accurate pricing strategies can significantly enhance your rankings, conversions, and revenue. When introducing a new product, our expert team considers multiple variables beyond simply opting for the lowest or highest price. Collaborating with you, we identify the optimal sale price that stimulates sales while boosting profit margins.
                                    </p>
                                </>
                            ),
                        },
                    ],
                },
            }

        ],
    },

    // 12
    {
        id: "App-Store-Optimization",
        coverlink: `${BASE1}/App-Store-Optimization-banner.png`,
        evst1: "App Optimization",
        evst2: "Mobile Apps Optimization",
        evsp1: (
            <>
                <p className="pb-[3vh]">Similar to website optimization for search engine ranking, mobile apps require optimization to achieve higher visibility in app store search results—a process known as App Store Optimization (ASO). Enhanced rankings in platforms like the Apple App Store, Google Play Store, and Windows Store ensure increased visibility to potential customers, subsequently boosting app traffic.</p>
                <p>The primary aim of ASO is to elevate downloads and foster user loyalty. The initial step involves enhancing discoverability, and our team conducts thorough analyses of your app’s performance and ranking against competitors within your category. Comprising engineers well-versed in data and algorithms, our team ensures optimization across various factors influencing app store rankings.</p>
            </>
        ),
        img11: `${BASE1}/representation-user-.jpg`,
        img12: `${BASE1}/analysis-desk-vintage.jpg`,
        img13: `${BASE1}/representation-user1.jpg`,
        img14: `${BASE1}/Mobile-app-design.png`,
        index: [10, 11, 13, 14, 15],

        left: [
            {
                type: "Bullet",
                props: {
                    title: "Consists of three key steps",
                    bulletPoints: [
                        { text: "Keyword research and optimization" },
                        { text: "Conversion rate optimization and A/B testing" },
                        { text: "Tracking and improving (+ localizing)" },
                    ],
                },
            },
            { type: "cont", props: { title: "Track Keyword rankings & monitor performance", para: "Monitor and track category rankings for any application on both the App Store and Google Play Store." } },
            { type: "cont", props: { title: "App Download and Revenue estimates", para: "Receive estimates for downloads and revenue pertaining to any application available on the App Store and Google Play Store." } },

        ],

        right: [
            { type: "cont", props: { title: "App Store Optimization", para: "App Store Optimization (ASO) elevates app visibility, driving downloads and user engagement. It involves strategic keyword usage, compelling visuals, and performance analysis for optimal results." } },
            {
                type: "Block",
                props: {
                    data: [
                        {
                            q: "Optimize App for App Store Listing",
                            content: () => (
                                <>
                                    <p>
                                        Achieve this by optimizing your App Name, Title, Icon, Screenshots, and Ratings. Ensuring that visitors not only click through but also download or make purchases on your app store listing page is an integral aspect known as Conversion Rate Optimization (CRO) in ASO.
                                    </p>
                                </>
                            ),
                        },
                        {
                            q: "App Store Optimization Tools",
                            content: () => (
                                <>
                                    <p>
                                        Utilize ASO tools to enhance keyword research precision tailored to your target audience. Our adept team employs leading ASO tools such as Adjust, ASO desk, SearchMan, among others. These tools often involve paid subscriptions, and pricing structures may fluctuate based on the number of tools you aim to optimize.
                                    </p>
                                </>
                            ),
                        },
                        {
                            q: "In App Store Tactics",
                            content: () => (
                                <>
                                    <p>
                                        Various optimization areas within app stores, including Google Play and other app promotion platforms, can undergo updates, refinements, and continuous improvements. The key optimization aspects include App name, URL, and subtitle, App keyword fields, App ratings and reviews, along with App downloads.
                                    </p>
                                </>
                            ),
                        },
                    ],
                },
            }

        ],
    },

    // 13
    {
        id: "PPC",
        coverlink: `${BASE1}/top-view-woman-typing-laptop_23-2150062347.avif`,
        evst1: "Marketing",
        evst2: "PPC Advertising and Marketing",
        evsp1: (
            <>
                <p className="pb-[3vh]">Pay-Per-Click (PPC) marketing involves advertisers paying for each click on their online ads, providing an avenue to procure site visits rather than relying on organic traffic.</p>
                <p className="pb-[3vh]">Search engine advertising stands as a prominent PPC form demanding meticulous keyword research, well-structured campaigns, and optimized landing pages for conversions. Google rewards beneficial and user-friendly ads and pages with lower click costs, boosting business profitability.</p>
                <p>Choosing the right team is crucial for a successful PPC venture. Additionally, the flat-rate model involves advertisers and publishers agreeing upon a fixed fee per click, often seen in shopping engines.</p>
            </>
        ),
        img11: `${BASE1}/man-using-digital-tablet.png`,
        img12: `${BASE1}/corporate-managemen.png`,
        img13: `${BASE1}/man-typing-laptop.jpg`,
        img14: `${BASE1}/PPC.png`,
        index: [10, 11, 12, 14, 15],

        left: [
            {
                type: "BulletCheck",
                props: {
                    title: "Types of PPC Marketing",
                    features: [
                        "Google Search Ads",
                        "Google Shopping Ads",
                        "Google Responsive Ads",
                        "Google Display Ads",
                        "Google Video Ads",
                    ],
                },
            },
            { type: "cont", props: { title: "Google Ads", para: "Google Ads stands as the globe’s leading PPC advertising system, empowering businesses to craft online advertisements showcased on Google’s search engine pages and beyond." } },
            { type: "cont", props: { title: "PPC Keyword Research", para: "Conducting PPC keyword research demands time but holds significant importance. Successful Google Ads advertisers consistently expand and refine their list of PPC keywords to enhance performance." } },
            { type: "cont", props: { title: "Microsoft Advertising", para: "Much like Google Ads, Microsoft Advertising functions as a pay-per-click platform, exhibiting advertisements across the Microsoft and Yahoo networks." } },

        ],

        right: [
            { type: "cont", props: { title: "Hire PPC Experts with 100% trusted service!", para: "Engage PPC Experts delivering trusted service: Benefit from proven strategies, impeccable expertise, and a track record of delivering exceptional results." } },
            {
                type: "Block",
                props: {
                    data: [
                        {
                            q: "PPC campaigns",
                            content: () => (
                                <>
                                    <p>
                                        Our PPC experts curate and oversee campaigns across various paid platforms such as Google AdWords, Yahoo, Bing, Twitter, Facebook, and LinkedIn. Proficient in retargeting and remarketing strategies, our team continuously optimizes active campaigns, striving for improved ROI.
                                    </p>
                                </>
                            ),
                        },
                        {
                            q: "Pay Per Click Management",
                            content: () => (
                                <>
                                    <p>
                                        Our PPC experts excel in generating limitless qualified leads with exceptional ROI. Leveraging smart data-driven choices, we optimize campaigns and revenue outcomes. Employing multiple A/B testing campaigns on PPC ad formats, we aim for superior conversions with minimized investments.
                                    </p>
                                </>
                            ),
                        },
                        {
                            q: "Pay Per Click Tracking",
                            content: () => (
                                <>
                                    <p>
                                        Consistent ad management and monitoring are essential to attain optimal outcomes. Our adept team conducts thorough analysis and tracking, offering valuable insights for crafting highly effective marketing campaigns. We leverage cutting-edge market tools and software to deliver top-notch results.
                                    </p>
                                </>
                            ),
                        },
                    ],
                },
            }

        ],
    },

    // 14
    {
        id: "Social-Media-Marketing",
        coverlink: `${BASE1}/Social-Media-Marketing-banner.png`,
        evst1: "Marketing",
        evst2: "Social Media Marketing Strategies",
        evsp1: [
            "Social Media Marketing, a vital aspect of our comprehensive social media and marketing services, leverages popular platforms to achieve branding goals. Its success relies on a dynamic strategy with measurable milestones. Key components encompass",
            <C2Common
                title1=""
                title2=""
                bulletPoints={[
                    { id: 1, text: 'Profile optimization and upkeep.' },
                    { id: 2, text: 'Steady sharing of significant substance — be it pictures, recordings, reels, or stories — to keep up with adherent commitment.' },
                    { id: 3, text: 'Engaging with comments, shares, and likes while monitoring and managing your online reputation.' },
                    { id: 4, text: 'Facilitating challenges to energize cooperation and association among supporters.' },
                    { id: 5, text: 'Using live recordings for item declarations and updates, encouraging constant commitment with your crowd.' },

                ]}
            />
        ],
        img11: `${BASE1}/medium-shot-woman-holding-smartphone_23-2150208247.png`,
        img12: `${BASE1}/social-media-marketing-1.png`,
        img13: `${BASE1}/hand-holding-smartphone.png`,
        img14: `${BASE1}/Social-Media-Marketing.png`,
        index: [10, 11, 12, 13, 15],

        left: [
            {
                type: "Bullet",
                props: {
                    title: "Types of Social Media Marketing",
                    bulletPoints: [
                        { text: "Content creating/marketing" },
                        { text: "Influencer marketing" },
                        { text: "Advertising or Sponsorship" },
                        { text: "Social Media Management" },
                        { text: "Contribution to Forums and Reviews" },
                        { text: "Paid Media" },
                        { text: "Showcasing via Online Entertainment platforms like Facebook, Twitter and Instagram" },
                    ],
                },
            },
            { type: "cont", props: { title: "Social Media Advertising", para: "Social media publicizing dominatingly falls into three classifications: Natural, Paid, and Procured. Advertising strategies encompass creating or promoting content, fostering engagement, growing a following, and providing downloadable content across social media channels." } },
            { type: "cont", props: { title: "Social Media Metrics", para: "Social Media metrics act as important information mirroring the effect of your advertising endeavors on your client base or devotees. We offer thorough help with following instruments, for example, Google Investigation and Facebook Examination to guarantee powerful checking of these measurements." } },


        ],

        right: [
            { type: "cont", props: { title: "Content is King but Context is God!", para: "A well-devised content strategy enables the achievement of your business objectives by facilitating the creation of pertinent and valuable content, fostering engagement, and bolstering conversion rates." } },
            {
                type: "Block",
                props: {
                    data: [
                        {
                            q: "Easiest way to manage",
                            content: () => (
                                <>
                                    <p>
                                        Access unlimited post scheduling, track relevant metrics, and generate tailored reports analyzing your social media performance with the guidance of our experts. We assist in articulating your viewpoints, fostering meaningful engagement, cultivating your brand, and expanding your fan base.
                                    </p>
                                </>
                            ),
                        },
                        {
                            q: "Schedule content to be published",
                            content: () => (
                                <>
                                    <p>
                                        Effectively plan your posts during top crowd activity periods. Whether determining optimal posting times for your target audience or creating a personalized publishing schedule, our experts manage your posts, ensuring active and engaged accounts.
                                    </p>
                                </>
                            ),
                        },
                        {
                            q: "Best-in-class social analytics",
                            content: () => (
                                <>
                                    <p>
                                        We help in grasping your virtual entertainment crowd and their commitment patterns. Our analysis dives into your social activity and the interactions with your target group, enabling you to produce quick reports and refine your marketing strategies accordingly.
                                    </p>
                                </>
                            ),
                        },
                    ],
                },
            }

        ],
    },

    // 15
    {
        id: "SEO",
        coverlink: `${BASE1}/SEO-banner.png`,
        evst1: "SEO",
        evst2: "SEO for ranking on Search engines",
        evsp1: (
            <>
                <p className="pb-[3vh]">
                    Search engines such as Google and Bing utilize Crawlers, computer programs that scour web content to collect pertinent data aligned with search criteria.
                </p>
                <p className="pb-[3vh]">
                    Employing SEO involves optimizing your website’s technical setup, content relevance, and link authority, enhancing accessibility, relevance, and popularity for search queries. This improved search engine ranking increases website visibility, driving more traffic and ultimately boosting conversion rates.
                </p>
                <p className="pb-[3vh]">
                    SEO focuses on organic, high-quality traffic over direct or paid traffic, encompassing tasks like keyword research, link building, and content creation.
                </p>
                <p>
                    At our digital marketing and advertising agency, we understand that SEO plays a crucial role in fostering brand recognition among potential clients while prioritizing user experience, a significant factor in Google rankings.
                </p>
            </>
        ),
        img11: `${BASE1}/optimization-keyword-searching-isometric-composition.png`,
        img12: `${BASE1}/search-engine-optimization_53876-119984.png`,
        img13: `${BASE2}/Digital-Marketing2.png`,
        img14: `${BASE1}/SEO.png`,
        index: [10, 11, 12, 13, 14],

        left: [
            {
                type: "BulletCheck",
                props: {
                    title: "SEO Services for your Website",
                    features: [
                        "Dedicated SEO Manager",
                        "In-depth Keyword Research",
                        "Keyword Targeting",
                        "Content Optimization",
                        "Link Building",
                        "Keyword Tracking",
                        "Website Analytics",
                    ],
                },
            },
            {
                type: "BulletCheck",
                props: {
                    title: "We perform all these types of SEO",
                    features: [
                        "Technical SEO",
                        "On-Page SEO",
                        "Content SEO",
                        "Off-Page SEO",
                        "Local SEO",
                        "Mobile SEO",
                        "E-Commerce SEO",
                    ],
                },
            },
            {
                type: "BulletCheck",
                props: {
                    title: "Standard SEO approach",
                    features: [
                        "Project Analysis",
                        "Website Audit",
                        "Competitors Analysis",
                        "Keyword Research",
                        "Google Analytics Setup",
                        "Google Webmaster Setup",
                        "Google Data Studio Setup",
                        "On-Page SEO",
                        "Off-page Activity",
                        "Keyword Ranking check",
                    ],
                },
            },

        ],

        right: [
            {
                type: "BulletCheck",
                props: {
                    title: "Services we offer for SEO campaigns",
                    features: [
                        "On-page optimization",
                        "Off-page optimization",
                        "Include meta tag",
                        "Page title optimization",
                        "On-page content optimization",
                        "Building backlinks",
                        "Utilizing social media",
                    ],
                },
            },
            { type: "cont", props: { title: "Team up with our SEO experts", para: "Partner with our SEO experts to elevate your online visibility and presence! We drive strategies tailored to boost your digital footprint and maximize your brand’s online potential." } },
            {
                type: "Block",
                props: {
                    data: [
                        {
                            q: "Search engine optimization increments natural revelation and brings top notch traffic",
                            content: () => (
                                <>
                                    <p>
                                        Search Engine Optimization is ultra-targeted and customer-centric. Leveraging user intent, organic visibility channels traffic to your website without the need for visitor enticement, as the user is already seeking what you offer.
                                    </p>
                                </>
                            ),
                        },
                        {
                            q: "SEO improves Credibility and Trust",
                            content: () => (
                                <>
                                    <p>
                                        Securing a top ranking on Google for your website instills trust among potential clients, as the majority of users place high trust in the Google algorithm, with nearly 75% of users rarely venturing beyond the first page.
                                    </p>
                                </>
                            ),
                        },
                        {
                            q: "You can remain in front of contest with the assistance of Website optimization",
                            content: () => (
                                <>
                                    <p>
                                        When two companies offer indistinguishable goods or services, the entity optimized for search engines will undoubtedly attract more visitors than its counterpart.
                                    </p>
                                </>
                            ),
                        },
                    ],
                },
            },

        ],
    },

    // 16
    {
        id: "Logo-Design",
        coverlink: `${BASE1}/Logo-Design-Banner.png`,
        evst1: "Visual Identity",
        evst2: "Logo Design",
        evsp1: "A logo represents the essence of an organization, embodying its identity and significance. At Webtech Evolution, we recognize its pivotal role, aiming to create memorable and impactful corporate identities that resonate long after the initial encounter. Webtech Evolution specializes in crafting innovative logos and corporate identities, prioritizing client understanding, target audience analysis, and conceptualization for exceptional design solutions.",
        img11: `${BASE1}/female-logo-designer.jpg`,
        img12: `${BASE1}/website-template-design.jpg`,
        img13: `${BASE1}/information-sign-table.png`,
        img14: `${BASE1}/logo-design.png`,
        index: [0, 2, 17, 18],

        left: [
            { type: "cont", props: { title: "Effortless Design Brilliance", para: "" } },
            {
                type: "Block",
                props: {
                    data: [
                        {
                            q: "Logo/Favicon/Character",
                            content: () => (
                                <>
                                    <p>
                                        Our skilled designers specialize in creating versatile and appealing logos aligned with needs of your business. Logos are created as vector images on Corel Draw or Adobe Illustrator and we provide upto 3 variations.
                                    </p>
                                    <p>
                                        Apart from Logo, we also design custom favicon and a character representing your product/business/service.
                                    </p>
                                </>
                            ),
                        },
                        {
                            q: "Research and Inspiration",
                            content: () => (
                                <>
                                    <p>
                                        A compelling logo is a crucial aspect of establishing a strong visual identity for a business or brand. A very much planned logo ought to be important, flexible, and intelligent of the brand’s qualities. Our desingers do extensive research on the current market trends and also analyse competitors ideas and designs.
                                    </p>
                                </>
                            ),
                        },
                        {
                            q: "Fast Loading",
                            content: () => (
                                <>
                                    <p>
                                        In just 0.05 seconds, you can capture your audience’s attention and shape their perception of your brand. Utilize our exceptional branding tools and methods to create a distinctive visitor experience and foster enduring relationships.
                                    </p>
                                </>
                            ),
                        },
                    ],
                },
            },

        ],

        right: [
            {
                type: "EvsImg",
                props: {
                    src: `${BASE}/about-img_5.jpg`,
                    alt: "Business handshake",
                    showPattern: true,
                    showRedBg: true,
                },
            }
        ],
    },

    // 17
    {
        id: "Mobile-App-Design",
        coverlink: `${BASE1}/Mobile-App-Design-Banner.png`,
        evst1: "Application",
        evst2: "Mobile Apps Design and Development",
        evsp1: (
            <>
                <p className="pb-[3vh]">
                    In the realm of mobile app design, the advantage lies in utilizing the same tools as website design, regardless of the platform. Adobe Photoshop, Adobe XD, InVision, and Sketch stand as popular choices for crafting app interfaces.
                </p>
                <p className="pb-[3vh]">
                    Mobile app configuration envelops both UI (UI) and UX (client experience). While UI dictates the app’s overall style, including colors and fonts, UX centers on functionality and usability. Designs typically target either Android or iOS devices, employing wireframes to outline user navigation and interaction. Effortlessness comes first, accentuating stream and convenience.
                </p>
                <p>
                    We act as your far reaching answer for portable application needs, empowering business development and more extensive client outreach through our mobile app configuration administrations!
                </p>
            </>
        ),
        img11: `${BASE1}/27.png`,
        img12: `${BASE1}/19.png`,
        img13: `${BASE1}/29.png`,
        img14: `${BASE1}/Mobile-app-design.png`,
        index: [0, 16, 2, 18],

        left: [
            {
                type: "Bullet",
                props: {
                    title: "Distinguished Features",
                    bulletPoints: [
                        { text: "Striking mobile-view design" },
                        { text: "Interactive and unique UI interfaces" },
                        { text: "Affordable prices" },
                        { text: "Quick download" },
                        { text: "Pre-built components to reduce time to market" },
                        { text: "Fast load times specially during checkouts" },
                    ],
                },
            },
            {
                type: "cont",
                props: {
                    title: "Predictable App Navigation",
                    para: "We integrate familiar user patterns into your design to facilitate easy navigation, aligning with users’ typical expectations of app usage.",
                },
            },
            {
                type: "cont",
                props: {
                    title: "Minimized Input from the customer",
                    para: "An effective app design aims to reduce user typing, maximizing data autofill and prefill options wherever feasible.",
                },
            },
            {
                type: "cont",
                props: {
                    title: "Fast Loading",
                    para: "Our emphasis is on creating advanced applications with quick stacking times to lessen grinding. Connecting with stacking livelinesss are important for our system to dazzle clients during application stacking periods.",
                },
            },

        ],

        right: [
            {
                type: "cont",
                props: {
                    title: "Crafting Engaging Experiences on iOS and Android",
                    para: "We specialize in innovating to craft captivating experiences on both iOS and Android platforms, ensuring user engagement remains at the forefront of our design philosophy."
                }
            },
            {
                type: "Block",
                props: {
                    data: [
                        {
                            q: "Mobile App UI/UX Upgrade",
                            content: () => (
                                <>
                                    <p>
                                        Does your app design feel outdated? Allow us to modernize your mobile app’s UI/UX, aligning it with the latest trends and operating system updates. Our design specialists excel in revitalizing your current interface with contemporary, sleek, and user-friendly designs. With ability in upgrading plan, ease of use, stacking execution, activitys, and impacts, we can hoist your application’s general allure and usefulness.
                                    </p>
                                </>
                            ),
                        },
                        {
                            q: "App UI/UX Improvements",
                            content: () => (
                                <>
                                    <p>
                                        Influence our portable application originators’ mastery to upgrade your application’s UI/UX, guaranteeing a messiness-free and contemporary plan in accordance with the most recent versatile patterns. Teaming up intimately with you, our group digs into your application plan necessities, developing to create a drawing in interface. We aid in enhancing design coherence, color schemes, typography, spacing, and iconography for a cohesive and visually appealing experience.
                                    </p>
                                </>
                            ),
                        },
                        {
                            q: "App UI/UX Maintenance",
                            content: () => (
                                <>
                                    <p>
                                        Our services ensure your mobile and web app design remains updated. Utilizing compelling strategies, our architects support quality and ease of use customized to your crowd. By comprehending user behavior within your app, we enhance engagement levels. Our focus includes optimizing load performance, image quality, and strategic placement of design elements to boost conversions.
                                    </p>
                                </>
                            ),
                        },
                    ],
                },
            }


        ],
    },

    // 18
    {
        id: "Website-Design",
        coverlink: `${BASE1}/Website-Design-Banner.png`,
        evst1: "Development",
        evst2: "Web Design - Responsive Web Design",
        evsp1: (
            <>
                <p className="pb-[3vh]">The impression your website makes on your customers is pivotal, and we strive for pure magic! Our designers embark on a challenge to craft captivating, exquisite designs, aiming to provide your customers with an enchanting experience.</p>
                <p className="pb-[3vh]">We kickstart the design process by comprehending your business objectives and ethos. Throughout, we prioritize usability, scalability, and search engine optimization to define its aesthetics.</p>
                <p>Pouring our design sensibilities into every phase, we meticulously focus on intricate details. A template mockup is offered, allowing you to envision your website’s structure. All our creative endeavors adhere to web standards, employing CSS, W3C compliance, and search engine optimization for a seamless experience.</p>
            </>

        ),
        img11: `${BASE1}/16-1.png`,
        img12: `${BASE1}/13.png`,
        img13: `${BASE1}/12.png`,
        img14: `${BASE1}/website-design.png`,
        index: [0, 16, 2, 17],

        left: [
            {
                type: "cont",
                props: {
                    title: "Custom Web Design Services",
                    para: "Acquire a personalized web design that’s visually captivating, user-friendly, optimized, mobile-responsive, adept at turning visitors into customers, and fosters sustained growth."
                }
            },
            {
                type: "cont",
                props: {
                    title: "Responsive Web Design",
                    para: "We utilize HTML and CSS to dynamically adjust website size, concealing, shrinking, or expanding elements to ensure an appealing display across all devices. Employing grid-based flexible layouts and media queries for varied screen sizes, we ensure a responsive and mobile-friendly website that’s effortlessly navigable."
                }
            },
            {
                type: "cont",
                props: {
                    title: "Get beautiful websites designed by our Design Gurus!",
                    para: "Achieve stunning online presence with websites meticulously crafted by our Design Gurus! Let our experts elevate your brand with captivating and user-centric designs. Experience excellence in web design with our dedicated team."
                }
            }

        ],

        right: [
            {
                type: "cont",
                props: {
                    title: "Sustainable Web Templates",
                    para: "Templates designed for broad appeal perform optimally on Chrome and Internet Explorer, while specialized templates are more effective when tailored for Opera and Safari."
                }
            },
            {
                type: "Block",
                props: {
                    data: [
                        {
                            q: "Proven design approach!",
                            content: () => (
                                <>
                                    <p>We’ve developed numerous visually striking and captivating websites and ecommerce platforms. Our approach revolves around designing that centers on the brand and its specific business objectives. Our web design methodology is a proven path, evolving from visualization and concept refinement to prototyping and final design delivery. Utilizing cutting-edge technology, we craft beautiful websites that effectively convey your message on all screens in a compelling manner!</p>
                                </>
                            ),
                        },
                        {
                            q: "Clear site navigation and structure",
                            content: () => (
                                <>
                                    <p className="pb-[3vh]">Clarity in website navigation aids visitors in swiftly locating desired information and supports search engine indexing efficiency.</p>

                                    <p className="pb-[3vh]">In an effective business website, all crucial pages are directly connected to the homepage, ensuring accessibility within two clicks from any part of your site.</p>

                                    <p>Implementing a silo architecture for your website enhances page organization, categorizing content into distinct sections for improved structure and accessibility.</p>
                                </>

                            ),
                        },
                        {
                            q: "Captivating homepage essentials",
                            content: () => (
                                <>
                                    <p>To drive traffic to your site, your homepage needs to captivate visitors within the initial 10 seconds. Emphasizing the big picture while valuing even the smallest details is our priority. Essential elements on the homepage include your business’s description, a clear call-to-action button, contact information, and swift links to key pages. Employing appealing templates in web design effectively mirrors your brand and grabs your visitors’ attention successfully.</p>
                                </>
                            ),
                        },
                    ],
                },
            }

        ],
    },

    // 19
    {
        id: "Angular-Js",
        coverlink: `${BASE1}/Our-services-banner-1.png`,
        evst1: "AngularJS",
        evst2: "Angular Js Development",
        evsp1: (
            <>
                <p className="pb-[3vh]">AngularJS fills in as a JavaScript-based frontend web structure designed for creating single-page applications, boasting full extensibility and seamless compatibility with various libraries. Its functionality lies in converting static HTML into dynamic HTML.</p>

                <p className="pb-[3vh]">Angular, built on TypeScript, stands as an alternative to AngularJS, aimed at developing dynamic web applications. While AngularJS, also known as Angular 1, operates on JavaScript and offers reusable components, enabling developers to achieve more functionalities with concise code. In AngularJS, views consist of pure HTML pages, while JavaScript-driven controllers handle business processing.</p>

                <p>Today, Angular offers the potential for achieving top-tier web speed while granting control over scalability, empowering developers to craft robust solutions.</p>
            </>

        ),
        img11: `${BASE1}/15.png`,
        img12: `${BASE1}/17.png`,
        img13: `${BASE1}/16-1.png`,
        img14: `${BASE1}/Angular-Js.png`,
        index: [0, 1, 2, 3],

        left: [
            {
                type: "cont",
                props: {
                    title: "What is Angular used for?",
                    para: "AngularJS stands as a structural framework designed for dynamic web applications, particularly suited for single-page application development. Angular finds its niche in dynamic web applications, tailoring content based on user access and client consumption. Its evolution over the years has positioned it as one of the leading frameworks for crafting modular, responsive web, and mobile applications."
                }
            },
            {
                type: "cont",
                props: {
                    title: "Angular single-page app development",
                    para: "Angular streamlines development by reducing superfluous code, thanks to its straightforward MVC architecture backed by Google’s support."
                }
            },
            {
                type: "cont",
                props: {
                    title: "Templates in Angular",
                    para: "A template in HTML instructs Angular on component rendering, shaping the appearance. Views, structured hierarchically, allow for easy modification, enabling the display or concealment of entire UI sections or pages as a cohesive unit. Each component’s associated template defines its host view."
                }
            }

        ],

        right: [
            {
                type: "cont",
                props: {
                    title: "Why Choose Us for your Angular Website",
                    para: "Opt for us for your Angular website: Expertise in seamless Angular development, a track record of crafting dynamic, scalable solutions, and a commitment to delivering exceptional user experiences."
                }
            },
            {
                type: "Block",
                props: {
                    data: [
                        {
                            q: "Dedicated MEAN Stack Developers",
                            content: () => (
                                <>
                                    <p>We boast a team of Full Stack Developers well-versed in utilizing Angular for frontend technology and Node.js for backend applications. Additionally, we’ve successfully crafted Angular-based websites in conjunction with various backend technologies such as Laravel.</p>
                                </>
                            ),
                        },
                        {
                            q: "Great ecosystem of third party components",
                            content: () => (
                                <>
                                    <p>The widespread adoption of Angular has led to a vast array of supplementary tools and components available for integration into Angular applications, offering enhanced functionality and productivity. Our adept team specializes in harnessing these third-party tools to elevate your project, ensuring a polished, professional, and functional outcome.</p>
                                </>
                            ),
                        },
                        {
                            q: "We make SEO friendly webpages in Angular",
                            content: () => (
                                <>
                                    <p>Single-page applications frequently update content and meta tags via JavaScript, posing challenges for web crawlers to access. Additionally, indexing deep links on such apps is complex. Our solution involves leveraging Angular Universal to address these limitations, ensuring SEO optimization for web applications.</p>
                                </>
                            ),
                        }
                    ]
                }
            }

        ],
    },

    // 20
    {
        id: "Laravel-Development",
        coverlink: `${BASE1}/Our-services-banner4.png`,
        evst1: "Laravel Platform",
        evst2: "Laravel Development Technicalities",
        evsp1: (
            <>
                <p className="pb-[3vh]">Laravel remains as a web application system known for its rich language structure, working on normal errands innate in site improvement. As a strong and reasonable PHP open-source system following the MVC design, it smoothes out site creation, guaranteeing protection from web assaults and versatility because of its organized code. Past web improvement, Laravel fills in as a durable backend Programming interface for different frontend stages like Next.js or versatile applications.</p>

                <p>With lightweight built-in templates, Laravel provides a secure foundation. It also offers an array of easily integrable plugins, ready-made for customization based on client specifications.</p>
            </>

        ),
        img11: `${BASE1}/10.png`,
        img12: `${BASE1}/9-1.png`,
        img13: `${BASE1}/8.png`,
        img14: `${BASE1}/Laravel-development.png`,
        index: [7, 9, 22],

        left: [
            {
                type: "cont",
                props: {
                    title: "Laravel for Ecommerce",
                    para: "Laravel proves to be a reliable option for e-commerce ventures, providing a solid foundation for building secure and scalable online stores. Its flexible nature considers custom fitted arrangements, empowering consistent incorporation of fundamental internet business functionalities like installment entryways and stock administration. With Laravel, businesses can create efficient and customizable e-commerce platforms to meet specific industry needs."
                }
            },
            {
                type: "cont",
                props: {
                    title: "Laravel for SEO",
                    para: "Laravel, while primarily a robust framework for web development, offers functionalities and practices conducive to strong SEO strategies. Its perfect and organized coding, combined with its ability for making upgraded URLs and meta labels, establishes a strong starting point for web crawler perceivability. Designers can use Laravel's adaptability to carry out Search engine optimization amicable works on, guaranteeing better rankings and worked on internet based perceivability for sites based on this structure."
                }
            },
            {
                type: "cont",
                props: {
                    title: "Customized Laravel Themes",
                    para: "Creating custom-made Laravel subjects is a forte, utilizing the structure's adaptability to plan exceptional and customized site style. Our skill lies in making custom Laravel topics that adjust unequivocally with client inclinations and brand characters, guaranteeing an unmistakable web-based presence."
                }
            }

        ],

        right: [
            {
                type: "cont",
                props: {
                    title: "Why Choose Us for your next Laravel Project",
                    para: "Select us for your next Laravel project to benefit from our seasoned expertise, delivering tailored solutions with efficiency and precision. Our devoted group guarantees consistent turn of events, hearty usefulness, and a customized way to deal with meet your particular undertaking necessities."
                }
            },
            {
                type: "Block",
                props: {
                    data: [
                        {
                            q: "Dedicated Developers",
                            content: () => (
                                <>
                                    <p>Our group contains seven full-time engineers solely centered around Laravel projects. Proficient in customizations and template modifications, they boast over four years of expertise in crafting modern, dynamic, and fully functional websites tailored to your business needs within this technology.</p>
                                </>
                            ),
                        },
                        {
                            q: "Experts in Customization",
                            content: () => (
                                <>
                                    <p>With extensive experience, our Laravel Developers specialize in crafting heavily customized websites and applications for our clientele. Whether starting from a template or building from scratch, our adeptness lies in tailoring the code precisely to meet the unique needs of our clients. Allow us an opportunity, and witness our capability firsthand!</p>
                                </>
                            ),
                        },
                        {
                            q: "Full stack Development with Laravel",
                            content: () => (
                                <>
                                    <p>Within our in-house team, we house both frontend developers and Laravel specialists. This amalgamation allows us to seamlessly pair Vue.js, Angular.js, or React.js with Laravel as the backend technology, providing a comprehensive solution tailored to your specific business requirements.</p>
                                </>
                            ),
                        }
                    ]
                }
            }

        ],
    },

    // 21
    {
        id: "Shopify-Development",
        coverlink: `${BASE1}/Our-services-banner-3.png`,
        evst1: "E-commerce Platform",
        evst2: "Shopify Development Technicalities",
        evsp1: (
            <>
                <p className="pb-[3vh]">For online store owners seeking the best e-commerce platform, Shopify stands out due to its user-friendly interface and robust features, enabling detailed product descriptions and attributes. Operating on cloud-based SaaS technology, Shopify ensures scalability, making it a top choice.</p>

                <p className="pb-[3vh]">Our extensive experience spans several years, constructing numerous e-commerce platforms on Shopify. Proficient in customizing Shopify’s templates, we craft distinctive designs aimed at captivating customers and driving sales. Our expertise extends to seamless integration with popular payment gateways.</p>

                <p>With Shopify, enjoy limitless product listings, online storage, and the added benefit of Point of Sale (POS) functionality, making it the premier choice for online store proprietors.</p>
            </>

        ),
        img11: `${BASE1}/35.png`,
        img12: `${BASE1}/34.png`,
        img13: `${BASE1}/33.png`,
        img14: `${BASE1}/Shopify-Development.png`,
        index: [0, 1, 2],

        left: [
            {
                type: "cont",
                props: {
                    title: "Shopify eCommerce Development",
                    para: "Shopify serves as an excellent platform for online stores requiring minimal setup. Whether selling a single product or multiple items, leveraging advanced Shopify homepage sections enhances ROI and amplifies business revenue."
                }
            },
            {
                type: "cont",
                props: {
                    title: "Shopify is great for SEO",
                    para: "Shopify excels in SEO with its user-friendly setup, allowing easy optimization of meta tags, URLs, and content. Its inherent features, such as fast loading times and mobile responsiveness, contribute to better search engine rankings, making it an ideal choice for boosting online visibility."
                }
            },
            {
                type: "cont",
                props: {
                    title: "Shopify as a tool for Marketing",
                    para: "Shopify serves as a powerful marketing tool, offering diverse features to promote products effectively. Its integrated tools for email marketing, social media integration, and SEO optimization empower businesses to reach wider audiences. Additionally, its customizable discounts, gift cards, and customer segmentation options enhance marketing strategies, making it a robust platform for driving sales and brand visibility."
                }
            }

        ],

        right: [
            {
                type: "cont",
                props: {
                    title: "Why Choose Us for your Shopify Store",
                }
            },
            {
                type: "Block",
                props: {
                    data: [
                        {
                            q: "Dedicated Shopify Developers",
                            content: () => (
                                <>
                                    <p>Our team, consisting of three seasoned developers, dedicates its expertise solely to Shopify. They consistently produce high-quality source code that aligns with project standards and timelines. Specializing in Shopify themes, we excel in customizations using Liquid files, focusing on theme development, customizations, and plugin modifications.</p>
                                </>
                            ),
                        },
                        {
                            q: "Experts in Theme Customizations",
                            content: () => (
                                <>
                                    <p>Although Shopify allows for straightforward personalization, there are occasions where the expertise of a developer is essential for specific tweaks and adjustments within an existing Shopify theme. That’s where our team comes into play. We specialize in altering, adding, or removing elements and crafting custom functions to ensure the seamless operation of your e-commerce store.</p>
                                </>
                            ),
                        },
                        {
                            q: "Great Understanding of E-commerce",
                            content: () => (
                                <>
                                    <p>With extensive years of expertise, our team excels in crafting diverse E-commerce stores across various categories. From managing high-risk products to implementing Point of Sale systems, integrating multiple payment gateways, facilitating live currency conversions, handling drop shipping, constructing multi-vendor stores, and establishing B2B portals, our track record speaks of reliability and trustworthiness in delivering top-notch online store development.</p>
                                </>
                            ),
                        }
                    ]
                }
            }

        ],
    },

    // 22
    {
        id: "WordPress-Development",
        coverlink: `${BASE1}/banner-1-about-us.jpg`,
        evst1: "E-commerce Platform",
        evst2: "WordPress and Woo Commerce Development",
        evsp1: (
            <>
                <p className="pb-[3vh]">WordPress, an open-source content management system crafted in PHP and coupled with a MySQL database, boasts a plugin architecture and a template system referred to as Themes. It remains as an exceptionally powerful, broadly embraced, and versatile stage internationally, taking special care of different necessities like business, publishing content to a blog, portfolios, and online stores.</p>

                <p>In the domain of online business, we've built various WordPress-based sites that are flourishing commercial centers, gloating multilingual, multicurrency, and multi-seller functionalities. Our capability in WooCommerce and its assorted applications is broad, making us exceptional to handle different web based business challenges.</p>
            </>

        ),
        img11: `${BASE1}/3.png`,
        img12: `${BASE}/about-img_3.jpg`,
        img13: `${BASE1}/1-1.jpg`,
        img14: `${BASE1}/WordPress-development.png`,
        index: [7, 9, 20],

        left: [
            {
                type: "cont",
                props: {
                    title: "WordPress is EASY to use",
                    para: "WordPress stands apart as an outstandingly easy to understand stage, especially inviting to novices. Its straightforward dashboard showcases various menu options in the sidebar, allowing effortless creation of posts and pages, customization of website designs, addition of navigation menus, and a range of other intuitive features."
                }
            },
            {
                type: "cont",
                props: {
                    title: "WordPress Multi-Sites development",
                    para: "Multisite in WordPress enables the management of numerous websites through a unified dashboard. Our team possesses the expertise and experience required to proficiently develop and handle these multi-site setups."
                }
            },
            {
                type: "cont",
                props: {
                    title: "WordPress Theme Customizations",
                    para: "Starting our excursion with WordPress, our organization has gone through a huge development, procuring significant skill in fitting a wide cluster of WordPress subjects to match your prerequisites definitively."
                }
            }

        ],

        right: [
            {
                type: "cont",
                props: {
                    title: "Why Choose Us for Website Development?",
                }
            },
            {
                type: "Block",
                props: {
                    data: [
                        {
                            q: "Dedicated Technical Support",
                            content: () => (
                                <>
                                    <p>We utilize straightforward devices that will successfully achieve an undertaking. Basic locales are less inclined to issues. In any case, should any issue happen, our group is dependably ready and waiting. Our 360 degree support handles every one of the parts of subject establishment, customization, improvement, moving site, investigating, administration, redesigns and addressing bugs/blunders. You should simply get in touch with us!</p>
                                </>
                            ),
                        },
                        {
                            q: "Business Domain Experience",
                            content: () => (
                                <>
                                    <p>Our business has grown word-of-mouth and from genuine reviews & recommendations given by our past clients. We value our reputation as much as our clients’. We give genuine ideas and data to use sound judgment to come by a definitive outcome. We will treat you decently and work really hard so you will need to stay with us even after your work is finished.</p>
                                </>
                            ),
                        },
                        {
                            q: "Easy Communication",
                            content: () => (
                                <>
                                    <p>The greater part of our clients appreciate working with us as we make our cycles simple and lovely. We talk in plain English, no specialized language! You get standard updates as we gain ground. We are consistently prepared to visit, compose or basically talk actually so you feel loose have opportunity and energy to zero in on your business!</p>
                                </>
                            ),
                        }
                    ]
                }
            }

        ],
    },

    // 23
    {
        id: "Vue-Js",
        coverlink: `${BASE1}/Ourservices-banner-10.png`,
        evst1: "Development",
        evst2: "Vue Js Development Technicalities",
        evsp1: (
            <>
                <p className="pb-[3vh]">Vue.js Improvement includes a vigorous arrangement of details that enable the formation of consistent UIs and dynamic single-page applications (SPAs). At its center, Vue.js works on a part based design, permitting engineers to separate mind boggling points of interaction into sensible and reusable parts. This particularity improves on support and upgrades versatility, empowering quick updates and modifications across the application.</p>

                <p>In the domain of Vue.js Improvement, it is vital to enhance application execution. Strategies, for example, code-parting, sluggish stacking, and server-side delivering are ordinarily utilized to improve stacking paces and generally speaking proficiency. Moreover, Vue.js embraces progressive enhancement principles, ensuring that applications remain accessible and functional across various devices and browsers, adhering to modern web development standards.</p>
            </>

        ),
        img11: `${BASE1}/16-1.png`,
        img12: `${BASE1}/1-1.jpg`,
        img13: `${BASE1}/9-1.png`,
        img14: `${BASE1}/Vue-Js.png`,
        index: [0, 1, 2, 3],

        left: [
            {
                type: "cont",
                props: {
                    title: "Vue UI/UX Development",
                    para: "Vue UI/UX Development crafts intuitive interfaces, harnessing Vue.js’s capabilities to deliver engaging and user-centric design experiences."
                }
            },
            {
                type: "cont",
                props: {
                    title: "Vue JS Front-End Development",
                    para: "Vue.js Front-End Advancement succeeds in making responsive, measured connects with its part based engineering, cultivating consistent client encounters and proficient single-page applications."
                }
            },
            {
                type: "cont",
                props: {
                    title: "Custom Vue.JS Development",
                    para: "Tailored Vue.js Development services offer bespoke solutions, leveraging Vue’s flexibility and reactivity for personalized, high-performance applications."
                }
            }

        ],

        right: [
            {
                type: "cont",
                props: {
                    title: "Hire our extremely skilled and experienced Vue Js Developers!",
                },
            },
            {
                type: "Block",
                props: {
                    data: [
                        {
                            q: "Vue.js Component Specialists",
                            content: () => (
                                <>
                                    <p>Our carefully prepared Vue.js designers spend significant time in making particular and reusable parts, guaranteeing adaptability and proficiency in your application. Influence their mastery to fabricate vigorous and intuitive connection points.</p>
                                </>
                            ),
                        },
                        {
                            q: "Vue.js Integration Experts",
                            content: () => (
                                <>
                                    <p>With extensive experience in integrating Vue.js into diverse projects, our developers seamlessly blend Vue.js functionalities into existing systems, enabling smoother transitions and enhanced performance.</p>
                                </>
                            ),
                        },
                        {
                            q: "Vue.js Optimization Professionals",
                            content: () => (
                                <>
                                    <p>Our Vue.js specialists succeed in advancing applications, utilizing strategies like code-parting, lethargic stacking, and server-side delivering to support stacking rates and generally speaking proficiency. Collaborate with them to ensure top-notch performance for your Vue.js applications.</p>
                                </>
                            ),
                        }
                    ]
                }
            }

        ],
    },

    // 24
    {
        id: "Node-Js",
        coverlink: `${BASE1}/Ourservices-banner-8.png`,
        evst1: "Development",
        evst2: "Node Js Development",
        evsp1: (
            <>
                <p className="pb-[3vh]">Node.js is made for building adaptable organization applications, filling in as an open-source, cross-stage backend innovation established in the JavaScript runtime climate, working on the V8 motor. Working JavaScript past internet browsers, it takes special care of both backend and frontend advancement.</p>

                <p className="pb-[3vh]">Its inclination emerges when quick, versatile web advancement is vital, offering effortlessness contrasted with JAVA and providing food preferably to full-stack engineers. It smoothes out code composing, considering the solidification of various libraries into a solitary line through its hub bundle chief.</p>

                <p>Increasingly favored by startups, Node.js stands out as their go-to backend technology, particularly for its speed. When prioritizing speed in applications, Node.js emerges as a superior choice compared to frameworks like PHP.</p>
            </>

        ),
        img11: `${BASE1}/16-1.png`,
        img12: `${BASE1}/15.png`,
        img13: `${BASE1}/17.png`,
        img14: `${BASE1}/Node-Js.png`,
        index: [0, 1, 2, 3],

        left: [
            {
                type: "cont",
                props: {
                    title: "When should Node JS be used?",
                    para: "Node.js excels in powering real-time collaborative drawing or editing applications akin to Google Docs. While it finds utility in conventional websites and backend API services, its design primarily caters to real-time, push-based architectures. However, it's advised against utilization in central processor concentrated locales because of its propensity to strain computer chip assets while handling particular solicitations."
                }
            },
            {
                type: "cont",
                props: {
                    title: "Node.js API Integration",
                    para: "Node.js exhibits speed, lightweight characteristics, and scalability. It enables the creation of swift, scalable API Proxies adept at managing a vast volume of concurrent requests while maintaining high throughput."
                }
            },
            {
                type: "cont",
                props: {
                    title: "Node.js Server Side Development",
                    para: "Node.js fills in as a JavaScript system custom fitted for creating server-side applications. It facilitates the execution of compact JavaScript programs directly from the command line, operating independently of browsers."
                }
            },
            {
                type: "cont",
                props: {
                    title: "Node.js CMS Development",
                    para: "Node.js presents a straightforward option for developing innovative CMS solutions for your business. Being free and open-source, it conserves significant time and cost resources for your projects."
                }
            }

        ],

        right: [
            {
                type: "cont",
                props: {
                    title: "Why choose us for Node JS Development",
                    para: "Select us for Node.js Improvement: Capability in utilizing Node.js for versatile arrangements, a history of conveying high-performing applications, and a pledge to customized, client-driven improvement."
                }
            },
            {
                type: "Block",
                props: {
                    data: [
                        {
                            q: "Full stack Dedicated developers",
                            content: () => (
                                <>
                                    <p>Our developers recognize Node.js as a highly efficient cross-platform JavaScript environment, enabling the creation of resilient REST APIs, mobile apps, and web applications. With expertise in JavaScript, Node.js stands as our primary platform, harnessing its core language to craft robust web solutions.</p>
                                </>
                            ),
                        },
                        {
                            q: "Inhouse Frontend experts",
                            content: () => (
                                <>
                                    <p>Choosing Node.js as your backend platform aligns perfectly with our capabilities in frontend technologies such as AngularJS, ReactJS, and VueJS. Our proficient group blends these advances flawlessly to meet your total site needs, having conveyed various reasonable, quick, and versatile full-stack applications.</p>
                                </>
                            ),
                        },
                        {
                            q: "We use best Node JS practices",
                            content: () => (
                                <>
                                    <p>We adhere to Node.js Development’s best practices, encompassing strategies like utilizing lowercase, focusing solely on vital Git components, and initiating each project with ‘npm init.’ Our designers reliably upgrade Node.js execution through procedures like Breaks, application profiling, and nonstop observing. Besides, we scale applications across numerous machines utilizing a Heap Balancer to guarantee ideal execution.</p>
                                </>
                            ),
                        }
                    ]
                }
            }

        ],
    },

    // 25
    {
        id: "React-Js",
        coverlink: `${BASE1}/Ourservices-banner-9.png`,
        evst1: "Development",
        evst2: "React Js Development",
        evsp1: (
            <>
                <p className="pb-[3vh]">React, a free and open-source JavaScript library for frontend improvement, bases on building UIs through reusable UI parts. Its functionality extends to creating interactive interfaces and extends its capabilities to server-side rendering with Node.js and mobile app development through React Native.</p>

                <p className="pb-[3vh]">As an open-source, part based library, React (ReactJS) deals with the view layer of utilizations and is kept up with by Facebook. Requiring major areas of strength for an of JavaScript and flaunting an insignificant Programming interface to dominate, React remains as the second most famous frontend structure after jQuery. It offers robust cross-platform support, facilitating easy adoption and dependency management.</p>

                <p>Prominent social media platforms like Instagram, Facebook, and Reddit leverage React for their frontend web development requirements.</p>
            </>

        ),
        img11: `${BASE1}/17.png`,
        img12: `${BASE1}/16-1.png`,
        img13: `${BASE1}/13.png`,
        img14: `${BASE1}/React-Js.png`,
        index: [0, 1, 2, 3],

        left: [
            {
                type: "BulletCheck",
                props: {
                    title: "Key benefits of React JS for frontend development",
                    features: [
                        "Reusable Components",
                        "It’s easy to learn",
                        "Performance",
                        "It helps to build rich user interfaces",
                        "Usability",
                        "Flexibility",
                        "Speed",
                        "It allows writing custom components"
                    ]
                }
            },
            {
                type: "cont",
                props: {
                    title: "React UI/UX Development",
                    para: "ReactJS enables the development of interactive UIs. Our team of seasoned designers excels in crafting intuitive, aesthetically pleasing designs tailored for your applications."
                }
            },
            {
                type: "cont",
                props: {
                    title: "Pros of React JS",
                    para: "React’s Virtual DOM enhances user experiences and accelerates developers’ workflow. The one-directional data flow in React JS ensures code stability."
                }
            },
            {
                type: "cont",
                props: {
                    title: "Robust ecosystem",
                    para: "React JS exhibits remarkable flexibility, complemented by its suite of companion libraries and frameworks designed to facilitate the implementation of intricate functionalities."
                }
            }


        ],

        right: [
            {
                type: "cont",
                props: {
                    title: "Hire our extremely skilled and experienced React JS Developers!",
                    para: "Enlist our highly skilled and experienced React JS Developers for your projects! Benefit from mastery that guarantees top-level arrangements, improved execution, and consistent client encounters."
                }
            },
            {
                type: "Block",
                props: {
                    data: [
                        {
                            q: "Mature and simple dev workflow",
                            content: () => (
                                <>
                                    <p>A major advantage of choosing React JS for web development lies in its optimized development interface and coding language. Our React JS developers possess deep familiarity with the library’s functions and coding paradigms. By integrating JSX into JavaScript, React streamlines code, resulting in cleaner, more readable, and comprehensive code structures.</p>
                                </>
                            ),
                        },
                        {
                            q: "Hassle free reusability of components",
                            content: () => (
                                <>
                                    <p>Leveraging React JS allows us to construct distinct components adaptable for various website sections and platforms. Our skilled designers have some expertise in creating web application components that flawlessly coordinate into any undertaking supporting Respond based code.</p>
                                </>
                            ),
                        },
                        {
                            q: "Migration and Integration Services",
                            content: () => (
                                <>
                                    <p>Our team of React JS developers provides expert aid in migrating and integrating existing web applications and systems. Leveraging component reuse across platforms can lead to potential savings of up to 60% on your overall project costs. Additionally, we specialize in crafting custom plugins to enhance and extend the functionality of your web applications.</p>
                                </>
                            ),
                        }
                    ]
                }
            }

        ],
    },

    // 26
    {
        id: "Digital-Marketing",
        coverlink: `${BASE2}/Digital-Marketing-banner.png`,
        evst1: "Digital",
        evst2: "Digital Marketing Planning",
        evsp1: (
            <>
                <p className="pb-[3vh]">Take advantage of the experiential-learning opportunities built into many programs. You can work in labs on and off campus or even spend semesters overseas. One Construction employs over 3,000 employees, the majority of whom are based on project sites.</p>

                <p>We embrace holistic development and support for employees with the aim of being a first-choice employer within our sectors. Through a unique combination of engineering, construction and design disciplines and expertise.</p>
            </>

        ),
        img11: `${BASE2}/Digital-Marketing2.png`,
        img12: `${BASE2}/Digital-Marketing1.jpg`,
        img13: `${BASE2}/Digital-Marketing.jpg`,
        img14: `${BASE2}/Digital-Marketing.png`,
        index: [0, 1, 2, 3],

        left: [
            {
                type: "cont",
                props: {
                    title: "Plan Benefits",
                    para: "Take advantage of the experiential-learning opportunities built into many programs. You can work in labs on and off campus or even spend semesters overseas. One Construction employs over 3 000 employees, the majority of whom are based on project sites."
                }
            },
            {
                type: "BulletCheck",
                props: {
                    title: "",
                    features: [
                        "Cost-effective",
                        "Targeted reach",
                        "Real-time results",
                        "High engagement",
                        "Boosts visibility",
                        "Increases traffic",
                        "Better conversions",
                        "Data-driven decisions"
                    ]
                }
            },

        ],

        right: [
            {
                type: "Block",
                props: {
                    data: [
                        {
                            q: "Developing core applications",
                            content: () => (
                                <>
                                    <p>We are a boutique digital transformation consultancy and software development company that provides cutting edge engineering solutions. We are a boutique digital transformation.</p>
                                </>
                            ),
                        },
                        {
                            q: "Developing core applications",
                            content: () => (
                                <>
                                    <p>We are a boutique digital transformation consultancy and software development company that provides cutting edge engineering solutions. We are a boutique digital transformation.</p>
                                </>
                            ),
                        },
                        {
                            q: "Developing core applications",
                            content: () => (
                                <>
                                    <p>We are a boutique digital transformation consultancy and software development company that provides cutting edge engineering solutions. We are a boutique digital transformation.</p>
                                </>
                            ),
                        }
                    ]
                }
            }
        ],
    },

    // 27
    {
        id: "Mern-Stack",
        coverlink: `${BASE1}/ReactNative.png`,
        evst1: "Development",
        evst2: "MERN Stack Development",
        evsp1: (
            <>
                <p className="pb-[3vh]">MERN Stack development integrates MongoDB, Express.js, React.js, and Node.js — a full-stack JavaScript framework for building scalable, high-performance web apps with smooth client-server interaction.</p>

                <p className="pb-[3vh]">MongoDB stores data as a flexible NoSQL database, Express.js runs on Node.js for backend logic, and React.js powers the frontend with dynamic, responsive interfaces. Together, they enable efficient end-to-end JavaScript development with code reuse and minimal context switching.</p>

                <p>We deliver fast, secure MERN Stack solutions tailored to your needs — from custom dashboards and eCommerce platforms to real-time applications — with agile methods focused on performance, UX, and scalability.</p>
            </>


        ),
        img11: `${BASE1}/9-1.png`,
        img12: `${BASE1}/13.png`,
        img13: `${BASE1}/17.png`,
        img14: `${BASE1}/Node-Js.png`,
        index: [7, 9, 20, 22],

        left: [
            {
                type: "BulletCheck",
                props: {
                    title: "MERN Stack Highlights",
                    features: [
                        "Full JavaScript stack",
                        "Fast performance",
                        "Reusable UI",
                        "Flexible database",
                        "Easy API setup",
                        "Real-time apps",
                        "Scalable structure",
                        "Cross-platform"
                    ]
                }
            },
            {
                type: "cont",
                props: {
                    title: "What is MERN Stack?",
                    para: "MERN Stack is a popular JavaScript stack used for building modern web applications. It comprises MongoDB, Express.js, React.js, and Node.js — a set of powerful technologies that enable full-stack development using a single language: JavaScript."
                }
            },
            {
                type: "cont",
                props: {
                    title: "Frontend with React.js",
                    para: "React.js is used for building fast, interactive user interfaces. It enhances the frontend experience with reusable components and efficient rendering, making applications highly responsive and dynamic."
                }
            },


        ],

        right: [
            {
                type: "cont",
                props: {
                    title: "Backend with Node.js & Express",
                    para: "Node.js provides the runtime environment while Express.js is a lightweight web framework that simplifies building robust APIs and handling server-side logic. Together, they form the scalable backend of a MERN application."
                }
            },
            {
                type: "cont",
                props: {
                    title: "Database with MongoDB",
                    para: "MongoDB, a NoSQL database, offers flexibility and scalability for handling structured or unstructured data. It integrates seamlessly with Node.js, storing application data in a document-oriented format."
                }
            },
            {
                type: "Block",
                props: {
                    data: [
                        {
                            q: "What is MERN Stack used for?",
                            content: () => (
                                <>
                                    <p>MERN Stack is used to build full-stack web applications using JavaScript across both frontend and backend. It’s ideal for developing dynamic single-page applications and complex enterprise solutions.</p>
                                </>
                            ),
                        },
                        {
                            q: "Why choose MERN Stack for your project?",
                            content: () => (
                                <>
                                    <p>MERN enables faster development with one language (JavaScript) across all layers. It offers scalability, reusable components, efficient data handling, and a strong open-source community.</p>
                                </>
                            ),
                        },
                        {
                            q: "Is MERN Stack suitable for startups?",
                            content: () => (
                                <>
                                    <p>Yes, MERN Stack is lightweight, cost-effective, and supports rapid development, making it an excellent choice for startups aiming to launch MVPs or scalable products quickly.</p>
                                </>
                            ),
                        }
                    ]
                }
            }

        ],
    },

    // 28
    {
        id: "Web-Design-And-Development",
        coverlink: `${BASE}/Web-Development-banner.png`,
        evst1: "UNPARALLELED EXPERTISE",
        evst2: "Why Choose Our Knowledge and Expertise",
        evsp1: "Discover an all-encompassing solution tailored to meet diverse business requirements, available at an unexpectedly affordable price point! At Webtech Evolution, our array of Open Source Solutions caters to various website development needs. Following industry-leading methodologies, we ensure timely project deliveries by adhering to the best practices.",
        img11: `${BASE1}/17.png`,
        img12: `${BASE1}/13.png`,
        img13: `${BASE1}/15.png`,
        img14: `${BASE}/Web-Design-Development1-1.png`,
        index: [0, 1, 2, 17, 18, 20, 22],

        left: [
            {
                type: "cont",
                props: {
                    title: "What makes us stand apart from the rest?",
                    para: ""
                }
            },
            {
                type: "Block",
                props: {
                    data: [
                        {
                            q: "Imaginative Design",
                            content: () => (
                                <>
                                    <p>Striking a flawless harmony between innovative design and exceptional user experience has been the guiding principle behind every web development project we embark upon!</p>
                                </>
                            ),
                        },
                        {
                            q: "Incredible Work Experience",
                            content: () => (
                                <>
                                    <p>Allow us the chance to unveil the WOW factor and leave a lasting impression! With meticulous attention to even the minutest requirements, we boast an organized and systematic approach. Adhering strictly to workflows and deadlines, we seamlessly execute projects from inception to completion!</p>
                                </>
                            ),
                        }
                    ]
                }
            }

        ],

        right: [
            {
                type: "Block",
                props: {
                    data: [
                        {
                            q: "Intelligent Coding",
                            content: () => (
                                <>
                                    <p>Proficient in crafting advanced web applications leveraging the latest technologies, we consistently enhance our team’s skills with ongoing technological advancements, fostering a culture of “earning while learning!”</p>
                                </>
                            ),
                        },
                        {
                            q: "Regular Updation",
                            content: () => (
                                <>
                                    <p>We understand the client’s need to witness each little progress made on his project, hence we adhere to regular updation schedule and constantly stay connected with our clients.</p>
                                </>
                            ),
                        }
                    ]
                }
            }

        ],
    },

    // 29
    {
        id: "SEO-And-Digital-Marketing",
        coverlink: `${BASE}/SEO-And-Digital-Marketing.png`,
        evst1: "UNPARALLELED EXPERTISE",
        evst2: "Why Choose our SEO experts",
        evsp1: "With our proficient SEO specialists and dynamic, committed social media experts, your online business will soar to new heights and gain rapid popularity! Leveraging extensive research on social media trends, we ensure your website becomes SEO-friendly and secures a top-ranking position in your region. Give us the opportunity to demonstrate our capabilities!",
        img11: `${BASE1}/search-engine-optimization_53876-119984.png`,
        img12: `${BASE1}/hand-holding-smartphone.png`,
        img13: `${BASE2}/Digital-Marketing2.png`,
        img14: `${BASE}/SEO-Digital-Marketing1-1.png`,
        index: [10, 11, 12, 13, 14],


        left: [
            {
                type: "cont",
                props: {
                    title: "What We Offer?",
                    para: ""
                }
            },
            {
                type: "Block",
                props: {
                    data: [
                        {
                            q: "Digital Marketing Services",
                            content: () => (
                                <>
                                    <p>As your dedicated ally, our approach is grounded in a business owner’s perspective, treating your business as our own. Opting for digital marketing services isn’t merely an expense; it’s an investment that cultivates online brand awareness for your business. Tailored Digital Marketing Services Include:</p>
                                    <ul className="list-disc px-10 mt-2">
                                        <li>Search Engine Optimization (SEO)</li>
                                        <li>Facebook Ads Management</li>
                                        <li>Social Media Marketing Services</li>
                                        <li>Google Ads Management</li>
                                        <li>Content Marketing Services</li>
                                        <li>Email Marketing Services</li>
                                    </ul>
                                </>
                            ),
                        }
                    ]
                }
            }

        ],

        right: [

            {
                type: "Block",
                props: {
                    data: [
                        {
                            q: "Best SEO Services with Top Rankings",
                            content: () => (
                                <>
                                    <p className="pb-[3vh]">With our adept SEO team, we delve deep into your needs, devising an effective marketing strategy that yields enduring results. Our ability to generate authentic and impactful leads significantly boosts your business and revenue.</p>
                                    <p className="pb-[3vh]">Did you know that SEO contributes to 51% of website traffic and drives 40% of revenue? Establishing an online presence enhances visibility where your customers predominantly reside. Securing top rankings is pivotal, considering most customers rarely explore beyond the first page of Google search results. To achieve high rankings, engaging an expert SEO service provider capable of generating organic traffic is essential.</p>
                                    <p>At Webtech Evolution, we begin by comprehensively understanding your business and requirements. Conducting an SEO audit, we then craft an appealing strategy to attract potential business prospects. Our approach doesn’t just acquire leads; we foster engagement that transforms them into loyal brand advocates, bolstering your customer base.</p>
                                </>
                            ),
                        }
                    ]
                }
            }

        ],
    },

    // 30
    {
        id: "Hire-Dedicated-Developers",
        coverlink: `${BASE}/banner3.png`,
        evst1: "UNPARALLELED EXPERTISE",
        evst2: "Why Choose Our Web Development Team",
        evsp1: (
            <>
                <p className="pb-[3vh]">At Webtech Evolution, we’re a client-centric and results-oriented organization. Our team, comprised of dedicated talent and unwavering commitment, embodies a passion for all things digital. Though small in size, we strive to become an integral part of your growth journey, aiming to forge lasting and meaningful relationships with our clients.</p>
                <p>Each client holds significant value for us. Once your project is assigned, a dedicated team member is assigned to cater to your needs and inquiries until the project reaches a satisfactory conclusion. Outsourcing your work to us not only allows you to focus on core business areas but also proves to be cost-effective.</p>
            </>
        ),
        img11: `${BASE1}/16-1.png`,
        img12: `${BASE1}/13.png`,
        img13: `${BASE1}/15.png`,
        img14: `${BASE}/Hire-Dedicated-Developers1-1.png`,
        index: [0, 1, 2, 3, 4, 5, 6],

        left: [
            {
                type: "cont",
                props: {
                    title: "Why Hire from Us?",
                    para: ""
                }
            },
            {
                type: "Block",
                props: {
                    data: [
                        {
                            q: "Years of Experience",
                            content: () => (
                                <>
                                    <p>Within our Web Development team, developers possess varied work experiences spanning from 1 to 4 or 5 years in their respective fields. They excel in managing challenging and intricate requirements, adept at navigating and resolving issues effectively. They are also capable of handling all client communications independently.</p>
                                </>
                            ),
                        },
                        {
                            q: "Streamlined Work Process",
                            content: () => (
                                <>
                                    <p>At Webtech Evolution, our work process adheres to stringent guidelines. This involves daily target achievements, consistent client updates, direct client engagement for requirement discussions and issue resolution, all while maintaining stringent work ethics throughout project execution.</p>
                                </>
                            ),
                        }
                    ]
                }
            }

        ],

        right: [
            {
                type: "Block",
                props: {
                    data: [
                        {
                            q: "Superior Knowledge and Skill",
                            content: () => (
                                <>
                                    <p>Our developers take pride in their expertise within their respective domains. With a successful track record across numerous projects, they’ve honed crucial skills to flawlessly execute projects from start to finish without many bugs.</p>
                                </>
                            ),
                        },
                        {
                            q: "Dedicated Support",
                            content: () => (
                                <>
                                    <p>Once we receive your project, we assign a dedicated project manager who remains in direct contact with you throughout its execution. Even upon project completion, we offer a complimentary 30-day period for bug fixes and technical support.</p>
                                </>
                            ),
                        }
                    ]
                }
            }

        ],
    },

    // 31
    {
        id: "Customized-Solutions",
        coverlink: `${BASE}/Customized-Solutions-banner.png`,
        evst1: "UNPARALLELED EXPERTISE",
        evst2: "We tailor your needs as per your demands!",
        evsp1: (
            <>
                <p className="pb-[3vh]">Got a fantastic idea? Let Webtech Evolution customize it for you. Our focus remains steadfast on ensuring a seamless and effortless journey for your users through your custom application.</p>
                <p className="pb-[3vh]">For Custom Application development, we prioritize the PHP framework due to its open-source nature, saving significant licensing costs. It seamlessly integrates with multiple web servers and pairs exceptionally well with the MySQL database, also an open-source platform.</p>
                <p className="pb-[3vh]">Our developers naturally excel in writing efficient and clean code, resulting in affordability and time-saving measures for your projects.</p>
                <p>We combine precise methodologies with skill and expertise to help you achieve your business objectives!</p>
            </>

        ),
        img11: `${BASE}/Customized-Solutions-banner.png`,
        img12: `${BASE2}/Digital-Marketing1.jpg`,
        img13: `${BASE1}/man-typing-laptop.jpg`,
        img14: `${BASE}/Customized-Solutions1-1.png`,
        index: [0, 1, 2, 3, 4, 5, 6],

        left: [
            {
                type: "cont",
                props: {
                    title: "Our Speciality",
                    para: ""
                }
            },
            {
                type: "Block",
                props: {
                    data: [
                        {
                            q: "Customized Design",
                            content: () => (
                                <>
                                    <p>Whether you have a website design in mind, a mockup prepared, or a reference site to draw inspiration from, we’re here to transform your vision into a live, functional website. Even without a specific design in mind, we’re poised to bring your concepts to life, crafting a professional and contemporary design for your business.</p>
                                </>
                            ),
                        }
                    ]
                }
            }

        ],

        right: [
            {
                type: "Block",
                props: {
                    data: [
                        {
                            q: "Customized Functionality",
                            content: () => (
                                <>
                                    <p>Should your business demand specific functionalities, simply share your requirements with us, and we’ll strive for perfection in achieving them. Whether it’s customizing existing functionalities, modifying plugins, developing new plugins, migrating to a new version or theme—whatever your need, we’re equipped to assist in making it happen.</p>
                                </>
                            ),
                        }
                    ]
                }
            }

        ],
    },

    // {
    //     id: "",
    //     coverlink: `${BASE1}`,
    //     evst1: "",
    //     evst2: "",
    //     evsp1: "",
    //     img11: `${BASE1}`,
    //     img12: `${BASE1}`,
    //     img13: `${BASE1}`,
    //     img14: `${BASE1}`,
    //     index: [0, 1, 2, 3],

    //     left: [

    //     ],

    //     right: [

    //     ],
    // },

]
