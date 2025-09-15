export type Usage = "Student" | "Creator" | "Gaming";

export type Laptop = {
  title: string;
  specs: string;
  priceSegment: "40K" | "50K" | "60K" | "70K" | "80K" | "90K";
  usage: Usage;
  image: string;
};

export const LAPTOPS_DATA: Laptop[] = [
  // 40K - Student
  { 
    title: "Infinix INBook Y2 Plus", 
    specs: "Intel i3-1115G4 · 8GB · 256GB SSD", 
    priceSegment: "40K", 
    usage: "Student", 
    image: "/assets/laptop_image.jpg" 
  },
  { 
    title: "HP 15s-fq5111TU", 
    specs: "Intel i3 12th Gen · 8GB · 512GB SSD", 
    priceSegment: "40K", 
    usage: "Student", 
    image: "/assets/laptop_image.jpg" 
  },
  { 
    title: "Lenovo IdeaPad Slim 3", 
    specs: "Ryzen 3 5300U · 8GB · 256GB SSD", 
    priceSegment: "40K", 
    usage: "Student", 
    image: "/assets/laptop_image.jpg" 
  },

  // 50K - Student
  { 
    title: "ASUS Vivobook 15", 
    specs: "Intel i5 11th Gen · 8GB · 512GB SSD", 
    priceSegment: "50K", 
    usage: "Student", 
    image: "/assets/laptop_image.jpg" 
  },
  { 
    title: "HP Pavilion 15", 
    specs: "Ryzen 5 5500U · 8GB · 512GB SSD", 
    priceSegment: "50K", 
    usage: "Student", 
    image: "/assets/laptop_image.jpg" 
  },
  { 
    title: "Lenovo IdeaPad Slim 5", 
    specs: "Intel i5 11th Gen · 8GB · 512GB SSD", 
    priceSegment: "50K", 
    usage: "Student", 
    image: "/assets/laptop_image.jpg" 
  },

  // 50K - Creator
  { 
    title: "ASUS Vivobook 15 OLED", 
    specs: "Intel i5 · 8GB · 512GB SSD", 
    priceSegment: "50K", 
    usage: "Creator", 
    image: "/assets/laptop_image.jpg" 
  },
  { 
    title: "HP Pavilion 15 (5600H)", 
    specs: "Ryzen 5 5600H · 8GB · 512GB SSD", 
    priceSegment: "50K", 
    usage: "Creator", 
    image: "/assets/laptop_image.jpg" 
  },
  { 
    title: "Acer Aspire 5", 
    specs: "Intel i5 · 8GB · 512GB SSD", 
    priceSegment: "50K", 
    usage: "Creator", 
    image: "/assets/laptop_image.jpg" 
  },

  // 60K - Student
  { 
    title: "Lenovo IdeaPad Slim 5i", 
    specs: "14″ display · reliable performance", 
    priceSegment: "60K", 
    usage: "Student", 
    image: "/assets/laptop_image.jpg" 
  },
  { 
    title: "ASUS Vivobook 16X", 
    specs: "Intel i5 13th Gen · 16GB · 512GB SSD", 
    priceSegment: "60K", 
    usage: "Student", 
    image: "/assets/laptop_image.jpg" 
  },
  { 
    title: "HP Pavilion 15 (5700U)", 
    specs: "Ryzen 7 5700U · 16GB · 512GB SSD", 
    priceSegment: "60K", 
    usage: "Student", 
    image: "/assets/laptop_image.jpg" 
  },

  // 60K - Creator
  { 
    title: "ASUS Vivobook Pro 15 OLED", 
    specs: "Intel i5 · 16GB · 512GB SSD", 
    priceSegment: "60K", 
    usage: "Creator", 
    image: "/assets/laptop_image.jpg" 
  },
  { 
    title: "HP Pavilion Plus", 
    specs: "Intel i7 12th Gen · 16GB · 512GB SSD", 
    priceSegment: "60K", 
    usage: "Creator", 
    image: "/assets/laptop_image.jpg" 
  },
  { 
    title: "Lenovo IdeaPad 5 Pro", 
    specs: "Ryzen 7 · 16GB · 512GB SSD", 
    priceSegment: "60K", 
    usage: "Creator", 
    image: "/assets/laptop_image.jpg" 
  },

  // 60K - Gaming
  { 
    title: "ASUS TUF Gaming F15", 
    specs: "Intel i5 · GTX 1650 · 8GB RAM", 
    priceSegment: "60K", 
    usage: "Gaming", 
    image: "/assets/laptop_image.jpg" 
  },
  { 
    title: "HP Pavilion Gaming 15", 
    specs: "Ryzen 5 · GTX 1650 · 8GB RAM", 
    priceSegment: "60K", 
    usage: "Gaming", 
    image: "/assets/laptop_image.jpg" 
  },
  { 
    title: "Acer Nitro 5", 
    specs: "Intel i5 · GTX 1650 · 8GB RAM", 
    priceSegment: "60K", 
    usage: "Gaming", 
    image: "/assets/laptop_image.jpg" 
  },

  // 70K - Student
  { 
    title: "ASUS Vivobook S14", 
    specs: "Intel Core Ultra · 16GB · 512GB SSD", 
    priceSegment: "70K", 
    usage: "Student", 
    image: "/assets/laptop_image.jpg" 
  },
  { 
    title: "HP Envy x360", 
    specs: "Ryzen 7 · 16GB · 512GB SSD", 
    priceSegment: "70K", 
    usage: "Student", 
    image: "/assets/laptop_image.jpg" 
  },
  { 
    title: "Lenovo Yoga Slim 7", 
    specs: "Ryzen 7 · 16GB · 512GB SSD", 
    priceSegment: "70K", 
    usage: "Student", 
    image: "/assets/laptop_image.jpg" 
  },

  // 70K - Creator
  { 
    title: "ASUS Vivobook Pro 16X OLED", 
    specs: "Intel i7 · 16GB · 1TB SSD", 
    priceSegment: "70K", 
    usage: "Creator", 
    image: "/assets/laptop_image.jpg" 
  },
  { 
    title: "HP Envy 15", 
    specs: "Intel i7 12th Gen · 16GB · 512GB SSD", 
    priceSegment: "70K", 
    usage: "Creator", 
    image: "/assets/laptop_image.jpg" 
  },
  { 
    title: "Dell Inspiron 16 Plus", 
    specs: "Intel i7 · 16GB · 512GB SSD", 
    priceSegment: "70K", 
    usage: "Creator", 
    image: "/assets/laptop_image.jpg" 
  },

  // 70K - Gaming
  { 
    title: "ASUS TUF Gaming A15", 
    specs: "Ryzen 7 · RTX 3050 · 16GB", 
    priceSegment: "70K", 
    usage: "Gaming", 
    image: "/assets/laptop_image.jpg" 
  },
  { 
    title: "HP Pavilion Gaming 15 (i7)", 
    specs: "Intel i7 · RTX 3050 · 16GB", 
    priceSegment: "70K", 
    usage: "Gaming", 
    image: "/assets/laptop_image.jpg" 
  },
  { 
    title: "Acer Nitro 5 (Ryzen 7)", 
    specs: "Ryzen 7 · RTX 3050 · 16GB", 
    priceSegment: "70K", 
    usage: "Gaming", 
    image: "/assets/laptop_image.jpg" 
  },

  // 80K - Student
  { 
    title: "ASUS ZenBook 14", 
    specs: "Intel i7 12th Gen · 16GB · 512GB SSD", 
    priceSegment: "80K", 
    usage: "Student", 
    image: "/assets/laptop_image.jpg" 
  },
  { 
    title: "HP Spectre x360", 
    specs: "Intel i7 · 16GB · 512GB SSD", 
    priceSegment: "80K", 
    usage: "Student", 
    image: "/assets/laptop_image.jpg" 
  },

  // 80K - Creator
  { 
    title: "ASUS ProArt Studiobook", 
    specs: "Intel i7 · RTX 3050 · 16GB", 
    priceSegment: "80K", 
    usage: "Creator", 
    image: "/assets/laptop_image.jpg" 
  },
  { 
    title: "HP ZBook Firefly", 
    specs: "Intel i7 · Quadro · 16GB", 
    priceSegment: "80K", 
    usage: "Creator", 
    image: "/assets/laptop_image.jpg" 
  },

  // 80K - Gaming
  { 
    title: "ASUS ROG Strix G15", 
    specs: "Ryzen 7 · RTX 3060 · 16GB", 
    priceSegment: "80K", 
    usage: "Gaming", 
    image: "/assets/laptop_image.jpg" 
  },
  { 
    title: "HP Omen 15", 
    specs: "Intel i7 · RTX 3060 · 16GB", 
    priceSegment: "80K", 
    usage: "Gaming", 
    image: "/assets/laptop_image.jpg" 
  },
  { 
    title: "MSI Katana GF66", 
    specs: "Intel i7 · RTX 3060 · 16GB", 
    priceSegment: "80K", 
    usage: "Gaming", 
    image: "/assets/laptop_image.jpg" 
  },

  // 90K - Student
  { 
    title: "ASUS ZenBook Pro 15", 
    specs: "Intel i7 · 32GB · 1TB SSD", 
    priceSegment: "90K", 
    usage: "Student", 
    image: "/assets/laptop_image.jpg" 
  },
  { 
    title: "Dell XPS 13 Plus", 
    specs: "Intel i7 12th Gen · 16GB · 512GB SSD", 
    priceSegment: "90K", 
    usage: "Student", 
    image: "/assets/laptop_image.jpg" 
  },

  // 90K - Creator
  { 
    title: "ASUS ProArt Studiobook 16", 
    specs: "Intel i7 · RTX 4050 · 32GB", 
    priceSegment: "90K", 
    usage: "Creator", 
    image: "/assets/laptop_image.jpg" 
  },
  { 
    title: "HP ZBook Studio", 
    specs: "Intel i7 · RTX A2000 · 32GB", 
    priceSegment: "90K", 
    usage: "Creator", 
    image: "/assets/laptop_image.jpg" 
  },

  // 90K - Gaming
  { 
    title: "ASUS ROG Strix G16", 
    specs: "Intel i7 13th Gen · RTX 4060 · 16GB", 
    priceSegment: "90K", 
    usage: "Gaming", 
    image: "/assets/laptop_image.jpg" 
  },
  { 
    title: "HP Omen 16", 
    specs: "Intel i7 · RTX 4060 · 16GB", 
    priceSegment: "90K", 
    usage: "Gaming", 
    image: "/assets/laptop_image.jpg" 
  },
  { 
    title: "MSI Pulse GL66", 
    specs: "Intel i7 · RTX 4060 · 16GB", 
    priceSegment: "90K", 
    usage: "Gaming", 
    image: "/assets/laptop_image.jpg" 
  },
];

// Helper function to filter laptops by usage
export const getLaptopsByUsage = (usage?: Usage): Laptop[] => {
  if (!usage) return LAPTOPS_DATA;
  return LAPTOPS_DATA.filter(laptop => laptop.usage === usage);
};

// Helper function to get all laptops for the main index page (mixed usage)
export const getAllLaptops = (): Laptop[] => {
  return LAPTOPS_DATA;
};
