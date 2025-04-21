# Pre-requisite for ingress

## Check the subnets associated with the VPC
```
aws ec2 describe-subnets --filters "Name=vpc-id,Values=<vpc id>"   --query "Subnets[*].SubnetId"
```
This will show the list of subnets associated with the vpc.

## The below command to see which subnet is associated with which AZ
```
aws ec2 describe-subnets --subnet-ids <subnet id 1> <subnet id 2> <subnet id 3> <subner id 4>   --query "Subnets[*].{SubnetId:SubnetId, AZ:AvailabilityZone}" --output table
```

There will total 4 subnets where two subnets will be in each AZ
