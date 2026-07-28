variable "aws_region" {
  description = "AWS region in which the site bucket is created."
  type        = string
  default     = "us-east-1"

  validation {
    condition     = can(regex("^[a-z]{2}(-[a-z]+)+-[0-9]+$", var.aws_region))
    error_message = "aws_region must be a valid AWS region name."
  }
}

variable "apex_domain" {
  description = "Apex hostname served by the CloudFront distribution."
  type        = string

  validation {
    condition = (
      length(var.apex_domain) <= 253 &&
      can(regex(
        "^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?(\\.[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)+$",
        var.apex_domain
      ))
    )
    error_message = "apex_domain must be a lowercase DNS hostname without a trailing dot."
  }
}

variable "site_bucket_name" {
  description = "Globally unique name of the private bucket that holds the static export."
  type        = string

  validation {
    condition = (
      length(var.site_bucket_name) >= 3 &&
      length(var.site_bucket_name) <= 63 &&
      can(regex("^[a-z0-9][a-z0-9.-]*[a-z0-9]$", var.site_bucket_name))
    )
    error_message = "site_bucket_name must be a valid 3-63 character S3 bucket name."
  }
}

variable "github_repository_identity" {
  description = <<-EOT
    Immutable GitHub OIDC repository identity allowed to deploy, in the form
    owner@numeric-id/repository@numeric-id. Read it from an actual token subject claim;
    do not substitute the mutable owner/repository name.
  EOT
  type        = string

  validation {
    condition = can(regex(
      "^[^/@[:space:]]+@[0-9]+/[^/@[:space:]]+@[0-9]+$",
      var.github_repository_identity
    ))
    error_message = "github_repository_identity must use owner@numeric-id/repository@numeric-id."
  }
}

variable "github_ref" {
  description = "One exact Git ref allowed to deploy, such as refs/heads/main."
  type        = string

  validation {
    condition     = can(regex("^refs/(heads|tags)/[^[:space:]*?]+$", var.github_ref))
    error_message = "github_ref must be one exact branch or tag ref without wildcards."
  }
}

variable "deployment_role_name" {
  description = "Name of the dedicated GitHub Actions site deployment role."
  type        = string

  validation {
    condition     = can(regex("^[A-Za-z0-9+=,.@_-]{1,64}$", var.deployment_role_name))
    error_message = "deployment_role_name must satisfy IAM role-name character and length limits."
  }
}

variable "tags" {
  description = "Tags applied to taggable resources."
  type        = map(string)
  default     = {}
}
