# Install EKS

Please follow the prerequisites doc before this.

## Install using Fargate

```
eksctl create cluster   --name two-tier-cluster   --version 1.27   --region us-east-1   --nodegroup-name ec2-nodes   --node-type t3.medium   --nodes 2   --nodes-min 1   --nodes-max 2   --managed```

## Delete the cluster

```
eksctl delete cluster --name demo-cluster --region us-east-1
```





