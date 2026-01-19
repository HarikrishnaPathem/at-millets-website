import React from "react";
import CompanyBackgroundSection from "../../components/about/CompanyBackgroundSection";
import VisionMissionSection from "../../components/about/VisionMissionSection";
import WhyArakuMilletsSection from "../../components/about/WhyArakuMilletsSection";
import CommitmentSustainabilitySection from "../../components/about/CommitmentSustainabilitySection";
import Leaders from "../../components/about/Leaders";

const krishna = "https://cdn.atmillets.com/media/images/founders/krishna.jpeg";
const raghavendra =
  "https://cdn.atmillets.com/media/images/founders/raghavendra.jpeg";
const raghuram =
  "https://cdn.atmillets.com/media/images/founders/raghuram.jpeg";
const kavitha = "https://cdn.atmillets.com/media/images/founders/kavitha.jpeg";
const amara = "https://cdn.atmillets.com/media/images/founders/amara.jpeg";

const leadersData = [
  {
    name: "Krishna Urugonda",
    designation: "Managing Director",
    photo: krishna,
    bio: "Urugonda Krishna is an entrepreneur actively engaged in manufacturing and trading, with business interests spanning iron and steel products, B.G.I Manufacturing Private Limited, BGI Millets, and other essential goods. Through consistent effort, discipline, and a strong commitment to quality, he has successfully built and managed his enterprises while delivering reliable products and services to customers. Beyond his professional pursuits, he is deeply committed to social service and community welfare. He actively supports orphan homes and individuals in need by regularly providing food, vegetables, rice, and other essential supplies, benefiting nearly 100 people every day. Notably, during challenging periods such as the COVID-19 pandemic, he continued these humanitarian efforts using his own resources, without expectation of recognition or return. He attributes much of his strength and progress to the unwavering support of his life partner and family, whose encouragement has played a vital role in his personal and professional journey. Guided by values of integrity, responsibility, and compassion, he remains dedicated to expanding both his business initiatives and his efforts to serve society.",
  },
  {
    name: "Raghavendra Balla",
    designation: "Managing Director",
    photo: raghavendra,
    email: "Shivaraghu46b@gmail.com",
    bio: "Raghavendra is the Managing Director of AT Millets Araku Naturals and Sri Chakra Industries, bringing together expertise in agri-based enterprises, infrastructure contracting, and sustainable business operations. A natural practices farmer by foundation, he strongly believes in chemical-free cultivation and responsible food systems rooted in traditional farming values. Alongside his agricultural initiatives, he is an experienced railway contractor, known for disciplined execution, operational efficiency, and long-term project management. During the COVID-19 pandemic, he played an active role in supporting communities in need by extending timely assistance and essential support to numerous individuals and families.\n\nWith a leadership style grounded in integrity and service, Raghavendra combines business acumen with social responsibility. His vision focuses on building resilient, ethical enterprises that support farmers, create employment, and deliver trusted, high-quality products, while continuing to contribute meaningfully to society.",
  },
  {
    name: "Raghuram Nama",
    designation: "Managing Director",
    photo: raghuram,
    email: "raghurammsw3@gmail.com",
    bio: "Raghuram Nama holds a Master of Social Work degree from Palamuru University, Mahabubnagar (2012). He brings over seven years of dedicated field experience in social development, having worked extensively in child protection, community welfare, and advocacy programs. He served for five years as a Project Coordinator with CHILDLINE–1098 in the Khammam district, where he played a key role in safeguarding vulnerable children, coordinating emergency responses, and working closely with government bodies, NGOs, and local communities. He further strengthened his impact by working for two years as a Program Officer with the Girls Advocacy Alliance in Khammam, contributing to initiatives focused on girls’ rights, education, and empowerment. Known for his grassroots approach, empathetic leadership, and strong program management skills, Raghuram Nama is deeply committed to social justice and community upliftment. His work reflects a strong belief in inclusive development, ethical leadership, and creating sustainable change through collaboration and service.",
  },
  {
    name: "Kavitha Gandhi Vanguri",
    designation: "Managing Director",
    photo: kavitha,
    email: "kavithagandhi.vanguri@gmail.com",
    bio: "Vanguri Kavitha Gandhi is an entrepreneur and director specializing in millet-based food processing and healthy nutrition solutions. She brings over five years of hands-on farming experience, rooted in natural and sustainable agricultural practices. She holds an M.Tech in VLSI System Design from JNTU and an M.Sc in Geo Informatics from Osmania University, combining strong technical expertise with agri-business leadership. With over 10 years of experience in banking and NBFC sectors, she has held senior roles at Axis Bank, Muthoot Fincorp, India Infoline, and FedBank Financial Services. She leads end-to-end operations across millet flour, rava, ready-to-cook, and ready-to-eat products, driven by a farm-to-home vision that empowers farmers, strengthens local economies, and promotes healthy living.",
  },
  {
    name: "Amara Mohan Rao",
    designation: "Managing Director",
    photo: amara,
    email: "amaramohan74@gmail.com",
  },
  {
    name: "Ismail Sayyed",
    designation: "Managing Director",
    email: "ismailsyed921@gmail.com",
  },
];

const About = () => {
  return (
    <div>
      <CompanyBackgroundSection />
      <VisionMissionSection />
      <WhyArakuMilletsSection />
      <CommitmentSustainabilitySection />
      <Leaders leaders={leadersData} />
    </div>
  );
};

export default About;
