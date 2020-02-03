# Liveness - Nexus Module
Simple  module that implements only one endpoint which can be used as a healthcheck for infrastructure liveness checks.

## Routes

### /up
Called by k8s to ensure the  service is still working

*Response*
    {
        "message": "up"
    }    
