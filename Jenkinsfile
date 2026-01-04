pipeline {
    agent any

    triggers {
        // Poll SCM every 2 hours
        pollSCM('H H/2 * * *')
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the master branch
                git branch: 'master', url: 'https://github.com/AARTHIsm-project/cors.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the project...'
                // Add your actual build commands here, e.g.:
                // sh './gradlew build' or npm install/build
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                // Add your test commands here, e.g.:
                // sh './gradlew test' or pytest
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                // Add your deploy commands here
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
