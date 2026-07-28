terraform {
  backend "s3" {
    key          = "launchpad/site/tofu.tfstate"
    region       = "us-east-1"
    encrypt      = true
    use_lockfile = true
  }
}
