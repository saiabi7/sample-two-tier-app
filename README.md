# AWS EKS Setup Guide

This guide provides step-by-step instructions for setting up your AWS environment to deploy an Amazon Elastic Kubernetes Service (EKS) cluster.

---

## 2.1 Creating an AWS Account and Setting up IAM Users

### Create an AWS Account:
1. Go to [AWS Website](https://aws.amazon.com/) and click on **Create an AWS Account**.
2. Follow the instructions to enter:
   - Email address
   - Password
   - Payment information for verification
3. After registration, verify your email and login to the **AWS Management Console**.

### Set up Multi-Factor Authentication (Optional but Recommended):
- Once logged in, enable MFA from the IAM settings for added account security.

### Create IAM Users:
1. Navigate to **IAM** in the AWS Console.
2. Go to **Users** > **Add user**.
3. Choose a username and access type (Programmatic access, AWS Console access, or both).
4. Assign permissions via IAM groups or policies.
5. (Optional) Set tags, permission boundaries, and enable MFA.
6. If "Programmatic access" was selected, download and securely store:
   - **Access Key ID**
   - **Secret Access Key**

---

## 2.2 Configuring the AWS CLI and kubectl

### Install the AWS CLI:
- Follow instructions for your OS: [Install AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)

### Configure AWS CLI:
```bash
aws configure
