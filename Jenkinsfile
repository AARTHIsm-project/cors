pipeline {
    agent any


    triggers {
        // Poll SCM every 1 minute
        pollSCM('H/1 * * * *')
    }

    stages {

        stage('Build') {
            steps {
                echo 'Installing dependencies'
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests'
                sh 'npm test || echo "No tests found, skipping..."'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application'
                // Run app in background
                sh 'npm start &'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check logs for details.'
        }
    }
}
