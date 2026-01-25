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
      "The AWS Certified Solutions Architect – Professional is one of the most respected and difficult certifications in the cloud industry. It validates advanced technical skills and experience in designing distributed applications and systems on the AWS platform. Earning this certification demonstrates a comprehensive understanding of designing basic to complex scalable, highly available, and fault-tolerant systems, as well as the ability to select the appropriate AWS services to design and deploy an application based on given requirements.",
    skills: [
      "Advanced Network Architecture",
      "Multi-Account Governance & Security",
      "Cost Optimization Strategies",
      "High Availability & Disaster Recovery",
      "Migration Planning",
      "Serverless Design Patterns",
    ],
  },
  {
    id: "aws-dva",
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services (AWS)",
    date: "2023",
    image: "/cert/1761378770930.png", // Placeholder based on directory listing
    description:
      "The AWS Certified Developer – Associate showcases proficiency in developing, deploying, and debugging cloud-based applications using AWS. It confirms a deep understanding of core AWS services, basic AWS architecture best practices, and proficiency in developing, deploying, and debugging cloud-based applications using AWS.",
    skills: [
      "Cloud-Native Development",
      "CI/CD with AWS CodePipeline",
      "Serverless (Lambda, API Gateway)",
      "DynamoDB Data Modeling",
      "Containerization (ECS/Docker)",
      "Security & IAM Best Practices",
    ],
  },
  {
    id: "ielts",
    title: "IELTS 7.0 (Academic)",
    issuer: "British Council / IDP",
    date: "2021",
    image: "/cert/490357662_4335658363327962_4927711896490172318_n.jpg", // Placeholder based on directory listing
    description:
      "An IELTS 7.0 score specifically demonstrates a high level of English proficiency, capable of handling complex academic and professional language. It indicates the ability to communicate effectively in an international environment, understand detailed reasoning, and handle complex language structures with ease.",
    skills: [
      "Professional Business Communication",
      "Technical Documentation Writing",
      "Cross-Cultural Team Collaboration",
      "Advanced Reading Comprehension",
      "Fluid Verbal Presentation",
    ],
  },
];
