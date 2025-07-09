// app/portfolio/webPageContent.js
'use client';          // allow env vars on the client

const BASE  = process.env.NEXT_PUBLIC_IMG_url;   // 2024/02
const BASE1 = process.env.NEXT_PUBLIC_IMG_url1;  // 2024/01
const BASE2 = process.env.NEXT_PUBLIC_IMG_url2;  // 2021/12
const BASE3 = process.env.NEXT_PUBLIC_IMG_url3;  // 2022/01
const BASE4 = process.env.NEXT_PUBLIC_IMG_url4;  // 2022/02

export const webPageContent = {
  // Content for ID 1 (Murray Woods)
  '1': {
    cover: `${BASE}/Our-services-banner-2-2.png`,
    p1: "Murray Woods is a dental hospital at Dublin, Ireland and they wanted a professional looking ecommerce website to sell their dental equipment and services. We built their store on Shopify as it has a smooth checkout process and is customer friendly. Their design was very basic as they wanted a clean layout, less cluttered and display more pictures and less information. All their service pages have a contact form that was made using Gravity forms plugin through which that service can be booked online. Lot of custom fields were built in this form like preferred date and time slot for booking, max rate offered etc. ",
    p2: "Along with a Shop page that sold dental equipment, they also have a separate section on dental instruments for which customers can request a quote for by filling up a simple inquiry form. All form entries were saved in the database and also emailed to site’s admin for further processing. Tools and Technologies used:",
    wimg: `${BASE}/MurrayWoods-2-600x630.png`,
    p3: "The look and feel of the website was designed using Figma. After some revisions, the design was integrated into the Shopify platform. The Product detail page was also designed in a very new style as the dental instruments need to be displayed with multiple views along with video descriptions as well. This will encourage sales and give detailed information about the product to its customers.",
    features: [
      "Shopify",
      "Gravity Forms",
      "Figma",
      "GitHub",
      "MongoDB",
      "Contact Form 7",
      "HTML5, CSS",
      "SSL Certificate",
    ]
  },
  // Content for ID 2 (McAUliffes Craft Shop)
  '2': {
    cover: `${BASE}/Our-services-banner-2-2.png`,
    p1: "McAUliffes is a multi-category brand selling a variety of products ranging from craft supplies, jewellery, books, textiles and even beauty products. They wanted to sell all their products on a robust and stable ecommerce platform, hence we built this store on Shopify. We needed a strong and robust database to sore the kind of inventory they had. The store also gives out gift vouchers for which a custom module was developed. This store is physically present in Donegal, Ireland and all products are hundred percent Irish made. ",
    p2: "The design and layout of this store was developed using Figma. The Shopify store is synced with the physical inventory and all SKUs are automatically updated whenever any sale happens offline or online.",
    wimg: `${BASE}/McA-Uliffes-Craft-Shop-600x630.png`,
    p3: "We collaborated with McAuliffe's Craft Shop to create an immersive online shopping experience that captures the charm and heritage of their physical store. The e-commerce site highlights individual artisan stories, facilitates easy Browse, and ensures a secure and delightful purchasing journey for customers passionate about Irish craftsmanship.",
    features: [
      "Shopify",
      "HTML5, CSS",
      "Gift Voucher Module",
      "POS",
      "MongoDB",
      "Figma",
      "GitHub",
      "SSL Certificate",
    ]
  },
  // Content for ID 3 (Gift Works)
  '3': {
    cover: `${BASE}/blog12.jpg`,
    p1: "Gift Works Store is a chain of stores specializing in general gift articles, memorabilia and  interior decoration items for homes.  They wanted us to build their ecommerce platform on Shopify and sync their inventory with all their physical stores. The store has some special features like Buyer notifications, Gift Cards, Pay in Installments using Pay-Whirl payment gateway. Our Shopify developers worked on developing all these features by custom coding. There are also special festive discounts given out by the store every month for which an automatic coupon code generator was integrated, so that the client can easily create coupons for their customers. ",
    p2: "The design of this store was custom developed after getting a wireframe draft from the client. Our designers developed the design using Figma and then integrated with the Shopify platform. It was made fully responsive and compatible with all browsers including Apple. We have also designed all the graphical banners and infographics present on the website.",
    wimg: `${BASE}/Gift-WorksStore-2-600x630.png`,
    p3: "Along with the design and development of this store, we are also providing SEO and digital marketing services. This is an ongoing project for us as the store is very active and has thousands of sales happening on a daily basis. Hence our team is constantly working on their promotional activities on social media like regular posting, content creation, graphic design and writing blog articles. ",
    features: [
      "Shopify",
      "HTML5, CSS",
      "Gift Card Module",
      "Stripe Payment Gateway",
      "SSL Certificate",
      "MongoDB",
      "GitHub",
      "Pay-Whirl Payment Gateway",
      "Figma",
      "Buyer Notification Module",
    ]
  },
  // Content for ID 4 (Health Food Heaven)
  '4': {
    cover: `${BASE}/blog12.jpg`,
    p1: "Health Food Heaven is a Candian Company dealing with health and natural products that provide supplements and general health care products. Their store was built on the Shopify platform as it provides a fast checkout, cross selling on different social media platforms too, which was the main requirement as they are big with Instagram selling. So they wanted their website sales to be in sync with the sales made via other platforms, for which Inventory Management module was developed. They also wanted to give out Discount Coupons to Influencers and their loyal customers. So we developed the coupon generator on the admin side so that they can easily give out coupons. ",
    p2: "This store was also ready to accept custom bulk orders for which an enquiry form needs to be sent via their website. This data was emailed to the store owners to attend to the requirements posted. The listing page has sorting and filters for making it user friendly as they have a large number of products. ",
    wimg: `${BASE}/Healthood-Heaven-600x630.png`,
    p3: "The design of this website was first built on Adobe XD using inputs given by the client. They wanted us to build a very different product page as they wanted to highlight all the health benefits of their products more than the image. They also wanted to include video of the products and video testimonials of happy customers. So we added the reviews section on the homepage on a side tab which was quite unique. ",
    features: [
      "Shopify",
      "MySQL",
      "AdobeXD",
      "HTML5, CSS",
      "Gravity Form 7",
      "Coupon Generator",
      "Stripe Payment Gateway",
      "SSL Certificate",
    ]
  },
  // Add detailed content for other IDs as needed.
  // For any ID not present here, the DetailPage will show "Content Not Found".
  // Example for ID 5 (BBEdutech):
  '5': {
    cover: `${BASE}/Our-services-banner-2-2.png`,
    p1: "BBEdutech is an Edutech company that collaborates with Educational Institutions to provide a wide range of professional and educational courses for students, working professionals, housewives etc. They wanted to build an informational website to display all the courses they offered. All the course pages had an Enroll Now button which was given a UTM link that would take the customer directly to the course detail page of the selected University. We developed their website on WordPress and also added all the content of the courses. This website has a dynamic menu with many categories of courses and their specialisations.",
    p2: "The design of this website was made using a template and edited with WordPress Elementor. Our designers also added custom elements into the template to make the design unique. Gravity forms were made to capture students data along with organisations data for business leads.",
    wimg: `${BASE}/portfolo6-600x630.png`,
    p3: "We are also working on the SEO and marketing of this website to spread awareness and generate leads. Using Facebook Ad Manager and Google Ads Manager, we have been posting regularly on these platforms to generate leads which are forwarded to the client. This is an ongoing project as they keep adding content to their courses.",
    features: [
      "WordPress",
      "MySQL",
      "Gravity Form 7",
      "Contact Form 7",
      "GitHub",
      "HTML5, CSS",
      "SSL Certificate",
      "Google Maps AP*"
    ]
  },

  // IMPORTANT: ADD ALL OTHER IDs FROM YOUR `allImages` ARRAY HERE WITH THEIR RESPECTIVE CONTENT
  // If an ID is missing here, its detail page will show "Content Not Found".
  '6': {
    cover: `${BASE}/Our-services-banner-2-2.png`,
    p1: "The team at Apponix Academy approached us with an objective to redesign their website and make it more user friendly. Apponix Academy is an online and offline training institute that imparts learning on professional courses. They had a functional running website but was confusing to navigate and did not have the facility for applying online to courses. Their website was also slow to load and not SEO friendly.",
    p2: "Our team of designers and developed stepped up to the task of redesigning the website, make it easy to navigate, more user-friendly and add an online payment facility on the website. We decided to build a new system on Laravel with the frontend on Angular to make it more quick and easy to navigate.",
    wimg: `${BASE}/apponix-5-1024x930-1-600x630.webp`,
    p3: "Our team of developers studied the project in detail and familiarized themselves with the site’s construction and Database structure. We worked closely with the client at every step of development and gave them regular weekly updates on the progress made. We added the online payment mode to increase revenue and get more registrants. We also optimized the website, its content and images and made it SEO friendly. Pages were optimized and compressed images were used to increase the loading speed. We wrapped up the project within the budget and timeline and got ourselves a client for life!",
    features: [
      "Laravel 8 as Back-end Technology",
      "Angular JS for Frontend",
      "Typescript",
      "Design created on Figma",
      "GitHub",
      "MySQL database",
      "RazorPay as Payment Gateway Provider",
      "HTML5, CSS"
    ]
  },

  '7': {
    cover: `${BASE}/Our-services-banner-2-2.png`,
    p1: "BabySitter is an online portal for hiring babysitting services across Australia. There are various job categories paid by hour or month. The website involves incorporating features that cater to both parents seeking childcare services and babysitters looking for job opportunities. We started this website from scratch with just an idea in our client’s mind and a rough layout of how the site should look like. We had a couple of reference websites to take inspiration from but they were not catering to the same industry. The client was very clear with his requirements and gave us a fixed budget and timeline to work with. Our plan of action was very straightforward. We developed the design using Adobe XD and some elements were created on Adobe Illustrator. Graphics and visuals were created on Adobe Photoshop. Backend was developed on Laravel 8 to make it editable and easy to understand for the client. ",
    p2: "Features of the job matching portal: User Registration, Profile Creation, Searching and Matching, Reviews and Ratings, Messaging System, Calendar and Availability, Job Postings, Background Checks and Certifications, Payment Integration, Privacy and Security, Responsive Design, FAQs and Support, Blog or Resources",
    wimg: `${BASE}/babysitter-8-1024x930-1-600x630.webp`,
    p3: "The entire portal was developed by our team of developers and designers from start to end. We are delighted to have gotten the opportunity to work on this project. There were many challenges during the development but none were big enough to deter us from our path. This babysitter website was created as a user-friendly and secure platform that connected parents with reliable and qualified childcare providers.",
    features: [
      "Laravel 8 as Backend",
      "Frontend Bootstrap",
      "Adobe XD for creating design and layout",
      "Adobe Illustrator",
      "MySQL Database",
      "Dynamic HTML",
      "GitHub",
    ]
  },
  '8': {
    cover: `${BASE}/Our-services-banner-2-2.png`,
    p1: "Trek is a multi-vendor trip organizer website incorporating features that cater to both travelers seeking unique experiences and vendors offering travel services. This was a complex idea to execute and required lot of brain storming on the layout and structure of the portal. The client wished to use modern technologies like Node JS and Angular JS for the frontend. The design was provided in PSD format and we used that to build the interface in Angular JS.",
    p2: "Essential features of this website are: User Registration and Profiles, Vendor Dashboard, Trip Listings, Booking and Reservation System, Payment Gateway, Reviews and Ratings, Messaging System, Multilingual Support, Calendar and Availability, Map Integration, Social Media Integration, Admin Panel",
    wimg: `${BASE}/nicklessonsandmusic-1-5-1024x930-1-600x630.webp`,
    p3: "By incorporating above features, a multi-vendor trip organizer website was developed to provide a comprehensive platform for travelers to discover and book unique experiences while allowing vendors to showcase and manage their offerings efficiently. Our designers did a fab job of creating a responsive website that worked seamlessly across different devices. We implemented robust security measures to protect user data and financial transactions.",
    features: [
      "Node JS as Backend",
      "Angular JS for Frontend",
      "MongoDB",
      "HTML5, CSS",
      "Adobe Illustrator",
      "GitHub",
      "AWS",
      "Stripe Payment Gateway",

    ]
  },
  '9': {
    cover: `${BASE}/Our-services-banner-2-2.png`,
    p1: "This website was developed for an expert Guitarist Nick who was offering comprehensive Online and Offline Guitar Tuitions. As an accomplished guitarist with years of experience, Nick approached us to create a website for him that would offer both online and offline guitar lessons tailored to suit all skill levels and musical aspirations. He wanted to be able to manage all his classes, events, students information etc from the backend, so we decided to use Node JS for this. The look of the website had to be smooth, modern and a clean design with minimal content. Hence we made the frontend in Angular JS that goes well with his style. ",
    p2: "Creating an effective online music tuition website requires a thoughtful combination of features to enhance the learning experience and attract students. Here are some key features we developed: User-friendly Interface, Course Catalog, Registration and User Profiles, Multimedia Content, Live Sessions and Webinars, Interactive Learning Tools, Communication Channels, Live Events Listing, Social Media Integration",
    wimg: `${BASE}/nicklessonsandmusic-10-1024x930-1-600x630.webp`,
    p3: "The design was first developed on Figma and after approval deployed on Angular. The website had an Events Management module that was custom developed with Availability Calendar. It also had an online booking section for live gigs and concerts. Students can book their classes by paying upfront using PayPal or Credit Card. It was a wonderful yet challenging project to work on and we even did social media marketing for this website along with SEO.",
    features: [
      "Node JS as Backend",
      "Angular JS for frontend",
      "MongoDB",
      "HTML5, CSS",
      "GitHub",
      "Stripe Payment Gateway",
      "SSL Certification",
      "Figma",
    ]
  },
  '10': {
    cover: `${BASE}/Our-services-banner-2-2.png`,
    p1: "Wazobia is an online marketplace for food products and groceries similar to Walmart etc based in the USA. Customers can shop for various grocery items, exclusive African produce, heathy food items etc and get them delivered to their homes or even schedule a pickup from their stores across the States. This was a huge project and was the online store was developed on WooCommerce. The inventory management was the tricky part as it had to be synced with each of the store locations. ",
    p2: "This marketplace involved integrating a variety of features to enhance user experience, streamline operations, and facilitate efficient transactions. Here are some key features that were developed: User-Friendly Interface, Product Listings, Shopping Cart and Checkout, Delivery Options, Multi-vendor facility, Inventory Management, Order Tracking, Promotions and Discounts, User Accounts and Profiles, Reviews and Ratings, Subscription and Recurring Orders, Advanced Search and Filters",
    wimg: `${BASE}/wazobiaafricankitchen-1024x930-1-600x630.webp`,
    p3: "The design of this marketplace was first developed on Figma and then incorporated on WordPress. This website also had food delivery module in which customers can place orders or takeaways and get them delivered to their homes. We worked on this project for more than 8 months and it was one of the biggest achievements of our organization. We still work on site maintenance and social media marketing work.",
    features: [
      "WooCommerce",
      "Multi-vendor Plugin",
      "Stripe Payment Gateway",
      "FedEx API",
      "MySQL",
      "GitHub",
      "Figma",
      "Subscription Module",
      "Tax Module Plugin",
      "SSL certification",
    ]
  },
  '11': {
    cover: `${BASE}/Our-services-banner-2-2.png`,
    p1: "Cullen Diamond is a certified lab grown diamond manufacturer and exporter cum seller of diamond jewelry. They hired us to develop their online ecommerce store with special features like auction, season sales and referral discounts. Based on their requirements, we decided to build the store on WooCommerce. We developed the layout of the store on Adobe XD and after approval installed it on WordPress. Ecommerce part was handled by WooCommerce but we developed some custom functionalities like auction module, referral code generation and custom pricing for handling season sales etc. ",
    p2: "The web store caters to elite customers specifically for newly weds or to-be married couples. the website also has a Book an Appointment feature to cater to custom orders. There is also a section that invites guests and industry experts to give online advice on diamonds and their authenticity. This needs approval from admin before going live on the website. We made a clean, responsive and attractive design to attract the elite clientele. ",
    wimg: `${BASE}/cullendiamonds-2-1024x930-3-2-600x630.webp`,
    p3: "We custom developed the Referral Module in which discount coupons were automatically generated and emailed to the customer upon two successful referrals. The discount codes had certain limits and terms of use for which lot of customization had to be done. The store also had an online auction system that would go online depending on the season and any festival. There were lot of customizations done here also.",
    features: [
      "Woocommerce",
      "Adobe XD",
      "Auction Module",
      "WordPress",
      "Online Book Appointment Module",
      "Referral Module",
      "Forum and Blog Posting",
      "MySQL",
      "HTML5, CSS",
      "CCAvenue Payment Gateway",
    ]
  },
  '12': {
    cover: `${BASE}/Our-services-banner-2-2.png`,
    p1: "Tirzart is an online boutique catering to Women Wear. They have many categories like Dresses, Gowns, Lounge wear, Bride and Bridesmaid Dresses, Plus Size Dresses. The client who is the designer herself appointed us to develop this ecommerce store for her creations .We used WooCommerce as the online store as it has a clean, user-friendly interface and very easy for the client to update the products manage orders and customers herself. ",
    p2: "The Website had some special features like Referral Discount coupons that were given to maintain loyalty and repeat sales. It also had a made-to-order custom design feature in which customers can get customized dresses made as per their size and preferences. For this they had to fill up a online form with all the details. We used Gravity forms for capturing data and storing. ",
    wimg: `${BASE}/tirzart-1024x930-1-600x630.webp`,
    p3: "The design of the website was given to us by the client in PSD format. We converted that into HTML and then integrated in the WooCommerce setup. Smooth checkout process was needed for which we eliminated the cart page. We had to custom design the made-to-order page uusing Adobe Photoshop. We are also working on the SEO and Digital Marketing of this website and its products.",
    features: [
      "WooCommerce",
      "MySQL",
      "HTML5, CSS",
      "Stripe Payment Gateway",
      "Referral Discount Module",
      "GitHub",
      "Gravity Forms",
      "SSL Certificate",
    ]
  },
  '13': {
    cover: `${BASE}/Our-services-banner-2-2.png`,
    p1: "This company based in Queensland, Australia approached to us build their website so that their customers can book their services online without having to contact them. They are a hot water service provider and plumbing service company and had a range of services related to water plumbing etc. Their website was very straightforward with detailed information on their services. Since most of their customer base was local to Queensland, they had many Google reviews which they wanted to show on their website as well in order to build credibility. So we developed an API through which every new review they received on Google got reflected on their website as well. ",
    p2: "Lead Capture forms were built using Gravity forms on every service page. Homepage also had a contact form that helped them deal with enquiries and close sales. We have also provided SEO services to them in order to help them rank higher on Google search results.",
    wimg: `${BASE}/qldhotwaterplumbing-3-1024x930-1-600x630.webp`,
    p3: "The design of the website was developed using the existing template provided by the client. We made certain modifications in the template to suit the site’s requirements. We also made it responsive and adaptable to all screen sizes as the template was not mobile friendly. We also provided Google Ad Words and GA4 services to help them drive traffic to their website.",
    features: [
      "WordPress",
      "MySQL",
      "Gravity Forms",
      "HTML5, CSS",
      "GitHub",
      "SSL Certificate",
      "Contact Form 7",
      "SEO, Google AdWords",
    ]
  },
  '14': {
    cover: `${BASE}/Our-services-banner-2-2.png`,
    p1: "True Balance Within is a wellness and therapy brand serving in the south of France. We created their website on WordPress platform with a CMS making it easily editable and manageable from the admin side. The website was created essentially to display all their services and contact them for availing any of these services. The website was mainly built for lead generation and to give detailed info about their services to the traffic that was driven by their social accounts. They had a very strong social presence and needed a good looking, responsive and modern web presence as well. We worked on this website for only three weeks and they were more than impressed with our commitment to work. ",
    p2: "This website had a dozen of categories dealing with all age groups and different genders including children. We developed the graphics and content for all the pages and categories. The website also had a Events section which had to be constantly updated as this brand was very popular with the masses and did lots of workshops and live therapy sessions.",
    wimg: `${BASE}/sunshinecoastwebdesign-1024x930-1-600x630.webp`,
    p3: "This website had a very robust site structure and needed a lot of server configurations to accommodate this complexity. We have worked on Apache server side for many years but this was very challenging for us too! In the end, we were successful with launching the website on time and in client’s budget. The design of the website was provided by the client in PSD format which was integrated on the WordPress platform and made mobile responsive.",
    features: [
      "WordPress",
      "MySQL",
      "HTML5, CSS",
      "Adobe Photoshop",
      "GitHub",
      "Event Planner Plugin",
      "SSL Certificate",
      "Apache Server",
    ]
  },
  '15': {
    cover: `${BASE}/Our-services-banner-2-2.png`,
    p1: "iStat Academy is an IT & Business Learning platform that equips people with tailored courses to launch a new career. This website was built on WordPress with a robust and vast content management system as the client had lot of course data to be stored on the website. There was also a need to build a detailed contact form in which extensive details of potential students had to be captured. We used Gravity Form 7 for this purpose. All the data that was input by visitors was easily made accessible to site’s administrator from the backend. He could also export this data in a csv format to his local computer for processing further. ",
    p2: "This website was essentially a information provider and there are Education experts who would tailor courses for you depending on your interest and information provided. So there was some amount of interaction happening on the website between the logged in customers and site admin. We developed a Messaging module that was linked to email notifications as well.",
    wimg: `${BASE}/istart-1024x930-1-600x630.webp`,
    p3: "The design and layout of this website was developed on Figma by our designers. Then its was integrated into the latest version of WordPress and made responsive. The design was mobile friendly, user friendly and adaptable to all browsers and screen sizes. Even the messaging interface was very user friendly. We also provided Social logins so that its customer friendly.",
    features: [
      "WordPress",
      "MySQL",
      "HTML5, CSS",
      "GitHub",
      "Gravity Form7",
      "Internal Messaging Module",
      "SSL Certificate",
      "Figma",
    ]
  },
  '16': {
    cover: `${BASE}/Our-services-banner-2-2.png`,
    p1: "Fabricio Morales is a renowned doctor and surgeon serving for many years in Brazil. We developed his personal informational website through which patients can reach him for inquiries. There was also a online video consultation module through which patients could take guidance from the doctor himself from the comfort of their homes anywhere in the world. We developed his website on WordPress to make it fast and easy to navigate.",
    p2: "The design of this website was first created on Adobe XD and then integrated on WordPress. We customised the existing plugin of online video call on WordPress. Patients need to first book their slots for consultation and the login to the website for the consultation on the given date and time.",
    wimg: `${BASE}/fabricaio-1024x930-1-600x630.webp`,
    p3: "This website was created within 2 weeks as there was a deadline and the client wanted to go live as soon as possible. Despite the customizations involved, our team managed to submit a fully functional website designed from scratch within the deadline.",
    features: [
      "WordPress",
      "MySQL",
      "Online Video Conferencing Module",
      "GitHub",
      "HTML5, CSS",
      "SSL Certificate",
      "Booking plugin",
      "Adobe XD",
    ]
  },
  '17': {
    cover: `${BASE}/Our-services-banner-2-2.png`,
    p1: "Devinity is an online portal from where staff can be hired like nurses, nannys, caretakers, house help etc.  It was built on WordPress like a job portal. Families in need of a caretaker can come and post their requirement on this website. There was an existing database of lots of health care professionals that were imported into the website using csv. These health care professionals can register on the site and create their profiles made available for job matching. Based on the search criteria given by the family, these professionals would be sorted based on the parameters given and shown on the results page. Families could select and hire any professional by clicking on the Hire button. ",
    p2: "This would send an email notification to the chosen professional who would also be sent the contact details of the family that has shown interest so that they can contact them directly regarding the job offer. Lots of plugins were used and modifications were done to achieve this functionality.",
    wimg: `${BASE}/devinity-1024x930-1-600x630.webp`,
    p3: "This portal was designed from scratch on Figma.All the pages were designed to keep it simple, user friendly and easy to navigate. Also all pages were made responsive and compatible with all browsers. This was a long project that stretched over 6 months as the search criteria match functionality was tricky to develop. In the end, we managed to fulfill all the client’s requirements.",
    features: [
      "WordPress",
      "MySQL",
      "Figma",
      "HTML5, CSS",
      "AWS",
      "GitHub",
      "SSL Certificate",
      "Search and Filter Module",
    ]
  },
  '18': {
    cover: `${BASE}/Our-services-banner-2-2.png`,
    p1: "This is a Shopify based ecommerce website dealing with jewelry shopping, specifically diamond jewelry. The client wanted a clean design with a user-friendly interface that entices customers to shop from their online store. They also had a huge stock of inventory at their multiple branches across England, so they wanted a comprehensive inventory management system. Hence we designed the store using Shopify and MongoDB for clean and efficient storage.",
    p2: "We have worked on a cool one-step checkout process for this store that eliminates the cat page altogether. We have also installed a social sharing plugin by which customers can share their desired products across their social accounts to their friends and families.",
    wimg: `${BASE}/carolwoodboutique-1024x930-1-600x630.webp`,
    p3: "The design of this store was developed using Figma. All the inner pages were also created using Figma. We also designed the logo and all the multimedia content for the website. Currently we are working on the site maintenance and SEO work, along with digital marketing. We are in charge of all their social media accounts and are constantly posting graphics and stories of their products and new arrivals.",
    features: [
      "Shopify",
      "MongoDB",
      "GitHub",
      "HTML5, CSS",
      "Stripe Payment Gateway",
      "FedEx API",
      "Figma",
      "Multi-store plugin",
      "SSL Certificate",
      "Newsletter Plugin",
    ]
  },
  '19': {
    cover: `${BASE}/Our-services-banner-2-2.png`,
    p1: "Morinda is a chain of professional Salon services in America. They have multiple branches across the States and also deal with human hair wigs and extensions. Their main focus for the website was to enlist all their services and book appointment for the same. Along with that, they wanted to sell all their hair care products and hair care range of shampoos, oils and conditioners online as well. We developed their website on Shopify and integrated an appointment booking plugin as well. ",
    p2: "The Website has the following distinctive features: Clean, modern responsive design, Book appointment online, Shop for haircare products, Compare products, Fast Checkout, Google map locations of all their stores, Location wise booking",
    wimg: `${BASE}/morinda-1024x930-1-600x630.webp`,
    p3: "We installed the Stripe Payment Gateway for this store. The client wanted us to allow for Cash on Delivery option too. They also wanted a POS system linked with the website so that all the sales that occur at physical stores could also be accounted for. Hence we integrated our own POS system with the Shopify store and stream-lined all the offline and online sales to maintain stock and sales.",
    features: [
      "Shopify",
      "MySQL",
      "Book Appointment Plugin",
      "HTML5, CSS",
      "Stripe Payment Gateway",
      "Multi-store plugin",
      "Google Maps API",
      "SSL Certificate",
    ]
  },
  '20': {
    cover: `${BASE}/Our-services-banner-2-2.png`,
    p1: "Blossom and Syrup is a urban, chic and luxury brand dealing with women’s lounge wear, resort wear and night gowns etc. They wanted to migrate their ecommerce store from magento to a modern and user friendly platform. So we redesigned their store on the Shopify platform and gave it a very modern look along with easy to navigate product catalog. They had a huge number of inventory which was migrated on the new store using csv import. We also added the upsell and cross sell features on the product pages which was really needed to drive sales. ",
    p2: "Some of the main features of this ecommerce store were: Video gallery of products, Compare Products, Social Sharing of products, Guest Checkout, Variable shipping rates, Complex product variables in sizes and combos",
    wimg: `${BASE}/blossomandsyrup-5-1024x930-1-600x630.webp`,
    p3: "For the design of this store, we used a shopify template but the homepage was custom designed on Figma and implemented as per client’s request. We also assisted with Amazon server hosting and maintenance as they wanted a fast, reliable and capable server hosting due to heavy load of videos on the website. Our team has also helped with initial launch and digital marketing of the store. We have done their promotion work and content writing, captions, posting etc on social media.",
    features: [
      "Shopify",
      "Ecommerce templates",
      "MySQL",
      "Stripe Payment Gateway",
      "Social Share plugins",
      "AWS",
      "GitHub",
      "Figma",
      "HTML5, CSS",
      "SSL Certificate",
    ]
  },
  '21': {
    cover: `${BASE}/Our-services-banner-2-2.png`,
    p1: "Bardy is a mens grooming brand dealing with hair oils, massage oils, hair regrowth oils and other products related to men’s beauty essentials. We developed their ecommerce store on the Shopify platform to make it user friendly and easier to setup and manage without extensive technical knowledge. Shopify also allows for high degree of customization which was needed in this store. Through this platform, customers can create their own gift hampers by combining different products for gifting purposes. Hence products had variable pricing depending on whether bought by itself or as a part of a combo. This required a great deal of customization which was handled by our Shopify experts. ",
    p2: "Our designers developed the site’s design on Adobe XD and also created some animated elements as per the client’s request. The database structure also needed to be modified to accommodate the variable pricing of products.",
    wimg: `${BASE}/bardy-5-1024x930-1-600x630.webp`,
    p3: "Shopify supports various payment gateways, making it easy for customers to make purchases using their preferred payment methods. It also has its own payment solution, Shopify Payments, which simplifies the payment process. We incorporated this Shopify Payments to process orders etc. Shopify includes built-in SEO features to help improve your store’s visibility in search engine results. Our team worked on customizable meta tags, clean URL structures, and other SEO-friendly elements.",
    features: [
      "Shopify",
      "Adobe XD",
      "Adobe Animate",
      "MongoDB",
      "Shopify Payments",
      "GitHub",
      "HTML5, CSS",
      "SSL Certificate",
    ]
  },
  '22': {
    cover: `${BASE}/Our-services-banner-2-2.png`,
    p1: "This is a fitness website owned by a Fitness Gym Community based in Queensland, Australia. Its built on WordPress with a clean, modern and responsive design. There are membership plans for fitness enthusiasts to subscribe to which was custom developed as the pricing was a bit complex. There are group fitness classes run by this community at their various locations for which members can register online through this website. We also customized the event booking module to suit their requirements.",
    p2: "This website also has an extensive blog section on fitness related articles. Our Content writers have developed the content for the same along with developing the infographics using Adobe Photoshop.",
    wimg: `${BASE}/the-studio-1024x930-1-600x630.webp`,
    p3: "This fitness website has a great ranking on Search results because we worked on it for six months to improve its ranking. The subscribers have increased a lot since we started the SEO work for this website. It has a user friendly SMS and Events module so client is able to add and update events on his own without needing our assistance!",
    features: [
      "WordPress",
      "MySQL",
      "Membership Plugin",
      "Events Plugin",
      "Adobe Photoshop",
      "HTML5, CSS",
      "GitHub",
      "SSL Certificate",
    ]
  }
};