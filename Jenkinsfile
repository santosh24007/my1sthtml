pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "my1stdocker"
        DOCKER_REGISTRY = "docker.io"  // Change this to your registry if needed
        CONTAINER_NAME = "my-nginx-container"
        GIT_REPO_URL = "https://github.com/santosh24007/my1sthtml.git"  // Your Git repository URL
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    // Manually clone the repository
                    git url: "$GIT_REPO_URL", branch: "main"
                }
            }
        }

        stage('Cleanup Existing Docker Containers & Images') {
            steps {
                script {
                    // Stop and remove any running containers
                    sh "docker ps -q | xargs -r docker stop | xargs -r docker rm -f"
                    
                    // Remove any existing images (force remove them)
                    sh "docker images -q | xargs -r docker rmi -f"
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image from Dockerfile
                    sh 'docker build -t $DOCKER_IMAGE .'
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Run the Docker container in detached mode
                    sh "docker run -d -p 8081:80 --name $CONTAINER_NAME $DOCKER_IMAGE"
                }
            }
        }
        
        stage('Post-build Actions') {
            steps {
                script {
                    // Optional: Clean up dangling containers and images after build
                    sh "docker system prune -f"
                }
            }
        }
    }

    post {
        always {
            // Clean up any resources or logs after pipeline execution
            echo "Cleaning up after pipeline execution"
        }
        success {
            // Actions to take on success
            echo "Pipeline execution was successful!"
        }
        failure {
            // Actions to take on failure
            echo "Pipeline execution failed!"
        }
    }
}

