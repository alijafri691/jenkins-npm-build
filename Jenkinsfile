pipeline{
    agent any

    stages{

        stage("Npm install"){
            steps{
                sh 'npm install'
            }
        }

        stage("Test"){
            steps{
                sh 'npm test'
            }
        }

        stage('Build'){
            steps{
                sh 'npm run build'
            }
        }

        stage("Docker Build"){
            steps{
                sh "Docker build -t my-jenkins-image:latest ."
            }
        }

        stage("Docker Run"){
            steps{
                sh '''
               docker rm -f sample-container-jenkins || true
                docker run -d -p 3000:3000 --name sample-container-jenkins my-jenkins-image
                '''
            }
        }



    }
}