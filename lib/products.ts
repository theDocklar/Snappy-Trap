export type Product = {
  id: string;
  productTitle: string;
  modelNumber: string;
  category: "Kitchen" | "Bathroom";
  price?: number;
  mainImage: string;
  galleryImages?: string[];
  bulletFeatures?: string[];
  description?: string[];
  requirements?: string[];
  clearanceImage?: string;
  clearanceDetails?: string[];
  installationTips?: string[];
  additionalImage?: string;
  additionalTips?: string[];
  amazonLink?: string;
  homeDepotLink?: string;
  manualURL?: string;
  productLink: string;
};

export const products: Product[] = [
  {
    id: "dk-105",
    productTitle: "Universal All in One Drain Kit for All Bathroom Sinks",
    modelNumber: "DK-105",
    category: "Bathroom",
    mainImage: "/images/dk-105-2.avif",
    galleryImages: ["/images/dk-105-2.avif", "/images/dk105-parts.avif"],
    bulletFeatures: [
      "Easy To Install - No need to measure and cut separate pieces of pipe.",
      "Flexible Design - Adapts to sinks of different depths and in tight under sink areas.",
      "Smooth Interior Won’t Clog - The flexible hose has a smooth interior, eliminating build up and odors.",
      "No Leaks - Hand tight connections and better quality seals.",
      "Saves Space - Easily accomodates to save valuable space under the sink.",
    ],
    description: [
      `This universal kit can be installed in any type of bathroom sink, either undermount, pedestal or vessel sinks. Also, the parts included work for a centered or offset* wall drainpipe.`,
      `The parts included are 1 1/2" in diameter. For bathroom sink plumbing that is 1 1/4", the kit includes a reducing 1 1/2" x 1 1/4" washer to connect to a 1 1/4" tailpiece, and a flexible coupling that adjusts to wall drain pipes that are 1 1/4".`,
    ],
    additionalTips: [
      "In particularly cold room temperatures, it is helpful to soak the flexible hose connector in hot tap water for 1 minute. This will increase the flexibility of the hoses.",
      "For other installation questions not addressed in the installation manual or any of the videos in our Support section, or in our FAQ's section, please write to us at support@snappytrap.com. To expedite the assessment, please include a picture of your installation. We will reply to all inquiries within one business day. ",
    ],
    productLink: "/products/dk-105",
    amazonLink:
      "https://www.amazon.com/Snappy-Universal-Drain-Bathroom-Sinks/dp/B014FULKKO/ref=sr_1_1_sspa?ie=UTF8&qid=1534262942&sr=8-1-spons&keywords=snappy%2Btrap%2Bbathroom%2Bsinks&th=1",
    homeDepotLink:
      "https://www.homedepot.com/p/SnappyTrap-Universal-Drain-Kit-for-Bathroom-Sinks-DK-105/300069588?keyword=snappy+trap+bathroom&semanticToken=21100000111_20191202110407123415_cx1r+21100000111+%3E++cnn%3A%7B0%3A0%7D+cnr%3A%7B7%3A0%7D+cnd%3A%7B4%3A0%7D+cne%3A%7B8%3A0%7D+cnb%3A%7B0%3A0%7D+cns%3A%7B5%3A0%7D+cnx%3A%7B3%3A0%7D+st%3A%7Bsnappy+trap+bathroom%7D%3Ast+oos%3A%7B0%3A1%7D+br%3A%7Bsnappy%7D%3Abr+pt%3A%7Btrap%7D%3Apt+rt%3A%7Bbathroom%7D%3Art+dln%3A%7B547448%7D+qu%3A%7Bsnappy+trap+bathroom%7D%3Aqu",
  },
  {
    id: "dk-100",
    productTitle: "All-In-One Drain Kit for Single Bowl Kitchen Sinks",
    modelNumber: "DK-100",
    category: "Kitchen",
    mainImage: "/images/dk100.avif",
    galleryImages: ["/images/dk100.avif", "/images/dk100-2.avif"],
    bulletFeatures: [
      "Easy To Install - No need to measure and cut separate pieces of pipe.",
      "Flexible Design - Adapts to sinks of different depths and in tight under sink areas.",
      "Smooth Interior Won’t Clog - The flexible hose has a smooth interior, eliminating build up and odors.",
      "No Leaks - Hand tight connections and better quality seals.",
      "Saves Space - Easily accomodates to save valuable space under the sink.",
    ],
    clearanceDetails: [
      `Measure from bottom of the sink strainer to the center of the wall drainpipe, the minimum required clearance required is 4". If the bowls have different depths, measure from the deeper bowl.`,
      `For installations including a waste disposal, it is important that the disposal outlet be at least 2" above the wall drainpipe to prevent standing water in the disposal.`,
    ],
    installationTips: [
      "Replace your sink and/ or sink strainers considering shallower bowls.",
      "Contact your plumber/contractor and ask about lowering the drainpipe entering the wall.",
    ],
    additionalTips: [
      "In particularly cold room temperatures, it is helpful to soak the flexible hose connector in hot tap water for 1 minute. This will increase the flexibility of the hoses.",
      "For other installation questions not addressed in the installation manual or any of the videos in our Support section, or in our FAQ's section, please write to us at support@snappytrap.com. To expedite the assessment, please include a picture of your installation. We will reply to all inquiries within one business day. ",
    ],
    productLink: "/products/dk-100",
    amazonLink:
      "https://www.amazon.com/Snappy-Drain-Single-Kitchen-Laundry/dp/B00QH8FXQK/ref=sr_1_1?ie=UTF8&qid=1534262622&sr=8-1&keywords=snappy+trap+single+bowl#customerReviews",
    homeDepotLink:
      "https://www.homedepot.com/p/SnappyTrap-1-1-2-in-All-in-One-Drain-Kit-for-Single-Bowl-Kitchen-Sinks-Bar-Sinks-and-Utility-Sinks-DK-100/300069575?keyword=snappy+trap+single+bowl&semanticToken=21300000111_20191202110147110501_jfkz+21300000111+%3E++cnn%3A%7B0%3A0%7D+cnr%3A%7B7%3A0%7D+cnd%3A%7B4%3A0%7D+cne%3A%7B8%3A0%7D+cnb%3A%7B0%3A0%7D+cns%3A%7B5%3A0%7D+cnx%3A%7B3%3A0%7D+st%3A%7Bsnappy+trap+single+bowl%7D%3Ast+oos%3A%7B0%3A1%7D+br%3A%7Bsnappy+trap%7D%3Abr+rt%3A%7Bsingle+bowl%7D%3Art+dln%3A%7B586394%7D+qu%3A%7Bsnappy+trap+single+bowl%7D%3Aqu",
  },
  {
    id: "dk-110",
    productTitle: "All-In-One Drain Kit for Double Bowl Kitchen Sinks",
    modelNumber: "DK-110",
    category: "Kitchen",
    mainImage: "/images/dk110-2.avif",
    galleryImages: [
      "/images/dk110-2.avif",
      "/images/dk110-1.jpg",
      "/images/dk110-3.avif",
    ],
    bulletFeatures: [
      "Easy To Install - No need to measure and cut separate pieces of pipe.",
      "Flexible Design - Adapts to sinks of different depths and in tight under sink areas.",
      "Smooth Interior Won’t Clog - The flexible hose has a smooth interior, eliminating build up and odors.",
      "No Leaks - Hand tight connections and better quality seals.",
      "Saves Space - Easily accomodates to save valuable space under the sink.",
    ],
    clearanceDetails: [
      `Measure from bottom of the sink strainer to the center of the wall drainpipe, the minimum required clearance required is 4". If the bowls have different depths, measure from the deeper bowl.`,
      `For installations including a waste disposal, it is important that the disposal outlet be at least 2" above the wall drainpipe to prevent standing water in the disposal. This is recommended in all types of kitchen sink plumbing installations, not just those with limited vertical clearance.`,
    ],
    installationTips: [
      "Look for the Snappy Trap Special Kit for Double Bowl Kitchen Sinks with Limited Vertical Distance (Part # DK-120).",
      "Replace your sink and/ or sink strainers considering shallower bowls.",
      "Contact your plumber/contractor and ask about lowering the drainpipe entering the wall.",
    ],
    additionalTips: [
      "In particularly cold room temperatures, it is helpful to soak the flexible hose connector in hot tap water for 1 minute. This will increase the flexibility of the hoses.",
      "For other installation questions not addressed in the installation manual or any of the videos in our Support section, or in our FAQ's section, please write to us at support@snappytrap.com. To expedite the assessment, please include a picture of your installation. We will reply to all inquiries within one business day. ",
    ],
    productLink: "/products/dk-110",
    amazonLink:
      "https://www.amazon.com/Snappy-One-Drain-Double-Kitchen-Sinks/dp/B00I2XQ56U/ref=sr_1_2_sspa?ie=UTF8&qid=1534262098&sr=8-2-spons&keywords=snappy%2Btrap&th=1",
    homeDepotLink:
      "https://www.homedepot.com/p/SnappyTrap-1-1-2-in-All-in-One-Drain-Kit-for-Double-Bowl-Kitchen-Sinks-DK-110/300069166?keyword=snappy+trap+double+bowl&semanticToken=21100000111_20191202111532126244_f042+21100000111+%3E++cnn%3A%7B0%3A0%7D+cnr%3A%7B7%3A0%7D+cnd%3A%7B4%3A0%7D+cne%3A%7B8%3A0%7D+cnb%3A%7B0%3A0%7D+cns%3A%7B5%3A0%7D+cnx%3A%7B3%3A0%7D+st%3A%7Bsnappy+trap+double+bowl%7D%3Ast+oos%3A%7B0%3A1%7D+br%3A%7Bsnappy%7D%3Abr+pt%3A%7Btrap%7D%3Apt+rt%3A%7Bdouble+bowl%7D%3Art+dln%3A%7B547448%7D+qu%3A%7Bsnappy+trap+double+bowl%7D%3Aqu",
  },
  {
    id: "dk-120",
    productTitle:
      "Special Kit for Double Bowl Kitchen Sinks with Limited Vertical Distance",
    modelNumber: "DK-120",
    category: "Kitchen",
    mainImage: "/images/dk120-1.avif",
    galleryImages: ["/images/dk120-1.avif", "/images/dk120-2.avif"],
    bulletFeatures: [
      "Easy To Install - No need to measure and cut separate pieces of pipe.",
      "Smooth Interior Won’t Clog - The flexible hose has a smooth interior, eliminating build up and odors.",
      "No Leaks - Hand tight connections and better quality seals.",
      "Saves Space - Easily accomodates to save valuable space under the sink.",
    ],
    description: [
      "This special Snappy Trap Kit is designed for installation with unusually high wall drainpipes and reduced vertical clearance below the sink.",
    ],
    clearanceDetails: [
      `The unique placement of the P-traps and the special configuration of the flexible hoses permit installation of this kit with only 1"-5" of space between the bottom of the sink and the opening of the wall drainpipe.`,
      `If installing to a waste disposal, please verify that there is a minimum 2" clearance between disposal elbow and wall drainpipe.`,
    ],
    additionalTips: [
      "In particularly cold room temperatures, it is helpful to soak the flexible hose connector in hot tap water for 1 minute. This will increase the flexibility of the hoses.",
      "For other installation questions not addressed in the installation manual or any of the videos in our Support section, or in our FAQ's section, please write to us at support@snappytrap.com. To expedite the assessment, please include a picture of your installation. We will reply to all inquiries within one business day. ",
    ],
    productLink: "/products/dk-120",
    amazonLink:
      "https://www.amazon.com/Special-Vertical-Distance-Strainers-Drainpipe/dp/B01DV9B6YA/ref=sr_1_5?keywords=snappy%2Btrap&qid=1575303479&sr=8-5&th=1",
    homeDepotLink:
      "https://www.homedepot.com/p/SnappyTrap-1-1-2-in-Snappy-Trap-Special-Kit-for-Limited-Vertical-Distances-DK-120/304627985",
  },
  {
    id: "4",
    productTitle: "Solution for Triple Kitchen Sinks",
    modelNumber: "#",
    category: "Kitchen",
    mainImage: "/images/triple-kitchen.avif",
    galleryImages: [
      "/images/triple-kitchen.avif",
      "/images/triple-kitchen-2.avif",
    ],
    bulletFeatures: [
      "Although there is not a kit specifically designed for triple kitchen sinks, one can be installed easily with two Snappy Trap draink kits.",
    ],
    requirements: [
      "(1) Snappy Trap Drain Kit for Double Kitchen Sinks",
      "(1) Snappy Trap Drain Kit for Single Kitchen Sinks, Bar Sinks or Laundry Sinks",
      `(1) 1 1/2" PCV or ABS Wye Fitting`,
      `(2) 1 1/2" Marvel Adapter or Flexible Couplings`,
      `(2) Pieces of PVC pipe`,
      `PVC cement glue`,
    ],
    installationTips: [
      `Cement the 1 1/2" Wye Fitting to the drain pipe coming from the wall.`,
      `Take the two 3"-4" long pieces of pipe and cement them to the two hub outlets on the wye fitting.`,
      `When the Wye fitting and pieces of PVC pipe have dried, take the two flexible wall drain couplings included in the Snappy Trap drain kits, one from each kit, and insert them on the PVC pipes. Or two 1 1/2" marvel adapters.`,
    ],
    additionalTips: [
      "Install the Snappy Trap Drain kit for Double Kitchen Sinks following the instructions included in the kit, and finalize by installing the Snappy Trap Drain Kit for Single Kitchen Sinks to the remaining single bowl.",
      "For other installation questions not addressed in the installation manual or any of the videos in our Support section, or in our FAQ's section, please write to us at support@snappytrap.com. To expedite the assessment, please include a picture of your installation. We will reply to all inquiries within one business day. ",
    ],
    productLink: "/products/4",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getProductsByCategory(
  category: "Kitchen" | "Bathroom",
): Product[] {
  return products.filter((product) => product.category === category);
}
