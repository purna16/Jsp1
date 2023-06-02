import pro1 from "../assets/linux.png"
import pro2 from "../assets/front-end.png"
import pro3 from "../assets/java221.png"
//local api for the dynamic project cards.
const ProjectCardData = [
    {
        imgsrc: pro1,
        title:"Streamlining Application Deployments with GitLab and Kubernetes.",
        text:"Implemented GitLab CI/CD pipeline for Node.js app: SAST, Docker image builds/deployment, orchestrated dev/staging/prod deployments, dynamic image versioning, GitLab variables/authentication/tagging, artifacts for unit test reports, sequential stages/job dependencies, GitLab Runner on AWS, Docker Compose for orchestration, monorepo/polyrepo/microservices, reusable pipeline template, Kubernetes deployment with GitLab, secure access/permissions with service accounts/roles/bindings, GitLab user permissions/kubeconfig files, achieving streamlined development."
        ,view: "https://gitlab.com/shivar640/node-js/-/edit/main/README.md"
        ,source: "https://gitlab.com/shivar640/node-js"    
    },
    {
        imgsrc: pro2,
        title:"CICD Pipeline for Java Application",
        text:"Developed CI/CD pipeline with Jenkins for Java app: Git integration/checkout, unit/integration testing, static code analysis with Sonarqube, Docker image building/tagging, push to Nexus repository/Docker registry, manual approval for Kubernetes deployment, parameterized pipeline for apply/delete, deployment on Kubernetes using kubectl. Demonstrated independent management of end-to-end CI/CD process."
        ,view: "https://github.com/purna16/Jenkins-CICD/blob/main/README.md"
        ,source: "https://github.com/purna16/Jenkins-CICD"    
    },
    {
        imgsrc: pro3,
        title:"Deployed Website on AWS Using Python ",
        text:"Designed and implemented scalable cloud-based solution using AWS for employee management app: created VPC with public/private subnets, configured IGW/NAT Gateway for internet connectivity, provisioned public/private EC2 instances, deployed RDS/DynamoDB for data storage, configured load balancer/target group, set up Route53 for custom domain, created IAM role for secure access, cloned code from Github, tested functionality, ensured scalability/reliability/availability, documented architecture/configurations."
        ,view: "https://github.com/purna16/Voting-Webapp"
        ,source: "https://github.com/purna16/Voting-Webapp"    
    },
];
export default ProjectCardData;
