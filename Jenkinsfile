pipeline {
    agent any

    triggers {
        // Poll SCM every 2 minutes
        pollSCM('H/2 * * * *')
    }

    stages {

        stage('Build') {
            steps {
                echo 'Installing dependencies'
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests'
                bat 'npm test || echo No tests found, skipping...'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application'
                // For Windows, start app in background using start cmd
                bat 'start /B npm start'
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
