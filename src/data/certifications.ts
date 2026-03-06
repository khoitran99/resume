export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
  skills: string[];
  credentialId?: string;
}

export const certifications: Certification[] = [
  {
    id: "aws-sap",
    title: "AWS Certified Solutions Architect – Professional",
    issuer: "Amazon Web Services (AWS)",
    date: "2024",
    image: "/cert/1761378552628.png", // Placeholder based on directory listing
    description:
      "The AWS Certified Solutions Architect – Professional is one of the most respected and challenging credentials in the cloud industry. It validates advanced technical skills and experience in designing complex, enterprise-scale, distributed applications and systems on the AWS platform. This certification signifies deep expertise in optimizing system architectures for cost-efficiency, security, performance, and reliability using AWS best practices, alongside demonstrating the ability to automate processes and successfully migrate existing workloads to the cloud.",
    skills: [
      "Enterprise-Scale Cloud Architecture",
      "Cost, Security & Performance Optimization",
      "Network Design & Multi-Account Strategy",
      "High Availability & Disaster Recovery Solutions",
      "Cloud Migration Strategies & TCO Evaluation",
      "Automation & Continuous Delivery",
    ],
  },
  {
    id: "aws-dva",
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services (AWS)",
    date: "2023",
    image: "/cert/1761378770930.png", // Placeholder based on directory listing
    description:
      "The AWS Certified Developer – Associate demonstrates a strong foundation in cloud-native application development and deep knowledge of core AWS services. It validates proficiency in developing, testing, deploying, and debugging applications within the AWS ecosystem. Earning this certification affirms competence in utilizing AWS APIs, implementing CI/CD workflows, authoring secure code, and effectively deploying serverless and containerized solutions following AWS best practices.",
    skills: [
      "Cloud-Native Application Development",
      "CI/CD Implementation & Deployment Workflows",
      "Serverless Architecture (Lambda, API Gateway)",
      "Debugging & Application Troubleshooting",
      "AWS Security & IAM Best Practices",
      "Integration of AWS Service APIs & SDKs",
    ],
  },
  {
    id: "ielts",
    title: "IELTS 7.0 (Academic)",
    issuer: "British Council / IDP",
    date: "2021",
    image: "/cert/490357662_4335658363327962_4927711896490172318_n.jpg", // Placeholder based on directory listing
    description:
      "An IELTS 7.0 Academic score reflects a high level of operational English proficiency, specifically tailored for demanding academic and professional environments. It confirms the ability to handle complex language structures and detailed reasoning effectively. Achieving this score indicates a strong capacity to communicate clearly across varied international settings, comprehend sophisticated technical and academic texts, and deliver coherent, logical arguments.",
    skills: [
      "Advanced Reading & Comprehension",
      "Complex Academic & Professional Writing",
      "Fluid Verbal Communication & Presentation",
      "Accurate Processing of Spoken English",
      "Detailed Reasoning & Argument Construction",
      "Cross-Cultural Team Collaboration",
    ],
  },
  {
    id: "pmi-pmp",
    title: "Project Management Professional (PMP)",
    issuer: "Project Management Institute (PMI)",
    date: "2024",
    image: "/cert/pmi-pmp-certification.png",
    description:
      "The Project Management Professional (PMP) is a globally recognized, prestigious certification that validates advanced project leadership and execution capabilities. It demonstrates deep expertise in managing cross-functional teams, directing comprehensive project lifecycles (across Agile, Waterfall, and hybrid methodologies), and aligning strategic initiatives with core business objectives. Earning this credential confirms a high-level mastery of rigorous global standards in risk management, resource allocation, and delivering measurable organizational value.",
    skills: [
      "Strategic Planning & Execution",
      "Agile & Hybrid Methodologies",
      "Resource & Timeline Optimization",
      "Stakeholder Communication & Negotiation",
      "Proactive Risk Management & Mitigation",
      "Cross-Functional Team Leadership",
    ],
  },
];
