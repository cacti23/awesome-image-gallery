pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/cacti23/awesome-image-gallery', branch: 'main')
      }
    }

    stage('Shell Script') {
      steps {
        sh 'ls -la'
      }
    }

  }
}