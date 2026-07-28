# Static-site infrastructure

This OpenTofu root declares the private S3 origin, CloudFront distribution, DNS-validated
ACM certificate, and dedicated GitHub Actions deployment role. It does not create DNS
records or apply itself.

The S3 backend uses `launchpad/site/tofu.tfstate`, so its native `.tflock` object is
separate from every platform stack lock. Supply the existing state bucket during init;
never commit backend or stack inputs.

Real values belong outside the repository. At minimum, supply:

- `apex_domain`
- `site_bucket_name`
- `github_repository_identity` in immutable
  `owner@numeric-id/repository@numeric-id` form
- `github_ref`
- `deployment_role_name`

Initialize and check the root from this directory:

```sh
tofu init -backend=false
tofu fmt -check -recursive .
tofu validate
tofu plan -json | /path/to/platform-aws/scripts/cost-guard.sh /dev/stdin
```

Do not apply without fresh human approval. Applying mutates IAM and creates cloud
resources. Because CloudFront requires an issued certificate, provisioning is staged
after approval:

1. Create the ACM certificate first and read
   `certificate_dns_validation_records`.
2. Create those records in Cloudflare and wait for ACM to issue the certificate.
3. Apply the complete stack.
4. Create the flattened apex CNAME using
   `cloudfront_distribution_domain_name`.

DNS creation and the deployment workflow belong to the subsequent pipeline packet.
