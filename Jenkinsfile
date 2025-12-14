pipeline {
    agent any

    stages {

        stage("Test") {
            steps {
                sh 'npm test'
                echo "Excuting the Branch Name $BRANCH_NAME"
            }
        }

 
        stage("Docker image build and run Container") {
            when{
                expression{
                    BRANCH_NAME == 'master'
                }
                
            }
            steps {
                sh '''
                docker build -t my-jenkins-image:latest .
                docker rm -f sample-container-jenkins || true
                docker run -d -p 3000:3000 --name sample-container-jenkins my-jenkins-image
                '''
            }
        }
          stage("Final") {
            steps {
                sh 'npm test'
            }
        }
        
    }
}
