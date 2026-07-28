output "site_bucket_name" {
  description = "Store this value as the masked site-bucket GitHub Actions secret."
  value       = aws_s3_bucket.site.id
}

output "cloudfront_distribution_id" {
  description = "Store this value as the masked CloudFront distribution GitHub Actions secret."
  value       = aws_cloudfront_distribution.site.id
}

output "cloudfront_distribution_domain_name" {
  description = "Target for the flattened apex CNAME managed outside this stack."
  value       = aws_cloudfront_distribution.site.domain_name
}

output "github_actions_deployment_role_arn" {
  description = "Store this value as the masked AWS OIDC role GitHub Actions secret."
  value       = aws_iam_role.github_actions_deploy.arn
}

output "trusted_github_subject" {
  description = "Exact GitHub OIDC subject accepted by the deployment role."
  value       = local.trusted_ref_subject
}

output "certificate_arn" {
  description = "ARN of the us-east-1 ACM certificate used by CloudFront."
  value       = aws_acm_certificate.site.arn
}

output "certificate_dns_validation_records" {
  description = "DNS records that must be created in Cloudflare before certificate validation."
  value = {
    for option in aws_acm_certificate.site.domain_validation_options : option.domain_name => {
      name  = option.resource_record_name
      type  = option.resource_record_type
      value = option.resource_record_value
    }
  }
}
