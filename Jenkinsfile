pipeline {
    agent any

    stages {

        stage("Test") {
            steps {
                sh 'npm test'
            }
        }

        stage("Build Docker Image") {
            steps {
                sh "docker build -t my-jenkins-image:latest ."
            }
        }

        stage("Run Container") {
            steps {
                sh '''
                docker rm -f sample-container-jenkins || true
                docker run -d -p 3000:3000 --name sample-container-jenkins my-jenkins-image
                '''
            }
        }
    }
}
